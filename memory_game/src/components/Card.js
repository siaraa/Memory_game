import React from 'react'

class Card extends React.Component {
    handleClick = (event) => {
        event.target.classList.remove("text-secondary")
        event.target.classList.add("text-black")
    }
    render () {
       return (<div className = "col-3 bg-secondary text-secondary" onClick={this.handleClick} >< i className = {this.props.fromParent}></i></div>)
       }
    }


export default Card
