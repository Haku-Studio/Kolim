import { createFileRoute } from '@tanstack/react-router'
import onboarding from '@/assets/backgrounds/onboarding.png'
import AuthModal from '../components/modals/authModal'
import { useAppStore } from '../store/useAppStore'

export const Route = createFileRoute('/onboarding')({
  component: Onboarding,
})


function Onboarding() {

  const isAuthModalOpen = useAppStore(state => state.isAuthModalOpen)
  const openAuthModal = useAppStore(state => state.openAuthModal)

  return (
    <div 
        style={{
            backgroundImage : `url('${onboarding}')`,
            backgroundRepeat : 'no-repeat',
            backgroundSize : 'cover'
        }} 
        className='h-screen w-full relative'
    >
      <button onClick={openAuthModal}>open Auth Modal</button>
      {
        isAuthModalOpen &&
        <AuthModal />
      }
    </div>
  )
}
