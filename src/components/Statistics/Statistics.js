import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>

      <ul className={s.statList}>
        <li className={s.item}>
          <span className={s.label}>.docx</span>
          <span className={s.percentage}>4%</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>.mp3</span>
          <span className={s.percentage}>14%</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>.pdf</span>
          <span className={s.percentage}>41%</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>.mp4</span>
          <span className={s.percentage}>12%</span>
        </li>
      </ul>
    </section>
  );
}

export default Statistics;
