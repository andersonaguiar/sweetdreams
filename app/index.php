<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Sweet Dreams with Mocha, Chai and Nightmare.js</title>
  </head>
  <body>
    <h1>Sweet Dreams with Mocha, Chai and Nightmare.js</h1>

    <form action="" method="get">
      <label>Your text</label>
      <input type="text" name="test" placeholder="Your text..." />
      <input type="submit" />
    </form>

<?php
  if ($_GET) {
    echo "<span id=\"result\">" . $_GET['test'] . "</span>";
  }
?>
  </body>
</html>
