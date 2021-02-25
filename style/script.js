var img = $(".blinking-fire");

var interval = window.setInterval(function(){
    if(img.css.visibility ="hidden"){
        img.css.visibility = "visible";
    }else{
        img.css.visibility = "hidden";
    }
}, 700); 

console.log("hello")