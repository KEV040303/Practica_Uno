import { Buttons } from "./Buttons";

function App() {
  return (
    <>
    <div className="container">
      <div className="left">
        <p className="title">
          Welcome to the<br/><strong>Frontend Quiz!</strong>
        </p>
        <p className="parrafo">
          <i>Pick a subject to get started</i>
        </p>
      </div>
      <div className="right">
        <Buttons />
      </div>
    </div>
    </>
  );
}

export default App;
