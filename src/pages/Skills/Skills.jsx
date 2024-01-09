import React from 'react'
import { useTranslation } from 'react-i18next'
import './Skills.css'
import skillsImage from '../../assets/jpegs/pageForSkills.jpeg'

export const Skills = () => {
  const { t } = useTranslation()

  return (
    <div className="skills-container">
      <div className="text-container">
        <div>
          <p>
            <strong> {t('acquired_skills')}</strong>
          </p>
          <p>
            <strong>HTML:</strong> {t('html')}
          </p>
          <p>
            <strong>CSS:</strong> {t('css')}
          </p>
          <p>
            <strong>JavaScript:</strong> {t('js')}
          </p>
        </div>
        <div>
          <p>
            <strong>React:</strong> {t('react')}
          </p>
          <p>
            <strong>GitHub:</strong> {t('github')}
          </p>
        </div>
      </div>
      <div className="image-container">
        <img src={skillsImage} alt={t('skills')} />
      </div>
    </div>
  )
}
