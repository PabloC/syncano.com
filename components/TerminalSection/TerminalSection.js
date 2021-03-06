import React from 'react';
import classNames from 'classnames';

const TerminalSection = ({ variant, theme, headline, textline, children }) => {
  const className = classNames({
    'terminal-section': true,
    'terminal-section--under-page-header': (variant === 'under-page-header'),
    'terminal-section--hosting-publish': (theme === 'hosting-publish')
  });

  return (
    <div className={className}>
      <div className="inner">
        {headline && <h2>{headline}</h2>}
        {textline && <h3>{textline}</h3>}
        {children}
      </div>
    </div>
  );
};

export default TerminalSection;
