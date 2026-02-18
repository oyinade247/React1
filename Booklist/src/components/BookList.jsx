import React, { useEffect, useState } from "react";
import styles from "./booklist.module.css"
import mockBookList from "./mockBookList"


const Booklist = ()=> {

	const [books, setBook] = useState([]);
	const[newBook, setNewBook] = useState("");
	const [searchTerm, setSearchTerm] = useState("");

	console.log(books);

	const handleBook = (bookName)=>{
		setBook(books.filter((book)=> book !== bookName));
	}


	const inputValue = (book)=>{
		setNewBook(book.target.value);
	}

	const addBook = (event)=>{
		event.preventDefault();
		if(newBook.trim() !== ""){
			setBook([...books, newBook]);
			setNewBook("");
		}

	}

	const searchbooks = (event)=>{
		const searchTerm = event.target.value.toLowerCase();
		const filteredBooks = books.filter((book)=> book.toLowerCase().includes(searchTerm));
		setBook(filteredBooks);
		setSearchTerm(searchTerm);

		if(searchTerm.trim() === "" || filteredBooks.length === 0){
			setBook(books);
		}

		else{
			setBook(filteredBooks);
		}
	}

	const searching = (event)=>{
		event.preventDefault();
	}


	
	

	useEffect(()=>{

		const fetchBookList = async ()=>{
			try{
				const listBooks = await mockBookList();
				setBook(listBooks.books);
				// console.log(listBooks.books);
				console.log(books);

			}catch(error){
				console.log(error);

			}
		}

		fetchBookList()

	},[])




    return (
        <div className={styles.wrapper}>
	    <header>
	    	<div className={styles.pageBanner}>
	    		<h1 className={styles.title}> Book Collections</h1>
          <p>Books</p>
          <form className={styles.searchbooks} onSubmit={searching}>
            <input onChange={searchbooks} type="text" placeholder="Search books..." />
          </form>
	    	</div>
	    </header>
	    <div className={styles.booklist}>
	    	<h2 className={styles.title}>Books to Read</h2>
	    	<ul>

				{
					books.map((book)=>(
						<li>
							<span className={styles.name}>{book}</span>
							<span className={styles.delete} onClick={()=> handleBook(book)}>delete</span>
						</li>

					))
				}



	    		{/* <li>
	    			<span className={styles.name}>Name of the Wind</span>
	    			<span className={styles.delete}>delete</span>
	    		</li>
	    		<li>
	    			<span className={styles.name}>The Wise Man's Fear</span>
	    			<span className={styles.delete}>delete</span>
	    		</li>
	    		<li>
	    			<span className={styles.name}>Kafka on the Shore</span>
	    			<span className={styles.delete}>delete</span>
	    		</li>
	    		<li>
	    			<span className={styles.name}>The Master and the Margarita</span>
	    			<span className={styles.delete}>delete</span>
	    		</li> */}
	    	</ul>
	    </div>
	    <form className={styles.addbook} onClick={addBook}>
	    	<input type="text" onChange={inputValue} placeholder="Add a book..." />
	    	<button>Add</button>
	    </form>

    </div>
    )
}

export default Booklist;