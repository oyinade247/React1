import React, { useEffect, useState } from "react";
import styles from "./booklist.module.css"
import mockBookList from "./mockBookList"


const Booklist = ()=> {

	const [books, setBook] = useState([]);

	console.log(books);
	

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
          <form className={styles.searchbooks}>
            <input type="text" placeholder="Search books..." />
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
							<span className={styles.delete}>delete</span>
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
	    <form className={styles.addbook}>
	    	<input type="text" placeholder="Add a book..." />
	    	<button>Add</button>
	    </form>

    </div>
    )
}

export default Booklist;