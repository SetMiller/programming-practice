import * as serverApi from './db';

async function all(){
    let response = await serverApi.all()
    return parseResponse(response)
}

async function one(id){
    let response = await serverApi.get(id)
    return parseResponse(response)
}

async function remove(id){
    const response = await serverApi.remove(id)
    return parseResponse(response)
}

// function all(){
//     return serverApi.all()
//         .then((response) => {
//             return parseResponse(response)
//         })
// }

// function one(id){
//     return serverApi.get(id)
//         .then((response) => {
//             return parseResponse(response)
//         })
// }
   
// function remove(id){
//     return serverApi.remove(id)
//         .then((response) => {
//             return parseResponse(response)
//         })
// }

function parseResponse(text){
    try {
        let response = JSON.parse(text);
        
        if(response.code !== 200){
            throw new Error('Error #100500')
        }

        return response.data
    } catch (error) {
        throw new Error('incorrect json')
    }
}

export {all, one, remove};