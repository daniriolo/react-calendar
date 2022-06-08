import React from 'react'
import { auth } from './firebase';
import Calendar from './components/Calendar'

export default function Home() {

  // Signout function
  const logout = () => {
    auth.signOut();
  }
  return (
    <div> 
      <div>
    Welcome

    {
      auth.currentUser.email
    }
    <button style={{ "marginLeft": "20px" }}
      onClick={logout}>
      Logout
    </button>
  </div>
  <Calendar/>
  </div>
  )
}
