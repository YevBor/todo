import React from 'react'

const ProductDetails = () => {
  return (
    <div className="card">
        <h1 className="card__title">Product</h1>
        <label for="name">Name</label>
        <input type="text" id="name" className="card__name" />
        {/* <label for="description">Description</label>
        <input id="description" className="card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quae, a quasi fuga ab </input>
        <label for="price">Price</label>
        <input type="text" id="price" className="card__price">
        </input> */}
        <button className="card__btn">Save</button>
    </div>
  )
}

export default ProductDetails