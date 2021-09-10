import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

const Input = () => (
  <div className={styles.Input} data-testid="Input">
    Input Component
  </div>
);

Input.propTypes = {};

Input.defaultProps = {};

export default Input;
