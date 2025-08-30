'use client';

import React, { useEffect } from 'react';
import L from 'leaflet';

// 修复Leaflet图标问题
const fixLeafletIcons = () => {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  });
};

export default function LeafletMap({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    fixLeafletIcons();
  }, []);

  return <>{children}</>;
}
