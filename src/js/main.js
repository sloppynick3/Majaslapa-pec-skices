/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsiveNavbar() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// For orders page
var smallOrder = 0;
var mediumOrder = 1;
var largeOrder = 0;

function setSmallOrderActive(status) {
  console.log("Small order status" + status.toString());
  if (1 == smallOrder) {
    document.getElementById('smallOrderSelector').className = "activeMobileOrderMenu";
    document.getElementById('smallOrder').style.display = "inline-block";
  } else {
    document.getElementById('smallOrderSelector').className = "";
    document.getElementById('smallOrder').style.display = "none";
  }
}

function setMediumOrderActive(status) {
  if (1 == mediumOrder) {
    document.getElementById('mediumOrderSelector').className = "activeMobileOrderMenu";
    document.getElementById('mediumOrder').style.display = "inline-block";
  } else {
    document.getElementById('mediumOrderSelector').className = "";
    document.getElementById('mediumOrder').style.display = "none";
  }
}

function setLargeOrderActive(status) {
  if (1 == largeOrder) {
    document.getElementById('largeOrderSelector').className = "activeMobileOrderMenu";
    document.getElementById('largeOrder').style.display = "inline-block";
  } else {
    document.getElementById('largeOrderSelector').className = "";
    document.getElementById('largeOrder').style.display = "none";
  }
}

function setOrders(x) {
  switch (x) {
    case 1:
      smallOrder = 1; mediumOrder = 0; largeOrder = 0;
      break;
    case 2:
      smallOrder = 0; mediumOrder = 1; largeOrder = 0;
      break;
    case 3:
      smallOrder = 0; mediumOrder = 0; largeOrder = 1;
      break;
  }

  changeOrder();
}

function changeOrder() {
      setSmallOrderActive(smallOrder);
      setMediumOrderActive(mediumOrder);
      setLargeOrderActive(largeOrder);
}

function resetOrder() {
  document.getElementById('smallOrder').style.display = "inline-block";
  document.getElementById('mediumOrder').style.display = "inline-block";
  document.getElementById('largeOrder').style.display = "inline-block";
}

function checkSize() {
  console.log("Resize");
  var width = document.body.clientWidth;
  if (width > 850) {
    resetOrder();
  } else {
    changeOrder();
  }
}