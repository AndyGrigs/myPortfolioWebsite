import React, { FC } from 'react'
import { IUser } from '../types/types'

interface UserItemProps {
    user: IUser
}

const UserItem: FC<UserItemProps> = ({user}) => {
  return (
    <div className='user-card'>
        <p> {user.name} live in {user.address.city} on {user.address.street}. Ones zipcode is {user.address.zipcode}</p>
    </div>
  )
}

export default UserItem