

$.getJSON( "../Assets/js/productos.json", function(data){
    let card__content=document.getElementById("card__content")
    for (const producto of data) {
        card__content.innerHTML+=`
            <div class="card" onclick="modal()">
                <div class="card__img">
                    <img src="${producto.img[0]}">
                </div>
                <div class="card__text">
                    <h3 class="">${producto.nombre}</h3>
                    <p class="">Medidas ${producto.medidas}</p>
                </div>
            </div>`
    }
   
}) 

function modal() {
    $("#modal").css("display", "flex");
            $("#modal").css("position", "fixed");
        
        setTimeout(() => {
            $("#modal__content").css("transform","translateY(0%)")
            for (const img of $(".img__modal__option")) {
                img.addEventListener("click",function(){
                    let direccion=img.getAttribute("src")
                    let imagen=document.getElementById("img__modal")
                    imagen.setAttribute("src", direccion);
                })
            }
        },10)
}

$("#close__modal").on("click",function(){
    
    $("#modal").css("display", "none")
    $("#modal__content").css("transform","translateY(-200%)")
})





