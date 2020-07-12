import React from 'react';
import PropTypes from 'prop-types';
import styles from './Audiocall.module.css';
import Exit from '../../../common/components/Modals/Exit';

export default function Startpage({ callback }) {
  return (
    <div className={styles.Startpage}>
      <div className={styles.Header}>
        <Exit />
      </div>
      <h2>
          Аудиовызов
      </h2>
      <p>
          Тренировка улучшает восприятие английской речи на слух.
      </p>
      <button
        onClick={ () => callback(true) }
        className={styles.StartBtn}
        type="button"
      >
        Start
      </button>
      <div className={styles.Footer}>
        <img
          className={styles.WomanImage}
          src="/assets/images/audiocall/woman.png"
          alt="woman"
        />
      </div>
    </div>
  );
}

Startpage.propTypes = {
  callback: PropTypes.func.isRequired,
};
