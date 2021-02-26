$(document).ready(function () { 
    var tequila = $("#booze2")
      var whiskey = $("#booze3")
      var gin = $("#booze4")
      var rum = $("#booze5")
      var mezcal = $("#booze6")
      var brandy = $("#booze7")
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
    
    setInterval(flames,1000);

    function getAPI(queryURL, searchTerm, param1, param2, param3) {
        var queryString = queryURL + pascalCaseFormatting(searchTerm) 
        return fetch(queryString)
    }
    

    var vodka = $("#booze1")
    // var vodkaUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka";
    var boozeResult = $(".booze-result")
    var boozeMenu = $(".booze-menu")
    
    
    function displayDrink(drinkList) {
        for(var i = 0; i < drinkList.length; i++) {
            var boozeItem = $("<li>");
            var boozeRow = $("<div>");
            var boozeColumn = $("<div>");
            var boozeImage = $("<img>")
            var boozeHeader = $("<h1>");
            // Destination = boozeHeader, action=text, content=drinkList[i].strDrink
            boozeHeader.text(drinkList[i].strDrink);
            boozeImage.attr("src", drinkList[i].strDrinkThumb);
            boozeImage.attr("alt", drinkList[i].strDrink);
            boozeImage.addClass("booze-img");
            boozeHeader.addClass("booze-header");
            boozeRow.addClass("row");
            boozeRow.attr("data-drink", drinkList[i].idDrink)
            boozeColumn.addClass("col-md-12");
            boozeItem.append(boozeHeader);
            boozeItem.append(boozeImage);
            boozeColumn.append(boozeItem);
            boozeRow.append(boozeColumn)
            boozeResult.append(boozeRow);
        };
        var drinkId = boozeResult.children().data("drink")
        var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
        getAPI(queryURL, drinkId.toString())
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        })
        .catch(function(err) {
            console.error(err)
        });
        
    }
        
       var alcoholURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";

    function pascalCaseFormatting(str) {
        //    ** Goal is to take a word and capitalize the first letter and return the word
    var capitalLetter = str.substring(0, 1).toUpperCase();
    return str.replace(str.substring(0, 1), capitalLetter)
    };

    // displayVodka()
//   console.log(displayVodka)
    getAPI(alcoholURL,"tequila")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayDrink(data.drinks);
    })
    .catch(function(err) {
        console.error(err)
    });
    

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
    
    
})

  
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


