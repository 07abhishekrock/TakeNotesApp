import React, {useContext} from 'react';
import {UserContext} from './Contexts';
export default function QuickPeek(props){
    let user_data = useContext(UserContext)[0];
    return (
        <div className="quick-peek">
            <h1><i>Hey</i> {user_data.username},</h1>
            <p>Welcome to Take <i>Notes</i>, The Modern Note Taking App</p>
            <ul>
                <h4>Key Features</h4>
                <li>
                    <span>Note Contexts</span>
                    <p>Create Note Contexts, with variety of field types each with a different kind of information.</p>
                </li>
                <li>
                    <span>Healthy Note Making</span>
                    <p>Learn and Adapt to a healthy note-making practice, by segregating information into useful categories.</p>
                </li>
                <li>
                    <span>Fast And Safe</span>
                    <p>Don't worry on space, focus on usefulness. The data is stored on your machine, so loading time is almost 0 while viewing notes.</p>
                </li>
                <li>
                    <span>Easy To Use</span>
                    <p>Easy, clutterless UI lets you focus on the notes, use UNDO button to restore note sections. Notes are easy to Delete, Edit and Share.</p>
                </li>
            </ul>
        </div>
    )
}