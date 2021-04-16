function returnUserList(user){
    let user_list = [];
    for(let i in localStorage){
        if(i.substr(0,4) === "User"){
            user_list.push(i.substr(4));
        }
    }
    return user_list;
}

function addUser(user){
    if(localStorage.getItem(`User${user.username}`))
    {return;}
    localStorage.setItem(`User${user.username}`,JSON.stringify(user));
}

function addNote(user, note_data){
    let new_note_array = JSON.parse(localStorage.getItem(`User${user.username}`));
    if(new_note_array['notes']){
        new_note_array['notes'].push(note_data);
    }
    else{
        new_note_array['notes'] = [];
        new_note_array['notes'].push(note_data);
    }
    let json_final_user_data = JSON.stringify(new_note_array);
    localStorage.setItem(`User${user.username}`, json_final_user_data);
}

function getNoteDataFromEditData(edit_note_data){
    let note_id = edit_note_data[0].noteId;
    let note_date = edit_note_data[0].date_created;
    let note_title = edit_note_data[0].title;
    let note_data = edit_note_data.slice(1);
    let locations = [];
    let links = [];
    let images = [];
    let transactions = [];
    let texts = [];
    let events = [];
    let lists = [];
    let checklists = [];
    let contacts = [];
    for(let j=0;j<note_data.length;j++){
        switch(note_data[j].type){
            case 0 : contacts.push({id:note_data[j].id, data:note_data[j].data});
            break;
            case 1 : links.push({id:note_data[j].id, data:note_data[j].data});
            break;
            case 2 : images.push({id:note_data[j].id, data:note_data[j].data});
            break;
            case 3 : events.push({id:note_data[j].id, data:note_data[j].data});
            break;
            case 4 : transactions.push({id:note_data[j].id, data:note_data[j].data});
            break;
            case 5 : locations.push({id:note_data[j].id, data:note_data[j].data});
            break;
            case 6 : checklists.push({id:note_data[j].id, data:note_data[j].data});
            break;
            case 7 : texts.push({id:note_data[j].id, data:note_data[j].data});
            break;
            case 8 : lists.push({id:note_data[j].id, data:note_data[j].data});
            break;
            default: console.log('invalid type')
        }
    }
    return ({id:note_id,date_created:note_date,title:note_title, locations , texts, links, events, checklists, transactions, images, contacts, lists});

};

function returnNotesList(){
    let note_array = [];
    for(let i in localStorage){
        if(i.substr(0,4) === 'User'){
            //perform suitable operations and categorize data into titles and actual data  , return both in a dictionary in the end
            let raw_data = JSON.parse(localStorage.getItem(i));
            //we are interested in raw_data.notes
            if(!raw_data.notes){
                return;
            }
            let notes_total_count = raw_data.notes.length;
            let notes_array = raw_data['notes'];
            for(let i = 0;i<notes_total_count;i++){
                note_array.unshift(getNoteDataFromEditData(notes_array[i]));
            }

        }
    }
    return note_array;
}

function getUserId(username){
    return JSON.parse(localStorage.getItem(`User${username}`))['userId'];
}

function AddFromSession(){
    for(let i in sessionStorage){
        if(i.substr(0,4) === 'User'){
            //found
            return sessionStorage.getItem(i);
        }
    }
    return null;
}
function AddToSession(user){
    for(let i in sessionStorage){
        if(i.substr(0,4)==='User'){
            sessionStorage.removeItem(i);
        }
    }
        sessionStorage.setItem(`User${user.username}`, JSON.stringify(user));
}


function convertNoteDatatoEditData(note_data){
// note_array.push({id:note_id,date_created:note_date,title:note_title, locations , texts, links, events, checklists, transactions, images, contacts, lists});
    let data_array = [{type:-1, date_created:note_data.date_created,title:note_data.title || '', noteId:note_data.id}];
    for(let i in note_data){
        if(i === 'checklists'){
            note_data[i].map((element)=>{
                data_array.push({type:6,id:element.id,data:{list_items:element.data.list_items, title:element.data.title}});
                return null;
            })
        }
        else if(i === 'lists'){
            note_data[i].map((element)=>{
                data_array.push({type:8,id:element.id,data:{list_items:element.data.list_items, title:element.data.title}});
                return null;
            })
        }
        else if(i === 'texts'){
            note_data[i].map((element)=>{
                data_array.push({type:7,id:element.id,data:{text:element.data.text}});
                return null;
            })
        }
        else if(i === 'images'){
            note_data[i].map((element)=>{
                data_array.push({type:2,id:element.id,data:{image_caption:element.data.image_caption, image_url:element.data.image_url, title:element.data.title}});
                return null;
            })
        }
        else if(i === 'links'){
            note_data[i].map((element)=>{
                data_array.push({type:1,id:element.id,data:{title:element.data.title, link_address:element.data.link_address}});
                return null;
            })
        }
        else if(i === 'locations'){
            note_data[i].map((element)=>{
                data_array.push({type:5,id:element.id,data:{title:element.data.title, location_address:element.data.location_address}});
                return null;
            })
        }
        else if(i === 'events'){
            note_data[i].map((element)=>{
                data_array.push({type:3,id:element.id,data:{title:element.data.title , day:element.data.day, hours:element.data.hours, minutes:element.data.minutes, month:element.data.month, year:element.data.year}});
                return null;
            })
        }
        else if(i === 'contacts'){
            note_data[i].map((element)=>{
                data_array.push({type:0,id:element.id,data:{title:element.data.title , contact_value:element.data.contact_value}});
                return null;
            })
        }
        else if(i === 'transactions'){
            note_data[i].map((element)=>{
                data_array.push({type:4,id:element.id,data:{transaction_amt:element.data.transaction_amt, transaction_end:element.data.transaction_end, transaction_type:element.data.transaction_type}});
                return null;
            })
        }
    }
    return data_array;
}

function EditNoteWithId(note_data, username){
    let existing_note_data = JSON.parse(localStorage.getItem(`User${username}`));
    let noteData = existing_note_data['notes'];

    let final_note = noteData.map((element, index)=>{
        if(element[0].noteId === note_data[0].noteId){
            return note_data;
        }
        return element;
    })

    existing_note_data.notes = final_note;
    localStorage.setItem(`User${username}`,JSON.stringify(existing_note_data));
    }
    //     console.log(element);

function DeleteNoteWithId(noteId, username){
    let existing_note_data = JSON.parse(localStorage.getItem(`User${username}`));
    let new_note_data = existing_note_data['notes'].filter((element)=>{
        return element[0].noteId !== noteId;
    })

    existing_note_data['notes'] = new_note_data;
    localStorage.setItem(`User${username}`,JSON.stringify(existing_note_data));
}

export {addNote, returnNotesList, getNoteDataFromEditData, addUser, returnUserList, getUserId, AddFromSession, AddToSession, convertNoteDatatoEditData, EditNoteWithId, DeleteNoteWithId};