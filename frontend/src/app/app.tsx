// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="frontend" />
      <p>This is new content.</p>
    </div>
  );
}

export default App;
