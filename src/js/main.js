/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsiveNavbar() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function changeOrder(order) {
  //Some day improve this bad code
  //Dont repeat yourself
  switch (order) {
    case 1:
      document.getElementById('smallOrderSelector').className = "activeMobileOrderMenu";
      document.getElementById('smallOrder').style.display = "inline-block";
      document.getElementById('mediumOrderSelector').className = "";
      document.getElementById('mediumOrder').style.display = "none";
      document.getElementById('largeOrderSelector').className = "";
      document.getElementById('largeOrder').style.display = "none";
      break;
    case 2:
      document.getElementById('smallOrderSelector').className = "";
      document.getElementById('smallOrder').style.display = "none";
      document.getElementById('mediumOrderSelector').className = "activeMobileOrderMenu";
      document.getElementById('mediumOrder').style.display = "inline-block";
      document.getElementById('largeOrderSelector').className = "";
      document.getElementById('largeOrder').style.display = "none";
      break;
    case 3:
      document.getElementById('smallOrderSelector').className = "";
      document.getElementById('smallOrder').style.display = "none";
      document.getElementById('mediumOrderSelector').className = "";
      document.getElementById('mediumOrder').style.display = "none";
      document.getElementById('largeOrderSelector').className = "activeMobileOrderMenu";
      document.getElementById('largeOrder').style.display = "inline-block";
      break;
  }
}