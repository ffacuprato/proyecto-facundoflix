import React,{useRef,useEffect,useState} from "react";
import styled from "styled-components";
import { Categorias } from "../UI/Categorias";
import { calcLength, motion } from "framer-motion";
import "../Main/Main.css"

export const Main = () => {

    const Equipo = Categorias.map((Categoria) => {

        const Title = styled.h1`
        display: flex;
        width: fit-content;
        background-color:${Categoria.Color};
        border-radius: 4px;
        color: #F5F5F5;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;
        text-align: center;
        /* @title-big */
        font-size: 3.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    `

        const SubTitle = styled.h2`
        color: var(----color-gray-light, #F5F5F5);
        /* @title-medium */
        font-size: 2.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        `

        const Texto = styled.p`
        /* @body-medium */
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        color: #F5F5F5;
        `
        const Vacio = () => {
            return <> </>
        }

        const Player = Categoria.Img === " " ? Vacio : styled.div`
        width: 40.375rem;
        height: 20.84888rem;
        flex-shrink: 0;
        border-radius: 0.25rem;
        border: 4px solid var(----color-frontend, #6BD1FF);
        background: url(${Categoria.Img}), lightgray 50% / cover no-repeat;
    `
        const Container = styled.section`
        display: flex;
        flex-direction: row;
        background-color: #000000;
        background-image: url(${Categoria.BackGround});
        background-repeat: no-repeat;
        background-size: cover;
        padding: 18.5rem 2rem 1rem 2rem;
        gap: 2rem;
    `;

        const SmallContainer = styled.section`
        display: flex;
        flex-direction: row;
        background-color: #000000;
        padding: 1rem 2rem;

        gap: 2rem;
    `;

    const RenderedContainer = Categoria.BackGround === " " ? SmallContainer : Container;

const Images = Categoria.Videos.map((video,videoIndex) => {
    const image = video.LinkImg;

    return <motion.div className="item" key={videoIndex}>
      <img
        src={image}
        alt=""
        style={{
          border: `4px solid ${Categoria.Color}`,
          borderRadius:`0.25remd`
          // Agrega otros estilos CSS según sea necesario
        }}
      />
    </motion.div>
    });
  
          const Slider = () => {

            const sliderConstainerRef = useRef(null);
            const[sliderWidth,setSliderWidth]=useState(0);
            useEffect(() => {
                // Calcula el ancho del slider en función de la cantidad de imágenes
                const containerWidth = 240 * Categoria.Videos.length; // Cambia "240" al ancho real de tus elementos.
                setSliderWidth(containerWidth);
              }, [Categoria.Videos.LinkImg]);
            

            return <motion.div className="slider-container" ref={sliderConstainerRef}>
                    <motion.div className="slider" drag="x" dragConstraints={{right: 0,left: -sliderWidth }}>
                        {Images}
                    </motion.div>
            </motion.div>
                
          }

  
        return <>
            <RenderedContainer>
                <div>
                <Title>{Categoria.Titulo}</Title>
                <SubTitle>{Categoria.SubTitulo}</SubTitle>
                <Texto>{Categoria.Descripcion}</Texto>
                </div>
                <Player />
              </RenderedContainer>
            <Slider />
        </>
    });

    return Equipo
}


