import { useState, useEffect } from 'react';

const useLocation = () => {

  const [ coords, setCoords ] = useState({
    lat: 0,
    lng: 0,
    loading: true,
    error: null
  })

  useEffect(() => {
    const handleSuccess = (data) => {
      setCoords({
        lat: data.coords.latitude,
        lng: data.coords.longitude,
        loading: false, 
        error: null
      })
    }

    const handleError = (err) => {
      setCoords(prev => ({
        ...prev,
        error: true,
        loading: false
      }))

    }


    navigator.geolocation.getCurrentPosition(handleSuccess, handleError)

  }, [])


  return coords;

}

export default useLocation;