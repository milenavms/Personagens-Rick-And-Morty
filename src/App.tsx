import { CoinProvider } from "./representation/context/CoinContext"
import RoutesApp from "./representation/routes/RoutasApp"

function App() {

  return (
    <CoinProvider>
      <RoutesApp/>
    </CoinProvider>
  )
}

export default App
