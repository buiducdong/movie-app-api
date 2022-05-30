import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';
const Button = (props) => {
  return (
    <button
      style={{ borderRadius: `${props.itemPlay && '40px'}` }}
      className={`btn ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </button>
  );
};

export const OutlineButton = (props) => {
  return (
    <Button
      className={`btn-outline ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </Button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
