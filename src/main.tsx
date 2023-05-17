import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// 正确的样式引入顺序：样式初始化一般放在最前面


// UI框架的样式
// ant的react ui 组件库无需做任何配置，只需下载模块包，在要使用的页面中导入组件即可

// 全局样式
import './index.scss'

// 组件的样式
import App from './App'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* 懒加载的模式，外面需要套一层loading的提示加载组件 */}
      <Suspense fallback={<h2>Loading...</h2>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)
