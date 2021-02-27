import { useContext } from 'react'
import { ChallengesContext } from '../context/challenges-context'
import styles from '../styles/components/profile.module.css'

export function Profile () {
  const { level } = useContext(ChallengesContext)
  
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/cotriml.png" alt="Lucas Cotrim" />
      <div>
        <strong>Lucas Cotrim</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}