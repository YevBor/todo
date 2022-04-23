
import './App.css';
import React, { useState } from 'react'
// import Search from './components/Search.js';
// import Add from './components/Add.js'
// import SearchBar from './components/SearchBar.js'
// import Product from './components/Product.js'
import ProductDetails from './components/ProductDetails.js'
// import PopUp from './components/PopUp.js'
function App() {
  // const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [card, setCard] = useState(false);
  
  //Add new item to list array
  function addItem(){
    const item = { "id": Math.floor(Math.random() * 1000),
    "price": "$10",
    "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    "title": "Poduct",
     "description": "Description", };
     //Add new item to items array
     setItems((oldList)=> [...oldList, item]);
    //  setNewItem("");
     
  }

  /* Deletes an item based on the `item.id` key */
  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  function editCard(id){
    const card = items.filter(item => item === id);
    console.log(card)
  }



  const addHandler = () => { addItem() }


  const deleteItemHandler = (id) => { 
    deleteItem(id);
   }

  const editCardHandler = (id) => { editCard(id) }

  return (
    <div className="App">
      <h1>My store</h1>
      <button onClick={addHandler}>Add</button>
      <div>
        <ul className='list'>
          {items.map((item) =>{
            return (
                <li key={item.id} className="card" onClick={() => editCardHandler(item.id)}>
                  <img src={item.image} alt="" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button onClick={()=> deleteItemHandler(item.id)}>Delete</button>
                </li>
            )
          })}
        </ul>
        {card && <form action="submit">
          <h2 className="card__title">Product</h2>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="card__name" />
          <button className="card__btn">Save</button>
        </form> }  


        {/* <form action="submit">
          <h2 className="card__title">Product</h2>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="card__name" />
          <button className="card__btn">Save</button>
        </form> */}


      </div>
      

    </div>

  );
}

export default App;
