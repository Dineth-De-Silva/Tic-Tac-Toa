function start(b) {
  if (document.getElementById(b).ocp !== true) {
    document.getElementById(b).innerText = "X"
    document.getElementById(b).ocp = true
    brain(b)
  }
}

function brain(b) {
  const r = parseInt(b.charAt(0))
  const c = parseInt(b.charAt(2))
  const mr = 3
  const mc = 3
  var ocps = []
  var nocps = []
  for (var rc = 1; rc <= mr; rc++) {
    for (var cc = 1; cc <= mc; cc++) {
      var key = rc.toString() + "b" + cc.toString()
      if (document.getElementById(key).ocp === true) {
        ocps.push(key)
      } else {
        nocps.push(key)
      }
    }
  }
  console.log(ocps)
}
