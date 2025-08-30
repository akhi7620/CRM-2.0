// ...new file...
document.addEventListener("DOMContentLoaded", function () {
  const root = document.documentElement;
  const key = "scm2_theme";
  const btn = document.querySelector("[data-theme-toggle]");

  function setDark(dark) {
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem(key, dark ? "dark" : "light");
    if (btn) btn.setAttribute("aria-pressed", dark ? "true" : "false");
  }

  // init from localStorage or OS preference
  const stored = localStorage.getItem(key);
  if (stored) setDark(stored === "dark");
  else setDark(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);

  if (btn) {
    btn.addEventListener("click", function () {
      setDark(!root.classList.contains("dark"));
    });
  }
});