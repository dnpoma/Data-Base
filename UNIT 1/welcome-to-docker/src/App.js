import "./App.css";
import Confetti from "./Confetti";

const shareMessage = "I just ran my first container using Docker";
const shareLink = "https://docker.com/";

DIJO QUE DEBEMOS DE HABLAR CON EL CAPITAN PARA UN PROGRAMA

const App = () => {
  return (
    <div className="App">
      <Confetti />
      <header className="App-header">
        <h1 style={{ marginBottom: "0px" }}>¡Felicidades!</h1>
        <p style={{ marginTop: "10px", marginBottom: "50px" }}>
          Ejecutaste el primer :D container
        </p>
        <div></div>
      </header>
    </div>
  );
};

export default App;
