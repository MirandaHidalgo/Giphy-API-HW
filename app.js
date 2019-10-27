
//Using the giphy API, 

// Array for buttons//

$(document).ready(function() {

    let animal = ["Dog", "Cat", "Fish", "Monkey", "Pig", "Bear"];
    
    //Function to make buttons//

    function populateButtons (arrayToUse, classToAdd, areaToAddTo){
        $(areaToAddTo).empty();

        for (let i=0; i < arrayToUse.lenght; i++){

            let a = $("<button>"); 
            a.addClass(classToAdd);
            a.attr("date-type", arrayToUse[i]);
            a.text(arrayToUse[i]);

            $(areaToAddTo).append(a);



        }
    }

    //function to populate images from the giphy API

    $(document).on("click",".animal-button", function(){
        $("#images").empty();

        $(".animal-button").removeClass("active");
        $(this).addClass("active");

        let type = $(this).attr("data-type");
        let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=wQuaf8Hv8JyeTgvgAT2kz6kcCpzi9n5F"

        //ajax

        $.ajax({
            url:queryURL,
            method: "GET"
        })

        .then(function(response){
            let results = response.data;

            for(var i =0; i< results.lenght; i++){
                let animalDiv = $("<div class=\"animal-item\">")
                let rating = results[i].rating;

                let p = $("<p>").text("Rating: " + rating)
                let animated = results[i].images.fixed_height.url;

                let still = results[i].images.fixed_height_still.url;
                
                let animalImage = $("<img>")
                animalImage.attr("scr", still);
                animalImage.attr("data-still", still);
                animalImage.attr("data-animate", animated);
                animalImage.attr("data-state", "still");
                animalImage.addClass("animal-image");

                animalDiv.append(p);
                animalDiv.append(animalImage);

                $("#images").append(animalDiv);

            }



        });
    });


    // state from still to animated when clicking//

    $(document).on("click", ".animal-image", function(){
        let state = $(this).attr("data-state");

        if (state === "still"){
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } 
        else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }

    });

    $("#add-animal").on("click", function(event){
        event.preventDefault();
        let newAnimal = $("input").eq(0).val();

        if(newAnimal.lenght > 2){
            animal.push(newAnimal);
        }

        populateButtons(animal, "animal-button", "#animal-buttons")


    });

    populateButtons(animal, "animal-button", "#animal-buttons")

});