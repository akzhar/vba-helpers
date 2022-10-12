import React from 'react';

type TTooltipProps = {
  children: React.ReactNode,
  message: string,
  position?: 'top'|'right'|'bottom'|'left'
};

const Tooltip: React.FC<TTooltipProps> = ({ children, message, position = 'top' }) => (
  <div className="tooltip">
    <div className="tooltip__element">{children}</div>
    <span className={`tooltip__popup-hint tooltip__popup-hint--${position}`}>{message}</span>
  </div>
);

export default Tooltip;
