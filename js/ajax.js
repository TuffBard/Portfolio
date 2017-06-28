//Clic sur présentation
$("#pres").click(function(){
  $("#pres").addClass("active");
  $("#exp").removeClass("active");
  $("#port").removeClass("active");
  $.ajax({
          method: "POST",
          url: "presentation.php",
          data: {}
        })
        .done(function(responseText){
          $("#main").html(responseText);
        });
});

//Clic sur icone Accueil
$("#home").click(function(){
  $("#pres").addClass("active");
  $("#exp").removeClass("active");
  $("#port").removeClass("active");
  $.ajax({
          method: "POST",
          url: "presentation.php",
          data: {}
        })
        .done(function(responseText){
          $("#main").html(responseText);
        });
});

//Clic sur experience
$("#exp").click(function(){
  $("#exp").addClass("active");
  $("#pres").removeClass("active");
  $("#port").removeClass("active");
  $.ajax({
          method: "POST",
          url: "experience.php",
          data: {}
        })
        .done(function(responseText){
          $("#main").html(responseText);
        });
});

//Clic sur portfolio
$("#port").click(function(){
  $("#port").addClass("active");
  $("#exp").removeClass("active");
  $("#pres").removeClass("active");
  $.ajax({
          method: "POST",
          url: "portfolio.php",
          data: {}
        })
        .done(function(responseText){
          $("#main").html(responseText);
        });
});

//Au chargement de la page, affiche presentation
$(document).ready(function(){
  $.ajax({
          method: "POST",
          url: "presentation.php",
          data: {}
        })
        .done(function(responseText){
          $("#main").html(responseText);
        });
});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});
