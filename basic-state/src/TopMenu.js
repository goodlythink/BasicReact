import React from 'react'
import './TopMenu.css'

const TopMenu = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

// class TopMenu extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.children}
//             </div>
//         )
//     }
// }

export default TopMenu