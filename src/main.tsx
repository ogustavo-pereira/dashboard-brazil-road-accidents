// Packages
import { createRoot } from 'react-dom/client';

// Components
import App from './app';

import './index.css';

const container = document.getElementById('root');
//@ts-ignore
const root = createRoot(container);

root.render(<App />);