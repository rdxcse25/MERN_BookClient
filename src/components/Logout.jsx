import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const {LogOut} = useContext(AuthContext);

    const location = useLocation();
	const navigate = useNavigate();

	const from = location.state?.from?.pathname || "/";

    const handleLogout = () => {
        LogOut().then(() => {
            alert("Sign-out successful");
            navigate(from,{replace:true});
        }).catch((error) => {

        })
    }
  return (
    <div className='h-screen bg-teal-100 flex flex-col items-center justify-center'>
        <div><p className="text-lg font-semibold text-gray-900 mb-4">Are you sure you want to logout?</p></div>
        <div><button className='bg-red-700 px-4 py-2 text-white rounded' onClick={handleLogout}>Logout</button></div>
    </div>
  )
}

export default Logout