import React from "react";
import sliderF1 from "../../assets/images/slider1.png";
import sliderF2 from "../../assets/images/slider2.jpeg";
import sliderF3 from "../../assets/images/slider3.jpeg";
import sliderF4 from "../../assets/images/slider4.jpeg";
import sliderF5 from "../../assets/images/slider5.jpeg";
import sliderB1 from "../../assets/images/sliderB.jpeg";
import sliderB2 from "../../assets/images/sliderB2.jpeg";
import sliderB3 from "../../assets/images/sliderB3.jpeg";
import sliderB4 from "../../assets/images/sliderB5.png";
import sliderI1 from "../../assets/images/sliderIyG.jpeg"
import sliderI2 from "../../assets/images/sliderIyG2.jpeg";
import sliderI3 from "../../assets/images/sliderIyG3.jpeg";
import sliderI4 from "../../assets/images/sliderIyG4.jpeg";
import Player from "../../assets/images/player.png";
import BackGroundImg from "../../assets/images/Group1.png";
import BackGroundColor from "../../assets/images/background.png";


const encodedBackgroundImg = encodeURIComponent(BackGroundImg);


export const Categorias = [
    {
        Titulo:"FrontEnd",
        SubTitulo:"Challenge React",
        Descripcion:"Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.",
        Img:Player,
        BackGround:encodedBackgroundImg,
        Color: "#6BD1FF",
        Imagenes:[sliderF2,sliderF3,sliderF4,sliderF5]
    },
    {
        Titulo:"BackEnd",
        SubTitulo:"",
        Descripcion:"Formacion Back End de Alura Latam",
        Img:" ",
        BackGround:" ",
        Color: "#00C86F",
        Imagenes:[sliderB1,sliderB2,sliderB3,sliderB4]
    },
    {
        Titulo:"Innovacion y Gestion",
        SubTitulo:"",
        Descripcion:"Formacion de Innovacion y Gestion de Alura Latam",
        Img:" ",
        BackGround:" ",
        Color: "#FF8C2A",
        Imagenes:[sliderI1,sliderI2,sliderI3,sliderI4]
    }
]