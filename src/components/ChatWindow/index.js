import React from "react";
import store from '../../store';
import Header from '../Header';
import Chats from '../Chats';
import _ from 'lodash';
import './ChatWindow.css';
import MessageInput from "../../containers/MessageInput";

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const messages = state.messages[activeUserId];
  const { typing } = state;

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(messages)} />
      <MessageInput value={typing} />
    </div>
  );
};

export default ChatWindow;