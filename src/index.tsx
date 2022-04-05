import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {AuthProvider} from './Context/Auth';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(rootElement);

root.render(
    <AuthProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </AuthProvider>
);
