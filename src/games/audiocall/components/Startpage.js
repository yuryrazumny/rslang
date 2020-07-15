import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import styles from './Audiocall.module.css';
import Exit from '../../../common/components/Modals/Exit';
import LevelSwitcher from '../../../common/components/LevelSwitcher';

export default function Startpage({ callback }) {
  return (
    <div className={styles.Startpage}>
      <div className={styles.Header}>
        <Exit />
      </div>
      {/* <div className={styles.LevelSwitcher}> */}
      {/* <LevelSwitcher /> */}
      {/* </div> */}
      <div className={styles.center_alignment}>
        <h2>
          Аудиовызов
        </h2>
        <p>
          Тренировка улучшает восприятие английской речи на слух.
        </p>
        <Form>
          <Button
            className={styles.start_btn}
            onClick={ () => callback(true) }
            type="button"
          >
            Start
          </Button>
        </Form>
      </div>
      <img
        className={styles.decoration}
        src="/assets/images/audiocall/woman.svg"
        alt="woman"
      />
    </div>
  );
}

Startpage.propTypes = {
  callback: PropTypes.func.isRequired,
};
