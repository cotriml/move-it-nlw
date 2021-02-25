import { ChallengesProvider } from '../context/challenges-context'
import '../styles/global.css'

function MyApp ({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
