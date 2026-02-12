const mockBookList = ()=>{
    return new Promise((resolve)=>{
        resolve({
            books:[
                "Name Of The Wind",
                "The Wise Man's Fear",
                "Kafka on the Shore",
                "The Master and the Margarita"
            ]
        })
    })
}

export default mockBookList;