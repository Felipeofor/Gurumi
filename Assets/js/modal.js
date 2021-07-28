
$(document).ready(function(){
    $(".card").each(function(index,element){
        $(element).on("click",function(){
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
        },10);
        })
    });
    $("#close__modal").on("click",function(){
    
        $("#modal").css("display", "none")
        $("#modal__content").css("transform","translateY(-200%)")
    })
    
})





// $("#card").on("click",function(){

//     $("#modal").css("display", "flex");
//     $("#modal").css("position", "fixed");
    
//     setTimeout(() => {
//         $("#modal__content").css("transform","translateY(0%)")
//         for (const img of $(".img__modal__option")) {
//             img.addEventListener("click",function(){
//                 let direccion=img.getAttribute("src")
//                 let imagen=document.getElementById("img__modal")
//                 imagen.setAttribute("src", direccion);
//             })
//         }
//     },100);
// })

