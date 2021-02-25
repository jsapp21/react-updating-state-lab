import React from 'react'

class DigitalClicker extends React.Component {
    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        this.setState(prevState => {
            return {
                timesClicked: prevState.timesClicked + 1
            }
        })
    }

    render(){
        return (
            <button onClick={this.handleClick}>I've been clicked {this.state.timesClicked} times!</button>
        )
    }
}

export default DigitalClicker
