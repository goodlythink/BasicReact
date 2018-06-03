import React from 'react'

const LikeButton = (props) => {
    return (
        <button onClick={() => props.clickLike(props.like)}>
            {props.like ? 'Like Me' : 'DisLike'}
        </button>
    )
}

/*
class LikeButton extends React.Component {
    render() {
        return (
            <button onClick={() => this.props.clickLike(this.props.like)}>
                {this.props.like ? 'Like Me' : 'DisLike'}
            </button>
        )
    }
}
*/

export default LikeButton