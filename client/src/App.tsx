import "./App.css";
import { FluentProvider, webDarkTheme } from "@fluentui/react-components";
import { Header } from "./components/Header/Header";
import { View } from "./components/View/View";

function App() {
  return (
    <FluentProvider theme={webDarkTheme}>
      <Header />
      <View />
    </FluentProvider>
  );
}

export default App;
