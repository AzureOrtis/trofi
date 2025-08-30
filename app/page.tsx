'use client';

import dynamic from 'next/dynamic';

// 动态导入MapView组件以避免SSR问题
const MapView = dynamic(() => import('./components/MapView'), {
  ssr: false,
  loading: () => <div>Loading map...</div>
});

export default function Home() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapView />
    </div>
  );
}
