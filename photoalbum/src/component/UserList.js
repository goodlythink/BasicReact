import React from 'react'

class UserList extends React.Component {
    render() {
        const { data } = this.props
        return (
            <div>
                {
                    data.map(d => {
                        return (
                            <div key={d.id}>
                                <h4>{d.name} | {d.email}</h4>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default UserList