import React, { useRef } from 'react'

const ScroolImg = () => {
    const listRef = useRef(null)
    console.log(listRef)
    

    function scroolToIndex(index){
        console.log(index)

        const listNode = listRef.current;
        console.log(listNode);
        

        const imgNode = listNode.querySelectorAll('li > img')[index]
        console.log(imgNode);
        imgNode.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
          });

    }
    
    return (
        <>
            <nav>
           <button onClick={() => scroolToIndex(0)}>TOM</button> 
           <button onClick={() => scroolToIndex(1)}>JERRY</button> 
           <button onClick={() => scroolToIndex(2)}>TOM&JERRY</button> 
           </nav>

           <div>
            <ul ref={listRef}>
                
                <li>
                    <img src="https://placekitten.com/g/200/200" alt="" />
                </li>
                <li>
                    <img src="https://placekitten.com/g/250/200" alt="" />
                </li>
                <li>
                    <img src="https://placekitten.com/g/300/200" alt="" />
                </li>
            </ul>
           </div>
        </>
    )
}

export default ScroolImg
