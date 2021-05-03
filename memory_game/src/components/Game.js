import React from 'react'
import Card from './Card'

class Game extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            cards: [ ]
        }
    }

    icons = ['fab fa-angellist fa-4x', 'fas fa-american-sign-language-interpreting fa-3x', 'fas fa-allergies fa-4x', 'fas fa-handshake fa-3x', 'fas fa-thumbs-up fa-3x', 'fas fa-hands fa-3x' ]


    componentDidMount(){
        let tmp = [];   //arr of numbers to random cards

        let numberGenerator = function(arr) {
            if (arr.length >= 12) return;
            let newNumber = Math.floor(Math.random() * 12 + 1);
            if (arr.indexOf(newNumber) < 0) {
                arr.push(newNumber);
            }
            numberGenerator(arr);
        };

        numberGenerator(tmp);
        for(let i = 0; i < tmp.length; i++) {
            tmp[i] -= 1
            if(tmp[i] > 5) {
                tmp[i] = tmp[i] - 6
            }
        }
        this.setState({
        cards: tmp
        })
    }

    render(){
        const {cards} = this.state;
        console.log(cards)
        return(
            <div className="container-fluid w-100">
                <div className="row justify-content-center">
                    <Card fromParent = {this.icons[cards[0]]}/>
                    <Card fromParent = {this.icons[cards[1]]}/>
                    <Card fromParent = {this.icons[cards[2]]}/>
                </div>
                <div className="row justify-content-center">
                    <Card fromParent = {this.icons[cards[3]]}/>
                    <Card fromParent = {this.icons[cards[4]]}/>
                    <Card fromParent = {this.icons[cards[5]]}/>
                </div>
                <div className="row justify-content-center">
                    <Card fromParent = {this.icons[cards[6]]}/>
                    <Card fromParent = {this.icons[cards[7]]}/>
                    <Card fromParent = {this.icons[cards[8]]}/>
                </div>
                <div className="row justify-content-center">
                    <Card fromParent = {this.icons[cards[9]]}/>
                    <Card fromParent = {this.icons[cards[10]]}/>
                    <Card fromParent = {this.icons[cards[11]]}/>
                </div>
            </div>    
        )
    }
}

export default Game;