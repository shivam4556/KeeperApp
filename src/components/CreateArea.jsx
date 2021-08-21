import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({});

  function handleChange(ev) {
    let { name, value } = ev.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form
        onSubmit={(ev) => {
          props.addNote(note);
          ev.preventDefault();
          setNote({
            title: "",
            content: ""
          });
        }}
      >
        <input
          onChange={handleChange}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
