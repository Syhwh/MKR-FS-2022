import React from 'react'

export const MyList = () => {
  const carBrands = ['Mazda',
    'Toyota',
    'Chevrolet',
    'Nissan',
    'Hyundai',
    'Ferrari',
    'Mercedes',
    'Ford',
    'Romeo',
    'Mac',
    'Lamborghini']
  return (
    <ul>
      {
        carBrands.map((brand, index) => {
          return (
            <li key={index} >{brand} - Available Units:xxx</li>
          )
        })
      }
    </ul>
  )
}
