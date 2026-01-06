import React from 'react';
import { NavLink } from 'react-router';
import { SlEnergy } from "react-icons/sl";
const Navbar = () => {
  const NavList = <>
    <NavLink>Home</NavLink>
    <NavLink>Explore</NavLink>
    <NavLink>Teach</NavLink>
  </>
    return (
        <div class="navbar backdrop-blur-md bg-white/20 border border-white/30 shadow-md sticky top-0">
          <div class="navbar-start">
            <div class="dropdown">
              <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabindex="-1"
                class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {NavList}
              </ul>
            </div>
            <a class="btn btn-ghost text-xl gap-2">
              <div className='bg-[#0D9488] text-white p-1 rounded-lg '>
                <SlEnergy />
              </div>
              SkillSwap
            </a>
          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1 gap-5">
              {NavList}
            </ul>
          </div>
          <div class="navbar-end gap-3">
            <a class="btn rounded-4xl">Log in</a>
            <a class="btn bg-[#0D9488]/90 rounded-4xl text-white">Sign Up</a>
          </div>
      </div>
    );
};

export default Navbar;