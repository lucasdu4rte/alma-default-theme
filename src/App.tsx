import "./App.css";
import { Heading, useThemeContext } from "@dasa-health/alma-react";
import { Colors } from "./components/Colors";

function App() {
  const { theme } = useThemeContext();
  return (
    <div className="App">
      <Heading
        sx={{
          marginBottom: theme.space.stack.xxs,
        }}
      >
        NavTokens / Default Theme
      </Heading>
      <Colors />
    </div>
  );
}

export default App;
