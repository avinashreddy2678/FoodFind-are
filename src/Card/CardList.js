import React from 'react'
import Card from './Card'
import './Card.css'
function CardList() {

    const products=[       
            {"id":1,"name":"burger","price":120,"image":"assests/image 2.png"},
            {"id":2,"name":"Vegetables","price":110,"image":"/assests/image 3.png"},
            {"id":3,"name":"Fruit with Oats","price":111,"image":"/assests/image 4.png"},
            {"id":4,"name":"Fried Rice","price":122,"image":"/assests/image 5.png"},
            {"id":5,"name":"Fruits","price":160,"image":"/assests/image 14.png"},
            {"id":6,"name":"Veg Salad","price":140,"image":"/assests/image 49.png"},
            {"id":7,"name":"Butterfly Pasta","price":145,"image":"/assests/image 64.png"},
            {"id":8,"name":"Dry Fruits","price":150,"image":"/assests/image 65.png"},
            {"id":9,"name":"General Pasta","price":180,"image":"/assests/image 66.png"},
            {"id":10,"name":"Strawberry","price":128,"image":"/assests/image 67.png"},
       
        ]      
  return (
    <div>
        <section className='section'>
      {
           products.map(product=>(
            <Card  product={product}/>
))
      }
      </section>
    </div>
  )
}

export default CardList
