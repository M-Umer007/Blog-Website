import React from 'react';
import itemss from './featured';


export default function Featuredcmp(){
  
    // let fullObject=itemss.map((value)=>{ return value })
   
   
    const renderingthing =  itemss.map((items)=>(
       
       <li key={items.id}>
        <div>
            {items.image}
        </div>
        <div>
            {items.description}
        </div>

        </li>
        ))
       
        

    return (
   <div>
    <ul>
        {renderingthing}
    </ul>
   </div>
  )
}
