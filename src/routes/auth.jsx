import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth')({
  component: Auth,
})

function Auth() {
  return (
        <div>
            <h1>Hello "/auth"!</h1>
        </div>
    )  
}
