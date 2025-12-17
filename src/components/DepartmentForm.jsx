import { useState, useEffect, useRef } from "react";
import { ChevronDown, Check } from "lucide-react";
import { toast } from "sonner";
import ShareFormLink from "@/components/ShareFormLink";

export default function DepartmentForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    department: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ADD: custom dropdown state
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  // Force the dropdown to expand upward only
  const openDirection = "up"; // 'up' only
  const [reduceMotion, setReduceMotion] = useState(false);

  const triggerRef = useRef(null);
  const panelRef = useRef(null);
  const optionRefs = useRef([]);

  const departments = [
    "Youth Church",
    "Worship Ministry",
    "Media Team",
    "Outreach",
    "Children's Ministry",
    "Prayer Team",
  ];

  useEffect(() => {
    // Respect OS reduce motion
    if (typeof window !== "undefined") {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      const apply = () => setReduceMotion(mq.matches);
      apply();
      mq.addEventListener?.("change", apply);
      return () => mq.removeEventListener?.("change", apply);
    }
  }, []);

  // REMOVED: auto open direction detection; we always open upward
  // useEffect(() => { ... })

  // Close on outside click / touch
  useEffect(() => {
    if (!isOpen) return;
    const onPointerDown = (e) => {
      const t = e.target;
      if (!triggerRef.current || !panelRef.current) return;
      if (triggerRef.current.contains(t) || panelRef.current.contains(t))
        return;
      setIsOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown, { passive: true });
    return () => {
      // FIX: remove the same events that were added (was removing 'mousemove')
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [isOpen]);

  // Keep highlighted option in view
  useEffect(() => {
    if (!isOpen) return;
    const el = optionRefs.current[highlightedIndex];
    if (el && el.scrollIntoView) {
      el.scrollIntoView({ block: "nearest" });
    }
  }, [highlightedIndex, isOpen]);

  const openPanel = () => {
    setIsOpen(true);
    const currentIndex = Math.max(
      0,
      departments.findIndex((d) => d === formData.department),
    );
    setHighlightedIndex(currentIndex);
  };

  const closePanel = () => setIsOpen(false);

  const togglePanel = () => {
    if (isOpen) {
      closePanel();
    } else {
      openPanel();
    }
  };

  const selectDepartment = (dept) => {
    setFormData({ ...formData, department: dept });
    setIsOpen(false);
    setMessage("");
  };

  const onTriggerKeyDown = (e) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!isOpen) {
        openPanel();
      } else {
        setHighlightedIndex((i) => Math.min(i + 1, departments.length - 1));
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (isOpen) setHighlightedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Escape") {
      if (isOpen) closePanel();
    } else if (e.key === "Home") {
      e.preventDefault();
      if (isOpen) setHighlightedIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      if (isOpen) setHighlightedIndex(departments.length - 1);
    }
  };

  const onListKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((i) => Math.min(i + 1, departments.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const idx = highlightedIndex >= 0 ? highlightedIndex : 0;
      selectDepartment(departments[idx]);
    } else if (e.key === "Escape") {
      e.preventDefault();
      closePanel();
      triggerRef.current?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      setHighlightedIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setHighlightedIndex(departments.length - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Keep simple validation to ensure a selection exists
    if (!formData.department) {
      setLoading(false);
      setMessage("Please select a department.");
      toast.error("Please select a department");
      return;
    }

    try {
      const response = await fetch("/api/department-join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      const data = await response.json();
      setMessage(data.message);
      setFormData({ full_name: "", email: "", phone: "", department: "" });
      toast.success("Thanks for joining! We'll be in touch shortly.");
    } catch (error) {
      console.error(error);
      setMessage("Failed to submit. Please try again.");
      toast.error("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // iOS-style glass styles
  const triggerClasses =
    "w-full px-4 py-3 rounded-lg text-left flex items-center justify-between " +
    "border border-black bg-black text-white " +
    "focus:outline-none focus:ring-2 focus:ring-[#F4D03F] transition-all duration-200";

  const panelBase =
    "absolute left-0 right-0 z-20 rounded-xl border border-white/10 bg-[#0B0B0B]/95 backdrop-blur-xl shadow-xl overflow-auto";

  const optionBase =
    "flex items-center gap-2 px-3 py-2.5 rounded-lg cursor-pointer select-none text-white";

  const isSelected = (dept) => dept === formData.department;

  return (
    <form id="department-join" onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Full Name"
          value={formData.full_name}
          onChange={(e) =>
            setFormData({ ...formData, full_name: e.target.value })
          }
          className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4D03F] bg-white dark:bg-[#1E1E1E] text-black dark:text-white"
          required
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4D03F] bg-white dark:bg-[#1E1E1E] text-black dark:text-white"
          required
        />
      </div>
      <div>
        <input
          type="tel"
          placeholder="Phone (optional)"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4D03F] bg-white dark:bg-[#1E1E1E] text-black dark:text-white"
        />
      </div>

      {/* REPLACED: Native select with custom iOS-style dropdown that expands up only */}
      <div className="relative" aria-label="Select Department">
        <button
          type="button"
          ref={triggerRef}
          className={triggerClasses}
          onClick={togglePanel}
          onKeyDown={onTriggerKeyDown}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls="department-listbox"
        >
          <span className="truncate text-white">
            {formData.department || "Select Department"}
          </span>
          <ChevronDown
            className="ml-3 flex-shrink-0 text-white/90 transition-transform"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            size={18}
            aria-hidden
          />
        </button>

        {/* Dropdown Panel */}
        <div
          ref={panelRef}
          id="department-listbox"
          role="listbox"
          tabIndex={-1}
          onKeyDown={onListKeyDown}
          className={panelBase}
          style={{
            maxHeight: 320,
            marginTop: 0,
            marginBottom: 8,
            top: "auto",
            bottom: "100%", // always above the trigger
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? "auto" : "none",
            transform: reduceMotion
              ? "none"
              : isOpen
                ? "translateY(0px)"
                : "translateY(6px)", // subtle rise when opening upward
            transition: reduceMotion
              ? "none"
              : "opacity 200ms ease, transform 240ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <div className="p-2">
            {departments.map((dept, idx) => {
              const active = idx === highlightedIndex;
              const selected = isSelected(dept);
              return (
                <div
                  key={dept}
                  id={`opt-${idx}`}
                  role="option"
                  aria-selected={selected}
                  ref={(el) => (optionRefs.current[idx] = el)}
                  className={
                    optionBase +
                    (active ? " bg-white/10" : " hover:bg-white/10") +
                    (selected ? " ring-1 ring-[#F4D03F]/60" : "")
                  }
                  onMouseEnter={() => setHighlightedIndex(idx)}
                  onClick={() => selectDepartment(dept)}
                  style={{
                    transition: reduceMotion
                      ? "none"
                      : "background-color 150ms ease, box-shadow 150ms ease",
                  }}
                >
                  <span className="flex-1 truncate">{dept}</span>
                  {selected && (
                    <Check size={16} className="text-[#C29C1A]" aria-hidden />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] hover:from-[#F5D65A] hover:to-[#D4A92A] text-black font-semibold py-3 rounded-lg transition-all duration-150 active:scale-[0.98] disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Join Department"}
      </button>
      {message && (
        <p className="text-center text-sm text-[#C29C1A]">{message}</p>
      )}

      {/* Share row under the form */}
      <ShareFormLink label="Share this form" anchor="#department-join" />

      {/* ADD: Optional subtle list item drop-in animation keyframes (used if needed elsewhere) */}
      {!reduceMotion && (
        <style jsx global>{`
          @keyframes dropdownItemIn {
            0% { opacity: 0; transform: translateY(-6px); }
            60% { opacity: 1; transform: translateY(2px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      )}
    </form>
  );
}
