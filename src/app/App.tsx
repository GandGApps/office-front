import "@styles/global.css";
import { Main } from '../pages/Main'
import { ErrorBoundary } from "./providers/ErrorBoundary";
import { ReduxProvider } from "./providers/Redux";

function App() {
  return (
    <ErrorBoundary>
      <ReduxProvider>
        <Main />
      </ReduxProvider>
    </ErrorBoundary>
  )
}

export default App
