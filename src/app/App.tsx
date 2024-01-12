import "@styles/global.css";
import { Main } from '../pages/Main'
import { ErrorBoundary } from "./providers/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary> 
      <Main />
    </ErrorBoundary>
  )
}

export default App
