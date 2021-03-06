import React from 'react'
import { Link } from 'react-router-dom'

class UserList extends React.Component {
    render() {
        const { data } = this.props
        return (
            <div>
                {
                    data.map(d => {
                        return (
                            <div key={d.id}>
                                {/* <h4><Link to={`/album/${d.id}?username${d.name}`}>{d.name} | {d.email}</Link></h4> */}
                                <h4><Link to={"/album/" + d.id + "?username=" + d.name}>{d.name} | {d.email}</Link></h4>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default UserList