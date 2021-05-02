import React from 'react'

class Card extends React.Component {
    render () {
       return (<div><i class={this.props.fromParent}></i></div>)
       }
    }


export default Card
