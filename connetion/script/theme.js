function toggleTheme() {
  const root = document.documentElement;
  const themeIcon = document.getElementById("themeIcon");

  if (root.classList.contains("light")) {
    root.classList.remove("light");
    root.classList.add("dark");
    themeIcon.textContent = "toggle_on";
  } else {
    root.classList.remove("dark");
    root.classList.add("light");
    themeIcon.textContent = "toggle_off";
  }
}

document.getElementById("theme").addEventListener("click", toggleTheme);

window.onload = () => {
  const root = document.documentElement;
  const themeIcon = document.getElementById("themeIcon");

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    root.classList.add("dark");
    themeIcon.textContent = "toggle_on";
  } else {
    root.classList.add("light");
    themeIcon.textContent = "toggle_off";
  }
};
