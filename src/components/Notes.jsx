import React, { useEffect, useState } from "react";
import "./Notes.css";
import Note from "./Note";
import NewNote from "./NewNote";
import axios from "../axios";
import Modal from "react-modal";
import EditNote from "./EditNote";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { MutatingDots } from 'react-loader-spinner'

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editNote, setEditNote] = useState({});
  const [idIterrator, setIdIterrator] = useState(0);
  const [loading, setLoading] = useState(false);

  const customStyles = {
    content: {
      width: '60%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '60%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',

    },
  };

  const addNote = (note) => {
    const newNotes = [...notes];
      axios.post('/notes', note)
        .then((res) => {
          const newNote = res.data;
          newNotes.push(newNote);
          setIdIterrator(idIterrator + 1);
          setNotes(newNotes);
        })
        .catch((err) => {
          NotificationManager.error(err.response.data.message);
        });
  };


   useEffect(()=>{
    setLoading(true);
     axios.get('/notes').then(
       (res)=>{
        const uploadedNotes = res.data;
        console.log(uploadedNotes);
        setNotes(uploadedNotes);
        console.log(res.data);
       }
     ).finally(() => setLoading(false));
   },[])

  const deleteNote = (_id) => {
    const notesToDelete = notes.filter((note) => note._id !== _id);

    axios.delete('/notes/'+_id);

    setNotes(notesToDelete);
  };
  const editNotes = (note) => {

    axios.put('/notes/' + note._id,note);

    const notesToEdit = [...notes];
    const index = notesToEdit.findIndex(x =>x._id===note._id);
    if(index>=0){
      notesToEdit[index] = note;
      setNotes(notesToEdit);
    }
    toogleModal();
  }

  const toogleModal=()=>{
    setShowEditModal(!showEditModal)
  }

  const editNoteHandler=(note)=>{
    toogleModal();
    setEditNote( note );
  }
  return (
    <div className="notes-container">
      <NotificationContainer/>
      <NewNote 
      onAdd={addNote}
      newID={idIterrator}/>
      <Modal
      isOpen={showEditModal}
      style={customStyles}
      contentLabel="Edytuj Notatkę"
      >
        <div className="modal-body">
        <EditNote
         title={editNote.title}
         body={editNote.body}
         _id={editNote._id}
        onEdit={note=>editNotes(note)}
        />
        <div className="cancel-button-div">
        <button className="note-button cancel-button" onClick={toogleModal}>Anuluj</button>
        </div>
        
        </div>
        
      </Modal>
      {loading ? (
  <MutatingDots
    height="100"
    width="100"
    color="white"
    marginTop="50px"
    secondaryColor="purple"
    radius="12.5"
    ariaLabel="mutating-dots-loading"
    wrapperStyle={{ marginTop: '50px' }}
    wrapperClass=""
    visible={true}
  />
) : (
  notes.map((note) => (
    <Note
      key={note._id}
      _id={note._id}
      title={note.title}
      body={note.body}
      onDelete={deleteNote}
      onEdit={editNoteHandler}
    />
  ))
)}



    </div>
  );
};

export default Notes;
