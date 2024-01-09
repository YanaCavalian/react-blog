import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './Header.css'
import Logo from '../../assets/jpegs/logo.png'

export const Header = () => {
  const { t } = useTranslation()

  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="nav">
        <nav>
          <ul>
            <li>
              <Link to="/home">{t('home')}</Link>
            </li>
            <li>
              <Link to="/acquired_skills">{t('acquired_skills')}</Link>
            </li>
            <li>
              <Link to="/project">{t('project')}</Link>
            </li>
            <li>
              <Link to="/contact">{t('contact')}</Link>
            </li>
            <li>
              <Link to="/article">{t('article')}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
