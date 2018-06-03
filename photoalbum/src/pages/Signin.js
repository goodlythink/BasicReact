import React from 'react'

class Signin extends React.Component {
    render() {
        return (
            <div>
                <h1>Signin</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <input type="text" className="form-control"/>
                    </p>
                    <p>
                        <input type="text"  className="form-control"/>
                    </p>

                    <button type="submit" className="btn btn-primary">Sign In</button>
                </form>
            </div>
        )
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        localStorage.setItem('react-token', true)
        this.props.history.push('/')
    }
}

export default Signin