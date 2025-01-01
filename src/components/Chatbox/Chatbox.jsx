import './Chatbox.css'

import { useState } from 'react';
import { IoSend } from "react-icons/io5";

function Chatbox() {

    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");

    function handleSend() {
        if (inputMessage.trim() === "") return;

        setMessages([...messages, inputMessage]);

        console.log(messages);
        setInputMessage("");
    }

    function handleKeyPress(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSend();
        }
    }


    return (
        <div className="chatbox-container">
            <div className='messages'>
                { messages.map((msg, index) => (
                    index%2 === 0 ? (
                        <div className='message-even' key={index}>
                            {msg}
                        </div>
                    ) : (
                        <div className='message-odd' key={index}>
                            {msg}
                        </div>
                    )
                ))}
            </div>

            <div className="inputfield">
                <textarea
                    type="text"
                    className='input-text'
                    placeholder='Message..'
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                >
                </textarea>
                <button
                    className='send-icon'
                    onClick={handleSend}
                >
                    <IoSend />
                </button>
            </div>
        </div>
    );
}

export default Chatbox