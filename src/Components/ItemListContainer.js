import React from "react";


const ItemListContainer= ({greeting})=> {
    return (
        <h1 style= {style.container}>{greeting}</h1>
    )
}


export default ItemListContainer


const style = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alingItems: 'center',
      background: 'black',
      color: 'white',
      width: '100%',
      padding: 30,
      marginTop: 0,
    }
  }
  