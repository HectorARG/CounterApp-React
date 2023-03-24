import PropTypes from 'prop-types';

const newMessage = () => {
    return {
    name: 'Hector',
    age: 27,
    sex: 'male',
    }
};

export const FirstAPP = ({ title }) => {
    return (
    <>
    <h1>Hector Adrian Roman Garcia</h1>
    <h4>Developer Web</h4>
    <p> { title } </p>
    <h1>{ JSON.stringify(newMessage()) }</h1>
    <p>Soy un subtitulo</p>
    </>
    )
}

FirstAPP.propTypes = {
    title: PropTypes.string.isRequired
}

/*Esto es una forma de poner la propiedad Fragmento (<> </>) */ 

