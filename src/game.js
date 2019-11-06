import "./styles.css";
//Made by Eero Peltola This is a test

if (document.readyState !== "loading") {
  // Document ready, executing
  console.log("Document ready, executing");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function() {
    // Document was not ready, executing when loaded
    console.log("Document ready, executing after a wait");
    initializeCode();
  });
}

function initializeCode() {
  console.log("Initializing");
  document.winner = null;
  document.turn = "X";

  const q0button = document.getElementById("q0");
  q0button.addEventListener("mousedown", event => {
    newMove(q0);
    event.stopPropagation();
  });
  const q1button = document.getElementById("q1");
  q1button.addEventListener("mousedown", event => {
    newMove(q1);
    event.stopPropagation();
  });
  const q2button = document.getElementById("q2");
  q2button.addEventListener("mousedown", event => {
    newMove(q2);
    event.stopPropagation();
  });
  const q3button = document.getElementById("q3");
  q3button.addEventListener("mousedown", event => {
    newMove(q3);
    event.stopPropagation();
  });
  const q4button = document.getElementById("q4");
  q4button.addEventListener("mousedown", event => {
    newMove(q4);
    event.stopPropagation();
  });
  const q5button = document.getElementById("q5");
  q5button.addEventListener("mousedown", event => {
    newMove(q5);
    event.stopPropagation();
  });
  const q6button = document.getElementById("q6");
  q6button.addEventListener("mousedown", event => {
    newMove(q6);
    event.stopPropagation();
  });
  const q7button = document.getElementById("q7");
  q7button.addEventListener("mousedown", event => {
    newMove(q7);
    event.stopPropagation();
  });
  const q8button = document.getElementById("q8");
  q8button.addEventListener("mousedown", event => {
    newMove(q8);
    event.stopPropagation();
  });
  const q9button = document.getElementById("q9");
  q9button.addEventListener("mousedown", event => {
    newMove(q9);
    event.stopPropagation();
  });
  const q10button = document.getElementById("q10");
  q10button.addEventListener("mousedown", event => {
    newMove(q10);
    event.stopPropagation();
  });
  const q11button = document.getElementById("q11");
  q11button.addEventListener("mousedown", event => {
    newMove(q11);
    event.stopPropagation();
  });
  const q12button = document.getElementById("q12");
  q12button.addEventListener("mousedown", event => {
    newMove(q12);
    event.stopPropagation();
  });
  const q13button = document.getElementById("q13");
  q13button.addEventListener("mousedown", event => {
    newMove(q13);
    event.stopPropagation();
  });
  const q14button = document.getElementById("q14");
  q14button.addEventListener("mousedown", event => {
    newMove(q14);
    event.stopPropagation();
  });
  const q15button = document.getElementById("q15");
  q15button.addEventListener("mousedown", event => {
    newMove(q15);
    event.stopPropagation();
  });
  const q16button = document.getElementById("q16");
  q16button.addEventListener("mousedown", event => {
    newMove(q16);
    event.stopPropagation();
  });
  const q17button = document.getElementById("q17");
  q17button.addEventListener("mousedown", event => {
    newMove(q17);
    event.stopPropagation();
  });
  const q18button = document.getElementById("q18");
  q18button.addEventListener("mousedown", event => {
    newMove(q18);
    event.stopPropagation();
  });
  const q19button = document.getElementById("q19");
  q19button.addEventListener("mousedown", event => {
    newMove(q19);
    event.stopPropagation();
  });
  const q20button = document.getElementById("q20");
  q20button.addEventListener("mousedown", event => {
    newMove(q20);
    event.stopPropagation();
  });
  const q21button = document.getElementById("q21");
  q21button.addEventListener("mousedown", event => {
    newMove(q21);
    event.stopPropagation();
  });
  const q22button = document.getElementById("q22");
  q22button.addEventListener("mousedown", event => {
    newMove(q22);
    event.stopPropagation();
  });
  const q23button = document.getElementById("q23");
  q23button.addEventListener("mousedown", event => {
    newMove(q23);
    event.stopPropagation();
  });
  const q24button = document.getElementById("q24");
  q24button.addEventListener("mousedown", event => {
    newMove(q24);
    event.stopPropagation();
  });
}
function setInformation(msg) {
  document.getElementById("information").innerText = msg;
}

function newMove(square) {
  if (document.winner === null) {
    if (square.innerText === "") {
      square.innerText = document.turn;
      switchTurn();
    } else {
      setInformation(
        "It is " + document.turn + "'s turn! Choose an empty square!"
      );
    }
  }
}

function switchTurn() {
  if (checkWin(document.turn)) {
    setInformation(document.turn + " Won!");
    document.winner = document.turn;
    if (document.winner === "X") {
      alert("Player 1 won!");
    } else {
      alert("Player 2 won!");
    }
  } else if (document.turn === "X") {
    document.turn = "O";
    setInformation("It is " + document.turn + "'s turn!");
  } else {
    document.turn = "X";
    setInformation("It is " + document.turn + "'s turn!");
  }
}

function checkWin(move) {
  var result = false;

  if (
    checkRow(0, 1, 2, 3, 4, move) ||
    checkRow(5, 6, 7, 8, 9, move) ||
    checkRow(10, 11, 12, 13, 14, move) ||
    checkRow(15, 16, 17, 18, 19, move) ||
    checkRow(20, 21, 22, 23, 24, move) ||
    checkRow(0, 5, 10, 15, 20, move) ||
    checkRow(1, 6, 11, 16, 21, move) ||
    checkRow(2, 7, 12, 17, 22, move) ||
    checkRow(3, 8, 13, 18, 23, move) ||
    checkRow(4, 9, 14, 19, 24, move) ||
    checkRow(0, 6, 12, 18, 24, move) ||
    checkRow(20, 16, 12, 8, 4, move)
  ) {
    console.log("We have a winner!");
    result = true;
  }
  return result;
}

function checkRow(a, b, c, d, e, move) {
  var result = false;

  if (
    getSquareValue(a) === move &&
    getSquareValue(b) === move &&
    getSquareValue(c) === move &&
    getSquareValue(d) === move &&
    getSquareValue(e) === move
  ) {
    result = true;
  }
  return result;
}

function getSquareValue(qNumber) {
  return document.getElementById("q" + qNumber).innerText;
}
