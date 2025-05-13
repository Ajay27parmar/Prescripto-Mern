import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Navbar=()=> {
      const navigate=useNavigate();
      const {token,setToken,userData}=useContext(AppContext)
      const[showMenu,setShowMenu]=useState(false)
      //const [token,setToken]=useState(true)               useless after backend
      const logout =()=>{
            setToken(false)
            localStorage.removeItem('token')
      }

      return (
      <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
            <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt=""/>
            <ul className='hidden md:flex items-start gap-5 font-medium'> 
                              <li className='py-1'>
                                                <NavLink to="/" className="block">
                                                                  HOME
                                                                  <hr className='border-none outline-none h-0.5 bg-[var(--primary-color)] w-3/5 m-auto hidden'/>
                                                </NavLink>
                              </li>
                              <li className='py-1'>
                                                <NavLink to="/doctors" className="block">
                                                                  ALL DOCTORS
                                                                  <hr className='border-none outline-none h-0.5 bg-[var(--primary-color)] w-3/5 m-auto hidden'/>
                                                </NavLink>
                              </li>
                              <li className='py-1'>
                                                <NavLink to="/about" className="block">
                                                                  ABOUT
                                                                  <hr className='border-none outline-none h-0.5 bg-[var(--primary-color)] w-3/5 m-auto hidden'/>
                                                </NavLink>
                              </li>
                              <li className='py-1'>
                                                <NavLink to="/contact" className="block">
                                                                  CONTACT
                                                                  <hr className='border-none outline-none h-0.5 bg-[var(--primary-color)] w-3/5 m-auto hidden'/>
                                                </NavLink>
                              </li>
                              
            </ul>
            <div className='flex items-center gap-5'>
                  {                
                   token && userData
                  ?<div 
                        className='flex items-center gap-2 cursor-pointer relative'
                        onMouseEnter={() => setShowMenu(true)}
                        onMouseLeave={() => setShowMenu(false)}
                  >
                        <img className='w-8 rounded-full' src={userData.image} alt="" />
                        <img src={assets.dropdown_icon} alt=""/>
                        {showMenu && (
                              <div className='absolute top-10 right-0 text-base font-medium text-gray-600 z-20 flex flex-col'>
                                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                         <p onClick={()=>navigate('/my-profile')}    className='hover:text-black cursor-pointer'>My Profile</p>
                                         <p onClick={()=>navigate('/my-appointments')}  className='hover:text-black cursor-pointer'>My Appointments</p>
                                         <p onClick={logout}  className='hover:text-black cursor-pointer'>Logout</p>
                                    </div>
                              </div>
                        )}
                  </div>
                  :<button  
                  onClick={()=>navigate('/login')}
                  className='bg-[var(--primary-color)] text-white px-8 py-3 rounded-full font-light cursor-pointer'>Create Account</button>
                  }
                  <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
                  {/* ----- Mobille menu -------- */}
                  <div className={`${showMenu? 'fixed w-full':'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transitio-all `}>
                        <div className='flex items-center justify-between px-5 py-6'>
                              <img className='w-36' src={assets.logo} alt="" />
                              <img className='w-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
                        </div>
                        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                              <NavLink  onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded full inline-block'>HOME</p> </NavLink>
                              <NavLink  onClick={()=>setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded full inline-block'>ALL DOCTORS</p></NavLink>
                              <NavLink  onClick={()=>setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded full inline-block'>ABOUT</p></NavLink>
                              <NavLink  onClick={()=>setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded full inline-block'>CONTACT</p></NavLink>
                        </ul>
                  </div>
                  </div>
                              
            </div>
)
}

export default Navbar
