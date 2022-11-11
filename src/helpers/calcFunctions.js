const getTotalProducts = (array) => {

    const result = array.reduce( (acum,currentValue)=> acum + currentValue.qty , 0)
    return result;

}


export {
    getTotalProducts
}