// you can add, remove and check class in the css file to an element
$("button").addClass("header");
$("button").removeClass("header");
console.log($("button").hasClass("header")); // note that the result of this method can only be checked using console log

// manipulating text using j Query
$("h1").text("bye");  //change text
$("h1").html("<em>Watsup</em>");// change the text taking the tags into consideration rather than print the tags with it

// Adding an eventlistener to a botton or other element
$("button").click(function(){
    $("h1").css("color", "red");
});

// Adding a eventlistner keypress
$("input").keypress(function(event) {
    console.log(event.key); // whatever you type in the console log will enter the text box
    $("h1").text(event.key);
})

//Adding element
$("h1").prepend("<button>new</button>")
$("h1").append("<button>new</button>")

// Animate website
$("button").click(function(){
    $("h1").toggle() // toggle between button to hide and show buttons
//you can also use hide, fadeout, fadein, fadetoggle, slideup and you can also custom animate by using .animate method({})
// when use the animate method, you can only add properties that as a numeric value
// you can add more than one animation
})