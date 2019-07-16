// Your code here
let dodger = document.getElementById("dodger")

dodger.style.backgroundColor = "#FF69B4"
dodger.style.left
dodger.style.bottom = "0px"

function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  function moveDodgerRight() {
      let rightNumbers = dodger.style.right.replace("px", "")
      let right = parseInt(rightNumbers, 10)

      if (right > 0) {
          dodger.style.right = `${right -= 1}px`
      }
  }


  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });