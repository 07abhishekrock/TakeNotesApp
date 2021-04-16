import React, {useState, useRef, useEffect, useContext} from 'react';
import {UserContext, NoteDataContext, EditNoteDataContext, EditNoteContext, AlertContext } from './Contexts';
import {convertNoteDatatoEditData, DeleteNoteWithId, EditNoteWithId} from '../utilities/LocalStorage';
import MasonryObject from '../utilities/masonry';

//create sample note data to test out functionality

function NoteHeading(props){
    return (<h3 className="note-drawer-heading">Notes At A Glance</h3>)
}
function NoteTransactionBlock(props){
    if(!props.data_array.length){
        return null;
    }
    return(
        <div className="transaction note-sub-block">
            <span>Transaction</span>
            <div className="working-grid" style={{gridTemplateColumns:`repeat(${props.data_array.length}, 100%)`}}>
            {props.data_array.map((element, index)=>{
                return <div type={element.data.transaction_type} key={index}>
                    <span>{element.data.transaction_end}</span>
                    <span>{element.data.transaction_type ? '-' : '+'} Rs {element.data.transaction_amt}</span>
                </div>
            })}
            </div>
        </div>
    )
}
function NoteTextBlock(props){
    if(!props.data_array.length){
        return null;
    }
    return(
        <div className="note-sub-block text">
            <span>Text</span>
            <div className="working-grid" style={{gridTemplateColumns:`repeat(${props.data_array.length}, 100%)`}}>
                {
                    props.data_array.map((element, index)=>{
                        return <p key={index}>{element.data.text}</p>
                    })
                }
            </div>
        </div>
    )
}
function NoteContactBlock(props){
    if(!props.data_array.length){
        return null;
    }
    return(
        <div className="contact note-sub-block">
            <span>Contact</span>
            <div className="working-grid" style={{gridTemplateColumns:`repeat(${props.data_array.length}, 100%)`}}>
            {props.data_array.map((element, index)=>{
                return (<div key={index}>
                            <div>
                                <span></span>
                                <span>{element.data.title}</span>
                                <span>{element.data.contact_value}</span>
                            </div>
                        </div>
                );
            })}
        </div>
        </div>
    )
}
function NoteLinkBlock(props){

    if(!props.data_array.length){
        return null;
    }

    return(
        <div className="note-sub-block link">
            <span>Link</span>
            <div className="working-grid" style={{gridTemplateColumns : `repeat(${props.data_array.length}, 100%)`, gridGap:'0px 2em'}}>
            {props.data_array.map((element, index)=>{
                return(
                    <div key={index}>
                        <span></span>
                        <span>{element.data.title}</span>
                        <span>{element.data.link_address.length > 30 ? `${element.data.link_address.substr(0,30)}...` : element.data.link_address}</span>
                    </div>
                );
            })}
            </div>
        </div>
    )
}

function NoteLocationBlock(props){
    if(!props.data_array.length){
        return null;
    }
    return(
        <div className="note-sub-block location">
            <span>Location</span>
            <div className="working-grid" style={{gridGap:'0px 2em', gridTemplateColumns:`repeat(${props.data_array.length}, 100%)`}}>
            {props.data_array.map((element, index)=>{
                return(
                    <div key={index}>
                    <span></span>
                    <div>
                        <span>{element.data.title}</span>
                        <p>{element.data.location_address}</p>
                    </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

function NoteListBlock(props){
    let [note_data, set_note_data] = useContext(NoteDataContext);
    let user = useContext(UserContext)[0];
    if(!props.data_array.length){
        return null;
    }
    return(
        <div className="note-sub-block list">
            <span>{props.is_checked ? 'CheckList':'List'}</span>
            <div className="working-grid" style={{gridTemplateColumns:`repeat(${props.data_array.length}, 100%)`}}>
            {props.data_array.map((element, index)=>{
                return <ul key={index} is_checked={props.is_checked} >
                            <span>{element.data.title}</span>
                    {element.data.list_items.map((element,c_index)=>{
                        return (<li key={c_index} check={element.checked} onClick={()=>{
                            if(props.is_checked === 0){
                                return;
                            }
                            let list_block_id = props.data_array[index].id;
                            let note_index = props.index;
                            set_note_data(note_data.map((element, d_index)=>{
                                if(d_index === note_index){
                                     element.checklists.map((list_block)=>{
                                        if(list_block.id === list_block_id){
                                            list_block.data.list_items[c_index].checked = (Number(list_block.data.list_items[c_index].checked) + 1)%2;
                                        }
                                        return list_block;
                                    })
                                }
                                    return element;
                            }))
                            EditNoteWithId(convertNoteDatatoEditData(note_data[props.index]), user.username);
                        }}>
                                    <i></i><span>{element.item}</span>
                               </li>);
                    })}
                </ul>
            })}
        </div></div>
    );
}

function NoteImageBlock(props){
    if(!props.data_array.length){
        return null;
    }
    return(
        <div className="note-sub-block image">
            <span>Image</span>
            <div className="working-grid" style={{gridTemplateColumns:`repeat(${props.data_array.length}, 100%)`}}>
            {
                props.data_array.map((element,index)=>{
                    return(
                        <div key={index}>
                            <img src={element.data.image_url} alt="could not load"/>
                            <p>{element.data.image_caption}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

function NoteEventBlock(props){

    if(!props.data_array.length){
        return null;
    }
    return(
        <div className="note-sub-block event">
            <span>Events</span>
            <div className="working-grid" style={{gridTemplateColumns:`repeat(${props.data_array.length}, 100%)`}}>
            {props.data_array.map((element, index)=>{
                return(<div key={index}>
                    <span>{element.data.title.split(' ').map((element, index)=>{
                        return <b key={index}>{element} </b>
                    })}</span>
                    <span><small>on</small> {new Date(element.data.year, element.data.month - 1, element.data.day).toDateString()} <small>at</small> {element.data.hours}:{element.data.minutes} HRS</span>
                </div>)
            })}
            </div>
        </div>
    )
}

function TitleBlock(props){
    let [note_data, set_note_data] = useContext(NoteDataContext);
    let user_data = useContext(UserContext)[0].username;
    let set_alert = useContext(AlertContext)[1];
    let set_edit_note_data = useContext(EditNoteDataContext)[1];
    let set_edit_note_active = useContext(EditNoteContext)[1];
    return(
        <div className="title-block">
            <h2>{props.title}</h2>
            <div className="btn-group">
                <span onClick={(e)=>{
                    e.target.parentNode.parentNode.parentNode.parentNode.style.transform +=' scale(0)';
                    setTimeout(()=>{
                        set_note_data(note_data.filter((element, index)=>{
                            return element.id !== note_data[props.index].id;
                        }));
                        DeleteNoteWithId(note_data[props.index].id, user_data);
                        set_alert([3,'Note Deleted Succesfully']);
                    },400)
                }}></span> {/*this is the delete button*/}
                <span onClick={()=>set_alert([3,'Coming Soon...'])}></span> {/*this is the share button*/}
                <span onClick={()=>{
                    set_edit_note_data([...convertNoteDatatoEditData(note_data[props.index])]);
                    set_edit_note_active(1);
                }}></span> {/*this is the edit button*/}
            </div>
            <span>Added on {props.date_created}</span>
        </div>
    )
}

function NoteBlock(props){
    return(
        <div className="note-block">
            <TitleBlock index={props.index} title={props.title} date_created={props.date_created}/>
            <NoteTextBlock data_array={props.texts}/>
            <NoteContactBlock data_array={props.contacts}/>
            <NoteTransactionBlock data_array={props.transactions}/>
            <NoteListBlock data_array={props.checklists} is_checked={1} id={props.id} index={props.index}/>
            <NoteListBlock data_array={props.lists} is_checked={0} id={props.id} index={props.index}/>
            <NoteImageBlock data_array={props.images}/>
            <NoteLinkBlock data_array={props.links}/>
            <NoteEventBlock data_array={props.events}/>
            <NoteLocationBlock data_array={props.locations}/>
        </div>
    );
}

let ResizeContext = React.createContext();

function NoteCollection(props){

    let note_data = useContext(NoteDataContext)[0];
    let [resize_event, set_resize_event] = useState(0);
    let collection_ref = useRef(null);
    let size_ref = useRef(window.innerWidth > 1270 ? 3 : (window.innerWidth < 700) ? 1 : 2);
    let masonry_object = useRef(new MasonryObject({
        main_className : 'note-block-collapse-btn-wrapper',
        parent_className:'note-collection',
        size:size_ref.current,
        count:note_data.length,
        element_base_height:500,
        element_base_span:440
    }));
    useEffect(()=>{
        if(window.innerWidth < 800){
            masonry_object.current.changeSizeAndMainArray(1);
            collection_ref.current.style.marginLeft = `calc(50% - 220px)`;
        }
        else if(window.innerWidth < 1270){
            masonry_object.current.changeSizeAndMainArray(2);
            collection_ref.current.style.marginLeft = `calc(50% - 440px)`;
        }
        else if(window.innerWidth > 1270){
            masonry_object.current.changeSizeAndMainArray(3);
            collection_ref.current.style.marginLeft = `calc(50% - 660px)`;
        }
    },[note_data])
    let timeoutIntervalId = -1;
    window.onresize = (()=>{
        clearTimeout(timeoutIntervalId);
        timeoutIntervalId = setTimeout(()=>{

            if(window.innerWidth < 800){
                masonry_object.current.changeSizeAndMainArray(1);
                collection_ref.current.style.marginLeft = `calc(50% - 220px)`;
            }
            else if(window.innerWidth < 1270){
                masonry_object.current.changeSizeAndMainArray(2);
                collection_ref.current.style.marginLeft = `calc(50% - 440px)`;
            }
            else if(window.innerWidth > 1270){
                masonry_object.current.changeSizeAndMainArray(3);
                collection_ref.current.style.marginLeft = `calc(50% - 660px)`;
            }
        })
    })

    return (<div className="note-collection" ref={collection_ref}>
    <ResizeContext.Provider value={[resize_event, set_resize_event]}>
    {
        note_data.map((element, index)=>{
            return (
            <div className="note-block-collapse-btn-wrapper" key={element.id}> {/*style={{transform:`translate(${(index % size_ref.current) * 420}px, ${Math.floor(index / size_ref.current) * 450}px)`}} */}
                <NoteBlock
                index={index}
                id={element.id}
                title={element.title || 'Note Title Here'}
                date_created={element.date_created}
                texts={element.texts || []}
                events={element.events || []}
                images={element.images || []}
                locations={element.locations || []}
                transactions={element.transactions || []}
                checklists={element.checklists || []}
                lists={element.lists || []}
                links={element.links || []}
                contacts={element.contacts || []}
                />
                <span onClick={(e)=>{
                    e.target.parentNode.classList.toggle('expand');
                    masonry_object.current.SetLayout(index, e.target.parentNode.classList.contains('expand'));
                }}>Toggle View</span>
        </div>
            )
        })
    }
    </ResizeContext.Provider>
    </div>);
}
//all note-blocks based on the different possible categories



function NotesBoard(props){
    return(
        <React.Fragment>
            <NoteHeading/>
            <NoteCollection/>
       </React.Fragment>
    );
}
export default NotesBoard;