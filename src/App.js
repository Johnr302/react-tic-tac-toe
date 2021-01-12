import "./App.css";
import PlayerTurn from "./components/PlayerTurn";
import WinnerDeclaration from "./components/WinnerDeclaration";
import NewGame from "./components/NewGame";
import Board from "./components/Board";

function App() {
  return (
    <div className="App">
      <PlayerTurn />
      <WinnerDeclaration />
      <NewGame />
      <Board />
    </div>
  );
}

export default App;
