import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

const choice={
  rock:{
    name: "Rock",
    img:"https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_960_720.png" 
  },
  scissors:{
    name:"Scissor",
    img:"https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296853_1280.png"
  },
  paper:{
    name:"Paper",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvciv57AXv5krjeGZ2dBEtESuvSk33dpvT_-AebVrCx5Flo2ME_F-r9vw7Ayqdx9oq10s&usqp=CAU"
  }
}
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const paly = (userChoice) => {
    setUserSelect(choice[userChoice]);

    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "Rock")
      return computer.name == "Scissors" ? "Win" : "Lose";
    else if (user.name == "Scissor")
      return computer.name == "Paper" ? "Win" : "Lose";
    else if (user.name == "Paper")
      return computer.name == "Scissors" ? "Win" : "Lose";
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체에 키값만 뽑아 배열로 만들어 주는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };
  return (
    <>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => paly("scissors")} className="btn">
          <img src="https://nehalhazem.github.io/rockPaperScissors.io/img/scissors.png" />
        </button>
        <button onClick={() => paly("rock")} className="btn">
          <img src="https://nehalhazem.github.io/rockPaperScissors.io/img/rock.png" />
        </button>
        <button onClick={() => paly("paper")} className="btn">
          <img src="https://nehalhazem.github.io/rockPaperScissors.io/img/paper.png" />
        </button>
      </div>
    </>
  );
}

export default App;
