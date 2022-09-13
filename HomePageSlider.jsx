import * as React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function HomePageSlider() {
  const [books, setBooks] = React.useState([])
    React.useEffect(() => {

        setBooks([
            {
                id: 1,
                name: "The Clown",
                price: "3",
                author: "Mr bean",
                status: "accepted",
            },
            {
                id: 2,
                name: "The Harry Potter",
                price: "400",
                author: "John wick",
                status: "pending",
            },
            {
                id: 3,
                name: "The Lord of the rings",
                price: "200",
                author: "John cina",
                status: "rejected",
            }
        ])
    }, [])
  return (
    <Carousel className='mb-5'>
      {books.map((book, idx) => {
        return <Carousel.Item key={idx}>
        <img
          className="d-block w-100"
          src={require('../img/23.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{book.name}</h3>
          <p className='d-flex align-items-center justify-content-center'>
            <span>Author : {book.author}</span>
            <i className="mx-4"></i>
            <span>Price : {book.price} $</span>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      })}
      
    </Carousel>
  );
}

export default HomePageSlider;