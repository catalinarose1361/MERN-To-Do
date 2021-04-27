import React, {useEffect, useState} from "react"
//fetch data from notes route
function Notes() {
    const [notes, setNotes] = useState([{
        title: " ",
        content: " "
    }])

    //the useEffect method fetches the data
    useEffect(() => {
        fetch("https://notes-app-crw.herokuapp.com/notes").then(res => {
            if(res.ok) {
                return res.json()
            }
            // and then sets the response equal to setNotes in State
        }).then(jsonRes => setNotes(jsonRes))
    })

    return <div className="container">
        <h1>Notes</h1>
        {notes.map(note => 
        <div>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
        </div>
        )}

    </div>
}

export default Notes