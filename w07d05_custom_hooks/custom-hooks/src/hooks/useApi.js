import {useEffect, useState} from 'react';
import axios from 'axios';

const useApi = (url) => {
  const [result, setResult] = useState({
    data: {},
    loading: true,
    error: null
  })

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setResult({
          data: res.data,
          loading: false,
          error: null
        })
      })
      .catch(err => {
        setResult(prev => ({
          ...prev,
          loading: false,
          error: err.message
        }))
      })
  }, [url])

  return result;
}

export default useApi;