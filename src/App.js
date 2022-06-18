import "./App.css";
import GoogleReactLogin from "./GoogleReactLogin";

function App() {
  const onSuccess = (response) => {
    console.log(response);
  };

  const onFailure = (error) => {
    console.log(error);
  };
  return (
    <div className="App">
      <header className="App-header">
        <GoogleReactLogin
          client_id={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          onTap={false}
        />
      </header>
    </div>
  );
}

export default App;
