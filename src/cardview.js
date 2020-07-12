import React, { Component } from 'react';

class FlashCard extends Component{
    state = {
        showingDefinition: null,
        cardId: null,
        cardTitle: null,
        cardDefinitioin: null,
        cardCollection: null,
        cardNumber: null
    }

    componentDidMount(){
        
        this.setState({
            cardCollection: this.props.cards,
        })
    }
    NextCard(){
        if (this.state.cardnumber==null) {
            this.setState({
                cardId: this.state.cardCollection[0].id,
                cardTitle: this.state.cardCollection[0].title,
                cardDefinitioin: this.state.cardCollection[0].definition,
                cardNumber: 1
            })
        }
        else{
            this.setState({
                showingDefinition: null,
                cardId: this.state.cardCollection[this.state.cardNumber].id,
                cardTitle: this.state.cardCollection[this.state.cardNumber].title,
                cardDefinitioin: this.state.cardCollection[this.state.cardNumber].definition,
                cardNumber: this.state.cardNumber+1
            })
        }

    }
    ShowDefinition(){
        this.setState({
            showingDefinition: true
        })
    }
    render(){
        if (this.state.cardnumber==null) {
            return(
                <div>
                    <button onClick="NextCard()">Ready</button>
                </div>
            )            
        }
        else if (this.state.showingDefinition==null) {
            return(
                <div>
                    <h1>#{this.state.cardNumber}:{this.state.cardTitle}</h1>
                    <button onClick="ShowDefinition()">Show</button>

                </div>
            )
        }
        else{
            return(
                <div>
                    <h1>#{this.state.cardNumber}:{this.state.cardTitle}</h1>
                    <br></br>
                    <p>{this.state.cardDefinitioin}</p>
                    <button onClick="NextCard()">Next</button>

                </div>
            )
        }
        
    }
}
export default FlashCard;