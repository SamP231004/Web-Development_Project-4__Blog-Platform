import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import "./CSS/Style.css"
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [dispatch])

  return loading ? (
    <div className="loading">
      Loading...
    </div>
  ) : (
    <div>
      <Header />
      {/* <main> */}
        <Outlet />
      {/* </main> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App
