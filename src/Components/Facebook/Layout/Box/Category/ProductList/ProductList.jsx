import React from 'react'

export default function ProductList({item}) {
    const [selected, setSelected]= React.useState('red')
    function onchange(id){
        setSelected(id)
    }
    
    return (
        <div>
            {item.products.map((list) => 
             <ul key={list.id}>
                 <li style={{color: selected === list.id ? "red":'', cursor: 'pointer' }} onClick={()=> onchange(list.id)}>
                    {list.name} {list.price}</li>
                 
             </ul>
            )}
            
        </div>
    )
}
