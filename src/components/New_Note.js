import React, {useState, useRef, useContext, useEffect} from 'react';
import {addNote, getNoteDataFromEditData} from '../utilities/LocalStorage';
import {v4} from 'uuid';

import default_image from '../images/image_default.png';
import {AlertContext, NoteDataContext, UserContext} from './Contexts';

function isFoundInArray(target, array){
    return (array.filter((element, index)=>{
        return element === target;
    }).length);
}

function WideInput(props){
    let [new_note_data,set_new_note_data] = useContext(NewNoteContext);
    return(
        <input type="text" className="wide-input" placeholder={props.field_name}
        value={new_note_data[props.index].data[props.type] || ''}
        onChange={(e)=>{
            let new_note_new_data = new_note_data.map((element, index)=>{
                if(element.id === props.id_value){
                    element.data[props.type] = e.target.value;
                }
                return element;
            })
            set_new_note_data(new_note_new_data);
        }}/>
    )
}

function WiderInput(props){
    let [new_note_data,set_new_note_data] = useContext(NewNoteContext);
    return(
        <input type="text" className="wider-input"
        value={new_note_data[props.index].data[props.type] || ''}
         placeholder={props.field_name} onChange={(e)=>{
            let new_note_new_data = new_note_data.map((element, index)=>{
                if(element.id === props.id_value){
                    element.data[props.type] = e.target.value;
                }
                return element;
            })
            set_new_note_data(new_note_new_data)
        }}
       />
    )
}


function TextArea(props){
    let new_note_data = useContext(NewNoteContext)[0];
    let textarea_ref = useRef(null);
    useEffect(()=>{
        textarea_ref.current.innerText = (new_note_data[props.index].data[props.type] || '');
    },[new_note_data,props.index,props.type])
    return(
            <div className="textarea image" ref={textarea_ref} contentEditable="true" onBlur={(e)=>{
                props.add_url_to_context('image_caption', e.target.innerText);
            }}/>
    );
}

function ImageInput(props){
    let [image, set_image] = useState(default_image);
    let [new_note_data, set_new_note_data] = useContext(NewNoteContext);
    let set_alert = useContext(AlertContext)[1];
    let input_ref = useRef(null);
    let [error_status, set_error_status] = useState(0);
    let file_input_ref = useRef(null);

    function SetImage(){
        let new_link = input_ref.current.value;
        if(new_link === ''){
            set_image(default_image);
            return;
        }
        fetch(new_link, {
            mode:'cors',
        }).then((image_obtained)=>{
            image_obtained.blob().then((final_url)=>{
                set_image(new_link);
                set_error_status(0);
                add_url_to_context('image_url', new_link);
                add_url_to_context('title', 'Image');
            })
        }).catch((e)=>{
            console.log(e);
            set_error_status(1);
        })
    }

    useEffect(()=>{
        SetImage();
    },[])

    function add_url_to_context(field, value){
            set_new_note_data(new_note_data.map((element, index)=>{
                if(element.id === props.id_value){
                    element.data[field] = value;
                }
                return element;
            }))
    }


    return (
        <div className="image-input">
            <input type="text" className="inline-input" ref={input_ref} placeholder={props.field_name} value={new_note_data[props.index].data.image_url || ''} onChange={()=>{
                SetImage();
            }}/>
            <button className="choose-image" onClick={()=>{
                // file_input_ref.current.click();
                set_alert([1,'Currently Not Supported']);
            }}></button>
            <span className="in-error" style={{opacity:error_status}}>Invalid File / Link</span>
            <img src={image} className="image-preview" alt="could not load"/>
            <input type="file" ref={file_input_ref} onChange={(e)=>{
                let file = e.target.files[0];
                if(isFoundInArray(file.type, ['image/svg+xml', 'image/png', 'image/jpg', 'image/jpeg']))
                {
                    //file is in valid format
                    set_image(URL.createObjectURL(file));
                    input_ref.current.value = file.name;
                    set_error_status(0);
                    add_url_to_context('image_url', image);
                    add_url_to_context('title', file.name);
                }
                else{
                    set_error_status(1);
                }
            }}/>
            <TextArea type="image_caption" index={props.index} add_url_to_context={add_url_to_context}/>
        </div>
    );
}

function NoteSegment(props){
    let [new_note_data, set_new_note_data] = useContext(NewNoteContext);
    let [new_note_stack, set_new_note_stack] = useContext(NewNoteStackContext);
    return(
        <div className="note-segment">
            <div className="segment-header">
                <span icon={props.icon}></span>
                <span>{props.label}</span>
                <span onClick={()=>{
                    let past_note_stack = new_note_stack;
                    let new_note_data_deleted =  new_note_data.filter((element, index)=>{
                        return element.id !== props.id_value;
                    })
                    past_note_stack.unshift(new_note_data);
                    set_new_note_stack(past_note_stack);
                    set_new_note_data(new_note_data_deleted);
                }}></span>
            </div>
            {props.children}
            <footer/>
        </div>
    );
}

function get_max_days(month , year){
    if(isFoundInArray(month, [1, 3, 5, 7, 8, 10, 12])){
        return 31;
    }
    else if(isFoundInArray(month, [4, 6, 9, 11]))
    {
        return 30;
    }
    else {
        if(year % 4 === 0){return 29}
        else{return 28}
    }
}


function generate_days_array(date_array){
    let [_ , month, year] = date_array;
    let new_date = new Date(year, month - 1, 1);
    let days_array = [];
    let j = 0;
    let starting_index = new_date.getDay();
    for(let i = 0; i<42; i++){
        if(i >= starting_index && j < get_max_days(month, year)){
            days_array.push(++j);
        }
        else{
            days_array.push(' ');
        }
    }
    return days_array;
}

function CalendarInput(props){
    let [days, set_days] = useState(generate_days_array([1, 1, 2000]));
    let [new_note_data, set_new_note_data] = useContext(NewNoteContext);

    useEffect(()=>{
        set_days(generate_days_array([new_note_data[props.index].data.day, new_note_data[props.index].data.month, new_note_data[props.index].data.year]))
    },[new_note_data, props.index])

    function changeYear(factor){
        set_new_note_data(new_note_data.map((element)=>{
            if(element.id === props.id_value){
                element.data.year += factor;
            }
            return element;
        }))
        set_days(generate_days_array([1,new_note_data[props.index].data.month, new_note_data[props.index].data.year]))
    }
    function changeMonth(factor){
        set_new_note_data(new_note_data.map((element)=>{
            if(element.id === props.id_value){
                if(factor === -1){
                    if(element.data.month === 1){
                        element.data.month = 12;
                    }
                    else{
                        element.data.month += factor;
                    }
                }
                if(factor === 1){
                    if(element.data.month === 12){
                        element.data.month = 1;
                    }
                    else{
                        element.data.month += factor;
                    }
                }
            }
            return element;
        }))
        set_days(generate_days_array([1,new_note_data[props.index].data.month, new_note_data[props.index].data.year]))
    }
    function changeDay(new_day){
        set_new_note_data(new_note_data.map((element)=>{
            if(element.id === props.id_value){
                element.data.day = new_day;
            }
            return element;
        }))
    }


    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct', 'Nov', 'Dec'];
    return(
        <div className="calendar">
            <div className="top-btn-group">
                <div>
                    <span onClick={()=>{
                        changeYear(1);
                    }}>+</span>
                    <span>{new_note_data[props.index].data.year}</span>
                    <span onClick={()=>{
                        changeYear(-1)
                    }}>-</span>
                </div>
                <div>
                    <span onClick={()=>{changeMonth(1)}}>+</span>
                    <span>{months[new_note_data[props.index].data.month - 1]}</span>
                    <span onClick={()=>{changeMonth(-1)}}>-</span>
                </div>
            </div>
            <div className="week-column">
                <span>Sun</span>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
            </div>
            <div className="days">
                {days.map((element, index)=>{
                    if(element !== ' '){
                        if(element == new_note_data[props.index].data.day){
                            return <span key={index} valid_date="1" chosen="1">{element}</span>
                        }
                        else{
                            return <span key={index} valid_date="1" onClick={()=>{
                                changeDay(element);
                            }}>{element}</span>
                        }
                    }
                    else{
                        return <span key={index} valid_date="0"></span>
                    }
                })}
            </div>
            <div className="date-selected">
                <span>Selected Date</span>
                <span>{new_note_data[props.index].data.day} {months[new_note_data[props.index].data.month - 1]} {new_note_data[props.index].data.year}</span>
            </div>
        </div>
    )
}

function TimeInput(props){
    let [new_note_data, set_new_note_data] = useContext(NewNoteContext);
    function change_value(time_string , factor, max_value){
        set_new_note_data(new_note_data.map((element)=>{
            if(element.id === props.id_value){
                if(factor > 0){
                    if(element.data[time_string] === max_value){
                        element.data[time_string] = 0;
                    }
                    else{
                        element.data[time_string] = Number(element.data[time_string]) + 1;
                    }
                }
                else if(factor === 0){
                    if(element.data[time_string] === 0){
                        element.data[time_string] = max_value;
                    }
                    else{
                        element.data[time_string] = Number(element.data[time_string]) - 1;
                    }
                }
            }
            return element;
        }))
    }
    return(
        <div className='time-input'>
            <div className="time-block">
                <span onClick={()=>{change_value('hours',0,23)}}>-</span>
                <span>{new_note_data[props.index].data['hours']}</span>
                <span onClick={()=>{change_value('hours',1,23)}}>+</span>
            </div>
            <div className="time-block">
                <span onClick={()=>{change_value('minutes',0,59)}}>-</span>
                <span>{new_note_data[props.index].data['minutes']}</span>
                <span onClick={()=>{change_value('minutes',1,59)}}>+</span>
            </div>
        </div>
    )
}

function TransactionInput(props){
    let [new_note_data, set_new_note_data] = useContext(NewNoteContext);
    function set_transaction_type(new_number){
        set_new_note_data(new_note_data.map((element)=>{
            if(element.id === props.id_value){
                element.data.transaction_type = new_number;
            }
            return element;
        }))
    }


    return(
        <div className="transaction-input">

            <div select={(new_note_data[props.index].data.transaction_type === 0 ? 1 : 0)} onClick={()=>{
                set_transaction_type(0);
            }}>Paid/Lent To</div>
            <div select={(new_note_data[props.index].data.transaction_type === 1 ? 1 : 0)} onClick={()=>{
                set_transaction_type(1);
            }}>Received By</div>
        </div>
    );
}

function CheckListInput(props){
    let [new_note_data, set_new_note_data] = useContext(NewNoteContext);

    function add_new_item(item){

        set_new_note_data(new_note_data.map((element)=>{
            if(props.id_value === element.id){
                element.data.list_items = [...element.data.list_items || [], item ];
            }
            return element;
        }));
    }
    function delete_new_item(item){


        set_new_note_data(new_note_data.map((element)=>{
            if(props.id_value === element.id){
                element.data.list_items = element.data.list_items.filter((c_element)=>{
                    return c_element.id !== item.id;
                })
            }
            return element;
        }));

    }

    function check_toggle_item(item){
        set_new_note_data(new_note_data.map((element)=>{
            if(props.id_value === element.id){
                element.data.list_items =  element.data.list_items.map((c_element)=>{
                    if(c_element.id === item.id){
                        c_element.checked=Number(!item.checked);
                    }
                    return c_element;
                })
            }
            return element;
        }));
    }
    function change_item_value(item){
        set_new_note_data(new_note_data.map((element)=>{
            if(props.id_value === element.id){
                element.data.list_items =  element.data.list_items.map((c_element)=>{
                    if(c_element.id === item.id){
                        c_element.item=item.item;
                    }
                    return c_element;
                })
            }
            return element;
        }));
    }


    let ul_ref = useRef(null);
    return(
        <React.Fragment>
            <ul className="checklist" check_toggle={props.check_list_toggle} ref={ul_ref}>
            {(new_note_data[props.index].data.list_items || []).map((element, index)=>{
                return <li key={element.id} check={element.checked}>
                    <span  onClick={()=>{
                        check_toggle_item(element);
                    }}></span>
                    <input placeholder={'Enter Item Info ...'} value={element.item} type="text" onChange={(e)=>{
                        change_item_value({checked:element.checked,id:element.id,item:e.target.value});
                    }}/>
                    <span onClick={()=>{
                        delete_new_item(element)
                    }}></span>
                </li>
            })}
            </ul>
            <button onClick={()=>{
                //add new elements
                add_new_item({checked:'0',item:'',id:v4()});
            }}><i></i>Add Item</button>
        </React.Fragment>
    );
}

function TextAreaInput(props){
    let [new_note_data, set_new_note_data] = useContext(NewNoteContext);
    let textarea_ref = useRef(null);
    useEffect(()=>{
        set_new_note_data(new_note_data.map((element)=>{
            if(element.id === props.id_value)
            {
                element.data['title'] = 'Text';
            }
            return element;
        })
    )
        textarea_ref.current.innerText = new_note_data[props.index].data['text'] || '';
    },[])


    return(
        <div className="input-body" ref={textarea_ref} contentEditable="true" tabIndex="0" onBlur={(e)=>{
            set_new_note_data(new_note_data.map((element)=>{
                if(element.id === props.id_value){
                    element.data['text'] = e.target.innerText;
                }
                return element;
            }))
        }}>
        </div>
    );
}

function NoteTitle(props){
    let [new_note_data, set_new_note_data] = useContext(NewNoteContext);
    let note_title_ref = useRef(null);
    useEffect(()=>{
        note_title_ref.current.innerText = new_note_data[0].title || '';
    },[props.title , new_note_data])
    return(
        <div className="note-title" ref={note_title_ref} onBlur={()=>{
            set_new_note_data(new_note_data.map((element, index)=>{
                if(element.type === -1){
                    element.title = note_title_ref.current.innerText;
                }
                return element;
            }))
        }} contentEditable="true"/>
    )
}

function EditOptions(props){
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
          <span onClick={()=>
              {
                set_new_note_data([{type:-1,noteId:v4(),date_created:(new Date()).toDateString().substr(4), title:''},{type:7,data:{},id:v4(), index:0}])
              }
          }></span>

      </div>
    )
}

let NewNoteContext = React.createContext();
let NewNoteStackContext = React.createContext();
let ChangeTypeContext = React.createContext();
function InputContainer(props){
    let [new_note_data, set_new_note_data] = useState(props.data || [{type:-1,noteId:v4(),title:'',date_created:(new Date()).toDateString().substr(4)},{type:7,data:{},id:v4(), index:0}]);
    let [new_note_stack , set_new_note_stack] = useState([]);
    let [change_type, set_change_type] = useState(0);
    let main_container = useRef(null);

    useEffect(()=>{
        if(!main_container.current.children[main_container.current.children.length - 1]){
            return;
        }
        main_container.current.children[main_container.current.children.length - 1].scrollIntoView(1);
    }, [change_type])

    useEffect(()=>{
        set_new_note_data(props.data);
    },[props.data] )

    return <NewNoteContext.Provider value={[new_note_data, set_new_note_data]}>
    <NewNoteStackContext.Provider value={[new_note_stack, set_new_note_stack]}>
    <ChangeTypeContext.Provider value={[change_type, set_change_type]}>
        <div className="input-container-inner" ref={main_container}>
            {new_note_data.map((element, index)=>{
            switch(element.type){
                    case 7: return (<NoteSegment key={element.id} label={"Text"} icon={"8"} id_value = {element.id}>
                        <TextAreaInput id_value={element.id}  index={index}/>
                    </NoteSegment>);
                    case 0: return (<NoteSegment key={element.id} label={"Contact"} icon={"0"} id_value = {element.id}>
                            <WideInput field_name={"Name goes here ..."}  type="title" id_value={element.id} index={index} />
                            <WideInput field_name={"Contact goes here ..."}  type="contact_value" id_value={element.id} index={index}  />
                        </NoteSegment>
                    )
                    case 5: return (<NoteSegment key={element.id} label={"Location"} icon={"1"} id_value = {element.id} >
                            <WideInput field_name="Location Name goes here ..."  type="title" id_value={element.id} index={index}/>
                            <WiderInput field_name="Exact Address goes here ..." type="location_address" id_value={element.id} index={index}/>
                        </NoteSegment>
                    )
                    case 1: return ( <NoteSegment label={"Link"} key={element.id} icon={"2"} id_value = {element.id} >
                        <WideInput field_name="Link Name goes here ..."  type="title" id_value={element.id} index={index}  />
                        <WiderInput field_name="Link Address goes here ..." type="link_address" id_value={element.id} index={index} />
                    </NoteSegment>
                    )
                    case 2: return (
                    <NoteSegment label={"Image"} icon={"3"} key={element.id} id_value = {element.id}>
                            <ImageInput field_name="Select Image or paste link ..." id_value={element.id}  index={index}/>
                        </NoteSegment>
                    )
                    case 3: return(
                    <NoteSegment label={"Event"} icon={"4"} key={element.id} id_value = {element.id}>
                        <WiderInput field_name="Event Name goes here ..." id_value={element.id} type="title" index={index}/>
                        <CalendarInput id_value = {element.id} index={index} />
                        <TimeInput id_value = {element.id} index={index} />
                    </NoteSegment>
                    )
                    case 4: return(
                        <NoteSegment label={"Transaction"} icon={"5"} key={element.id} id_value = {element.id}>
                            <TransactionInput id_value={element.id}  index={index}/>
                            <WideInput field_name="Name of Person / Store"  type="transaction_end" id_value={element.id}  index={index}/>
                            <WideInput field_name="Enter the Amount ..."  type="transaction_amt" id_value={element.id}  index={index}/>
                        </NoteSegment>
                    )
                    case 6: return(
                        <NoteSegment label={"CheckList"} icon={"6"} key={element.id} id_value = {element.id}>
                            <WideInput field_name="Enter the list title ..."  type="title" id_value={element.id}  index={index}/>
                            <CheckListInput check_list_toggle = {1} id_value={element.id} index={index} />
                        </NoteSegment>
                    )
                    case 8: return(
                            <NoteSegment label={"List"} icon={"7"} key={element.id} id_value = {element.id} index={index}>
                            <WideInput field_name="Enter the list title ..." type="title" id_value={element.id} index={index}/>
                            <CheckListInput check_list_toggle = {0} id_value={element.id} index={index}/>
                        </NoteSegment>
                    )
                    case -1: return(
                        <NoteTitle key={"note-title"} title={element.title}/>
                    )
                    default :return (null);

            }})
            }</div>

            {props.children}
</ChangeTypeContext.Provider>
</NewNoteStackContext.Provider>
    </NewNoteContext.Provider>

}

function ButtonAddNote(props){
    let [new_note_data , set_new_note_data] = useContext(NewNoteContext);
    let [note_data, set_note_data] = useContext(NoteDataContext);
    let set_alert = useContext(AlertContext)[1];
    let user_data = useContext(UserContext)[0];
    return(
        <div onClick={()=>{
                addNote(user_data, new_note_data);
                set_note_data([ getNoteDataFromEditData(new_note_data),...note_data]);
                set_new_note_data([{type:-1,noteId:v4(),date_created:(new Date()).toDateString().substr(4), title:''},{type:7,data:{},id:v4(), index:0}]);
                set_alert([2,'Note Added Succesfully']);
        }}>
            <span></span>
            <span>Save Note</span>
        </div>
    );
}

function OptionsChoice(props){
    let [new_note_data, set_new_note_data] = useContext(NewNoteContext);
    let [new_note_stack,set_new_note_stack] = useContext(NewNoteStackContext);
    let [change_type, set_change_type] = useContext(ChangeTypeContext);
    let options_list = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    let options_values = ['Add Contact','Add Link', 'Add Location', 'Add Event', 'Add Payment','Add Location', 'Add Checklist','Add Text','Add List'];
    function getIndexOfMonth(month_string){
        switch(month_string){
            case 'Jan' : return 1;
            case 'Feb' : return 2;
            case 'Mar' : return 3;
            case 'Apr' : return 4;
            case 'May' : return 5;
            case 'Jun' : return 6;
            case 'Jul' : return 7;
            case 'Aug' : return 8;
            case 'Sep' : return 9;
            case 'Oct' : return 10;
            case 'Nov' : return 11;
            case 'Dec' : return 12;
            default:return -1;
        }
    }
    return(
        <div className="options">
        {
         options_list.map((element, index)=>{
             return <div key={index} onClick={(e)=>{
                 let new_note_element = {};
                 new_note_element.type = index;
                 new_note_element.id = v4();
                 if(new_note_data.length === 0){
                    new_note_element.index = 0;
                 }
                 else{
                    new_note_element.index = new_note_data[new_note_data.length - 1].index + 1;
                 }
                 new_note_element.data = {};
                 if(new_note_element.type === 3){
                     //type is calendar
                         let date = new_note_data[0].date_created.split(' ');
                         new_note_element.data = {
                         year : Number(date[2]),
                         month : getIndexOfMonth(date[0]),
                         day : Number(date[1]),
                         hours: 9,
                         minutes: 30
                     }
                 }
                 let new_stack = new_note_stack;
                 new_stack.unshift(new_note_data);
                 set_new_note_stack(new_stack);
                 set_new_note_data([...new_note_data, new_note_element]);
                 set_change_type(!change_type);

             }}>
                 <span></span>
                 <span>{options_values[index]}</span>
             </div>
         })
        }
        {props.children}
     </div>
    )
}

function NewNote(props){
    return(
        <div className="input-container">
        <InputContainer data={[{type:-1,noteId:v4(),date_created:(new Date()).toDateString().substr(4)},{type:7,data:{},id:v4(), index:0}]}>
            <OptionsChoice>
                <ButtonAddNote/>
            </OptionsChoice>
            <EditOptions/>
        </InputContainer>
        </div>
    );
}

export {InputContainer, NewNote, OptionsChoice, NewNoteContext, NewNoteStackContext};