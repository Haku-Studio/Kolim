import { createFileRoute } from '@tanstack/react-router'
import AuthButton from '../components/base/authButton'
import AppLayout from '../components/appLayout'
import SearchButton from '../components/base/searchButton'
import Tabs from '../components/base/tabs'
import AppContainer from '../components/partials/appContainer'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <AppLayout>
      <SearchButton />
      <Tabs />
      <AppContainer />
    </AppLayout>
  )
}