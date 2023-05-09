import React from "react";
import { Card, CardContent } from "@mui/joy";

import Navbar from "./Navbar";
import Header from "./Header";

function Layout({ title, children }) {
  return (
    <div>
      <Navbar />
      <div className='bg-gray-100 h-screen'>
        <div className='md:mx-16 mx-8'>
          <div className='pt-10 pb-4'>
            <Header pageName={title} />
          </div>
          <Card>
            <CardContent>{children}</CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Layout;
