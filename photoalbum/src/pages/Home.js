import React from 'react'
import { connect } from 'react-redux'

class Home extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Hello Home</h1>
                <h4>ยอด Like: {this.props.likeMe}</h4>
                <button onClick={this.props.likeFn}>Like</button>
                <button onClick={this.props.disLikeFn}>DisLike</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        likeMe: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return{
        likeFn: ()=>{
            dispatch({
                type: "LIKE"
            })
        },
        disLikeFn: ()=>{
            dispatch({
                type: "DISLIKE"
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)