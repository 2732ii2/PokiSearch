import logo from './logo.svg';
import './App.css';
import Main from './comp/Main';
import { Provider } from "react-redux";
import store from './comp/Redux/Store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
