import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";
import TodoContextProvider from "./contexts/TodoContext";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <TodoContextProvider>
            <Todos />
          </TodoContextProvider>
        </AuthContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
};

export default App;
