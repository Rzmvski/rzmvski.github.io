import { ContactInfo } from 'src/shared/contacts/types';
import { FaGithub, FaTelegram } from 'react-icons/fa';
import React from 'react';
import { MdEmail } from 'react-icons/md';
import styles from './contacts.scss';

export const Contacts = () => {
  const contacts: ContactInfo[] = [
    {
      icon: <FaTelegram />,
      value: '@rzmvski',
      link: 'https://t.me/rzmvski',
    },
    {
      icon: <MdEmail />,
      value: 'victor.razumovski@gmail.com',
      link: 'mailto:victor.razumovski@gmail.com',
    },
    {
      icon: <FaGithub />,
      value: 'rzmvski',
      link: 'https://github.com/Rzmvski',
    },
  ];
  return (
    <div className={styles.contacts}>
      {contacts.map(({ icon, value, link }, index) => (
        <a key={index} className={styles.contactItem} href={link} target={'_blank'} rel={'noreferrer'}>
          {icon}
          {value}
        </a>
      ))}
    </div>
  );
};
