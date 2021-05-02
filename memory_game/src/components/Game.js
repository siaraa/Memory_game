import React from 'react'
import Card from './Card'

class Game extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            cards: [ ]
        }
    }

    icons = [
        {
            _id: 1,
            link: 'fab fa-angellist fa-4x'
        },

        {
            _id: 2,
            link: 'fas fa-american-sign-language-interpreting fa-3x'
        },

        {
            _id: 3,
            link: 'fas fa-allergies fa-4x'
        },

        {
            _id: 4,
            link: 'fas fa-handshake fa-3x'
        },

        {
            _id: 5,
            link: 'fas fa-thumbs-up fa-3x'
        },

        {
            _id: 6,
            link: 'fas fa-hands fa-3x'
        }
    ]


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
            if(tmp[i] > 6) {
                tmp[i] = tmp[i]-6
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
            <div class="container-fluid w-100">
                <div class="row justify-content-center">
                    <div class="col-3" id="1">
                        <Card fromParent = {this.icons[0].link} />
                    </div>
                    <div class="col-3" id="2">
                        <Card fromParent = {this.icons[1].link}/>
                    </div>
                    <div class="col-3" id="3">
                        <Card fromParent = {this.icons[2].link}/>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-3" id="4">
                        <Card fromParent = {this.icons[3].link}/>
                    </div>
                    <div class="col-3" id="5">
                        <Card fromParent = {this.icons[4].link}/>
                    </div>
                    <div class="col-3" id="6">
                        <Card fromParent = {this.icons[5].link}/>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-3" id="7">
                        <Card fromParent = {this.icons[2].link}/>
                    </div>
                    <div class="col-3" id="8">
                        <Card fromParent = {this.icons[2].link}/>
                    </div>
                    <div class="col-3" id="9">
                        <Card fromParent = {this.icons[2].link}/>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-3" id="10">
                        <Card fromParent = {this.icons[2].link}/>
                    </div>
                    <div class="col-3" id="11">
                        <Card fromParent = {this.icons[2].link}/>
                    </div>
                    <div class="col-3" id="12">
                        <Card fromParent = {this.icons[2].link}/>
                    </div>
                </div>
                
            </div>    

        )
    }
}

export default Game;