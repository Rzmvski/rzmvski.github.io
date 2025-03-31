import React, { ReactNode } from 'react';
import styles from './portfolio.scss';

interface PortfolioSectionProps {
  title: string;
  children: ReactNode;
}

export const PortfolioSection = ({ title, children }: PortfolioSectionProps) => {
  return (
    <>
      <h3 className={styles.portfolio__sectionTitle}>{title}</h3>
      {children}
    </>
  );
};
