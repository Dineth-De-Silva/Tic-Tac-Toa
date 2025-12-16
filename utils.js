// Normal functions
// Function to check a subset is a subset of parent set
function isSubsetOf(parentArr, subsetArr) {
  // The 'every' method checks if all elements in the subsetArr pass a test.
  return subsetArr.every((element) => {
    // The test is whether the parentArr includes the current element.
    return parentArr.includes(element);
  });
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// function brain() {
//   datamining();
//   if (checker(xocps.sort(), xocps.length)) {
//     end = true;
//     party.confetti(document.getElementById("board"), {
//       count: 60,
//     });
//     document.getElementById("result").innerHTML = "<br/>You won 😇";
//     document.getElementById("result").style.color = "#3aa346";
//     display(wocps, "#3aa346");
//   } else if (nocps.length !== 0) {
//     var empty = nocps.length;
//     const secret = Math.floor(Math.random() * empty);
//     document.getElementById(nocps[secret]).innerText = "O";
//     document.getElementById(nocps[secret]).style.backgroundColor = "whitesmoke";
//     document.getElementById(nocps[secret]).ocp = true;
//     datamining();
//     if (checker(oocps.sort(), oocps.length)) {
//       end = true;
//       document.getElementById("result").innerHTML = "<br/>You lose 😖";
//       document.getElementById("result").style.color = "#c61a09";
//       display(wocps, "#c61a09");
//     }
//   } else {
//     display(xocps.concat(oocps), "orange");
//     document.getElementById("result").innerHTML = "<br/>Draw 😑";
//     end = true;
//   }
// }
