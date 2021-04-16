import React, {useContext, useRef} from 'react';
import {InputContainer , OptionsChoice, NewNoteContext, NewNoteStackContext} from './New_Note';
import {UserContext, EditNoteContext, EditNoteDataContext, NoteDataContext} from './Contexts'
import {EditNoteWithId, getNoteDataFromEditData} from '../utilities/LocalStorage';
import {v4} from 'uuid';

function EditNote(){
    let edit_note_bg_ref = useRef(null);
    let edit_note_data = useContext(EditNoteDataContext)[0];
    let edit_active = useContext(EditNoteContext)[0];
    return(
        <div className="edit-note-bg" visible={edit_active} ref={edit_note_bg_ref}>
            <div className="edit-note-container">
                <InputContainer data={edit_note_data}>
                    <OptionsChoice>
                        <EditButton/>
                    </OptionsChoice>
                    <EditOptions/>
                </InputContainer>
            </div>
        </div>
    );
}


function EditButton(props){
    let new_note_data = useContext(NewNoteContext)[0];
    let [note_data, set_note_data] = useContext(NoteDataContext);
    let set_edit_note_data = useContext(EditNoteDataContext)[1];
    let set_edit_note_active = useContext(EditNoteContext)[1];
    let set_new_note_stack = useContext(NewNoteStackContext)[1];
    let user_data = useContext(UserContext)[0];
    return(
        <div onClick={()=>{
            EditNoteWithId(new_note_data, user_data['username']);
            set_note_data(note_data.map((element)=>{
                if(element.id === new_note_data[0].noteId){
                    return getNoteDataFromEditData(new_note_data);
                }
                return element;
            }))
            set_edit_note_active(0);
            set_new_note_stack([]);
            set_edit_note_data([{type:-1,noteId:v4(),title:'',date_created:(new Date()).toDateString().substr(4)}]);
        }}>

            <span></span>
            <span>Save Note</span>
        </div>
    )
}


function EditOptions(){
    let set_edit_note_active = useContext(EditNoteContext)[1];
    let set_edit_note = useContext(EditNoteDataContext)[1];
    let set_new_note_data = useContext(NewNoteContext)[1];
    let [new_note_stack, set_new_note_stack] = useContext(NewNoteStackContext);
    return(
        <div className="edit-options">
            <span onClick={()=>{
              let note_stack = new_note_stack;
              if(note_stack.length > 0){
                  set_new_note_stack(note_stack);
                  set_new_note_data(note_stack.shift())
                  }
            }}></span>
            <span onClick={()=>{
                set_edit_note_active(0);
                set_new_note_stack([]);
                set_edit_note([{type:-1,noteId:v4(),title:'',date_created:(new Date()).toDateString().substr(4)}]);
            }}></span>
        </div>
    )


}


export default EditNote;