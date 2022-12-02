import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from 'firebase/firestore/lite';
import db from '../firebase/firebase';

//Create document


//update document


//Read document
//Esta funcion recibe por parametro el nombre de la coleccion que quiero traer desde firestore y devuelve un array con dichos elementos
export const getItems = async(nameCollection)=>{
    try {

        const colRef = collection( db, nameCollection);
        const result = await getDocs(query(colRef));

        console.log(getArrayFromCollection(result));
        return getArrayFromCollection(result);

    } catch (error) {
        console.error(error);
    }
}

// Read with condition
export const getItemsByCondition = async( key, condition, value, nameCollection ) => {
    try {
        const colRef = collection(db, nameCollection);
        const result = await getDocs(query( colRef , where( key , condition , value)));
        return getArrayFromCollection( result );
    } catch (error) {
        console.error(error);
    }
}

export const getItemById = async(id, nameCollection) => {
    try {
        const colRef = collection(db, nameCollection);
        const result = await getDoc( doc(colRef, id) );
        return { ...result.data(), id: result.id };

    } catch (error) {
        console.error(error);
    }
}







// Funciones de soporte

//Crea un array de los items de firebase y le agrega el id
const getArrayFromCollection = (collection) =>{
    return collection.docs.map( doc =>{
        return { ...doc.data(), id: doc.id};
    })
}





