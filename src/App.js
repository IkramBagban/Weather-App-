import { Provider } from "react-redux";
import "./App.css";
import Search from "./Components/search/Search";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>

    <div className="l">
      <Search />
    </div>
    </Provider>
  );
}

export default App;
