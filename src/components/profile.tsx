import styles from '../styles/components/profile.module.css'

export function Profile () {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/cotriml.png" alt="Lucas Cotrim" />
      <div>
        <strong>Lucas Cotrim</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  )
}