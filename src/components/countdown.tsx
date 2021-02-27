import styles from '../styles/components/countdown.module.css'
import { useContext } from 'react'
import { CountdownContext } from '../context/countdown-context';


export function Countdown () {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

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