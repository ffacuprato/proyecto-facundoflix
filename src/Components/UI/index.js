import { styled } from "styled-components";
import LogoAlura from "../../assets/images/logo.png"
import { useNavigate } from "react-router-dom";

export const Icono = styled.img`
    height: 25px;
    width: 25px;
`

export const Buton = styled.button`
background-image: ${LogoAlura};
width:3rem;
height: 2rem;
`

export const HomeButtonAlura = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/proyecto-facundoflix');
  }
  return <div>
    <Buton onClick={handleClick}></Buton>
  </div>
}

export const IconoTema = styled(Icono)`
  filter: ${({theme}) => theme.filter};
`

export const BtnTema = styled.div`
  position: absolute;
  top: 4vh;
  right: 20px;
  background-color: inherit;
  border: none;
  cursor: pointer;
`

 export const Title = styled.h1`
  color: var(----color-gray-light, #F5F5F5);
  text-align: center;
  font-family: Roboto;
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`

export const BtnGuardar = styled.button`
  width: 11.25rem;
  height: 3.375rem;
  display: flex;
  width: 11.25rem;
  height: 3.375rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: #2A7AE4;

  color: #FFF;
  text-align: center;
  font-family: "Roboto";
  font-size: 1.3125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 114.286% */
  border-radius: 5px;
  border: none;
`


export const BtnLimpiar = styled.button`
  display: flex;
  width: 11.25rem;
  height: 3.375rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: "Roboto";
  font-size: 1.3125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 114.286% */
  background-color: #9E9E9E;
  border-radius: 5px;
  border: none;
`

export const BtnNuevaCategoria = styled.button`
  width: 15.875rem;
  height: 3.375rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFF;
  background-color: #2A7AE4;
  vertical-align: center;
  font-family: 'Roboto';
  font-size: 1.3125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 114.286% */
  border-radius: 5px;
  border: none;
`

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 2;
  padding: 2rem 3rem;
  background-color: #000000E5;
`

export const BotonesVideoForm = ({ onButtonClick }) => {
  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 25px 12px 8px;
    margin-top: 1.5rem;
  `
  const BotonesIzq = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  `
  const navigate =useNavigate();

  const handleClick = () => {
     navigate('/nueva-categoria');
  }
  
  return <Container>
    <BotonesIzq>
    <BtnGuardar type="submit">Guardar</BtnGuardar>
    <BtnLimpiar type="button" onClick={() => onButtonClick("BtnLimpiar")}>Limpiar</BtnLimpiar>
    </ BotonesIzq>
    <div>
      <BtnNuevaCategoria onClick={handleClick}>Nueva Categoria</BtnNuevaCategoria>
\    </div>
  </Container>
}

export const BotonesCategoriaForm = ({ onButtonClick }) => {
  
  
  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 25px 12px 8px;
    margin-top: 1.5rem;
  `
  const BotonesIzq = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  `

  return <Container>
          <BotonesIzq>
            <BtnGuardar type="submit">Guardar</BtnGuardar>
            <BtnLimpiar type="button" onClick={() => onButtonClick("BtnLimpiar")}>Limpiar</BtnLimpiar>
          </ BotonesIzq>
        </Container>
}

export const BtnEditar = () => {
  const Btn = styled.button`
   flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFF;
  background-color: #2A7AE4;
  vertical-align: center;
  font-family: 'Roboto';
  font-size: 1.3125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 114.286% */
  border-radius: 5px;
  border: none;
`
return <Btn>Editar</Btn>

}

export const BtnRemove = () => {

  const Btn = styled.button`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  background-color: #9E9E9E;
  vertical-align: center;
  font-family: 'Roboto';
  font-size: 1.3125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 114.286% */
  border-radius: 5px;
  border: none;
`
return <Btn>Remover</Btn>
}

export const BtnNuevoElemento = (props) =>{
  const handleClick = () =>{
    props.onClick()
  }
  return <BtnGuardar onClick={handleClick}>Nuevo elemento</BtnGuardar>
}