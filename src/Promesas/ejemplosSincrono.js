// BACK END
function APICall(){
    setTimeout(()=>{
        console.log("API call completada");
        return{
            id: '1',
            title:'producto 1',
            stock: 10,
            description:'xxxxx',
        };
    }, 1500);
}
//FRONT END
console.log ("App inicada");
let respuestaAPI = APICall();
console.log(`Respuesta: ${respuestaAPI}`);
console.log("App finalizada")