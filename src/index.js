// React 框架的核心包
// ReactDOM 专门做渲染的包

import React from 'react'; 
import ReactDOM from 'react-dom/client';
// 全局样式文件
import './index.css';
// 引入根组件
import App from './App';

// 渲染根组件
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);