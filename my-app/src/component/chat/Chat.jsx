import React from 'react'
import "./Chat.css"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton,Avatar } from '@material-ui/core';
function Chat() {
    return (
        <div className="sharedFiles">
            <ul>
                <li>
                    <div className="sharedFiles__header">
                        <IconButton><ArrowBackIosIcon /></IconButton>
                        <h3>shared files</h3>
                    </div>

                </li>
                <hr />
                <li>
                    <div className="sharedFiles__info">
                        <img src="" alt="" className="sharedFiles__info--img" />
                        
                    </div>
                </li>
            </ul>

        </div>
    )
}

export default Chat
