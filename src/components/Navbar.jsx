import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Avatar, Button } from "@mui/joy";
import _ from "lodash";

import { PrivateRoute } from "../context/PrivateRoute";

function Navbar() {
  const { me } = useContext(PrivateRoute);

  const handleLogout = () => {
    window.localStorage.removeItem("warehouse_remember");
    window.localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div>
      <nav className='bg-white border-gray-200 dark:bg-gray-900'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between  p-4'>
          <Link to='/' className='flex items-center'>
            <img
              src='https://flowbite.com/docs/images/logo.svg'
              className='h-8 mr-3'
              alt='Flowbite Logo'
            />
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              11 Wongjorn
            </span>
          </Link>
          {me && (
            <div className='flex gap-2'>
              <Avatar>
                {_.first(me?.userData?.firstname)}
                {_.first(me?.userData?.lastname)}
              </Avatar>
              <div className='self-center'>
                {me?.userData?.firstname} {me?.userData?.lastname}
              </div>
              <div className='self-center'>
                <Button size='sm' color='neutral' onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
