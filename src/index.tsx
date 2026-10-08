import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Nie znaleziono elementu o id 'root' w pliku index.html");
}

const root = createRoot(rootElement);

root.render(<App/>);