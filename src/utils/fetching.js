import { useState, useCallback } from 'react'

export function postHeader(body = {}) {
  return {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }
}

export const useFetch = () => {
  const [response, setResponse] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const callFetch = useCallback(async (url, header) => {
    setLoading(true)
    setError(false)
    setResponse()
    try {
      const fetchResponse = await fetch(url, header)
      setResponse(fetchResponse)
    } catch (fetchError) {
      setError(fetchError)
    }
    setLoading(false)
  }, [])

  return {
    response,
    loading,
    error,
    callFetch
  }
}

export default useFetch
