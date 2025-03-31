import React, { ReactNode } from 'react';
import styles from './header.scss';

interface HeaderProps {
  name: string;
  description: string;
  children: ReactNode;
}

export const Header = ({ name, description, children }: HeaderProps) => {
  return (
    <div className={styles.header}>
      <h1>{name}</h1>
      <h2>{description}</h2>
      {children}
    </div>
  );
};
