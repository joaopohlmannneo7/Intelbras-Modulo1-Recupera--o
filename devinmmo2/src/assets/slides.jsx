import React, {useState} from "react";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import styled from "styled-components";
export function Slider({item}){
    const [current, setCurrent] = useState(0)
    const length = item.screenshots.length;

    const nextSlide = () =>{
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () =>{
        setCurrent( current === 0 ? length  - 1 : current - 1)
    }
        console.log(current)
    if( item.screenshots <= 0){
        return null
    }
    return(
        <Box>
               <section className="slider">

            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
             {item.screenshots.map((slide, index)=>{

        
        return(

         <div className={index === current ? 'slide active' : 'slide'} >
            {index === current && (
                 <img  src={slide.image} title={slide.id} alt='images' className="image"/>
            )}
            
 
         </div>
         
        )})} 
        </section>
        </Box>
     
    )
}


export const Box = styled.div`

position: relative;
top: -220px;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

.image{
    display: flex;
 width: 1600px;
 height: 700px;
 border-radius: 10px;
}
.right-arrow{
    position: absolute;
    top: 50%;
    right: 10px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor:pointer;
    user-select: none;
}
.left-arrow{
    position: absolute;
    top: 50%;
    left: 10px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor:pointer;
    user-select: none;
}
.slide{
    opacity: 0;
    transition-duration: 1s ease ;
}
.slide.active{
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
}
`