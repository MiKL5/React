import React from 'react'
import { useParams } from 'react-router-dom'

export default function Profile() {
  const params = useParams();
  return (
    <div>
      <h1>Welcome to ur profile {params.id}</h1>
    </div>
  )
}
