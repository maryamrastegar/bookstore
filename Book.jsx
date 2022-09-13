import React from 'react'
import Nav from '../components/Nav'

function Book() {
    const submit = (e) => {
        e.preventDefault()
    }
    return (
        <div id="book-page">
            <Nav activePage="mybooks" />
            <main >

                <div className="add-book-box">
                    <h1>Add New Book</h1>
                    <form onSubmit={submit} className='add-book-form'>
                        <label for="name" className='label-add-book'>Name of the book:</label>
                        <input type="text" className='input-add-book form-control' name="name" placeholder="Janr Eyre" />

                        <label for="author" className='label-add-book'>Author:</label>
                        <input type="text" className='input-add-book form-control' name="author" placeholder=" Charlotte Brontë" />

                        <div className="input-group mb-3">
                           
                            <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
                            <div className="input-group-append">
                                <span className="input-group-text">$</span>
                            </div>
                        </div>

                        <label for="fname" className='label-add-book'>Cover Image:</label>
                        <input type="file" className='input-add-book form-control' name="image" accept="image/*" />
                        <button className='btn btn-add-book'>submit</button>
                    </form>
                </div>

            </main>
        </div>
    )
}

export default Book