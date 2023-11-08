// const initThemeScript = `(function() {
//   ${initTheme.toString()}
//   initTheme();
// })()`;

export function initTheme() {
  function getInitialTheme() {
    const theme = window.localStorage.getItem("theme");

    if ("theme" in localStorage) {
      return theme;
    }

    const preference = window.matchMedia("(prefers-color-scheme: dark)");

    return preference.matches ? "dark" : "light";
  }

  const currentTheme = getInitialTheme();

  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    document.documentElement.classList.add("dark");
  }
}
