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

const encodedBackgroundImg = encodeURIComponent(BackGroundImg);


export const Categorias = [
    {
        nombre:"FrontEnd",
        subTitulo:"Challenge React",
        descripcion:"Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.",
        img:Player,
        backGround:encodedBackgroundImg,
        color: "#6BD1FF",
        videos:[
        {
            titulo:"Aprendiendo a utilizar Figma",
            link:"",
            linkImg:sliderF2,
            categoria:"Frontend",
            descripcion:"",
            codigo:"",
        },
            {
            titulo:"Cuando usar let, var y const",
            link:"",
            linkImg:sliderF3,
            categoria:"Frontend",
            descripcion:"",
            codigo:"",
        },
        {
            titulo:"Que es JavaScript?",
            link:"",
            linkImg:sliderF4,
            categoria:"Frontend",
            descripcion:"",
            codigo:""
        },
        {
            titulo:"Equipo Frontend",
            link:"",
            linkImg:sliderF5,
            categoria:"Frontend",
            descripcion:"",
            codigo:"",
        },
        ],
    },
    {
        nombre:"BackEnd",
        subTitulo:"",
        descripcion:"Formacion Back End de Alura Latam",
        img:"",
        backGround:"",
        color: "#00C86F",
        videos:[{
                titulo:"Spring framework",
                link:"",
                linkImg:sliderB1,
                categoria:"BackEnd",
                descripcion:"",
                codigo:"",
                },
                {
                titulo:"Que es SQL y NOSQL",
                link:"",
                linkImg:sliderB2,
                categoria:"BackEnd",
                descripcion:"",
                codigo:"",
                },
                {
                titulo:"Simplificando codigo en JAVA",
                link:"",
                linkImg:sliderB3,
                categoria:"BackEnd",
                descripcion:"",
                codigo:"",
                },
                {
                titulo:"Tindev",
                link:"",
                linkImg:sliderB4,
                categoria:"BackEnd",
                descripcion:"",
                codigo:"",
                },
        ]
    },
    {
        nombre:"Innovacion y Gestion",
        subTitulo:"",
        descripcion:"Formacion de Innovacion y Gestion de Alura Latam",
        img:"",
        backGround:"",
        color: "#FF8C2A",
        videos:[
        {
            titulo:"Metodologias agiles",
            link:"",
            linkImg:sliderI1,
            categoria:"Innovacion y Gestion",
            descripcion:"",
            codigo:"",
        },
        {
            titulo:"Que son las soft skills?",
            link:"",
            linkImg:sliderI2,
            categoria:"Innovacion y Gestion",
            descripcion:"",
            codigo:"",
        },
        {
            titulo:"",
            link:"",
            linkImg:sliderI3,
            categoria:"Innovacion y Gestion",
            descripcion:"",
            codigo:"",
        },
        {
            titulo:"Que son las soft skills?",
            link:"",
            linkImg:sliderI4,
            categoria:"Innovacion y Gestion",
            descripcion:"",
            codigo:"",
        },        
    ]
    }
]