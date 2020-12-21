AOS.init();

const imagenes= document.querySelectorAll(".images .div-img img");//error solucionado

for(var i=0; i<imagenes.length; i++){
      
      imagenes[i].addEventListener("click", insertar);
      
}

const lightBox= document.querySelector(".lightBox");
const lightImg= document.querySelector(".lightImg");
const img= document.querySelector(".insertar-img");

const boton1=document.querySelector(".icon-menu");

lightBox.addEventListener("click", salir);

function insertar(e){
      
       if(nav.classList.contains("entraNav")){
                  
                  nav.classList.toggle("entraNav");
                  
      }//error solucionado
      
      var img1= e.target.getAttribute("src");
      
      //console.log(img1);
      
      img.src=img1;
      
      lightBox.classList.toggle("lightEntra");
      img.classList.toggle("img-aparece");
      boton1.style.opacity= "0";
      boton1.style.zIndex="0";
}

function salir(e){
      
      /*console.log(e.target.getAttribute("class"));*/ 
      //Error solucionado:  apuntar a la clase!
      
      if(e.target.getAttribute("class")!="insertar-img img-aparece"){
            
            lightBox.classList.toggle("lightEntra");
            img.classList.toggle("img-aparece");
            boton1.style.opacity= "1";
            boton1.style.zIndex="100";
            
      }
      
}

