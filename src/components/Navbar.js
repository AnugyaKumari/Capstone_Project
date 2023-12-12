import React from 'react'
import {Link, Outlet} from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux'
import { logoutUser } from '../redux/userSlice';

const Navbar = () => {
  const { cart } = useSelector(app => app.cart);
  const user = useSelector(app=> app.user);
  const dispatch  = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  }
  return (
    <div>
      {/* <h1 className='text-font color-blue'>My Capstone Assignment</h1> */}
      {/* <div className="main-div"> */}
        <div className="flex m-2  justify-between p-8">
            <img className="logos"  width={70} src="https://th.bing.com/th/id/OIP.V3k4wm5U44DQ2DkYhhpcCAHaEK?pid=ImgDet&rs=1" />
        
            {
              user.loggedIn && <ul style={{listStyle: "none", display:"flex", justifyContent: "space-around"}} className='basis-1/3'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/product'>Product</Link></li>
              <li><Link to='/employee'>Employee</Link></li>
              <li><Link to='/cart'>🛒 ({cart.length})</Link></li>
              <li onClick={handleLogout}>Log out</li>
      </ul>
            }
        </div>
    {/* </div> */}
    <Outlet />
    </div>
  )
}

export default Navbar
