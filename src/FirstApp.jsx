const newMessage = () => {
    return {
    name: 'Hector',
    age: 27,
    sex: 'male',
    }
};

export function FirstAPP( props ){
    console.log(props) 
    return (
    <>
    <h1>{ JSON.stringify(newMessage()) }</h1>
    <p>Soy un subtitulo</p>
    </>
    )
}

/*Esto es una forma de poner la propiedad Fragmento (<> </>) */ 

