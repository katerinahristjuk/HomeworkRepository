import React from 'react';
import {Customers} from './Customers';

let customer1 = {
  name: "Anne",
  surname: "Holmes",
  age: 25,
  job: false
}

let customer2 = {
  name: "Bob",
  surname: "Marley",
  age: 32,
  job: true
}

export function App(){

  return(
    <div id="app">
      <h2>Hello!</h2>
      <Customers
        c1={customer1}
        c2={customer2}
      />
    </div>
  )
}