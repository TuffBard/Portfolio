<!DOCTYPE html>
<html lang="fr">
  <head>
    <?php
      include("header.php");
    ?>
  </head>
  <body>

    <!-- Navbar -->
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
          <a id="home" class="navbar-brand" href="#">
            <span class="glyphicon glyphicon-home" aria-hidden="true"></span>
          </a>
        </div>
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="nav navbar-nav">
            <li id="pres" class="active hand"><a> Présentation </a></li>
            <li id="exp" class="hand"><a> Expériences</a></li>
            <li id="port" class="hand"><a> Portfolio </a></li>
        </div>
      </div>
    </nav>


    <!-- Conteneur principal -->
    <div class="container">
      <div class="row">
        <!-- Colonne gauche -->
        <div class="col-md-3">
          <table class="table">
            <tr>
              <td colspan="2" class="center">
                <img src="img/photo.jpg" alt="Photo" class="img-circle photo">
              </td>
            </tr>
            <tr>
              <td>
                <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
              </td>
              <td>
                <b>GARCIA Nicolas</b>
              </td>
            </tr>
            <tr>
              <td>
                <span class="glyphicon glyphicon-grain" aria-hidden="true"></span>
              </td>
              <td>
                11/05/1995
              </td>
            </tr>
            <tr>
              <td>
                <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>
              </td>
              <td>
                <a href="mailto:nicolas.garcia71@hotmail.fr">nicolas.garcia71@hotmail.fr</a>
              </td>
            </tr>
            <tr>
              <td>
                <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span>
              </td>
              <td>
                06 89 53 66 02
              </td>
            </tr>
            <tr>
              <td>
                <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
              </td>
              <td>
                Dijon, Bourgogne
              </td>
            </tr>
            <tr>
              <td>
                <span class="glyphicon glyphicon-road" aria-hidden="true"></span>
              </td>
              <td>
                Permis B
              </td>
            </tr>
            <tr>
              <td>
                <span class="glyphicon glyphicon-briefcase" aria-hidden="true"></span>
              </td>
              <td>
                Disponible
              </td>
            </tr>
          </table>
        </div>

        <!-- Colonne milleux -->
        <div id="main" class="col-md-8 shadow presentation">
        </div>
    </div>


    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) ->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/ajax.js"></script>
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>
