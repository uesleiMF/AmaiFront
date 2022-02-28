import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import React from "react";
import { Container } from "./styles";
import ue from "../../components/Img/img.jpeg";
import {
    SiLinkedin,
    SiReact,
    SiPrisma,
    SiBootstrap,
    SiSwagger,
  } from "react-icons/si";
  import { AiFillGithub } from "react-icons/ai";
  import { IoLogoJavascript } from "react-icons/io";
  import { FaCss3Alt } from "react-icons/fa";
  import { Cards, Social } from "./styles";
  import "bootstrap/dist/css/bootstrap.min.css";
  


export default function Home() {
  return (
    
      <Container>
                         
              <h2 className="mx-3 my-3 text-center"> REDE DE CASAIS</h2>
                 
    <Carousel autoPlay>
        <div>
            <img src={ue} alt="bo" width="75%" height="200px" />

            <p className="l">LegendA 1 </p>
        </div>
        <div>
        <img src={ue} alt="bo" width="75%" height="200px" />
       <p className="l">Legend 2</p>
        </div>
        <div>
        <img src={ue} alt="bo" width="75%" height="200px" />
    <p className="l">Legend 3</p>
        </div>
        <div>
        <img src={ue} alt="bo" width="75%" height="200px" />
    <p className="l">Legend 4</p>
        </div>
        <div>
        <img src={ue} alt="bo" width="75%" height="200px" />
   <p className="l">Legend 5</p>
        </div>
        <div>
        <img src={ue} alt="bo" width="75%" height="200px" />
      <p className="l">Legend 6</p>
        </div>
        <div>
        <img src={ue} alt="bo" width="75%" height="200px" />
  <p className="l">Legend 7</p>
        </div>
        <div>
        <img src={ue} alt="bo" width="75%" height="200px" />
  <p className="l">Legend 8</p>
        </div>
        <div>
        <img src={ue} alt="bo" width="75%" height="200px" />
    <p className="l">Legend 9</p>
        </div>
        <div>
        <img src={ue} alt="bo" width="75%" height="200px" />
      <p className="l">Legend 10</p>
        </div>
                
    </Carousel>
  




             
        <h2 className="mx-3 my-3 text-center"> ENCONTREM AS CELULAS MAIS PROXIMAS DE VOÇÊS!</h2>
                  <br></br>
                
    <Social>
    <p><a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
            <img src={ue} alt="bo" width="40%" height="200px" />
              </a>
            <h7>Swagger</h7></p>


            <p><a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
            <img src={ue} alt="bo" width="40%" height="200px" />
              </a>
                
            <h7>Prisma</h7></p>

            <p><a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
            <img src={ue} alt="bo" width="40%" height="200px" />
              </a>
            <h7>Swagger</h7></p>


            <p><a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
            <img src={ue} alt="bo" width="40%" height="200px" />
              </a>
                
            <h7>Prisma</h7></p>

            <p><a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
            <img src={ue} alt="bo" width="40%" height="200px" />
              </a>
            <h7>Swagger</h7></p>


            <p><a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
            <img src={ue} alt="bo" width="40%" height="200px" />
              </a>
                
            <h7>Prisma</h7></p>
          </Social>
          
          </Container>
    
    
    
  );
}

