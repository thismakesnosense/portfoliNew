// var buttons = document.querySelectorAll("button");
// for(var i = 0; i < buttons.length; i++) {

//     buttons[i].addEventListener("hover", function(){
        document.querySelectorAll("button").forEach(item => {
            item.addEventListener("mouseover", function(event) {
               $(this).addClass("animated jello");
            })
    })
// };
