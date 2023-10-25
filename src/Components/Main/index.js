import React,{useRef,useEffect,useState} from "react";
import styled from "styled-components";
import { Categorias } from "../UI/Categorias";
import { calcLength, motion } from "framer-motion";
import "../Main/Main.css"

export const Main = () => {

  const NoHayVideos = () => {
    const Container = styled.div`
    background-color: #000;
    width: 100%;
    `
    const Texto = styled.h1`
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
  `
  return <Container><Texto>Aun no hay videos disponibles</Texto></Container>
  }

    const Equipo = Categorias.map((Categoria) => {

        const Title = styled.h1`
        display: flex;
        width: fit-content;
        background-color:${Categoria.color};
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


        const Player = Categoria.img === '' ? Vacio : styled.div`
        width: 40.375rem;
        height: 20.84888rem;
        flex-shrink: 0;
        border-radius: 0.25rem;
        border: 4px solid var(----color-frontend, #6BD1FF);
        background: url(${Categoria.img}), lightgray 50% / cover no-repeat;
    `
        const Container = styled.section`
        display: flex;
        flex-direction: row;
        background-color: #000000;
        background-image: url(${Categoria.backGround});
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

    const RenderedContainer = Categoria.img === '' ? SmallContainer : Container;

const Images = Categoria.videos.map((video,videoIndex) => {
  
    const image = video.linkImg;

    return <motion.div className="item" key={videoIndex}>
      <img
        src={image}
        alt=""
        style={{
          border: `4px solid ${Categoria.color}`,
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
                const containerWidth = 240 * Categoria.videos.length; // Cambia "240" al ancho real de tus elementos.
                setSliderWidth(containerWidth);
              }, [Categoria.videos.linkImg]);
            

            return <motion.div className="slider-container" ref={sliderConstainerRef}>
                    <motion.div className="slider" drag="x" dragConstraints={{right: 0,left: -sliderWidth }}>
                        {Images}
                    </motion.div>
            </motion.div>
                
          }

          const CarreteVideos = Categoria.videos.length === 0 ? NoHayVideos : Slider;
  
        return <>
            <RenderedContainer>
                <div>
                <Title>{Categoria.nombre}</Title>
                <SubTitle>{Categoria.subTitulo}</SubTitle>
                <Texto>{Categoria.descripcion}</Texto>
                </div>
                <Player />
              </RenderedContainer>
            <CarreteVideos />
        </>
    });

    if (Categorias.length > 0) {
      return Equipo;
    }else{
      return NoHayVideos();
    }
}


