
//Using the giphy API, 

// Array for buttons//

$(document).ready(function() {

    let animals = ["Dog", "Cat", "Fish", "Monkey", "Pig", "Bear"];
    
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

    $(document.onabort("click",".animal-buttons", function(){

        $("#images").empty();

        
    }))
    
})