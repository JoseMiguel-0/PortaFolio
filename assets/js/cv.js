document.getElementById("btn-ver-cv").addEventListener("click", mostrarCV);
function mostrarCV() {
  const contenedor = document.getElementById("contenedor-cv");

  if (contenedor.style.display === "none" || contenedor.style.display === "") {
    contenedor.style.display = "block";
  } else {
    contenedor.style.display = "none";
  }
}