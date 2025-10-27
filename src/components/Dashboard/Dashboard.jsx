import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/context/AuthContext'
import { useCallback } from 'react'
import { toast, ToastContainer } from 'react-toastify'

const Dashboard = () => {

  const navigator = useNavigate()
  const { logout } = useAuth()

  const out = useCallback(async () => {
    try {
      await logout()
      navigator('/', { replace: true })
      toast.success('Logged Out Successfully', { autoClose: 2000 })
    }
    catch (err) {
      toast.error(err.message)
    }

  }, [logout, navigator])


  return (
    <>
      <div className='text-4xl text-black font-extrabold h-screen flex justify-center items-center flex-col'>
        Wellcome to Dashboard
        <button className='bg-red-500 hover:bg-red-700 text-white py-2 px-6 rounded' onClick={out}>
          Log Out
        </button>
        
      </div>
      <ToastContainer />
    </>
  )
}

export default Dashboard
