import { Stack, Status } from 'src/shared/techstack/types';
import { FaGraduationCap, FaJava, FaReact } from 'react-icons/fa';
import React from 'react';
import { SiKotlin, SiPostgresql, SiSpring, SiTypescript } from 'react-icons/si';
import styles from './techstack.scss';

export const TechStack = () => {
  const technologies: Stack[] = [
    { name: 'Java', icon: <FaJava />, status: 'proficient' },
    { name: 'Kotlin', icon: <SiKotlin />, status: 'proficient' },
    { name: 'Spring', icon: <SiSpring />, status: 'proficient' },
    { name: 'Postgres', icon: <SiPostgresql />, status: 'proficient' },
    { name: 'Typescript', icon: <SiTypescript />, status: 'learning' },
    { name: 'React', icon: <FaReact />, status: 'learning' },
  ];

  const statusClasses: Record<Status, string> = {
    proficient: styles.techstack__item__statusDone,
    learning: styles.techstack__item__learning,
  };

  return (
    <div className={styles.techstack}>
      {technologies.map(({ name, icon, status }, index) => (
        <div
          key={index}
          className={`${styles.techstack__item} ${styles.techstack__item__status} ${statusClasses[status]}`}
        >
          {icon}
          <span className={styles.techstack__item__name}>{name}</span>
          {status == 'learning' && (
            <div className={styles.learningBadge}>
              <FaGraduationCap />
              <span>Изучаю</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
