$(window).on("load", start);

function start(){
  $("#btmnav a:first").click()
  $("#a_btmnav a:first").click()

  $.get("#carouselExampleSlidesOnly", function (data) {
    $("#carousel").html(data);
    setTimeout(function(){ 
        $('.carousel').carousel();
    },0
    );
});
}
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  /* Burgermenu */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }


  $(document).on("click", "#btmnav a[href]", nav);
  $(document).on("click", "#a_btmnav a[href]", nav_m);
  function nav_m(e){

    e.preventDefault();

    var href = $(this).attr("href");
    $("#content").load("modules/" + href);

    $("#a_btmnav a").fadeTo("fast", 0.7);
    $(this).fadeTo("fast", 1); 
    
  } 
  function nav(e){

    e.preventDefault();

    var href = $(this).attr("href");
    $("#content").load("modules/" + href);

    $("#btmnav a").fadeTo("fast", 0.7);
    $(this).fadeTo("fast", 1); 
    
  }

  (function ($) {
    'use strict';

    /*[ File Input Config ]
        ===========================================================*/
    
    try {
    
        var file_input_container = $('.js-input-file');
    
        if (file_input_container[0]) {
    
            file_input_container.each(function () {
    
                var that = $(this);
    
                var fileInput = that.find(".input-file");
                var info = that.find(".input-file__info");
    
                fileInput.on("change", function () {
    
                    var fileName;
                    fileName = $(this).val();
    
                    if (fileName.substring(3,11) == 'fakepath') {
                        fileName = fileName.substring(12);
                    }
    
                    if(fileName == "") {
                        info.text("No file chosen");
                    } else {
                        info.text(fileName);
                    }
    
                })
    
            });
    
        }
    
    
    
    }
    catch (e) {
        console.log(e);
    }

})(jQuery);
 

/*-------------------------------<<<<<<<<<<<<<<<<<Community>>>>>>>>>>>>>>>>>>-------------------------------------*/

var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
  save();
};

ScrollReveal().reveal('.reveal1', { delay: 100 });
ScrollReveal().reveal('.reveal2', { delay: 1000 });
ScrollReveal().reveal('.reveal3', { delay: 1000 });


/*-------------------------------<<<<<<<<<<<<<<<<<Services>>>>>>>>>>>>>>>>>>-------------------------------------*/

$(function() {
    $('#dp').datepicker();
  });
  