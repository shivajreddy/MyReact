import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Users = () => {
  const baseUrl = 'http://localhost:8080'
  const usersUrl = baseUrl + "/users"
  const [data, setData] = useState(null)
  
  const instance = axios.create({
      baseURL: baseUrl,
      auth: {
        username: 'user',
        password: 'pass',
      },
    },
  )
  
  // useEffect(() => {
  //   // instance.get('/demo').then(response => {
  //     instance.get('/users').then(response => {
  //     console.log('response = ', response)
  //     setData(response)
  //   })
  // }, [])
  
  
 // axios.get(
 //   baseUrl + '/demo',
 //   // usersUrl,
 //   // "users",
 //   {
 //     auth : {
 //       username: 'user',
 //       password: 'pass'
 //     },
 //     proxy : {
 //       protocol : 'http',
 //       host : 'localhost',
 //       port : 8080
 //     }
 //   }
 // )
 //  .then(res => console.log(res))

  fetch(baseUrl+"/demo", {
    headers : {
      "Content-Type" : "application/json"
    },
    method : "get"
  })
  .then( response => {
    console.log(response)
  })
  
  // console.log("data=", data)
  
  return (
    <div>
      <p>users</p>
    </div>
  )
}

export default Users
