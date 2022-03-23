import type { NextPage } from 'next'
import Game from './components/Board'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Game />
    </div>
  )
}

export default Home
