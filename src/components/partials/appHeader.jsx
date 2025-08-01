import profilepic from '@/assets/images/profilepic.jpg'
import CreatePostButton from '../base/createPostButton'
import hand from '@/assets/icones/hand.svg'
import { useEffect, useState } from 'react'
import {createServer} from 'miragejs'


createServer({
    routes() {
        this.namespace = "api"
        this.get("/users", () => ({
            users : [
                {
                    id: 0,
                    name: 'Christy',
                    phoneNumber: +5058995101
                },
            ]
        }))
    }
})

export default function AppHeader({state}){

    //define users tables
      const [users, setUsers] = useState([])
    
      //fetch user from mirage js server
      useEffect(() => {
        fetch('/api/users')
        .then((res) => res.json())
        .then((datas) => setUsers(datas.users))
        .catch((err)=> console.error('ERREUR', err))
      })

    return (
        <div className=" trackink-thigher flex items-center justify-between px-4 py-4">
            <div className='flex items-center space-x-3'>
                <img 
                    src={profilepic} 
                    alt="profile pic" 
                    className="w-10 h-10 rounded-full"
                />
                <div>
                    
                    <div className='flex space-x-1'>
                        {
                            users.map((user) => (
                            <h1 className="text-greyScale800 text-sm">{user.name}</h1> 
                            ))
                        }
                        
                        <img src={hand} alt="" className='inline w-4 h-4'/>
                    </div>
                    <p className="text-xs text-greyScale300">Pret a envoyer des colis?</p>
                </div>
            </div>
            <CreatePostButton onStateChange={state}/>
            
        </div>
    )
}