import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Categories from './categories/Categories'
import PricingList from './pricing/PricingList'
const Header = () => {
  return (
    <div>
        <Navbar />
        <Categories />
    </div>
  )
}

export default Header