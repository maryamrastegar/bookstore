import React from 'react'
import { Link } from 'react-router-dom';
import AddToCart from '../components/AddToCart';
import Nav from '../components/Nav';
import Price from '../components/Price';

function Shop() {

    const products = [
        { name: "Book", price: "10", author: "rayan gigs" },
        { name: "Book3 ", price: "20", author: "rayan gigs" },
        { name: "Book2 ", price: "30", author: "rayan gigs" },
        { name: "Book4 ", price: "12", author: "rayan gigs" },
        { name: "Book5 ", price: "150", author: "rayan gigs" },
        { name: "Book6 ", price: "190", author: "rayan gigs" },
        { name: "Book7 ", price: "190", author: "rayan gigs" },
        { name: "Book8 ", price: "190", author: "rayan gigs" },
        { name: "Book9 ", price: "140", author: "rayan gigs" },
        { name: "Book10 ", price: "130", author: "rayan gigs" },
        { name: "Book11 ", price: "190", author: "rayan gigs" },
        { name: "Book12 ", price: "190", author: "rayan gigs" },
    ]
    return (
        <div id='shop'>
            <Nav activePage="shop" />
            <div >
                <h1 className='mb-5 text-center'>Book Store</h1>
                <div className="row">
                    {products.map((item, idx) => {
                        return <div key={item.name} className='store-product-item col-12 col-md-6 col-lg-4 col-xxl-3 '>
                            <div className=' d-flex flex-column align-items-center mb-3 border p-4 pb-0 rounded'>
                                <div className="img-box rounded">
                                    <Link to="/single-book">
                                    </Link>
                                    <img src={require(`../img/${idx+1}.jpg`)} alt="" />
                                </div>
                                <div className="content">
                                    <div className="d-flex justify-content-between">
                                        <h5 className='title-store-product'>{item.name}</h5>
                                        <h6 className='Author-book'>{item.author}</h6>
                                    </div>
                                    <Price amount={item.price} />
                                    <AddToCart />
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>

        </div>
    )
}

export default Shop