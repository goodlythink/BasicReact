import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Main Menu</h1>
                <ul>
                    <li><Link to="/">หน้าหลัก</Link></li>
                    <li><Link to="/user">ผู้ใช้งาน</Link></li>
                </ul>
            </div>
        )
    }
}

export default Header