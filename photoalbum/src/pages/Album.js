import React from 'react'
import { connect } from 'react-redux'
import { loadAlbums } from '../actions'

import AlbumList from '../component/AlbumList'

class Album extends React.Component {
    componentDidMount() {
        this.props.dispatch(loadAlbums(this.props.match.params.id))
    }

    render() {
        const username = new URLSearchParams(this.props.location.search).get("username")
        const { albums } = this.props

        let list = <div>Loading...</div>

        if (!albums.isFailed && albums.data) {
            if (albums.data.length > 0) {
                list = <AlbumList data={albums.data} />
            } else {
                list = <div>No Data</div>
            }
        }

        if (albums.isFailed) {
            list = <div>Error: {albums.data}</div>
        }

        return (
            <div>
                <h1>Album {this.props.match.params.id} {username}</h1>
                {list}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        albums: state.albums
    }
}

export default connect(mapStateToProps)(Album)