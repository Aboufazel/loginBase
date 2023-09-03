import {useEffect, useState} from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import React from "react";
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    TypingIndicator, ConversationHeader, Avatar, InfoButton,
} from '@chatscope/chat-ui-kit-react';
import {NewKey} from "../api/appApi";
import {useNavigate} from "react-router-dom";
import {Button} from "@material-tailwind/react";


const systemMessage = { //  Explain things like you're talking to a software professional with 5 years of experience.
    "role": "system",
    "content": "I am a helpful assistant."
}

function Chat() {

    useEffect(() => {
        handleSend("write me a complete code for chrome extension")
    }, []);

    const [messages, setMessages] = useState([
        {
            message: " welcome to chat  ",
            sentTime: "just now",
            sender: "ChatGPT"
        }
    ]);
    const navigate = useNavigate();
    const [isTyping, setIsTyping] = useState(false);

    const handleSend = async (message) => {
        const newMessage = {
            message,
            direction: 'outgoing',
            sender: "user"
        };

        const newMessages = [...messages, newMessage];

        setMessages(newMessages);

        // Initial system message to determine ChatGPT functionality
        // How it responds, how it talks, etc.
        setIsTyping(true);
        await processMessageToChatGPT(newMessages);
    };

    async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
        // Format messages for chatGPT API
        // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
        // So we need to reformat

        let apiMessages = chatMessages.map((messageObject) => {
            let role = "";
            if (messageObject.sender === "ChatGPT") {
                role = "assistant";
            } else {
                role = "user";
            }
            return { role: role, content: messageObject.message}
        });


        // Get the request body set up with the model we plan to use
        // and the messages which we formatted above. We add a system message in the front to'
        // determine how we want chatGPT to act.
        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                systemMessage,  // The system message DEFINES the logic of our chatGPT
                ...apiMessages // The messages from our chat with ChatGPT
            ]
        }

        await fetch("https://api.openai.com/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + NewKey,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(apiRequestBody)
            }).then((data) => {
            return data.json();
        }).then((data) => {
            setMessages([...chatMessages, {
                message: data.choices[0].message.content.json,
                sender: "ChatGPT"
            }]);
            setIsTyping(false);
        });
    }

    return (
        <React.Fragment>
            <MainContainer style={{height: "90vh", border: "none"}}>
                <ChatContainer>
                    <ConversationHeader style={{marginBottom:"15px"}} role={'sender'}>
                        <ConversationHeader.Back onClick={() => navigate('/')} />
                        <Avatar status={"available"} name={"extension"}
                                src={"https://chatscope.io/storybook/react/static/media/zoe.e31a4ff8.svg"}/>
                        <ConversationHeader.Content userName=" Extention Chat " info="Online"/>
                    </ConversationHeader>
                    <MessageList
                        scrollBehavior="smooth"
                        typingIndicator={isTyping ? <TypingIndicator content=" chat is typing "/> : null}
                    >
                        {messages.map((message, i) => {
                            // console.log(message)
                            return <Message className={"text-start"} key={i} model={message}/>
                        })}
                    </MessageList>
                </ChatContainer>
            </MainContainer>
        </React.Fragment>
    )
}

export default Chat