import React from 'react'
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';

function MyBooks() {
    const [books, setBooks] = React.useState([])
    React.useEffect(() => {

        setBooks([
            {
                id: 1,
                name: "The Clown",
                price: "300",
                author: "Mr bean",
                status: "accepted"
            },
            {
                id: 2,
                name: "The Harry Potter",
                price: "400",
                author: "John wick",
                status: "pending"
            },
            {
                id: 3,
                name: "The Lord of the rings",
                price: "200",
                author: "John cina",
                status: "rejected"
            }
        ])
    }, [])
    return (
        <div id="mybooks-page">
            <Nav activePage={"mybooks"}/>
            <main className="List-book-item container">
                <div className="add-new">
                    <h1>My Books</h1>
                    <Link to='/add-book' className='add-new-book'><i className="bi bi-plus"></i>Add New BooK</Link>
                </div>
                <div className="list-book-box">
                    <table className="table w-100">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Author</th>
                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                books.map((book, index) => {
                                    let status_class = "text-success"
                                    if( book.status === 'pending') status_class = 'text-warning'
                                    if( book.status === 'rejected') status_class = 'text-danger'

                                    return <tr key={book.id}>
                                        <th scope="row">{ index+1 }</th>
                                        <td>{ book.name }</td>
                                        <td>{ book.author }</td>
                                        <td>{ book.price }</td>
                                        <td className={ status_class } >{ book.status }</td>
                                        <td>
                                            <button className='btn btn-warning btn-sm '><i className="bi bi-pencil-square"></i></button>
                                            <i className='mx-3'></i>
                                            <button className='btn btn-danger btn-sm'><i className="bi bi-trash3"></i> </button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </main>

        </div>
    )
}

export default MyBooks