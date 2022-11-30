import {
    initializeApp
} from "firebase/app";
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,
    query,
    where
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCj80X7pPieKhN6tgoZTXWIicCuCJL_PG8",
    authDomain: "verdefluir-c50b5.firebaseapp.com",
    projectId: "verdefluir-c50b5",
    storageBucket: "verdefluir-c50b5.appspot.com",
    messagingSenderId: "432770726031",
    appId: "1:432770726031:web:f1ac48385a84a8b2d998fa"
};


const app = initializeApp(firebaseConfig);
const DB = getFirestore(app)

// export  function testDataBase() {
//     console.log(app)
// }

//1- Traer todos los documentos
export default async function getItems() {
    //1.a) Referenciar nuestra coleccion
    const collectionProductosRef = collection(DB, "Productos");
    //1.b) Solicitar todos los documentos de la coleccion. 
    const documentSnapshot = await getDocs(collectionProductosRef); //Recibe por parametro una coleccion y devuelve los documentos

    const documentsData = documentSnapshot.docs.map(doc => {
        let docDataId = doc.data()
        docDataId.id = doc.id;
        return docDataId
    })

    return documentsData
}

//2- Traer documento por ID
export async function getSingleItem(idParams) {
    const docRef = doc(DB, "Productos", idParams)
    const docSnapshot = await getDoc(docRef);
    const itemData = docSnapshot.data();
    itemData.id = docSnapshot.id;
    
    return itemData
}


//3- Traer todos los documentos segun categoria
export async function getItemsByCat(categoryParams){
    const collectionRef = collection(DB, "Productos");
    
    const queryCat = query(collectionRef, where("category", "==", categoryParams))

    const documentSnapshot = await getDocs(queryCat); //Recibe por parametro una coleccion y devuelve los documentos

    const documentsData = documentSnapshot.docs.map(doc => {
        return{
            ...doc.data(),
            id: doc.id,
        }
    })

    return documentsData
}
