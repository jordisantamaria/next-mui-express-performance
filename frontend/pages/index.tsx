import type { NextPage } from 'next'
import { BaseLayout } from '../src/components/BaseLayout'
import BaseTable from '../src/components/BaseTable'

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <h1>Fetch1</h1>
      <BaseTable/>
    </BaseLayout>
  )
}

export default Home

