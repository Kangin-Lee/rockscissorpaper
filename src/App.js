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
  const [result, setResult] = useState("Start!");
  const [computerResult, setComputerResult] = useState("Start!");
  const [totalCount, setTotalCount] = useState(0);
  const [winCount, setWinCount] = useState(0);
  const [loseCount, setLoseCount] = useState(0);
  const [tieCount, setTieCount] = useState(0);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);

    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    setResult(judgement(choice[userChoice], computerChoice));
    setComputerResult(computerJudgement(choice[userChoice], computerChoice));

    //횟수 카운트
    setTotalCount(totalCount + 1);
    if (judgement(choice[userChoice], computerChoice) == "Win") {
      setWinCount(winCount + 1);
    } else if (
      judgement(choice[userChoice], computerChoice) == "Tie"
        ? setTieCount(tieCount + 1)
        : setLoseCount(loseCount + 1)
    );
  };

  const judgement = (user, computer) => {
    if (user.name == computer.name) {
      return "Tie";
    } else if (user.name == "Rock")
      return computer.name == "Scissor" ? "Win" : "Lose";
    else if (user.name == "Scissor")
      return computer.name == "Paper" ? "Win" : "Lose";
    else if (user.name == "Paper")
      return computer.name == "Scissor" ? "Lose" : "Win";
  };

  const computerJudgement = (user, computer) => {
    if (user.name == computer.name) {
      return "tie";
    } else if (computer.name == "Rock")
      return user.name == "Scissor" ? "Win" : "Lose";
    else if (computer.name == "Scissor")
      return user.name == "Paper" ? "Win" : "Lose";
    else if (computer.name == "Paper")
      return user.name == "Scissor" ? "Lose" : "Win";
  };

  const reset = () => {
    setTotalCount(0);
    setWinCount(0);
    setTieCount(0);
    setLoseCount(0);
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
        <Box title="Computer" item={computerSelect} result={computerResult} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")} className="btn">
          <img src="https://nehalhazem.github.io/rockPaperScissors.io/img/scissors.png" />
        </button>
        <button onClick={() => play("rock")} className="btn">
          <img src="https://nehalhazem.github.io/rockPaperScissors.io/img/rock.png" />
        </button>
        <button onClick={() => play("paper")} className="btn">
          <img src="https://nehalhazem.github.io/rockPaperScissors.io/img/paper.png" />
        </button>
      </div>
      <div className="result">
        <h4>총 대결 수: {totalCount}</h4>
        <div className="user-result">
          <h6>이긴 횟수: {winCount}</h6>
          <h6>비긴 횟수: {tieCount}</h6>
          <h6>진 횟수: {loseCount}</h6>
        </div>
      </div>
      <div className="reset">
        <button class="refresh" onClick={reset}>
          <i class="fa-solid fa-rotate-right"></i>
        </button>
      </div>
    </>
  );
}

export default App;
