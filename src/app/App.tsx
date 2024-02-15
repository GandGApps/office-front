import "@styles/global.css";
import { ErrorBoundary } from "./providers/ErrorBoundary";
import { ReduxProvider } from "./providers/Redux";
import { AppRouter } from "./routers/AppRouter";

function App() {
  return (
    <ErrorBoundary>
      <ReduxProvider>
        <AppRouter />
      </ReduxProvider>
    </ErrorBoundary>
  )
}

export default App
