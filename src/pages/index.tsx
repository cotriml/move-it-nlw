import { CompletedChallenges } from '../components/completed-challenges';
import { Countdown } from '../components/countdown';
import { ExperienceBar } from '../components/experience-bar';
import { Profile } from '../components/profile';

import Head from 'next/head'

import styles from '../styles/pages/home.module.css'
import { ChallengeBox } from '../components/challenge-box';
import { CountdownProvider } from '../context/countdown-context';

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Move.it</title>
      </Head>


      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div >
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>)
}