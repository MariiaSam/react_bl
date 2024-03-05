import "./App.css";

const pageTitle = "Page title";
const welcomeText = "Welcome to React";
const nullVar = null;
const undefindVar = undefined;

const username = "admin";

const arr = [1, 2, 3]

function App() {
  return (
    <>
      <div className="main">
        <p>{pageTitle}</p>
        <label htmlFor="id">password</label>
        <input className="field" type="passwoprd" autoFocus />
        <p>{welcomeText}</p>
        <p>
          {username === "admin"
            ? "Welcome to site config"
            : "Need permission to access"}
        </p>
        <p>{nullVar}</p>
        <p>{undefindVar}</p>
        <div>{arr}</div>
      </div>
    </>
  );
}

export default App;
