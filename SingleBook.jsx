import React from 'react'
import AddToCart from '../components/AddToCart';
import Nav from '../components/Nav'
function SingleBook() {
 
    const [book, setBook] = React.useState({
        seller: "giftstop",
        name: "The Clown",
        price: "3000",
        author: "Mr bean",
        descrption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque In egestas erat imperdiet sed euismod nisi porta lorem mollis Morbi tristique senectus et netus "
    })
    return (
    <div className='d-flex flex-column single-body'>
        <Nav/>
        <div className="container ">
            <div className="row mt-5">
                <div className="col-lg-6 col-12">
                <div className="single-book-img-body">
                    <img src={require('../img/20.jpg')} alt="" className='cover-image' />
                </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="single-book-content d-flex flex-column justify-content-start">
                    <div className="caption-single-book-box">
                        <span className="caption-single-book">{book.name}</span>
                    </div>
                    <br />
                    <div className="price">
                        <b>Price :</b> {" "}{book.price} $
                    </div>
                    <div className="dec-single-book-box">
                        <p className="dec-single-book"><b>Descrption:</b> <br />{" "}{book.descrption}</p>
                        <span className="author-id "><b>Author:</b>{" "}{book.author}</span>
                    </div>
                    <div className="add-to-basket">
                        <AddToCart/>
                    </div>


                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default SingleBook