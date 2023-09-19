import React from 'react';
import ExitButton from './ExitButton/ExitBut';
import './StyleOfButtons.css'

const ListOfButtons = ()=>{
    let items: string[] =["Saved message","Look","Notification","Chat folders","Confidentiality","Language",];
    return <div >
    {items.map((item, index) => (
      <button className='ButtonList' key={index}><p className='NameOfBut'>{item}</p></button>
    ))}
    <p>Help</p>
    <button className='ButtonList'><p className='NameOfBut'>Quastions in Telintik</p></button>
    <button className='ButtonList'><p className='NameOfBut'>Ask a Quastions</p></button>
    <ExitButton></ExitButton>
  </div>
}
export default ListOfButtons;