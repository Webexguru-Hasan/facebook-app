import React from 'react'
import styles from '../Category/Categroy.module.css'
import ProductList from './ProductList/ProductList'

export default function Category() {
    const categories = [
        {   id : "hj8uuhgy7",
            category: 'Electronics Goods',
            products: [
                {
                    id: "1",
                    name : 'Iphone',
                    price: '89$'
                
            },
                {
                    id: "2",
                    name : 'Ipad',
                    price: '79$'
                
            },
                {
                    id: "3",
                    name : 'Samsung',
                    price: '59$'
                
            },
        ]

    },
    {   id: "hshshhsh",
        category: 'Sports Goods',
        products: [
            {
                id: "1",
                name : 'Iphone',
                price: '89$'
            
        },
            {
                id: "2",
                name : 'Ipad',
                price: '79$'
            
        },
            {
                id: "3",
                name : 'Samsung',
                price: '59$'
            
        },
    ]

},
]
    return (
        <div className={styles.categoryBox}>
            <span className={styles.name}>Name</span>
            <span className={styles.price}>Price</span>

            {categories.map((item) => 
                <li>{item.category}</li>
               
            )}

            
            {categories.map((product) =>
                 <ProductList key={product.id} item={product} />
            )}


            
            {/* {props.children} */}
            
        </div>
    )
}
