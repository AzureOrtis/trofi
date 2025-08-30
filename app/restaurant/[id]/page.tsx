'use client';

import React from "react";
import { useParams } from "next/navigation";

export default function RestaurantDetail() {
  const params = useParams();
  const id = params.id;

  return (
    <div>
      <h1>Restaurant Detail Page</h1>
      <p>Restaurant ID: {id}</p>
      <p>here will be the list of restaurant and leftover information</p>
    </div>
  );
}
