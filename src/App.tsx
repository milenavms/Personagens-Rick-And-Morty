import { ThemeProvider } from "./representation/context/ThemeContext"
import RoutesApp from "./representation/routes/RoutasApp"

function App() {

  return (
    <ThemeProvider>
      <RoutesApp/>
    </ThemeProvider>
  )
}

export default App
