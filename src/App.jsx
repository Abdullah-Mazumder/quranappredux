import HolyQuran from "./components/HolyQuran";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <div className="application">
      <Provider store={store}>
        <HolyQuran />
      </Provider>
    </div>
  );
}

export default App;
