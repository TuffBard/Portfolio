<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Les Lambdas</title>
  </head>
  <body>
    <script type="text/javascript">
    function mousseline(){
      var str = "Quand on veux de la purée mousseline!".split("").map(s => console.log(s));
    };

    //  Ceci est un mémo des expression lambdas en javascript

    // var a = [
    //   "Hydrogen",
    //   "Helium",
    //   "Lithiums",
    //   "Beryl­lium"
    // ];
    //
    // //map transforme un tableau en un autre tableau
    // var a2 = a.map(s => s.length );
    // var a3 = a.map( s => +s );
    // //reduce tranforme un tableau en une variable int/String selon ce qui est retourné
    // var a5 = a.reduce((previous,key) => previous+=" "+key);
    // //filter créer un tableau contenant les lignes de a respectant la condition
    // var a6 = a.filter(key => key.length == 8);

    // Affichage:
    // console.log('map 1: '+a2);
    // console.log('map 2: '+a3);
    // console.log('reduce: '+a5);
    // console.log('Filter: '+a6);

    var notes = [10,12,15,6,8,15];
    //fais la moyenne des ints d'un tableau.
    var moyenne = notes.reduce((previous,key) => previous+=key)/notes.length;
    //Affichage
    console.log(moyenne);
    mousseline();
    </script>
    <?php

    ?>
  </body>
</html>
