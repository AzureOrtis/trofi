'use client'

import dynamic from 'next/dynamic'

// Dynamically import the map component to avoid SSR issues
const MapComponent = dynamic(() => import('../src/pages/Home'), {
  ssr: false,
  loading: () => <div>Loading map...</div>
})

export default function HomePage() {
  return <MapComponent />
}
