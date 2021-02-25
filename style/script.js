var img = $(".blinking-fire");
var bar = $(".blink-text")
var count=0
function flames(){
    count++
    if (count%2===0) {
    $(".blinking-fire").animate({left:'20px', opacity: '0.4'},"fast");
}else {
    $(".blinking-fire").animate({left:'20px', opacity: '1.0'},"fast");
}
}
function blink(){
    count++
    if (count%2===0) {
    $(".blink-text").animate({left:'20px', opacity: '0.0'},"fast");
}else {
    $(".blink-text").animate({left:'20px', opacity: '1.0'},"fast");
}
}


setInterval(flames,1000)
setInterval(blink,300)
console.log("hello")

var list