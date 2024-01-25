function mensaje() {
    alert('Pelicula en reproducción')   
   }
   
   function walle(params) {
       window.location.href = "https://cuevana3.rs/pelicula/wall%C2%B7e/";
   }
   
   
   
   function dumbo(params) {
       window.location.href = "https://cuevana3.rs/pelicula/dumbo/";
   }
   
   
   function abrirNuevaVentana() {
   
       var redireecion = "https://www11.repelishd.io/pelicula/buscando-a-nemo-2003/";
     
   
       window.open(redireecion, "_blank");
     };
   
     
     const ball = document.querySelector(".toggle-ball");
     const items = document.querySelectorAll(".container,.peliculas-lista-item-titulo,.navbar,.navbar-contenido,.sidebar,.left-menu-icon,.toggle");
     ball.addEventListener("click", ()=>{
       items.forEach(item=>{
           item.classList.toggle("active")
       })
     })
   
   
     function pestania(params) {
         window.location.href=""
     }
   
     var nextBtn = document.getElementById('nextBtn');
   
       // Agregar un listener para el evento de clic
       nextBtn.addEventListener('click', function() {
           // Redirigir a la página "agregar.html"
           window.location.href = 'agregar.html';
       });