import React from 'react';
import { useSelector } from 'react-redux';

import { TState } from '@store/reducer';

const Message: React.FC = () => {

  const {isVisible, isWarning, label, text} = useSelector((state: TState) => state.message);

  return (
    <div className={`message ${isWarning ? 'message--warning' : ''}${isVisible ? ' message--show' : ''}`}>
      <b>{label}</b> {text}
    </div>
  );
}

export default Message;
