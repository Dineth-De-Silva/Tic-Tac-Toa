// Constants
// Winning Moves
const wh1 = new Set(["1b1", "1b2", "1b3"]);
const wh2 = new Set(["2b1", "2b2", "2b3"]);
const wh3 = new Set(["3b1", "3b2", "3b3"]);
const wv1 = new Set(["1b1", "2b1", "3b1"]);
const wv2 = new Set(["1b2", "2b2", "3b2"]);
const wv3 = new Set(["1b3", "2b3", "3b3"]);
const wx1 = new Set(["1b1", "2b2", "3b3"]);
const wx2 = new Set(["1b3", "2b2", "3b1"]);
const winMoves = new Set([wh1, wh2, wh3, wv1, wv2, wv3, wx1, wx2]);

// State Variables
let userchosecross = true;
let userstartfirst = false;

let ocp_a = new Set(); // Occupied
let ocp_o = new Set(); // Occupied our
let ocp_u = new Set(); // Occupied user
let ocp_n = new Set(); // Not occupied

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
    console.log("Assigned X to " + b);
  } else {
    document.getElementById(b).innerText = "O";
    document.getElementById(b).cross = false;
    console.log("Assigned O to " + b);
  }
  if (user) {
    document.getElementById(b).style.backgroundColor = "#cbccceff";
    console.log("By user");
  } else {
    document.getElementById(b).style.backgroundColor = "#ffffff";
    console.log("By us");
  }
  document.getElementById(b).ocp = true;
}

// Reload state variables ocp...
function observeBoard() {
  let a = [];
  let n = [];
  let u = [];
  let o = [];
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      const id = i.toString() + "b" + j.toString();
      const box = document.getElementById(id);
      if (box.ocp) {
        if (box.cross) {
          if (userchosecross) {
            u.push(id);
          } else {
            o.push(id);
          }
        } else {
          if (userchosecross) {
            o.push(id);
          } else {
            u.push(id);
          }
        }
        a.push(id);
      } else {
        n.push(id);
      }
    }
  }
  ocp_a = new Set(a);
  ocp_n = new Set(n);
  ocp_u = new Set(u);
  ocp_o = new Set(o);
}

// Check Whether the situation is a winning or a draw
function checker() {
  for (const move of winMoves) {
    if (isSubset(move, ocp_u)) {
      return "Win";
    } else if (isSubset(move, ocp_o)) {
      return "Lose";
    }
  }

  if (ocp_a.size == 9) {
    return "Draw";
  } else {
    return "Normal";
  }
}

// Helper: check whether `small` (Set) is subset of `big` (Set)
function isSubset(small, big) {
  for (const v of small) {
    if (!big.has(v)) return false;
  }
  return true;

}
