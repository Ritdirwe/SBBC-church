// Lightweight input validators and normalizers for API routes
// Keep logic minimal and safe; avoid throwing. Return booleans or sanitized values.

export function trimToNull(value) {
  if (typeof value !== "string") return null;
  const v = value.trim();
  return v.length ? v : null;
}

export function clampText(value, max = 500) {
  const v = typeof value === "string" ? value.trim() : "";
  if (!v) return "";
  return v.length > max ? v.slice(0, max) : v;
}

export function isValidEmail(email) {
  if (typeof email !== "string") return false;
  const v = email.trim();
  if (!v) return false;
  // Simple, safe heuristic (not fully RFC compliant but practical)
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
}

export function normalizePhone(phone) {
  if (typeof phone !== "string") return "";
  const v = phone.trim();
  // Keep digits, plus, spaces, hyphen and parentheses; collapse spaces
  const cleaned = v.replace(/[^0-9+\-() ]+/g, "").replace(/\s+/g, " ");
  // Limit to a reasonable length
  return cleaned.slice(0, 32);
}

export function safeName(name) {
  return clampText(name, 120);
}

export function safeDepartment(dept) {
  return clampText(dept, 120);
}

export function safeLongText(text) {
  return clampText(text, 2000);
}
