import { useState } from 'react';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx'
import BlueRayPNG from '../../assets/backgrounds/blue-ray.png'
import CartTab from '../cart/CartTab.jsx';
import ShoppingCart from '../cart/ShoppingCart.jsx';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Optional: stops auto-fetching when you switch tabs
    },
  },
});

const Layout = ({children, ...rest}) => {
  const [open, setOpen] = useState(false)
  return (
    <QueryClientProvider client={queryClient}>
    <div>
      <img className='absolute size-100 right-7 top-2 -z-10' src={BlueRayPNG} alt="blue-ray" /> 
      <Header />
      <CartTab setOpen={setOpen} />

        <div className='w-[90%] mx-auto my-5'>
          <main>{children}</main>
        </div>
      <ShoppingCart open={open} setOpen={setOpen} />
      <Footer />
    </div>
    </QueryClientProvider>
  );
};

export default Layout