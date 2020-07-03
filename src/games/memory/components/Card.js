import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import StyleCard from './style.Card';

function Card({
  onCardClick, isActive, isRight, children,
}) {
  return (
    <StyleCard>
      <div
        onClick={onCardClick}
        className={classNames('Card',
          { active: isActive },
          { right: isActive && (isRight === true) },
          { error: isActive && (isRight === false) })}
      >
        {children}
      </div>
    </StyleCard>
  );
}

Card.propTypes = {
  onCardClick: PropTypes.func,
  isActive: PropTypes.bool,
  isRight: PropTypes.bool,
  children: PropTypes.string,
};

Card.defaultProps = {
  onCardClick: () => {},
  isActive: false,
  isRight: false,
  children: '',
};

export default Card;
