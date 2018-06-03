import React from 'react'
import { connect } from 'react-redux'
import UserList from '../component/UserList'


class User extends React.Component {
    state = { data: null, err: null }

    componentDidMount() {
        /*
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(result => result.json())
            .then(resultData => this.setState({ data: resultData }))
            */
        this.props.loadUsers()
    }

    render() {
        // const { data, err } = this.state
        const { users } = this.props
        console.log(users)
        let list = <div>Loading...</div>

        // if (data) {
        //     if (data.length > 0) {
        //         list = <UserList data={data} />
        //     } else {
        //         list = <div>No Data</div>
        //     }
        // }

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

function mapDispatchToProps(dispatch) {
    return {
        loadUsers: () => {
            dispatch({
                type: 'LOAD_USERS',
                payload: fetch('http://jsonplaceholder.typicode.com/users')
                .then(result => result.json())
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(User)