import { AppCtxProvider } from './AppCtx';
import { ClientInput } from './ClientInput';
import { TokenGenerator } from './TokenGenerator';
import { ActionButton } from './ActionButton';
import { Header } from './Header';
import { Warning } from './Warning';
import { Logs } from './Logs';

function App() {
  return (
    <div className="App">
      <Header />
      <Warning />
      <AppCtxProvider>
        <ClientInput />
        <TokenGenerator />
        <ActionButton />
        <Logs />
      </AppCtxProvider>
    </div>
  );
}

export default App;
