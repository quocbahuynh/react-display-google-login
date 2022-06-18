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
          client_id={
            "107802859705-0pn75l7ihog8et2fe4s84kqnutpn6el5.apps.googleusercontent.com"
          }
          onSuccess={onSuccess}
          onFailure={onFailure}
          onTap={false}
        />
      </header>
    </div>
  );
}

export default App;
