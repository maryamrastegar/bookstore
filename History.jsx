import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Accordion from 'react-bootstrap/Accordion';
function History() {
    const [orderList, setOrderList] = React.useState([])
    const total = 2
    React.useEffect(() => {

        setOrderList([
            {
                id: 1,
                total: 1003,
                orderlines: [
                    {
                        id: 1,
                        book: {
                            name: "The Clown",
                            seller: "giftstop",
                            price: "3",
                            author: "Mr bean",
                        },
                        quantity: 1,
                    },
                    {
                        id: 2,
                        book: {
                            name: "The Harry Potter",
                            seller: "giftstop",
                            price: "400",
                            author: "John wick"
                        },
                        quantity: 2,
                    },
                    {
                        id: 2,
                        book: {
                            name: "The Lord of the rings",
                            seller: "giftstop",
                            price: "200",
                            author: "John cina"
                        },
                        quantity: 1,
                    }
                ]
            },

        ])
    }, [])
    return (
        <div className='d-flex flex-column history-body'>
            <Nav activePage={"history"}/>
            <main className="container">
                <h1 className='mb-5'>My orders</h1>
                <Accordion defaultActiveKey="0">
                    {
                        orderList.map((order, idx) => {
                            return <Accordion.Item eventKey={idx} key={idx}>
                                <Accordion.Header>Order Number {order.id}</Accordion.Header>
                                <Accordion.Body>
                                    <table class="container table ">
                                        <thead>
                                            <tr>
                                                <th scope="col">Book Name</th>
                                                <th scope="col">Seller</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Author</th>
                                                <th scope="col">Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody class="align-middle" id="tbody">
                                            {
                                                order.orderlines.map((line) => {
                                                    return <tr key={line.id}>
                                                        <td>{line.book.name}</td>
                                                        <td>{line.book.seller}</td>
                                                        <td>{line.book.price}</td>
                                                        <td>{line.book.author}</td>
                                                        <td>{line.quantity}</td>
                                                    </tr>
                                                })
                                            }
                                        </tbody>
                                    </table>
                                    <div class="d-flex justify-content-between ">
                                        <p class="fw-bold my-3" id="cart-total-price">Total Paid:  ${order.total} </p>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        })
                    }
                </Accordion>
            </main>

        </div>
    )
}

export default History