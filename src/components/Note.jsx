import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

const styleSheet = {
  position: 'relative',
  float: 'right',
  // marginRight: '5px',
  color: '#f5ba13',
  border: 'none',
  width: '28px',
  height: '28px',
  cursor: 'pointer',
  outline: 'none'
}

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <DeleteIcon style={styleSheet} onClick={() => {
        props.handleDelete(props.id);
      }} />
    </div>
  );
}

export default Note;
