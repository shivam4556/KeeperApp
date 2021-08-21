import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);

  function addNote(note) {
    setNotes((prev) => [...prev, note]);
  }

  function deleteNote(noteIndex) {
    setNotes((prev) => {
      return prev.filter((elem, index) => {
        return index !== noteIndex;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            handleDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
