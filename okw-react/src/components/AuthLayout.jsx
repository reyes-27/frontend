import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { AuthProvider } from '../context/AuthContext.jsx';

const AuthLayout = ({children}) => {
  return (
    <>
      <AuthProvider>
        <Header />
        <main>{children}</main>
        <Footer />
      </AuthProvider>
    </>
  );
};

export default AuthLayout