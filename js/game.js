// Game starts here
// View start page
refresh();
document.getElementById("start_page").style.display = "flex";
console.log("userchosecross: " + userchosecross);
console.log("userstartfirst: " + userstartfirst);

function userPrefMark(cross) {
  userchosecross = cross;
  console.log("userchosecross: " + userchosecross);
  if (cross) {
    document.getElementById("cross").style.backgroundColor = "var(--gray)";
    document.getElementById("circle").style.backgroundColor = "var(--white)";
  } else {
    document.getElementById("circle").style.backgroundColor = "var(--gray)";
    document.getElementById("cross").style.backgroundColor = "var(--white)";
  }
}

function userPrefStart() {
  document.getElementById("checkbox").check =
    !document.getElementById("checkbox").check;
  if (document.getElementById("checkbox").check) {
    userstartfirst = true;
    document.getElementById("checkbox").innerHTML = "X";
  } else {
    userstartfirst = false;
    document.getElementById("checkbox").innerHTML = "";
  }
  console.log("userstartfirst: " + userstartfirst);
}

// Start the game
function start() {
  // View game page
  refresh();
  document.getElementById("game_page").style.display = "flex";
  if (userstartfirst) {
  } else {
    our_move();
  }
}

// Handle Our Moves
function our_move() {
  // Random move algorithm
  observeBoard();
  const b = Algorithm();
  if (userchosecross) {
    assignerNormal(b, false, false);
  } else {
    assignerNormal(b, true, false);
  }
  observeBoard();
  const result = checker();
  switch (result) {
    case "Win":
      console.log("You win");

    case "Lose":
      console.log("You Lose");
      break;
    case "Draw":
      break;
    case "Normal":
      break;
  }
}

// Handle User Moves
function user_move(b) {
  observeBoard();
  if (!document.getElementById(b).ocp) {
    // Successful user move
    if (userchosecross) {
      assignerNormal(b, true, true);
    } else {
      assignerNormal(b, false, true);
    }
    observeBoard();
    const result = checker();
    switch (result) {
      case "Win":
        console.log("Youwin");
        break;
      case "Lose":
        break;
      case "Draw":
        break;
      case "Normal":
        our_move();
        break;
    }
  }
}

// End the game
function terminator() {}
