import React from 'react';
import { Project } from 'src/shared/projects/types';
import styles from './projects.scss';
import eggPreview from './../../assets/eggsPreview.jpg';

export const Projects = () => {
  const projectList: Project[] = [
    {
      name: 'Spinning eggs',
      description: `Философский эксперимент в цифровой форме. 
      Каждый поворот яйца приближает нас к ответу на вечный вопрос: что появилось раньше - курица или яйцо? 
      Крути, размышляй, ищи истину... или просто наслаждайся процессом!`,
      link: 'https://rzmvski.github.io/spinning-eggs/',
    },
  ];
  return (
    <div className={styles.portfolio__projects}>
      {projectList.map(({ name, link, description }, index) => (
        <a key={index} className={styles.portfolio__projects__card} href={link} target={'_blank'} rel={'noreferrer'}>
          <div className={styles.portfolio__projects__card__imageContainer}>
            <img src={eggPreview} alt={'eggs'} />
          </div>
          <div className={styles.portfolio__projects__card__info}>
            <h4>{name}</h4>
            <span>{description}</span>
          </div>
        </a>
      ))}
    </div>
  );
};
