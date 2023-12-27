import { useState } from "react";

function AddNewNote([onAddNote]) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !description) return null;

        const newNote = {
            title,
            description,
            id: Date.new(),
            completed: false,
            createdAt: new Date().toISOString(),
        };
        setTitle("");
        setDescription("");
        onAddNote(newNote);
    };


  return (
    <div className="add-new-note">
        <h2>Add New Note</h2>
        <form className="note-form" onSubmit={handleSubmit}>
            <input 
            type = "text" 
            className = "text-field" 
            placeholder = "Note title"
            value={title} 
            onChange={(e) => setTitle(e.target.value)} />

            <input 
            type="text" 
            className="text-field" 
            placeholder="Note description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}/>

            <button type="submit" className="btn btn--primary">Add New Note</button>
        </form>
    </div>
  )
}

export default AddNewNote;