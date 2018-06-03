import React from 'react'

class AlbumList extends React.Component {
    render() {
        const { data } = this.props
        return (
            <div>
                {
                    data.map(d => {
                        return (
                            <div key={d.id}>
                                <h4>{d.title}</h4>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default AlbumList