import {bd} from "../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

//funcion que conecta con base de datos y trae los datos 
// de la coleccion dependiendo del parametro que se le pase

export function MostrarTexto(){
    //obtenemos la ubicacion del url actual
    let ubicacion = window.location.pathname;
    console.log(ubicacion);

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
                const datosObj: Datos = valor.reduce((acc, doc) => {
                    if (doc.texto) {
                        acc[doc.id] = { texto: doc.texto };
                    }
                    return acc;
                }, {} as Datos);
                setDatos(datosObj);
            } catch (error) {
                console.error(error);
            }
        });
    }, []);

    function texto(){
        console.log(datos);
        
        return Object.keys(datos).map((key) => {
            return (
                <div draggable key={key}>
                    <div className={``}>{datos[key].texto}</div>
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