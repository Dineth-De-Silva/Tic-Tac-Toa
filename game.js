// Winning possibilities (3×3)
// _1
const a = ["1b1", "1b2", "1b3"]
// _2
const b = ["2b1", "2b2", "2b3"]
// _3
const c = ["3b1", "3b2", "3b3"]
// |1
const d = ["1b1", "2b1", "3b1"]
// |2
const e = ["1b2", "2b2", "3b2"]
// |3
const f = ["1b3", "2b3", "3b3"]
// /×
const g = ["1b1", "2b2", "3b3"]
// \×
const h = ["1b3", "2b2", "3b1"]

//vars
var begin = false
var end = false

const mr = 3
const mc = 3

var xocps = []
var oocps = []
var nocps = []
var wocps = []

function run() {
  document.getElementById("wall").style.display = "none";
  document.getElementById("board").style.display = "grid"
  begin = true;
  document.getElementById("play").style.display = "none";
  document.getElementById("rules").style.display = "block";
  document.getElementById("restart").style.display = "block";
}

function start(b) {
  if (begin && !end) {
    if (document.getElementById(b).ocp !== true) {
      document.getElementById(b).innerText = "X"
      document.getElementById(b).ocp = true
      brain()
    }
  }
}

function brain() {
  datamining()
  if (checker(xocps.sort(), xocps.length)) {
    end = true;
    console.log("x is the winner")
    display(wocps, "#62bd69")
  } else if (nocps.length !== 0) {
    var empty = nocps.length
    const secret = Math.floor(Math.random() * empty)
    document.getElementById(nocps[secret]).innerText = "O"
    document.getElementById(nocps[secret]).ocp = true
    datamining()
    if (checker(oocps.sort(), oocps.length)) {
      end = true
      console.log("o is the winner")
      display(wocps, "#c61a09")
    }
  } else {
    console.log("draw")
    display(xocps.concat(ocps), "yellow")
    end = true
  }
  console.info("x:" + xocps)
  console.info("o:" + oocps)
  console.info("n:" + nocps)
}

function datamining() {
  xocps = []
  oocps = []
  nocps = []
  for (var rc = 1; rc <= mr; rc++) {
    for (var cc = 1; cc <= mc; cc++) {
      var key = rc.toString() + "b" + cc.toString()
      if (document.getElementById(key).innerText === "X") {
        xocps.push(key)
      } else if (document.getElementById(key).innerText === "O") {
        oocps.push(key)
      } else {
        nocps.push(key)
      }
    }
  }
}

function checker(ocps, y) {
  const x = ocps

  if (isSubset(x, a, y, a.length)) {
    wocps = a
    return true
  } else if (isSubset(x, b, y, b.length)) {
    wocps = b
    return true
  } else if (isSubset(x, c, y, c.length)) {
    wocps = c
    return true
  } else if (isSubset(x, d, y, d.length)) {
    wocps = d
    return true
  } else if (isSubset(x, e, y, e.length)) {
    wocps = e
    return true
  } else if (isSubset(x, f, y, f.length)) {
    wocps = f
    return true
  } else if (isSubset(x, g, y, g.length)) {
    wocps = g
    return true
  } else if (isSubset(x, h, y, h.length)) {
    wocps = h
    return true
  } else {
    return false
  }

}

function display(ocps, color) {
  for (var i = 0; i < ocps.length; i++) {
    document.getElementById(ocps[i]).style.color = color;
    document.getElementById(ocps[i]).style.border = "2px solid black";
  }
}

function isSubset(arr1, arr2, m, n) {

  let i = 0;

  let j = 0;

  for (i = 0; i < n; i++) {

    for (j = 0; j < m; j++)

      if (arr2[i] == arr1[j])

        break;



    /* If the above inner loop 

    was not broken at all then 

    arr2[i] is not present in 

    arr1[] */

    if (j == m)

      return false;

  }



  /* If we reach here then all 

  elements of arr2[] are present 

  in arr1[] */

  return true;

}
