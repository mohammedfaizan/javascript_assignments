const ansPoll = document.getElementById("ans-poll");
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generate [0,0,0,0]
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    let input = parseInt(
      prompt(
        "What is your favourite programming language ?\n0: Javascript\n1: Python\n2: Rust\n3: C++\n(Write option number)"
      )
    );
    if (input > answers.length) {
      alert("please enter a valid option");
    } else {
      poll.answers[input]++;
    }

    poll.displayResults("string");
  },

  displayResults(type = "array") {
    if (type === "string") {
      let result = "Poll results are " + poll.answers.join(",");
      console.log(result);
    } else {
      console.log(poll.answers);
    }
  },
};

function registerNewAnswer() {
  let input = parseInt(
    prompt(
      "What is your favourite programming language ?\n0: Javascript\n1: Python\n2: Rust\n3: C++\n(Write option number)"
    )
  );
  if (input > poll.answers.length) {
    alert("please enter a valid option");
  } else {
    poll.answers[input]++;
  }

  poll.displayResults("string");
}

ansPoll.addEventListener("click", registerNewAnswer);
