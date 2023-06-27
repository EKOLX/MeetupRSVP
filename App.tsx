import "react-native-gesture-handler";
import { Provider } from "react-redux";

import Navigation from "./src/navigation";
import configureStore from "./src/store/configureStore";

export default function App() {
  return (
    <Provider store={configureStore()}>
      <Navigation />
    </Provider>
  );
}
