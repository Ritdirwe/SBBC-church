import { useState, useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import useUpload from "@/utils/useUpload";

export function ApplicationForm() {
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [childName, setChildName] = useState("");
  const [dob, setDob] = useState("");
  const [level, setLevel] = useState("Nursery");
  const [entryClass, setEntryClass] = useState("");
  const [term, setTerm] = useState("Next Term");
  const [prevSchool, setPrevSchool] = useState("");
  const [church, setChurch] = useState("");
  const [notes, setNotes] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [upload, { loading: uploading }] = useUpload();

  const buildQualifications = useCallback(() => {
    const parts = [
      `Child: ${childName || "(not set)"}`,
      dob ? `DOB: ${dob}` : null,
      `Level: ${level}`,
      entryClass ? `Entry Class: ${entryClass}` : null,
      `Preferred Start: ${term}`,
      prevSchool ? `Previous School: ${prevSchool}` : null,
      church ? `Church: ${church}` : null,
      notes ? `Notes: ${notes}` : null,
    ].filter(Boolean);
    return parts.join(" | ");
  }, [childName, dob, level, entryClass, term, prevSchool, church, notes]);

  const applyMutation = useMutation({
    mutationFn: async (vars) => {
      const payload = {
        school_name: "Deep Knowledge Academy",
        full_name: parentName,
        email,
        phone,
        qualifications: buildQualifications(),
        program: level,
        degree_type: null,
        qualifications_pdf_url: vars?.pdfUrl || null,
      };
      const response = await fetch("/api/school-admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        let message = `When fetching /api/school-admission, the response was [${response.status}] ${response.statusText}`;
        try {
          const data = await response.json();
          if (data?.error) message = data.error;
        } catch {}
        throw new Error(message);
      }
      return response.json();
    },
    onSuccess: () => {
      toast.success("Application submitted. We'll contact you shortly.");
      setParentName("");
      setEmail("");
      setPhone("");
      setChildName("");
      setDob("");
      setLevel("Nursery");
      setEntryClass("");
      setTerm("Next Term");
      setPrevSchool("");
      setChurch("");
      setNotes("");
      setPdfFile(null);
    },
    onError: (err) => {
      console.error(err);
      toast.error((err && err.message) || "Could not submit application");
    },
  });

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!parentName || !email || !phone) {
        toast.error("Please fill parent name, email, and phone.");
        return;
      }
      let pdfUrl = null;
      if (pdfFile) {
        const { url, mimeType, error } = await upload({ file: pdfFile });
        if (error) {
          toast.error(error);
          return;
        }
        if (mimeType && !mimeType.startsWith("application/pdf")) {
          toast.error("Please upload a PDF file.");
          return;
        }
        pdfUrl = url;
      }
      applyMutation.mutate({ pdfUrl });
    },
    [applyMutation, parentName, email, phone, pdfFile, upload],
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333]"
    >
      <h3 className="text-xl font-bold text-black dark:text-white">
        Apply Now
      </h3>
      <p className="text-sm text-[#6E6E6E] dark:text-[#A0A0A0] mt-1">
        Fields with * are required.
      </p>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]">
            Parent/Guardian Full Name *
          </label>
          <input
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
            className="mt-1 w-full border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#111] text-black dark:text-white rounded-lg px-3 py-2"
            placeholder="e.g., Jane Doe"
          />
        </div>
        <div>
          <label className="block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]">
            Email *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#111] text-black dark:text-white rounded-lg px-3 py-2"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]">
            Phone *
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 w-full border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#111] text-black dark:text-white rounded-lg px-3 py-2"
            placeholder="e.g., +2347064200926"
          />
        </div>
        <div>
          <label className="block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]">
            Child's Full Name
          </label>
          <input
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
            className="mt-1 w-full border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#111] text-black dark:text-white rounded-lg px-3 py-2"
            placeholder="e.g., John Doe"
          />
        </div>
        <div>
          <label className="block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]">
            Date of Birth
          </label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="mt-1 w-full border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#111] text-black dark:text-white rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]">
            Level
          </label>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="mt-1 w-full border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#111] text-black dark:text-white rounded-lg px-3 py-2"
          >
            <option>Nursery</option>
            <option>Primary</option>
            <option>Secondary</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]">
            Entry Class
          </label>
          <input
            value={entryClass}
            onChange={(e) => setEntryClass(e.target.value)}
            className="mt-1 w-full border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#111] text-black dark:text-white rounded-lg px-3 py-2"
            placeholder="e.g., Nursery 2 / Primary 3 / JSS1"
          />
        </div>
        <div>
          <label className="block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]">
            Preferred Start
          </label>
          <select
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="mt-1 w-full border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#111] text-black dark:text-white rounded-lg px-3 py-2"
          >
            <option>Next Term</option>
            <option>Next Session</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]">
            Previous School (optional)
          </label>
          <input
            value={prevSchool}
            onChange={(e) => setPrevSchool(e.target.value)}
            className="mt-1 w-full border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#111] text-black dark:text-white rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]">
            Church (optional)
          </label>
          <input
            value={church}
            onChange={(e) => setChurch(e.target.value)}
            className="mt-1 w-full border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#111] text-black dark:text-white rounded-lg px-3 py-2"
            placeholder="e.g., SBBC"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]">
            Notes (optional)
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
            className="mt-1 w-full border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#111] text-black dark:text-white rounded-lg px-3 py-2"
            placeholder="Tell us anything helpful about your child"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]">
            Qualifications PDF (optional)
          </label>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) =>
              setPdfFile(
                e.target.files && e.target.files[0] ? e.target.files[0] : null,
              )
            }
            className="mt-1 w-full border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#111] text-black dark:text-white rounded-lg px-3 py-2"
          />
          {pdfFile ? (
            <p className="mt-1 text-xs text-[#6E6E6E] dark:text-[#A0A0A0]">
              {pdfFile.name}
            </p>
          ) : null}
        </div>
      </div>

      <button
        type="submit"
        disabled={applyMutation.isPending || uploading}
        className="mt-5 inline-flex items-center gap-2 bg-[#F4D03F] hover:bg-[#C29C1A] text-black font-semibold px-5 py-3 rounded-lg transition-colors disabled:opacity-60"
      >
        {applyMutation.isPending || uploading
          ? "Submitting..."
          : "Submit Application"}
      </button>
      <p className="mt-2 text-xs text-[#6E6E6E] dark:text-[#A0A0A0]">
        By submitting, you consent to be contacted about admissions.
      </p>
    </form>
  );
}
