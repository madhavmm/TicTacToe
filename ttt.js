function myfunc() {
  var g1, g2, g3, g4, g5, g6, g7, g8, g9;
  g1 = document.getElementById("g1").value;
  g2 = document.getElementById("g2").value;
  g3 = document.getElementById("g3").value;
  g4 = document.getElementById("g4").value;
  g5 = document.getElementById("g5").value;
  g6 = document.getElementById("g6").value;
  g7 = document.getElementById("g7").value;
  g8 = document.getElementById("g8").value;
  g9 = document.getElementById("g9").value;

  // If either of the players win, the grid gets disabled

  if (
    (g1 == "x" || g1 == "X") &&
    (g2 == "x" || g2 == "X") &&
    (g3 == "x" || g3 == "X")
  ) {
    document.getElementById("print").innerHTML = "";
    document.getElementById("printres").innerHTML = " Player 1 Won";
    document.getElementById("g4").disabled = true;
    document.getElementById("g5").disabled = true;
    document.getElementById("g6").disabled = true;
    document.getElementById("g7").disabled = true;
    document.getElementById("g8").disabled = true;
    document.getElementById("g9").disabled = true;
  } else if (
    (g1 == "x" || g1 == "X") &&
    (g4 == "x" || g4 == "X") &&
    (g7 == "x" || g7 == "X")
  ) {
    document.getElementById("print").innerHTML = "";
    document.getElementById("printres").innerHTML = " Player 1 Won";
    document.getElementById("g2").disabled = true;
    document.getElementById("g3").disabled = true;
    document.getElementById("g5").disabled = true;
    document.getElementById("g6").disabled = true;
    document.getElementById("g8").disabled = true;
    document.getElementById("g9").disabled = true;
  } else if (
    (g7 == "x" || g7 == "X") &&
    (g8 == "x" || g8 == "X") &&
    (g9 == "x" || g9 == "X")
  ) {
    document.getElementById("print").innerHTML = "";
    document.getElementById("printres").innerHTML = " Player 1 Won";
    document.getElementById("g1").disabled = true;
    document.getElementById("g2").disabled = true;
    document.getElementById("g3").disabled = true;
    document.getElementById("g4").disabled = true;
    document.getElementById("g5").disabled = true;
    document.getElementById("g6").disabled = true;
  } else if (
    (g3 == "x" || g3 == "X") &&
    (g6 == "x" || g6 == "X") &&
    (g9 == "x" || g9 == "X")
  ) {
    document.getElementById("print").innerHTML = "";
    document.getElementById("printres").innerHTML = " Player 1 Won";
    document.getElementById("g1").disabled = true;
    document.getElementById("g2").disabled = true;
    document.getElementById("g4").disabled = true;
    document.getElementById("g5").disabled = true;
    document.getElementById("g7").disabled = true;
    document.getElementById("g8").disabled = true;
  } else if (
    (g1 == "x" || g1 == "X") &&
    (g5 == "x" || g5 == "X") &&
    (g9 == "x" || g9 == "X")
  ) {
    document.getElementById("print").innerHTML = "";
    document.getElementById("printres").innerHTML = " Player 1 Won";
    document.getElementById("g2").disabled = true;
    document.getElementById("g3").disabled = true;
    document.getElementById("g4").disabled = true;
    document.getElementById("g6").disabled = true;
    document.getElementById("g7").disabled = true;
    document.getElementById("g8").disabled = true;
  } else if (
    (g3 == "x" || g3 == "X") &&
    (g5 == "x" || g5 == "X") &&
    (g7 == "x" || g7 == "X")
  ) {
    document.getElementById("print").innerHTML = "";
    document.getElementById("printres").innerHTML = " Player 1 Won";
    document.getElementById("g1").disabled = true;
    document.getElementById("g2").disabled = true;
    document.getElementById("g4").disabled = true;
    document.getElementById("g6").disabled = true;
    document.getElementById("g8").disabled = true;
    document.getElementById("g9").disabled = true;
  } else if (
    (g2 == "x" || g2 == "X") &&
    (g5 == "x" || g5 == "X") &&
    (g8 == "x" || g8 == "X")
  ) {
    document.getElementById("print").innerHTML = "";
    document.getElementById("printres").innerHTML = " Player 1 Won";
    document.getElementById("g1").disabled = true;
    document.getElementById("g3").disabled = true;
    document.getElementById("g4").disabled = true;
    document.getElementById("g6").disabled = true;
    document.getElementById("g7").disabled = true;
    document.getElementById("g9").disabled = true;
  } else if (
    (g4 == "x" || g4 == "X") &&
    (g5 == "x" || g5 == "X") &&
    (g6 == "x" || g6 == "X")
  ) {
    document.getElementById("print").innerHTML = "";
    document.getElementById("printres").innerHTML = " Player 1 Won";
    document.getElementById("g1").disabled = true;
    document.getElementById("g2").disabled = true;
    document.getElementById("g3").disabled = true;
    document.getElementById("g7").disabled = true;
    document.getElementById("g8").disabled = true;
    document.getElementById("g9").disabled = true;
  }
  /****************/
  else if (
    (g1 == "o" || g1 == "O") &&
    (g2 == "o" || g2 == "O") &&
    (g3 == "o" || g3 == "O")
  ) {
    document.getElementById("print").innerHTML = "";
    document.getElementById("printres").innerHTML = " Player 2 Won";
    document.getElementById("g4").disabled = true;
    document.getElementById("g5").disabled = true;
    document.getElementById("g6").disabled = true;
    document.getElementById("g7").disabled = true;
    document.getElementById("g8").disabled = true;
    document.getElementById("g9").disabled = true;
  } else if (
    (g1 == "o" || g1 == "O") &&
    (g4 == "o" || g4 == "O") &&
    (g7 == "o" || g7 == "O")
  ) {
    document.getElementById("print").innerHTML = "";
    document.getElementById("printres").innerHTML = " Player 2 Won";
    document.getElementById("g2").disabled = true;
    document.getElementById("g3").disabled = true;
    document.getElementById("g5").disabled = true;
    document.getElementById("g6").disabled = true;
    document.getElementById("g8").disabled = true;
    document.getElementById("g9").disabled = true;
  } else if (
    (g7 == "o" || g7 == "O") &&
    (g8 == "o" || g8 == "O") &&
    (g9 == "o" || g9 == "O")
  ) {
    document.getElementById("print").innerHTML = "";
    document.getElementById("printres").innerHTML = " Player 2 Won";
    document.getElementById("g1").disabled = true;
    document.getElementById("g2").disabled = true;
    document.getElementById("g3").disabled = true;
    document.getElementById("g4").disabled = true;
    document.getElementById("g5").disabled = true;
    document.getElementById("g6").disabled = true;
  } else if (
    (g3 == "o" || g3 == "O") &&
    (g6 == "o" || g6 == "O") &&
    (g9 == "o" || g9 == "O")
  ) {
    document.getElementById("print").innerHTML = "";
    document.getElementById("printres").innerHTML = " Player 2 Won";
    document.getElementById("g1").disabled = true;
    document.getElementById("g2").disabled = true;
    document.getElementById("g4").disabled = true;
    document.getElementById("g5").disabled = true;
    document.getElementById("g7").disabled = true;
    document.getElementById("g8").disabled = true;
  } else if (
    (g1 == "o" || g1 == "O") &&
    (g5 == "o" || g5 == "O") &&
    (g9 == "o" || g9 == "O")
  ) {
    document.getElementById("print").innerHTML = "";
    document.getElementById("printres").innerHTML = " Player 2 Won";
    document.getElementById("g2").disabled = true;
    document.getElementById("g3").disabled = true;
    document.getElementById("g4").disabled = true;
    document.getElementById("g6").disabled = true;
    document.getElementById("g7").disabled = true;
    document.getElementById("g8").disabled = true;
  } else if (
    (g3 == "o" || g3 == "O") &&
    (g5 == "o" || g5 == "O") &&
    (g7 == "o" || g7 == "O")
  ) {
    document.getElementById("print").innerHTML = "";
    document.getElementById("printres").innerHTML = " Player 2 Won";
    document.getElementById("g1").disabled = true;
    document.getElementById("g2").disabled = true;
    document.getElementById("g4").disabled = true;
    document.getElementById("g6").disabled = true;
    document.getElementById("g8").disabled = true;
    document.getElementById("g9").disabled = true;
  } else if (
    (g2 == "o" || g2 == "O") &&
    (g5 == "o" || g5 == "O") &&
    (g8 == "o" || g8 == "O")
  ) {
    document.getElementById("print").innerHTML = "";
    document.getElementById("printres").innerHTML = " Player 2 Won";
    document.getElementById("g1").disabled = true;
    document.getElementById("g3").disabled = true;
    document.getElementById("g4").disabled = true;
    document.getElementById("g6").disabled = true;
    document.getElementById("g7").disabled = true;
    document.getElementById("g9").disabled = true;
  } else if (
    (g4 == "o" || g4 == "O") &&
    (g5 == "o" || g5 == "O") &&
    (g6 == "o" || g6 == "O")
  ) {
    document.getElementById("print").innerHTML = "";
    document.getElementById("printres").innerHTML = " Player 2 Won";
    document.getElementById("g1").disabled = true;
    document.getElementById("g2").disabled = true;
    document.getElementById("g3").disabled = true;
    document.getElementById("g7").disabled = true;
    document.getElementById("g8").disabled = true;
    document.getElementById("g9").disabled = true;
  }

  // To check if its a draw
  else if (
    (g1 == "X" || g1 == "O") &&
    (g2 == "X" || g2 == "O") &&
    (g3 == "X" || g3 == "O") &&
    (g4 == "X" || g4 == "O") &&
    (g5 == "X" || g5 == "O") &&
    (g6 == "X" || g6 == "O") &&
    (g7 == "X" || g7 == "O") &&
    (g8 == "X" || g8 == "O") &&
    (g9 == "X" || g9 == "O")
  ) {
    document.getElementById("print").innerHTML = "";
    document.getElementById("printres").innerHTML = " Match is a Draw";
  } else {
    if (flag == 1) {
      document.getElementById("print").innerHTML = "Player 1 Turn";
    } else {
      document.getElementById("print").innerHTML = "Player 2 Turn";
    }
  }
}

// Reset fn
function myfunc_0() {
  location.reload();
  document.getElementById("g1").value = "";
  document.getElementById("g2").value = "";
  document.getElementById("g3").value = "";
  document.getElementById("g4").value = "";
  document.getElementById("g5").value = "";
  document.getElementById("g6").value = "";
  document.getElementById("g7").value = "";
  document.getElementById("g8").value = "";
  document.getElementById("g9").value = "";
}

// Check the turn and alternate input
flag = 1;
function inp_1() {
  if (flag == 1) {
    document.getElementById("g1").value = "X";
    document.getElementById("g1").disabled = true;
    flag = 0;
  } else {
    document.getElementById("g1").value = "O";
    document.getElementById("g1").disabled = true;
    flag = 1;
  }
}

function inp_2() {
  if (flag == 1) {
    document.getElementById("g2").value = "X";
    document.getElementById("g2").disabled = true;
    flag = 0;
  } else {
    document.getElementById("g2").value = "O";
    document.getElementById("g2").disabled = true;
    flag = 1;
  }
}

function inp_3() {
  if (flag == 1) {
    document.getElementById("g3").value = "X";
    document.getElementById("g3").disabled = true;
    flag = 0;
  } else {
    document.getElementById("g3").value = "O";
    document.getElementById("g3").disabled = true;
    flag = 1;
  }
}

function inp_4() {
  if (flag == 1) {
    document.getElementById("g4").value = "X";
    document.getElementById("g4").disabled = true;
    flag = 0;
  } else {
    document.getElementById("g4").value = "O";
    document.getElementById("g4").disabled = true;
    flag = 1;
  }
}

function inp_5() {
  if (flag == 1) {
    document.getElementById("g5").value = "X";
    document.getElementById("g5").disabled = true;
    flag = 0;
  } else {
    document.getElementById("g5").value = "O";
    document.getElementById("g5").disabled = true;
    flag = 1;
  }
}

function inp_6() {
  if (flag == 1) {
    document.getElementById("g6").value = "X";
    document.getElementById("g6").disabled = true;
    flag = 0;
  } else {
    document.getElementById("g6").value = "O";
    document.getElementById("g6").disabled = true;
    flag = 1;
  }
}

function inp_7() {
  if (flag == 1) {
    document.getElementById("g7").value = "X";
    document.getElementById("g7").disabled = true;
    flag = 0;
  } else {
    document.getElementById("g7").value = "O";
    document.getElementById("g7").disabled = true;
    flag = 1;
  }
}

function inp_8() {
  if (flag == 1) {
    document.getElementById("g8").value = "X";
    document.getElementById("g8").disabled = true;
    flag = 0;
  } else {
    document.getElementById("g8").value = "O";
    document.getElementById("g8").disabled = true;
    flag = 1;
  }
}

function inp_9() {
  if (flag == 1) {
    document.getElementById("g9").value = "X";
    document.getElementById("g9").disabled = true;
    flag = 0;
  } else {
    document.getElementById("g9").value = "O";
    document.getElementById("g9").disabled = true;
    flag = 1;
  }
}
