// Game controls
// View start page
refresh();
document.getElementById("start_page").style.display = "flex";

// Handle User Preferences
function userPrefMark(cross) {
  userchosecross = cross;
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
  var b;
  // Random empty box finder
  jobFinish = false;
  while (!jobFinish) {
    ranID = getRndInteger(1, 4).toString() + "b" + getRndInteger(1, 4);
    if (!document.getElementById(ranID).ocp) {
      b = ranID;
      jobFinish = true;
    }
  }
  if (userchosecross) {
    assignerNormal(b, false, false);
  } else {
    assignerNormal(b, true, false);
  }
  result = checker();
  switch (result) {
    case "Win":
      console.log("You win");
      break;

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
  if (!document.getElementById(b).ocp && !gameOver) {
    // Successful user move
    if (userchosecross) {
      assignerNormal(b, true, true);
    } else {
      assignerNormal(b, false, true);
    }
    result = checker();
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
  } else if (document.getElementById(b).ocp && !gameOver) {
    // Show something
  }
}

// End the game
function terminator() {}
