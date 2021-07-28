$.getJSON( "../Assets/js/productos.json", function(data){
    let card__content=document.getElementById("card__content")
    for (const producto of data) {
        card__content.innerHTML+=`
            <div class="card">
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

