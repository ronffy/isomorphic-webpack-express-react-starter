import React from 'react';
import { renderToString } from 'react-dom/server';
import { App } from './src/App';

// 导出渲染函数，供 HTTP 服务器代码调用
export function render() {
  // 把根组件渲染成 HTML 字符串
  return renderToString(<App />)
}
