import React from 'react'
import Nav from '../components/Nav'

function Basket() {
    const [basket, setBasket] = React.useState([])
    const [total, setTotal] = React.useState(0)

    React.useEffect(() => {

        setBasket([
            {
                id: 1,
                book: {
                    seller: "giftstop",
                    name: "The Clown",
                    price: "3",
                    author: "Mr bean"
                },
                quantity: 1,
            },
            {
                id: 2,
                book: {
                    name: "The Harry Potter",
                    seller: "giftstop",
                    price: "400",
                    author: "John wick",
                },
                quantity: 1,
            },
            {
                id: 3,
                book: {
                    name: "The Lord of the rings",
                    seller: "giftstop",
                    price: "200",
                    author: "John cina"
                },
                quantity: 1,
            }
        ])
    }, [])
    
    React.useEffect(() => {
        let total = 0
        basket.map((item) => {
            total += item.book.price * item.quantity
            return 0
        })
        setTotal(total)
        
    }, [basket])


    
    return (
        <>
            <main className="">
                <Nav />

                <table className="table mt-5">
                    <thead>
                        <tr>
                            <th scope="col">Book Name</th>
                            <th scope="col">Seller</th>
                            <th scope="col">Price</th>
                            <th scope="col">Author</th>
                            <th scope="col">Quantity</th>
                        </tr>
                    </thead>
                    <tbody className="align-middle" id="tbody">
                        {
                            basket.map((order) => {
                                return <tr key={order.id}>
                                    <td>{order.book.name}</td>
                                    <td>{order.book.seller}</td>
                                    <td>{order.book.price}</td>
                                    <td>{order.book.author}</td>
                                    <td className='d-flex align-items-center'>
                                        <button className='btn btn-success py-0 px-2' >+</button>
                                        <span className='px-3'>{order.quantity}</span>
                                        <button className='btn btn-danger py-0 px-2'    >-</button>

                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                <div className="d-flex justify-content-between ">
                    <p className="fw-bold my-3" id="cart-total-price">Total Price:  ${total} </p>
                    <button className="btn btn-primary btn-purchase my-3 checkOut" type="button">CHECK OUT</button>
                </div>
            </main >

        </>
    )
}

export default Basket