import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { registerMicroApps, start } from 'qiankun';
import 'antd/dist/antd.less';
import { BrowserRouter } from 'react-router-dom';

registerMicroApps([
    {
        name: 'vueApp',
        entry: '//localhost:8080',
        container: '#container',
        activeRule: '/app-vue',
    },
    {
        name: 'reactApp',
        entry: '//localhost:4000',
        container: '#container',
        activeRule: '/app-react',
    },
]);

// 启动
start();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
);

// reportWebVitals();

/** 
 * 因为后续会加上 react-router-dom， 所以此处后续要记得加上 BrowserRouter
 * <BrowserRouter>
 *  <App />
 * </BrowserRouter>
 */
