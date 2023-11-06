import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CalcContainer from "./components/CalcContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CalcContainer />
      </div>
    </Provider>
  );
}

export default App;
