
function NoteList({ notes, onDelete }) {
    return (
        <div className="note-list">
          {sortedNotes.map((note) => (
            <NoteItem key={note.id} note={note} />
          ))}
        </div>
      );
}

export default NoteList;



function NoteItem({ note, onDelete }) {

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };

    return (
        <div className="note-item">
            <div className="note-item__header">
                <p className="title">{note.title}</p>
                <p className="desc">{note.description}</p>
            </div>
            <div className="actions">
                <button
                    onClick={() => dispatch({ type: "delete", payload: note.id })}
                >
                    ❌
                </button>
                <input
                    type="checkbox"
                    name={note.id}
                    id={note.id}
                    value={note.id}
                    checked={note.completed}
                    onChange={(e) => {
                        const noteId = Number(e.target.value);
                        dispatch({ type: "complete", payload: noteId });
                    }}
                />
            </div>
            <p className="note-item__footer">
                {new Date(note.createdAt).toLocaleDateString("en-US", options)}
            </p>
        </div>
    );
}