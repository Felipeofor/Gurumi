

$.getJSON( "../Assets/js/productos.json", function(data){
    let card__content=document.getElementById("card__content")
    for (const producto of data) {
        card__content.innerHTML+=`
            <div class="card"  onclick="modal(${producto.id})">
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

function modal(id) {
    let modal__content=document.getElementById("modal__content")
    $("#modal").css("display", "flex");
    $("#modal").css("position", "fixed");
    $.getJSON( "../Assets/js/productos.json", function(data){
        for (const producto of data) {
            if (producto.id == id) {
                modal__content.innerHTML=`
                <div id="modal__img_option">

                    <div class="img__option__content">
                        <img style="object-fit: cover;" class="img__modal__option" src="${producto.img[0]}" alt="">
                    </div>

                    <div class="img__option__content">
                        <img style="object-fit: cover;" class="img__modal__option img_opacity" src="${producto.img[1]}" alt="">
                    </div>

                    <div class="img__option__content">
                        <img style="object-fit: cover;" class="img__modal__option img_opacity" src="${producto.img[2]}" alt="">
                    </div>

                </div>

                <div id="modal__img">
                    <img id="img__modal" src="${producto.img[0]}" alt="">
                </div>

                <div id="modal__info">
                    <div class="info__modal__text">
                        <h3>${producto.nombre}</h3>
                        <p>Medidas ${producto.medidas}</p>
                        <p>Tejido a Crochet</p>
                        <div class="li">
                        <li>Precios por mayor a partir 20 unidades</li>
                        <li>Consultar por otras Medidas</li>
                        <li>Consultar por otros colores</li>
                        </div>
                    
                    </div>
                    <div class="modal__line"></div>
                    <div class="modal__consulta">
                        <button>Consultar</button>
                    </div>
                </div>
                <div id="close__modal" onclick="CloseModal()">
                    <i class="fas fa-times"></i>
                </div>
                `
            }
        }
    }) 
        
        setTimeout(() => {
            $("#modal__content").css("transform","translateY(0%)")
            for (const img of $(".img__modal__option")) {
                img.addEventListener("click",function(){
                    for (const imgopaciti of $(".img__modal__option")){
                        $(imgopaciti).addClass("img_opacity")
                    }
                    $(img).removeClass("img_opacity")
                    let direccion=img.getAttribute("src")
                    let imagen=document.getElementById("img__modal")
                    imagen.setAttribute("src", direccion);
                })
            }
        },10)
}

function CloseModal(){   
    $("#modal").css("display", "none")
    $("#modal__content").css("transform","translateY(-200%)")
}






