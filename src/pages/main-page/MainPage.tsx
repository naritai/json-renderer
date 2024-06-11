import { useEffect, useState } from 'react'
import { JSONListRenderer } from './json-renderer/JSONListRenderer'

export const MainPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    let loading = false

    async function loadJSON() {
      if (loading) {
        return
      }
      try {
        loading = true
        const data = await fetch('http://localhost:5173/fakejson')
        const parsed = await data.json()
        setData(parsed)
      } catch (err) {
        console.log(err)
      }
    }

    loadJSON()

    return () => {
      loading = false
    }
  }, [])

  return <JSONListRenderer data={data} />
}
