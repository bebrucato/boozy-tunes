var img = $(".blinking-fire");
var count=0
function flames(){
    count++
    if (count%2===0) {
    $(".blinking-fire").animate({left:'20px', opacity: '0.4'},"fast");
}else {
    $(".blinking-fire").animate({left:'20px', opacity: '1.0'},"fast");
}
}

setInterval(flames,1000)
console.log("hello")

var list