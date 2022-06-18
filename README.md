
#  REACT DISPLAY GOOGLE LOGIN

A Google Login Button has user's profile.






## How to use
The first thing you have to do that paste this line before `</head>` tag in `public/index.html`
```html
<script src="https://accounts.google.com/gsi/client" async defer></script>
```
See how to use below: 
```js
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
            "xxx"
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
```




## Props
| params    	| value    	| default value 	| description                                                                       	|
|-----------	|----------	|---------------	|-----------------------------------------------------------------------------------	|
| client_id 	| string   	|               	| You can create a clientID by creating a new project on Google developers website. 	|
| onSuccess 	| function 	|               	|                                                                                   	|
| onFailure 	| function 	|               	|                                                                                   	|
| onTap     	| boolean  	|               	| enable/disable One Tap                                                            	|


## Authors

- [@quocbahuynh](https://www.github.com/quocbahuynh)

