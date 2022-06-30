end = false
// _1
const a = ["1b1", "1b2", "1b3"]
// _2
const b = ["2b1", "2b2", "2b3"]
// _3
const c = ["3b1", "3b2", "3b3"]
// |1
const d = ["1b1", "2b1", "3b1"]
// |2
const e = ["1b2", "2b2", "3b3"]
// /3
const f = ["1b1", "2b1", "3b1"]
// /
const g = ["1b1", "2b2", "3b3"]
// \
const h = ["1b3", "2b2", "3b1"]

function start(b) {
  if (!end) {
    if (document.getElementById(b).ocp !== true) {
      document.getElementById(b).innerText = "X"
      document.getElementById(b).ocp = true
      brain(b)
    }
  }
}

function brain(b) {
  const mr = 3
  const mc = 3
  var xocps = []
  var oocps = []
  var nocps = []
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
  if (checkerx(xocps.sort(), xocps.length)) {
    end = true;
    console.log("x is the winner")
  } else {
    var empty = nocps.length
    const secret = Math.floor(Math.random() * empty)
    if (nocps[secret] !== null) {
      document.getElementById(nocps[secret]).innerText = "O"
      document.getElementById(nocps[secret]).ocp = true
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
      if (checkero(oocps.sort(), oocps.length)) {
        end = true
        console.log("o is the winner")
      }
    }
    else {
      console.log("draw")
      end = true
    }
  }
  console.info("x:" + xocps)
  console.info("o:" + oocps)
  console.info("n:" + nocps)
}

function checkerx(xocps, y) {
  const x = xocps

  if (isSubset(x, a, y, a.length)) {
    return true
  } else if (isSubset(x, b, y, b.length)) {
    return true
  } else if (isSubset(x, c, y, c.length)) {
    return true
  } else if (isSubset(x, d, y, d.length)) {
    return true
  } else if (isSubset(x, e, y, e.length)) {
    return true
  } else if (isSubset(x, f, y, f.length)) {
    return true
  } else if (isSubset(x, g, y, g.length)) {
    return true
  } else if (isSubset(x, h, y, h.length)) {
    return true
  } else {
    return false
  }

}


function checkero(oocps, z) {
  const o = oocps

  if (isSubset(o, a, z, a.length)) {
    return true
  } else if (isSubset(o, b, z, b.length)) {
    return true
  } else if (isSubset(o, c, z, c.length)) {
    return true
  } else if (isSubset(o, d, z, d.length)) {
    return true
  } else if (isSubset(o, e, z, e.length)) {
    return true
  } else if (isSubset(o, f, z, f.length)) {
    return true
  } else if (isSubset(o, g, z, g.length)) {
    return true
  } else if (isSubset(o, h, z, h.length)) {
    return true
  } else {
    return false
  }
}


function isSubset(arr1, arr2, m, n)

{

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