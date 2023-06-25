import React, { useState } from "react";

const EditNote = (props) => {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);

  const changeTitleHandler = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  const changeBodyHandler = (event) => {
    const value = event.target.value;
    setBody(value);
  };
  const editNote = () => {
    const note = {
      title: title,
      body: body,
      _id: props._id,
    };
    props.onEdit(note)
  };
  return (
    <div className="note edit-note">
      <label className="new-title-body">Tytuł:</label>
      <input
        type="text"
        className="title-body-input"
        value={title}
        onChange={changeTitleHandler}
      />
      <label className="new-title-body">Opis:</label>
      <input
        type="text"
        className="title-body-input"
        value={body}
        onChange={changeBodyHandler}
      />
      <button className="note-button in-modal" onClick={editNote}>
        Zapisz
      </button>
    </div>
  );
};

export default EditNote;
