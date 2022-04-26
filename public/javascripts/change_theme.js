document.addEventListener("DOMContentLoaded", () => {
  const themes = document.getElementById("modern_css");
  const btnModernTheme = document.getElementById("modern_theme")
  const btnRetroTheme = document.getElementById("retro_theme");

  var pathRetroCss = "/stylesheets/retro/style.css";
  var pathModernCss = "/stylesheets/modern/style.css";

  btnRetroTheme.addEventListener("change", () => {
    themes.setAttribute("href", pathRetroCss);
  });

  btnModernTheme.addEventListener("change", () => {
    themes.setAttribute("href", pathModernCss);
  })
});

