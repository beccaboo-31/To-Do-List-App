// Check off specific todos by clicking on them
$("ul").on("click", "li", function(){
    // //if todo is gray
    // console.log($(this).css("color"));                      //Returns rgb value and not grey
    // if($(this).css("color")=== "rgb(128, 128, 128)"){      //Important to check with rgb and not directly with grey
    //     //turn it to black
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     });
    // }else{
    //     //turn it gray
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through"
    //     });
    // }
    
    //Much simpler way to do is with toggleClass
    $(this).toggleClass("completed");
});

//*******************************//
//Click on X to delete the todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){       //Because only fading Out causes display: none and doesn't remove it completely
        $(this).remove();                       //This "this" refers to the parent of span i.e li
    });
    event.stopPropagation();              //Ensures only span is clicked and doesn't bubble out to the parent
});


//*******************************//
//Submitting Todo on Pressing Enter
$("input[type='text']").keypress(function(event){
    if(event.which === 13){       //Checking if it is enter key (Char code = 13)
    //Grab new todo text from input
        var todoText = $(this).val();
        $(this).val("");          //Clearing input field
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+todoText+"</li>");
    }
});


$("#plus").click(function(){
    $("input[type='text']").fadeToggle();
});