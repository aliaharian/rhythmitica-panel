import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function About() {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <p>here is about page</p>
        <p>{t('processing order')}</p>
        <p>
          <Link to="/">home</Link> / <Link to="/about">about</Link> / <Link to="/users">users</Link>
        </p>
      </header>

    </div>
  );
}

export default About;
