import React from "react";
import { Link } from "react-router-dom";
import './About.css';
import cuhcampus from './images/cuhcampus.jpeg';

function About(){
    return(
    
            
      
         
             <div className="main">
                 
                     <div className="part1">
                     About Us
                     
                     </div>
               <div className="part2"><img id="cuh"src={cuhcampus}/> </div>                    
                  <div className="part3">   <p>
                         CUH Reselling website is an initiative by 4 students of Btech, Computer science department.
                         This website makes it easy to connect students within the cuhcampus to buy , sell or exchange 
                         used goods and services.It is completely free and can be used from a laptop or mobile phone.
                         
                     </p>
                     <h4>How does it work?? </h4>
                     <p>This works like just another classified portal-It has parallel system for customers running 
                         side by side. People who wish to sell any goods can upload their advertisements just like one is expected.
                     </p></div>
                       
                     
                 </div>

             
         
         
        
    );

}

export default About;