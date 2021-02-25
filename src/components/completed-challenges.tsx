import { useContext } from 'react'
import { ChallengesContext } from '../context/challenges-context'
import styles from '../styles/components/completed-challenges.module.css'

export function CompletedChallenges () {
  const { challengesCompleted } = useContext(ChallengesContext)
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}