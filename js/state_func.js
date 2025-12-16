// Constants
const winMoves = [
  ["1b1", "1b2", "1b3"],
  ["2b1", "2b2", "2b3"],
  ["3b1", "3b2", "3b3"],
  ["1b1", "2b1", "3b1"],
  ["1b2", "2b2", "3b2"],
  ["1b3", "2b3", "3b3"],
  ["1b1", "2b2", "3b3"],
  ["1b3", "2b2", "3b1"],
];

// State Variables
var userchosecross = true;
var userstartfirst = false;
var gameOver;

var ocp_a = []; // Occupied
var ocp_o = []; // Occupied our
var ocp_u = []; // Occupied user
var ocp_n = []; // Not occupied

// State functions
// Clear page
function refresh() {
  document.getElementById("game_page").style.display = "none";
  document.getElementById("start_page").style.display = "none";
}

// Assign X or O by user or us
function assignerNormal(b, cross, user) {
  if (cross) {
    document.getElementById(b).innerText = "X";
    document.getElementById(b).cross = true;
  } else {
    document.getElementById(b).innerText = "O";
    document.getElementById(b).cross = false;
  }
  if (user) {
    document.getElementById(b).style.backgroundColor = "#cbccceff";
  } else {
    document.getElementById(b).style.backgroundColor = "#ffffff";
  }
  document.getElementById(b).ocp = true;
}

// Reload state variables ocp...
function observeBoard() {
  ocp_a = [];
  ocp_n = [];
  ocp_u = [];
  ocp_o = [];
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      var id = i.toString() + "b" + j.toString();
      var box = document.getElementById(id);
      if (box.ocp) {
        if (box.cross) {
          if (userchosecross) {
            ocp_u.push(id);
            ocp_a.push(id);
          } else {
            ocp_o.push(id);
            ocp_a.push(id);
          }
        } else {
          if (userchosecross) {
            ocp_o.push(id);
            ocp_a.push(id);
          } else {
            ocp_u.push(id);
            ocp_a.push(id);
          }
        }
      } else {
        ocp_n.push(id);
      }
    }
  }
}

// Check Whether the situation is a winning or a draw
function checker() {
  observeBoard();
  for (const move of winMoves) {
    if (isSubsetOf(ocp_u, move)) {
      return "Win";
    } else if (isSubsetOf(ocp_o, move)) {
      return "Lose";
    }
  }
  if (ocp_a.length == 9) {
    return "Draw";
  } else {
    return "Normal";
  }
}
