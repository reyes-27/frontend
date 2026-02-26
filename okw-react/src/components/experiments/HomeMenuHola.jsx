import React, {useContext, } from 'react'
import Test from '../test';
import MyForm from '../MyForm';
let vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

const myVehicle = ({brand, model, type, year, color, registration:{state}}) => 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + " from " + year + " registered in " + state;

const myListOne = [1,2,3]
const myListTwo = [4,5,6]

// class Car {
//   constructor(name){
//     this.name = name;
//   }
// }

// const hola = new Car("Ford")
let numbers = [...myListOne, ...myListTwo]

const numeros = [1,2,3,4,5,6,7,8]
const [one, two, ...pene] = numeros
console.log(...pene)
console.log(numbers)

const HomeMenu = () => {
  const vehicles = ["Waos", "Hola", "Pene"]
  const [valor1,,valor3] = vehicles
  const waos = myVehicle(vehicleOne)
  const name = "Daniel"
  return (
    <div>
      <h1>
        {valor1}
      </h1>
      <h2>
        {valor3}
      </h2>
      <p>{waos}</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, rem a, natus architecto itaque aliquid vel doloribus non aliquam enim id voluptatibus earum est blanditiis? Repellat eaque quae odio optio nostrum quos natus hic omnis aliquam blanditiis minus sapiente minima eligendi, reiciendis quas quod architecto provident? Blanditiis nemo voluptatibus pariatur omnis natus dicta voluptate modi accusamus asperiores nam, beatae architecto consequatur. Nobis, saepe, asperiores rerum nesciunt laudantium tenetur repudiandae itaque doloribus totam ipsa enim! Maiores, animi. Numquam accusamus rem alias facere, eveniet, architecto quasi magni adipisci veritatis hic dolorum ducimus.
      </p>
    <Test name = {name} />

    <MyForm />
    </div>

  )
}

export default HomeMenuHola