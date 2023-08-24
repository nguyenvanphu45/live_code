import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './components/GlobalStyles';
import DataProvider from './redux/store';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ConfigProvider>
            <GlobalStyles>
                <DataProvider>
                    <App />
                </DataProvider>
            </GlobalStyles>
        </ConfigProvider>
    </React.StrictMode>,
);
