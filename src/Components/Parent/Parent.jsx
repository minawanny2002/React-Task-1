import React, { useState } from 'react'
import Child from '../Child/Child'

export default function Parent() {


    let [Product, setProduct] = useState([
        {
            id: 1,
            name: "Iphone",
            price: "50000",
            category: "mobile",
            onSale: true,
            Count : 50,
        },
        {
            id: 2,
            name: "Opp",
            price: "4000",
            category: "mobile",
            Count : 40,
            onSale: true,
        },
        {
            id: 3,
            name: "Samsung",
            price: "20000",
            category: "mobile",
            onSale: false,
            Count : 20,

        },
    ]);

    function deleteElemnt(id){
        let newCopy = structuredClone(Product)
        let x = newCopy.filter(item => item.id != id);
        setProduct(x);
    }
    function incElement(index){
        let newCopy = structuredClone(Product);
        newCopy[index].Count++;
        setProduct(newCopy);
    }

    function decElement(index){
        let newCopy = structuredClone(Product);
        newCopy[index].Count--;
        setProduct(newCopy);
    }
    


    return (
        <div className='w-[100] flex mx-auto'>
            {Product.map((item,idx)=><Child pro={item} del={deleteElemnt} inc={incElement} dec={decElement} idx={idx}/>)}
        </div>
    )
}
