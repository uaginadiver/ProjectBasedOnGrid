var men1= document.getElementById('men1');
var subm1 = document.getElementById('subm1');

var menupoints= document.getElementsByClassName('lis');
var divs = document.getElementsByClassName('submenuDiv');
var len = menupoints.length;
var ind;


init();



function init() {

  var list = len;

  for (var i = 0; i < list; i++) {
      menupoints[i].onmouseover=mouseOverAction;
      menupoints[i].onmouseout=mouseOutAction;
      divs[i].onmouseover=mouseOverActio;
      divs[i].onmouseout=mouseOutActio;
  };

};

function mouseOverAction() {

  var links = len;
  while (links--) {
    if (menupoints[links]===this) {
      divs[links].style.display="block";
    }

  }
};

function mouseOverActio() {

  var linkes = len;
  while (linkes--) {
    if (divs[linkes]===this) {
      divs[linkes].style.display="block";
    }

  }
};

function mouseOutAction() {

  var links = len;
  while (links--) {
    if (menupoints[links]===this) {
      divs[links].style.display="none";
    }
  }
};

function mouseOutActio() {

  var linkes = len;
  while (linkes--) {
    if (divs[linkes]===this) {
      divs[linkes].style.display="none";
    }
  }
};
