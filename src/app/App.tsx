import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from 'src/shared/header/Header';
import { PortfolioSection } from 'src/shared/portfolio/PortfolioSection';
import { TechStack } from 'src/shared/techstack/TechStack';
import { Projects } from 'src/shared/projects/Projects';
import { Contacts } from 'src/shared/contacts/Contacts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header name={'Разумовский Виктор'} description={'Java, Kotlin разработчик'}>
          <Contacts />
        </Header>
        <PortfolioSection title={'Мой технологический стэк:'}>
          <TechStack />
        </PortfolioSection>
        <PortfolioSection title={'Мои учебные проекты:'}>
          <Projects />
        </PortfolioSection>
      </header>
    </div>
  );
}

export default App;
