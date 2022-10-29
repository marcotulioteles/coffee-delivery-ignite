import { useEffect, useState } from "react"

export function useGeolocation() {
  const [location, setLocation] = useState({ 
    loaded: false,
    coordinates: {
      latitude: '', 
      longitude: '' 
    },
  })

  const onSuccess = (location: any) => {
    setLocation({
      loaded: true,
      coordinates: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      }
    })
  }
  
  const onError = (error: any) => {
    setLocation(state => (
      {
        ...state,
        loaded: true,
        error
      }
    ))
  }

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation not supported'
      })
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError)
  }, [])

  return location
}