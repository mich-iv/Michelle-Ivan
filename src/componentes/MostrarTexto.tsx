import {auth, provider, analytics, bd} from "../firebase/firebase";
import { getDocs, collection, doc } from "firebase/firestore";
import { useEffect, useState } from "react";

//funcion que conecta con base de datos y trae los datos 
// de la coleccion dependiendo del parametro que se le pase
export function MostrarTexto(){
    //obtenemos la ubicacion del url actual
    let ubicacion = window.location.pathname;
    console.log(ubicacion);

    let temporal: any[] = [];

    interface Datos {
        [key: string]: {
            texto: string;
        };
    }

    const [datos, setDatos] = useState<Datos>({});

    if(ubicacion === '/'){
        ubicacion = 'inicio';
    }

    useEffect (() => {
        async function docSnap(){
            const coleccion = collection(bd, ubicacion);

            //obtenemos los documentos de la colección 
            const response = await getDocs(coleccion);
            const docs = response.docs.map((doc) => {
                const data = doc.data();
                data.id = doc.id;
                return data;
            })
            return (docs);
        }

        docSnap().then(valor => {
            try {
                setDatos(valor);
            } catch (error) {
                console.error(error);
            }
        });
    }, []);

    function texto(){
        console.log(datos);
        
        return Object.keys(datos).map((key) => {
            return (
                <div key={key}>
                    <div className={`test1`}>{datos[key].texto}</div>
                </div>
            )
        });
    }

    return (
        <div>
            {texto()}
        </div>
    );
}

export default MostrarTexto;