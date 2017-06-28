<html>
  <body>
<?php
  $mysqli = mysqli_connect("sql2.olympe.in", "7bwq1x6s", "mathias71100", "7bwq1x6s");
  $user = $_GET['user'];
  $score = $_GET['score'];

  if($_GET['action']=="save")
  {
    echo "save";
    $req = "SELECT * FROM score WHERE user = $user AND score = $score";
    //echo $req;
    $res = mysqli_query($req);
    $count = $res->num_rows;
    echo $count;
    if($count == 0)
    {
      $req = "INSERT INTO score (user,score) VALUES ('$user','$score')";
      $res = mysqli_query($req);
    }

  }
  else
  {
    $req = "SELECT * FROM score ORDER BY score DESC LIMIT 10";
    $res = mysqli_query($req);
    while($row = $res->fetch_array())
    {
      $out += "<tr>
                <td>".$row['user']."</td>
                <td>".$row['score']."</td>
              </tr>";
    }
    echo $out;
  }
?>
 </body>
</html>
