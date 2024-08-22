import { useState, useEffect } from "react";


const Contador = () => {

    const [contador, setContador] = useState(0);
    //const [showAlert, setShowAlert] = useState(0);

    const handleContador1 = () => {
        setContador(contador + 1);
    };

    const handleContador2 = () => {
        setContador(contador - 1);
    };

    // Esta funcon especial se ejecuta el componenete se haya montado
    useEffect(() => {
        setContador(12);
    }, []);

    // Esta funcon especial se ejecuta el componenete se haya cambiado el valor de contador
    useEffect(() => {
        if (contador === 15) {
            alert("El contador ha llegado a 15");
        }
    }, [contador]);
    //}, [contador, showAlert]);

    // esta funcion especialse ejecuta cuando el componente se desmonta
    useEffect(() => {
        return() => {
            console.log("El componente se ha desmontado");
        }
    });

    return (
        <>
            <h1>Componente Contador </h1>
            <h5>{contador}</h5>
            <div>
                <button onClick={handleContador1}>Aumentar</button>
                <button onClick={handleContador2}>Disminuir</button>
            </div>
        </>
    );
};

export default Contador;