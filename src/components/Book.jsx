import { useState } from "react"
import {books} from "../constants/mockData"
import BookCard from "./BookCard"
import SideCard from "./SideCard"
import styles from "./Book.module.css"
function Book() {
  const [liked,setLiked]=useState([])

  const handleLikedList=(book,status)=>{
      if(status){
        const newLikedList=liked.filter(i=>i.id!==book.id)
        setLiked(newLikedList)
      }else{
        setLiked((liked)=>[...liked,book])
      }
  }
  return (
    <div className={styles.container}>
        <div className={styles.card}>
            {books.map(book=>(
                <BookCard key={book.id} data={book} handleLikedList={handleLikedList}/>
            ))}
        </div>
        <div className={styles.favorite}>
          <h4>Favorites</h4>
            {!!liked.length &&(<div>{liked.map((book)=>(<SideCard key={book.id} data={book}/>))}</div>)}
        </div>

    </div>
  )
}

export default Book