import React from 'react'
import { connect } from 'react-redux'
import UserList from '../component/UserList'
import { loadUsers } from '../actions'

class User extends React.Component {

    componentDidMount() {
        this.props.dispatch(loadUsers())
    }

    render() {
        const { users } = this.props

        let list = <div>Loading...</div>

        if (!users.isFailed && users.data) {
            if (users.data.length > 0) {
                list = <UserList data={users.data} />
            } else {
                list = <div>No Data</div>
            }
        }

        if (users.isFailed) {
            list = <h4>Error: {users.data}</h4>
        }

        return (
            <div>
                <h1>Hello User</h1>
                {list}
                <button onClick={this.goBack}>Go Back</button>
            </div>
        )
    }

    goBack = () => {
        this.props.history.goBack()
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(User)