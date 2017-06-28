<!DOCTYPE html>
<html>
  <head>

    <meta charset="utf-8">
    <title>Canvas</title>
    <link rel='stylesheet' href='style.css'/>
    <script src='canvas.js'></script>
    <script src='jquery-2.2.0.min.js'></script>

  </head>
  <body>

    <button id="replay" class="button">Rejouer</button>
    <input id="user" type="text" class="inputScore user" placeholder="Username"></input>
    <input id="score" type="text" class="inputScore score" disabled="disabled"></input>
    <div id="btn_ok">Save</div>
    <div id="error"></div>
    <table class="tableCoeur">
      <tr>
        <td class="td_heart">
          <img src="Heart.png" class="heart heart1" id="heart1" style="display:inline" />
        </td>
        <td class="td_heart">
          <img src="Heart.png" class="heart heart2" id="heart2"/>
        </td>
        <td class="td_heart">
            <img src="Heart.png" class="heart heart3" id="heart3"/>
        </td>
        <td class="td_heart">
          <div class="heart">
        </td>

          </div>
        </td>
      </tr>
    </table>

      <canvas id="canvas" width="1095" height="375">
        Message pour les navigateurs ne supportant pas encore canvas.
      </canvas>

  </body>
</html>
