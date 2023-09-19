import { Button } from 'react-native';
import './StyleHeader.css';
import React from 'react';

const Header = ()=>{
    return <div className='header'>
            <button className='but' >but</button>
            <p className='tag'>Some Text</p>
            <p className='nameOfUser'>Some Text</p>
            <p className='phoneNumber'>Some Text</p>
     </div>
}

export default Header;