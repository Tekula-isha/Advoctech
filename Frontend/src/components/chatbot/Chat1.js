import React from 'react';
import 'react-chatbot-kit/build/main.css';
import Apps from './Apps.jsx';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

const MyChatbot = () => {
    return (
        <>
            <React.StrictMode>
                <div className="container">
                    <div>
                        {/* Updated the color to black */}
                        <h1 style={{ color: 'black', textAlign: 'center' }}>LEGAL ASSISTANT</h1>
                    </div>
                    <div>
                        <p className="CHATBOT" style={{ textAlign: 'center', fontSize: '18px' }}>
                            Welcome to our <b>LEGAL ASSISTANT</b>. We're here to help you understand your <b>rights</b> and <b>laws</b>. 
                            Ask questions about topics like freedom of speech, privacy, or voting rights, and get instant answers. 
                            Empower yourself with knowledge and make informed decisions. 💡
                        </p>
                    </div>
            
                    <Apps />
                </div>
            </React.StrictMode>
        </>
    );
};

export default MyChatbot;