window.onload = function() {
  //Création canvas
  var canvas = $('#canvas')[0];
  if (!canvas) {
    alert("Impossible de récupérer le canvas");
    return;
  }
  var context = canvas.getContext('2d');
  if (!context) {
    alert("Impossible de récupérer le context du canvas");
    return;
  }

  //player
  var player = {
    x: 100,
    y: 100,
    vitesse: 5,
    taille: 10,
    vx: 0,
    vy: 5,
    life: 0
  };
  //enemy
  var enemys = [];
  var enemy = {
    x: 200,
    y: 200,
    vitesse: 5,
    taille: 20,
    vx: 5,
    vy: 0
  };
  enemys.push(enemy);
  var score = 0;
  var invincible = 3 * 60;
  var tmp_hit = 0;

  var tmp_enemy = 0;

  //Lancement animation
  initiate();
  //Clic sur replay
  $("#replay").click(function() {
    initiate();
  });

  //Lance le jeu
  function initiate() {
    if (player.life === 0) {
      $("#heart1").css("display", "block");
      $("#heart2").css("display", "block");
      $("#heart3").css("display", "block");
      context.clearRect(0, 0, canvas.width, canvas.height);
      player = {
        x: 100,
        y: 100,
        vitesse: 5,
        taille: 10,
        vx: 0,
        vy: 5,
        life: 3,
        hit: 0
      };
      enemy = {
        x: 200,
        y: 200,
        vitesse: 5,
        taille: 20,
        vx: 5,
        vy: 5
      };
      enemys = [];
      enemys.push(enemy);
      score = 0;
      animate();
    }
  }

  //Clic sur save
  $("#btn_ok").click(function() {

    var user = $("#user").val();
    var score = $("#score").val();
    //alert(user+" "+score);
    if (user !== "") {
      $.ajax({
          method: "GET",
          url: "score.php",
          data: {action: "save", user: user, score: score}
        })
        .done(function(responseText) {
          console.log(responseText);
          majScore();
        });
    } else {
      alert("Vous devez entrer un pseudo!");
    }
  });

  function majScore() {

  }

  function animate() {
    context.save();
    //Vide le canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    var keypress;
    //Direction player
    $(document).keydown(function(e) {
      keypress = e.which;
      switch (keypress) {
        case 37: // fleche gauche
          player.vx = -player.vitesse;
          player.vy = 0;
          break;
        case 38: // fleche haut
          player.vy = -player.vitesse;
          player.vx = 0;
          break;
        case 39: // fleche droite
          player.vx = player.vitesse;
          player.vy = 0;
          break;
        case 40: // fleche bas
          player.vy = player.vitesse;
          player.vx = 0;
          break;
      }
    });

    ///Les Colisions

    //Colision player mur
    //Droite
    if (player.x + player.vx >= canvas.width)
    {
        player.vx = player.vx * -1;
    }
    //Gauche
    if(player.x + player.vx <= 0)
    {
      if(keypress == 37)
        player.x = 0;
      else{
        player.x = 0;
        player.vx = player.vx * -1;
      }
    }
    if (player.y + player.vy >= canvas.height || player.y + player.vy <= 0)
      player.vy = player.vy * -1;

    //Gestion de chaque ennemy
    for (var i = 0; i < Object.keys(enemys).length; i++) {
      //Collision gauche/droite
      if (enemys[i].x + enemys[i].vx >= canvas.width - enemys[i].taille || enemys[i].x + enemys[i].vx <= 0) {
        enemys[i].vx = enemys[i].vx * -1;
      }
      //Collision haut/bas
      if (enemys[i].y + enemys[i].vy >= canvas.height || enemys[i].y <= 0) {
        enemys[i].vy = enemys[i].vy * -1;
      }

      //Collisions player enemy
      if (player.x < enemys[i].x + enemys[i].taille &&
        player.x + player.taille > enemys[i].x &&
        player.y < enemys[i].y + enemys[i].taille &&
        player.y + player.taille > enemys[i].y) {
        if (player.life !== 0 && player.hit === 0) {
          $("#heart" + player.life).css("display", "none");
          player.life -= 1;
          player.hit = 1;
        }
      }

      //Enemy
      enemys[i].x += enemys[i].vx;
      enemys[i].y += enemys[i].vy;
    }

    //Invicible apres un coup
    if (player.hit == 1) {
      tmp_hit++;
      if (tmp_hit >= invincible) {
        player.hit = 0;
        tmp_hit = 0;
      }
    }

    ///Calcul de la nouvelle position
    //Player
    player.x += player.vx;
    player.y += player.vy;



    //Draw
    context.beginPath();
    //player["life"] = 1; //cheat invincible
    if (player.life === 0) {
      context.font = "25px arial";
      context.fillText("Perdu", canvas.width / 2 - 40, canvas.height / 2);
      context.fillText("Score: " + Math.floor(score), canvas.width / 2 - 60, canvas.height / 2 + 40);
    } else {
      //score
      score += (10 / 600);

      //Ajout ennemy
      if (Math.floor(score) / 5 > Object.keys(enemys).length) {
        var posX = Math.floor(Math.random() * (canvas.width - 40) + 20);
        var posY = Math.floor(Math.random() * (canvas.height - 40) + 20);
        var randVX = Math.floor(Math.random() * 3) + 3;
        var randVY = Math.floor(Math.random() * 3) + 3;
        var enemy = {
          x: posX,
          y: posY,
          vitesse: 5,
          taille: 20 * (score / 100 + 1),
          vx: randVX,
          vy: randVY
        };
        enemys.push(enemy);
      }

      //player
      if (player.hit == 1) {
        context.fillStyle = "black";
      } else
        context.fillStyle = "darkgrey";

      context.arc(player.x, player.y, player.taille, 0, Math.PI * 2);
      context.fill();
      //ennemy
      for (i = 0; i < Object.keys(enemys).length; i++) {
        context.fillStyle = "#330000";
        context.fillRect(enemys[i].x, enemys[i].y, enemys[i].taille, enemys[i].taille);
      }
      context.fillStyle = "black";
      context.font = "20px arial";
      //context.fillText(Math.floor(score),canvas.width/2-40,canvas.height-20);
      $('#score').val(Math.floor(score), canvas.width / 2 - 40);
      context.font = "20px arial";
      //context.fillText("Vies: "+player["life"],40,canvas.height-20);
      context.closePath();
      context.stroke();
      context.restore();

      if (player.life !== 0) {
        //Boucle de rafraichissement
        if (window.requestAnimationFrame)
          window.requestAnimationFrame(animate);
        else if (window.msRequestAnimationFrame)
          window.msRequestAnimationFrame(animate);
        else if (window.webkitRequestAnimationFrame)
          window.webkitRequestAnimationFrame(animate);
        else if (window.mozRequestAnimationFrame)
          window.mozRequestAnimationFrame(animate);
        else if (window.oRequestAnimationFrame)
          window.oRequestAnimationFrame(animate);
        else {
          QueueNewFrame = function() {};
          intervalID = window.setInterval(animate, 16.7);
        }
      }
    }
  }

  function collision(enemys, i, j) {
    //Collisions player enemy
    if (enemys[i].x < enemys[j].x + enemys[j].taille &&
      enemys[i].x + enemys[i].taille > enemy[j].x &&
      enemys[i].y < enemys[j].y + enemys[j].taille &&
      enemys[i].y + enemys[i].taille > enemys[j].y) {
      return true;
    } else {
      return false;
    }
  }
};
