import { useEffect } from "react";

export default () => {

    /**
     *  O useEffect vai servi para verificar do localstorage se tem alguma configuração
     *  de tema de cores de algum usuario.
     */

    useEffect( () => {

    }, []);

    return {
        colors: {
            text : 'white',
            background: 'gray',
            header: '#ccc',
            menu: '#f9f9f9'
        }
    }
}