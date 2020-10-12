import React, { useEffect } from 'react'
import { Auth } from 'aws-amplify'

const protectedRoute = (Comp, route = '/profile') => (props) => {
  async function checkAuthState() {
    try {
      await Auth.currentAuthenticatedUser()
    } catch (err) {
      props.history.push(route)
    }
  }
  useEffect(() => {
    checkAuthState()
    /*eslint-disable*/
  }, [])
  return <Comp {...props} />
}

export default protectedRoute