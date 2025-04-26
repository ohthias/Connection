function changeTheme() {
  const root = document.documentElement

  if (root.classList.contains("light-theme")) {
    root.classList.remove("light-theme")
    root.classList.add("dark-theme")
  } else {
    root.classList.remove("dark-theme")
    root.classList.add("light-theme")
  }
}

window.onload = () => {
  const root = document.documentElement;

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
  ) {
    root.classList.add("dark-theme")
  } else {
    root.classList.add("light-theme")
  }
}
