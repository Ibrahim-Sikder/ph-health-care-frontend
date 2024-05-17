import Footer from '@/components/Shared/Footer/Footer';
import Header from '@/components/Shared/Header/Header';
import React, { ReactNode } from 'react';

const layout = ({children}:{children:ReactNode}) => {
    return (
        <>
            <Header/>
          <div className="min-h-screen">
          {children} 
          </div>
           <Footer/>
        </>
    );
};

export default layout;