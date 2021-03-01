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

//tequila recipe vars
    var trecipeURL1 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11112";
    var trecipeURL2 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=14602";
    var trecipeURL3 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=178348"
    var trecipeURL4 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17174"
    var trecipeURL5 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=178307"

//whiskey recipe vars
    var wrecipeURL1 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=13194"
    var wrecipeURL2 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=178345"
    var wrecipeURL3 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=13200"
    var wrecipeURL4 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=16262"

//gin recipe vars
    var grecipeURL1 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17834"
    var grecipeURL2 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11339"
    var grecipeURL3 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11054"
    var grecipeURL4 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=178340"
    var grecipeURL5 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=178330"

//rum recipe vars
    var rrecipeURL1 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17268"
    var rrecipeURL2 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17241"
    var rrecipeURL3 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=178309"
    var rrecipeURL4 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=14065"
    var rrecipeURL5 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=14364"

//mezcal recipe vars
    var mrecipeURL1 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17246"

//brandy recipe vars
    var brecipeURL1 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11084"
    var brecipeURL2 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12450"
    var brecipeURL3 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17192"
    var brecipeURL4 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11251"
    var brecipeURL5 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12138"


    function pascalCaseFormatting(str) {
        //    ** Goal is to take a word and capitalize the first letter and return the word
    var capitalLetter = str.substring(0, 1).toUpperCase();
    return str.replace(str.substring(0, 1), capitalLetter)
    };

    // displayVodka()
//   console.log(displayVodka)
// Vodka button click event
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

//Tequila button click event
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

//Whiskey button click event
$("#booze3").click( function (){
    getAPI(wrecipeURL1,"")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayDrink(data.drinks);
    })
    .catch(function(err) {
        console.error(err)
    });

    getAPI(wrecipeURL2,"")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayDrink(data.drinks);
    })
    .catch(function(err) {
        console.error(err)
    });

    getAPI(wrecipeURL3,"")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayDrink(data.drinks);
    })
    .catch(function(err) {
        console.error(err)
    });

    getAPI(wrecipeURL4,"")
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


//Gin button click event
$("#booze4").click( function (){
    getAPI(grecipeURL1,"")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayDrink(data.drinks);
    })
    .catch(function(err) {
        console.error(err)
    });

    getAPI(grecipeURL2,"")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayDrink(data.drinks);
    })
    .catch(function(err) {
        console.error(err)
    });

    getAPI(grecipeURL3,"")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayDrink(data.drinks);
    })
    .catch(function(err) {
        console.error(err)
    });

    getAPI(grecipeURL4,"")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayDrink(data.drinks);
    })
    .catch(function(err) {
        console.error(err)
    });

    getAPI(grecipeURL5,"")
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

//Rum button click event
$("#booze5").click( function (){
    getAPI(rrecipeURL1,"")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayDrink(data.drinks);
    })
    .catch(function(err) {
        console.error(err)
    });

    getAPI(rrecipeURL2,"")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayDrink(data.drinks);
    })
    .catch(function(err) {
        console.error(err)
    });

    getAPI(rrecipeURL3,"")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayDrink(data.drinks);
    })
    .catch(function(err) {
        console.error(err)
    });

    getAPI(rrecipeURL4,"")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayDrink(data.drinks);
    })
    .catch(function(err) {
        console.error(err)
    });

    getAPI(rrecipeURL5,"")
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

//Mezcal button click event
$("#booze6").click( function (){
    getAPI(mrecipeURL1,"")
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

//Brandy button click event
$("#booze7").click( function (){
    getAPI(brecipeURL1,"")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayDrink(data.drinks);
    })
    .catch(function(err) {
        console.error(err)
    });

    getAPI(brecipeURL2,"")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayDrink(data.drinks);
    })
    .catch(function(err) {
        console.error(err)
    });

    getAPI(brecipeURL3,"")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayDrink(data.drinks);
    })
    .catch(function(err) {
        console.error(err)
    });

    getAPI(brecipeURL4,"")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayDrink(data.drinks);
    })
    .catch(function(err) {
        console.error(err)
    });

    getAPI(brecipeURL5,"")
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
    
    $("#clearBtn1").click( function(){
        boozeResult.empty()
    })




//Tunez Side/Spotify API Key


//access_token



        




})



 


