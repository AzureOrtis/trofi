# Trofi - Restaurant Leftover App

一个基于Next.js的餐厅剩余食物信息应用，使用Leaflet地图显示餐厅位置。

## 项目结构

```
trofi/
├── app/                          # Next.js App Router
│   ├── components/               # React组件
│   │   ├── MapView.tsx          # 地图视图组件
│   │   └── LeafletMap.tsx       # Leaflet地图包装器
│   ├── restaurant/               # 餐厅相关页面
│   │   └── [id]/                # 动态路由
│   │       └── page.tsx         # 餐厅详情页面
│   ├── globals.css              # 全局样式
│   ├── layout.tsx               # 根布局
│   └── page.tsx                 # 首页
├── public/                       # 静态资源
├── package.json                  # 项目依赖
├── next.config.ts               # Next.js配置
└── tsconfig.json                # TypeScript配置
```

## 功能特性

- 🗺️ 交互式地图显示餐厅位置
- 🏪 餐厅列表和详情页面
- 📱 响应式设计
- 🚀 基于Next.js 15的现代架构

## 安装和运行

### 1. 安装依赖
```bash
npm install
```

### 2. 环境变量设置
创建 `.env.local` 文件并添加你的MapTiler API密钥：
```bash
NEXT_PUBLIC_MAPTILER_KEY=your_maptiler_api_key_here
```

### 3. 启动开发服务器
```bash
npm run dev
```

应用将在 [http://localhost:3000](http://localhost:3000) 运行。

## 技术栈

- **框架**: Next.js 15
- **语言**: TypeScript
- **地图**: Leaflet + React-Leaflet
- **样式**: Tailwind CSS
- **路由**: Next.js App Router

## 迁移说明

此项目已从Vite + React Router迁移到Next.js App Router，主要变化：

- 使用Next.js的动态导入避免SSR问题
- 将React Router替换为Next.js内置路由
- 环境变量从`VITE_`前缀改为`NEXT_PUBLIC_`前缀
- 添加了Leaflet图标修复以解决Next.js兼容性问题

## 开发说明

- 地图组件使用`dynamic`导入以避免SSR问题
- 所有页面组件都标记为`'use client'`
- 使用Next.js的`useRouter`和`useParams`进行导航和参数获取
