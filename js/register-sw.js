// Chequeo si el browser puede usar Service Worker
if (navigator.serviceWorker.register("../service-worker.js")) {
    console.log("Service Worker está activo");
}else{
  console.log("Service Worker no está activo");
}
window.addEventListener('offline', event => {
  document.querySelector('body').classList.add('offline');
  //main.innerHTML = "No se puede obtener la información! La aplicacion esta offline!"
});

window.addEventListener('online', event => {
  document.querySelector('body').classList.remove('offline');
    //consulta(datos);
});
if (!navigator.onLine) {
  document.querySelector('body').classList.add('offline');
}
