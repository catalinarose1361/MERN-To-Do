import React, { useState } from "react"



function CreateNote() {
    const [input, setInput] = useState({
        title: '',
        content: ''
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        console.log(input)
    }

    return <div className="container">
        <h1>Create Note</h1>
        
        <form>
            <div className="form-group">
                <input onChange={handleChange} name="title" value={input.title} className="form-control" autoComplete="off" placeholder="Note Title"></input>  
            </div>

            <div className="form-group">
                <textarea onChange={handleChange} name="content" value={input.content} className="form-control" autoComplete="off" placeholder="Note Content"></textarea>  
            </div>
            
            <button onClick={handleClick} clasName="btn btn-lg btn-info">Add Note</button>

        </form>

    </div>
}

export default CreateNote