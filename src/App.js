import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { Provider } from "react-redux";
import appstore from "./Components/reduxcomponents/appstore";
function App() {
  return (
    <Provider store={appstore}>
      <div className="">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
