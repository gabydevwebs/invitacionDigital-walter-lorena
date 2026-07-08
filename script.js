// =========================
// APERTURA PREMIUM
// =========================

document.body.style.overflow = "hidden";

const botonAbrir = document.getElementById("abrir");

const invitacion = document.querySelector(".invitacion");

const portada = document.querySelector(".sobre");

const footer = document.querySelector("footer");

const transicion = document.getElementById("transicion");

botonAbrir.addEventListener("click", () => {
  botonAbrir.classList.add("abierto");

  setTimeout(() => {
    transicion.classList.add("activo");
  }, 500);

  setTimeout(() => {
    transicion.classList.add("abierto");
  }, 1900);

  setTimeout(() => {
    portada.style.display = "none";

    transicion.style.display = "none";

    invitacion.classList.remove("oculto");

    setTimeout(() => {
      invitacion.classList.add("mostrar");
    }, 100);

    footer.classList.remove("oculto");

    setTimeout(() => {
      footer.classList.add("mostrar-footer");
    }, 500);

    document.body.style.overflow = "auto";
  }, 5000);
});
// =========================
// CONTADOR
// =========================

const fechaCasamiento = new Date("July 24, 2026 12:00:00").getTime();

function actualizarContador() {
  const ahora = new Date().getTime();

  const diferencia = fechaCasamiento - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

  const horas = Math.floor(
    (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );

  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById("dias").textContent = dias;

  document.getElementById("horas").textContent = horas;

  document.getElementById("minutos").textContent = minutos;

  document.getElementById("segundos").textContent = segundos;
}

actualizarContador();

setInterval(actualizarContador, 1000);
function copiarDato(id){

    const texto = document.getElementById(id).textContent.trim();

    navigator.clipboard.writeText(texto);


    const boton = event.target;

    boton.textContent = "¡Copiado!";


    setTimeout(()=>{

        boton.textContent="Copiar";

    },2000);

}