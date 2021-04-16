import React , {useState, useRef, useContext, useEffect} from 'react';
import './App.css';
import {New_Note} from './components/New_Note';
import EditNote from './components/EditNote';
import NotesBoard from './components/NotesBoard';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import {addUser, returnUserList, getUserId, AddFromSession, AddToSession, returnNotesList} from './utilities/LocalStorage';
import { v4 } from 'uuid';

import {AlertContext, UserContext, EditNoteContext, EditNoteDataContext, NoteDataContext} from './components/Contexts';

function UserWrapper(props){
  let [user_data, set_user_data] = useState({username:'',userId:'',logged_in:false});
  let user_list = useState(returnUserList())[0];
  let [note_data, set_note_data] = useState(returnNotesList(user_data.username) || []);
  useEffect(()=>{
    if(user_data.username !== ''){
      addUser(user_data);
      AddToSession(user_data);
    }
  }, [user_data])
  return(
    <UserContext.Provider value={[user_data, set_user_data]}>
      <NoteDataContext.Provider value={[note_data, set_note_data]}>
          <LoginWindow user_list={user_list} visible={Number(user_data.logged_in)}/>
            <MainPage logged_in={Number(user_data.logged_in)}>
                {props.children}
            </MainPage>
     </NoteDataContext.Provider>
    </UserContext.Provider>
  );
}

function MainPage(props){
  return <div className="main">
    {props.logged_in ? props.children : null}
  </div>
}

function AppWrapper(props){
  let [alert, set_alert] = useState([0,'Are you sure you want to delete ??']); // format ['alert type', 'alert text']
  let [visible, set_visible] = useState(0);
  let [edit_note_data, set_edit_note_data] = useState([]);
  return <AlertContext.Provider value={[alert, set_alert]}>
        <EditNoteDataContext.Provider value={[edit_note_data, set_edit_note_data]}>
          <EditNoteContext.Provider value={[visible, set_visible]}>
            {props.children}
          </EditNoteContext.Provider>
        </EditNoteDataContext.Provider>
  </AlertContext.Provider>
}

function AlertWindow(props){
  let [alert,set_alert] = useContext(AlertContext);
  return(
    <div className="alert-window" type={alert[0]}>
      <div className="alert-box">
        <span>{alert[1]}</span>
        <span className="close" onClick={()=>{
          set_alert([0,'no-alert']);
        }}></span>
      </div>
    </div>
  )

}

function LoginWindow(props){
  let set_user_data = useContext(UserContext)[1];
  let input_ref = useRef(null);
  let [status, set_status] = useState(0);
  useEffect(()=>{
    let session_user = AddFromSession();
    if(session_user !== null){
      set_user_data(JSON.parse(session_user));
      console.log(JSON.parse(session_user));
    }
  },[set_user_data])
  if(props.visible){
    return null;
  }
  return(
    <div className="login-window">
      <span className="login-error" visible={status}>Please enter a valid name to continue.</span>
      <div className="main-logo"></div>
      <h1>Take <i>Notes</i></h1>
      <input type="text" ref={input_ref} placeholder={"Enter A Name"}/>
      <button onClick={(e)=>{
        if(input_ref.current.value === ''){
          set_status(1);
          setTimeout(()=>set_status(0),3000);
        }
        else{
          set_user_data({username:input_ref.current.value, userId:v4(), logged_in:true});
        }

      }}>Start Taking Notes <i></i></button>
      {props.user_list.length > 0 ? (<h3 className="note-drawer-heading" style={{marginTop:'4em', marginBottom:'0px'}}>Previous Logins</h3>) : null}
      <ul className="user-list-past">
      {props.user_list.map((element, index)=>{
        return <li key={index} onClick={()=>{
          set_user_data({username:element,userId:getUserId(element),logged_in:true});
        }}>{element}</li>
      })}
      </ul>
    </div>
  );
}

function App() {
  return (
    <UserWrapper>
      <AppWrapper>
        <Header/>
        <AlertWindow/>
        <New_Note/>
        <SearchBar/>
        <NotesBoard/>
        <EditNote/>
      </AppWrapper>
    </UserWrapper>
  );
}

export default App;
