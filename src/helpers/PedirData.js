import data from '../data_delete/Data.json'

export const PedirData=()=>{ //PARA PEDIR TODO EL ARRAY DE DATOS

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(data);
        }, 500);
    })
}

export const PedirItemId = (id) =>{ //PARA PEDIR SOLO UN DATO DE TODO EL ARRAY      
    return new Promise((resolve, reject)=>
    {
        const item = data.find((elem)=>elem.id === id)

        if (item){
            resolve(item)
        }else{
            reject({
                error:"No se ha encontrado el dato."
            })
        }
    })
}