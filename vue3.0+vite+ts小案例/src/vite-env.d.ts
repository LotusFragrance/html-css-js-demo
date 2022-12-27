/// <reference types="vite/client" />
// 未定义 .vue文件 的类型， 导致 ts 无法解析其类型
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const vueComponent: DefineComponent<{}, {}, any>
    export default vueComponent
  }