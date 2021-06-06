import React from 'react'
import { useParams } from 'react-router-dom'

function User(){
    const {id} = useParams()
    return (<div>
        User id from url: {id}
    </div>)
}
export default User