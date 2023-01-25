import axios from 'axios'
import { useEffect, useState } from 'react'

function GetAllUsers () {
  
  const [data, setData] = useState(null)
  
  useEffect(() => {
    return () => {
      axios.get('http://localhost:8080/demo').
        then(response => setData(response.data))
    }
  }, [])
  
  const baseUrl = 'http://localhost:8080'
  
  axios.get(baseUrl).then(
    response => console.log(response),
  )
  
  return [data, setData]
  
}

export default GetAllUsers
