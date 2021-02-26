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
    
    var vodkaArray = ["idDrink:15346", "idDrink:17105", "idDrink:14029"]
    
    function displayDrink(drinkList) {
        for(var i = 0; i < drinkList.length; i++) {
            var boozeItem = $("<li>");
            var boozeRow = $("<div>");
            var boozeColumn = $("<div>");
            var boozeImage = $("<img>")
            var boozeHeader = $("<h1>");
            var boozeRecipe = $("<li>");
            var boozeIngredient1 = $("<li>");
            var boozeIngredient2 = $("<li>")
            var boozeIngredient3 = $("<li>")
            var boozeIngredient4 = $("<li>")
            var boozeIngredient5 = $("<li>")
            // Destination = boozeHeader, action=text, content=drinkList[i].strDrink
            boozeHeader.text(drinkList[i].strDrink);
            boozeRecipe.text(drinkList[i].strInstructions);
            boozeIngredient1.text(drinkList[i].strIngredient1);
            boozeIngredient2.text(drinkList[i].strIngredient2);
            boozeImage.attr("src", drinkList[i].strDrinkThumb);
            boozeImage.attr("alt", drinkList[i].strDrink);
            boozeImage.addClass("booze-img");
            boozeHeader.addClass("booze-header");
            boozeRow.addClass("row");
            boozeRow.attr("data-drink", drinkList[i].idDrink)
            boozeColumn.addClass("col-md-12");
            boozeItem.append(boozeHeader);
            boozeItem.append(boozeImage);
            boozeItem.append(boozeIngredient1);
            boozeItem.append(boozeIngredient2);
            boozeItem.append(boozeRecipe); 
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
        
//vodka recips vars
    var vrecipeURL1 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=14029"
    var vrecipeURL2 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17105"
    var vrecipeURL3 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11462"
    var vrecipeURL4 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=13535"
    var vrecipeURL5 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=16942"

//tequila recips vars
    var trecipeURL1 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11112";
    var trecipeURL2 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=14602";
    var trecipeURL3 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=178348"
    var trecipeURL4 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17174"
    var trecipeURL5 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=178307"
    
    function pascalCaseFormatting(str) {
        //    ** Goal is to take a word and capitalize the first letter and return the word
    var capitalLetter = str.substring(0, 1).toUpperCase();
    return str.replace(str.substring(0, 1), capitalLetter)
    };

    // displayVodka()
//   console.log(displayVodka)
    
    $("#booze1").click( function (){
    getAPI(vrecipeURL1,"")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayDrink(data.drinks);
    })
    .catch(function(err) {
        console.error(err)
    });

    getAPI(vrecipeURL2,"")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayDrink(data.drinks);
    })
    .catch(function(err) {
        console.error(err)
    });

    getAPI(vrecipeURL3,"")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayDrink(data.drinks);
    })
    .catch(function(err) {
        console.error(err)
    });

    getAPI(vrecipeURL4,"")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayDrink(data.drinks);
    })
    .catch(function(err) {
        console.error(err)
    });

    getAPI(vrecipeURL5,"")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayDrink(data.drinks);
    })
    .catch(function(err) {
        console.error(err)
    });
})

$("#booze2").click( function (){
    getAPI(trecipeURL1,"")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayDrink(data.drinks);
    })
    .catch(function(err) {
        console.error(err)
    });

    getAPI(trecipeURL2,"")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayDrink(data.drinks);
    })
    .catch(function(err) {
        console.error(err)
    });

    getAPI(trecipeURL3,"")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayDrink(data.drinks);
    })
    .catch(function(err) {
        console.error(err)
    });

    getAPI(trecipeURL4,"")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayDrink(data.drinks);
    })
    .catch(function(err) {
        console.error(err)
    });

    getAPI(trecipeURL5,"")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayDrink(data.drinks);
    })
    .catch(function(err) {
        console.error(err)
    });

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


