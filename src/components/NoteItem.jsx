import React from 'react'
import { Link } from 'react-router-dom'

const NoteItem = ({note}) => {
  const colors=["#ffc0cb","#b38693","#ffd1c0","#ffff80","#b3b35a","#ccff80","#00ffff","#00b3b3"];
  const getRandomColor=()=>{
    const randomIndex=Math.floor(Math.random()*colors.length);
    console.log(randomIndex);
    return colors[randomIndex];
  }
  return (
    <Link to={`/edit-note/${note.id}`} className='note' style={{backgroundColor:getRandomColor()}}>
        <h4>{note.title.length > 40 ? (note.title.substring(0,60))+'...' : note.title}</h4>
        <p>{note.date}</p>
    </Link>
  )
}

export default NoteItem
