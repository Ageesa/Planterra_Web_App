$(window).on("load", start);

function start(){
  $("#btmnav a:first").click()
}
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }


  $(document).on("click", "#btmnav a[href]", nav);

  function nav(e){

    e.preventDefault();

    var href = $(this).attr("href");
    $("#content").load("modules/" + href);

    $("#btmnav a").fadeTo("fast", 0.7);
    $(this).fadeTo("fast", 1); 

  }