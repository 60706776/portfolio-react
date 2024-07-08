import React from 'react'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
    return (
        <header>
            <div className="left">
                <h1><Link to='allpost'>All-Post</Link></h1>
            </div>
            <div className="right">
                <h1><Link to='createpost'>Create-Post</Link></h1>
            </div>
        </header>
    )
}

export default AdminHeader