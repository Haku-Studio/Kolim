import { createFileRoute } from '@tanstack/react-router'
import AppLayout from '../../components/appLayout'

export const Route = createFileRoute('/auth/')({
  component: Auth,
})

function Auth() {
  return (
        <AppLayout>
            <div className='pt-10'>
            page de connexion
            </div>
        </AppLayout>
    )  
}
