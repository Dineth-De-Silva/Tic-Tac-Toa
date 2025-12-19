function Algorithm() {
  if (onlyOneMoveLeft() != null) {
    return onlyOneMoveLeft();
  } else if (findBestMove() != null) {
    return findBestMove();
  } else if (findWorstMove() != null) {
    return findWorstMove();
  } else {
    const ocp_n_array = Array.from(ocp_n);
    const b = ocp_n_array[getRndInteger(0, ocp_n_array.length - 1)];
    return b;
  }
}

// Check if there only one move left
function onlyOneMoveLeft() {
  if (ocp_n.size == 1) {
    const ocp_n_a = [...ocp_n];
    return ocp_n_a[0];
  } else {
    return null;
  }
}

function findBestMove() {
  // Check whether we are about to win against the user
  for (const move of winMoves) {
    let boxes = [];
    let progress = 0;
    for (const box of move) {
      // If the box is occupied, count whether it's occupied by us
      if (document.getElementById(box).ocp) {
        if (ocp_o.has(box)) {
          progress += 1;
        }
      } else {
        // box is free — candidate to complete the line
        boxes.push(box);
      }
    }
    if (progress == 2) {
      return boxes[0];
    }
  }
  return null;
}

function findWorstMove() {
  // Check whether we are about to win against the user
  for (const move of winMoves) {
    let boxes = [];
    let progress = 0;
    for (const box of move) {
      // If the box is occupied, count whether it's occupied by the user
      if (document.getElementById(box).ocp) {
        if (ocp_u.has(box)) {
          progress += 1;
        }
      } else {
        // box is free — candidate for the blocking move
        boxes.push(box);
      }
    }
    if (progress == 2) {
      return boxes[0];
    }
  }
  return null;
}
