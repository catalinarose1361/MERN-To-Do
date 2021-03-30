import React from "react"

function CreateNote() {
    return <div className="container">
        <h1>Create Note</h1>
        
        <form>
            <div className="form-group">
                <input name="title" className="form-control" autoComplete="off" placeholder="Note Title"></input>  
            </div>

            <div className="form-group">
                <textarea name="content" className="form-control" autoComplete="off" placeholder="Note Content"></textarea>  
            </div>
            
            <button clasName="btn btn-lg btn-info">Add Note</button>

        </form>

    </div>
}

export default CreateNote