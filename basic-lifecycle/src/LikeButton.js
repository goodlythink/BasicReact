import React from 'react'

class LikeButton extends React.Component {
    constructor(props) {
        super(props)

        console.log('LikeButton constructor')
    }

    componentWillMount() {
        console.log('LikeButton componentWillMount')
    }

    componentDidMount() {
        console.log('LikeButton componentDidMount')
    }

    componentWillReceiveProps(nextProps) {
        console.log('LikeButton componentWillReceiveProps')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('LikeButton shouldComponentUpdate')
        return true
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('LikeButton componentWillUpdate')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('LikeButton componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('LikeButton componentWillUnmount')
    }

    render() {
        console.log('LikeButton render')
        return (
            <button onClick={this.props.onClickLike}>Like Me</button>
        )
    }
}

export default LikeButton