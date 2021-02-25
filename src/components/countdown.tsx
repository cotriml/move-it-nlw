import styles from '../styles/components/countdown.module.css'
import { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../context/challenges-context';

let countdownTimeout: NodeJS.Timeout;

export function Countdown () {
  const { startNewChallenge } = useContext(ChallengesContext)

  const totalMinutes = 0.1
  const [time, setTime] = useState(totalMinutes * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  function startCountdown () {
    setIsActive(true)
  }

  function resetCountdown () {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(totalMinutes * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time])

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          disabled
          className={styles.countdownButton}>
          Ciclo encerrado
        </button>
      ) : (
          <>
            {
              isActive ? (
                <button
                  type="button"
                  className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                  onClick={resetCountdown}>
                  Abandonar Ciclo
                </button>
              ) : (
                  <button
                    type="button"
                    className={styles.countdownButton}
                    onClick={startCountdown}>
                    Iniciar um Ciclo
                  </button>
                )
            }
          </>
        )}
    </div >
  )
}