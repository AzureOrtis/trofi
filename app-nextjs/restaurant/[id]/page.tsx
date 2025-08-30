'use client'

import dynamic from 'next/dynamic'

const RestaurantDetailComponent = dynamic(() => import('../../../src/pages/RestaurantDetail'), {
  ssr: false
})

export default function RestaurantDetailPage({ params }: { params: { id: string } }) {
  return <RestaurantDetailComponent />
}
