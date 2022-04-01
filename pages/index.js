import styled from 'styled-components'

import Head from 'next/head'
import Intro from '../src/components/intro'

export default function Home() {
  return (
    <>
      <Intro />
      <Head>
        <title>Let's Create Gifts</title>
      </Head>
    </>
  )
}
