import profilepic from '@/assets/images/profilepic.jpg'
import CreatePostButton from '../base/createPostButton'

export default function AppHeader({state}){
    return (
        <div className=" trackink-thigher flex items-center justify-between px-4 py-4">
            <div className='flex items-center space-x-3'>
                <img 
                    src={profilepic} 
                    alt="profile pic" 
                    className="w-10 h-10 rounded-full "
                />
                <div>
                    <h1 className="text-greyScale800 text-sm">Hi Shoilitey</h1>
                    <p className="text-xs text-greyScale300">Pret a envoyer des colis?</p>
                </div>
            </div>
            <CreatePostButton onStateChange={state}/>
            
        </div>
    )
}