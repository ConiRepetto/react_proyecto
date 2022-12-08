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
    where,
    addDoc,
    documentId,
    writeBatch
} from "firebase/firestore";
import products from "../data/data";

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
export async function getItemsByCat(categoryParams) {
    const collectionRef = collection(DB, "Productos");

    const queryCat = query(collectionRef, where("category", "==", categoryParams))

    const documentSnapshot = await getDocs(queryCat); //Recibe por parametro una coleccion y devuelve los documentos

    const documentsData = documentSnapshot.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id,
        }
    })

    return documentsData
}

// 4- ENviar orden de compra a firebase (control de stock)
export async function createOrder(order) {
    const collectionRef = collection(DB, "orders");

    const batch = writeBatch(DB)

    let arrayIdsItems = order.items.map(items => items.id)
    const collectionProductsRef = collection(DB, "Productos")
    const q = query(collectionProductsRef, where(documentId(), "in", arrayIdsItems))
    const productsSnap = await getDocs(q)

    const productsDocs = productsSnap.docs

    // productsDocs.forEach(doc => {
    //     let stockActual = doc.data().stockActual;
    //     let itemInCart = order.items.find(item => item.id === doc.id)
    //     console.log(stockActual)
    //     console.log(itemInCart.count)
    //     let stockToUpdate = stockActual - itemInCart.count
    //     if (stockToUpdate <= 0)
    //         throw new Error("No hay Stock disponible")

    //     batch.update(doc.ref, {
    //         stock: stockToUpdate
    //     })
    // })

    const docRef = doc(collectionRef)
    batch.set(docRef, order)
    batch.commit()

    const docOrder = await addDoc(collectionRef, order)
    
    return (docOrder.id)
}

//SearchBar

export function getSearchItems(keyword) {
    keyword = keyword.trim().toLowerCase();

    return new Promise((resolve) => {
        setTimeout(() => {
            if (keyword.length === 0) {
                resolve(products);
            } else {
                let itemsRequested = products.filter((item) =>
                    item.title.toLowerCase().includes(keyword)
                );
                resolve(itemsRequested);
            }
        }, 1000);
    });
}