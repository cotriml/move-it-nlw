import { CompletedChallenges } from '../components/completed-challenges';
import { Countdown } from '../components/countdown';
import { ExperienceBar } from '../components/experience-bar';
import { Profile } from '../components/profile';

import Head from 'next/head'
import { GetServerSideProps } from 'next'

import styles from '../styles/pages/home.module.css'
import { ChallengeBox } from '../components/challenge-box';
import { CountdownProvider } from '../context/countdown-context';
import { ChallengesProvider } from '../context/challenges-context';

type homeProps = {
  level: number
  currentExperience: number
  challengesCompleted: number
}

export default function Home (props: homeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
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
      </div>
    </ChallengesProvider >
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}