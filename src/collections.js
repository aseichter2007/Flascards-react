import React, { Component } from 'react';
import CardView from './cardview'
import CollectionView from './collectionview'
class CollectionView extends Component{
    state = {
        selected: null,
        title: null,
        collections: null,
        action:null
    }
    componentDidMount(){
        this.setState({
            collections: this.props.collections
        })
    }
    render(){
        if (this.state.action === "review") {
            return(
                <div>
                    <div className="collectionBar">
                    {this.state.collections.map((collection)=>{
                        if (collection.title===this.state.title) {
                            return(
                                <div className="selectedCollection">
                                    <div>{collection.title}</div>
                                    <div>{collection.cards.length}</div>
                                </div>
                            )
                        }
                        else{
                            return(
                                <div className="collection">
                                    <div>{collection.title}</div>
                                    <div>{collection.cards.length}</div>
                                </div>
                            )
                        }
                    })}
                    </div>
                    <div>
                        <CardView cards = {this.state.collection[this.state.selected]} />
                    </div>
                </div>
            )
        }
        else if (this.state.action === "test") {
            return(
                <div>
                    <div className="collectionBar">
                    {this.state.collections.map((collection)=>{
                        if (collection.title===this.state.title) {
                            return(
                                <div className="selectedCollection">
                                    <div>{collection.title}</div>
                                    <div>{collection.cards.length}</div>
                                </div>
                            )
                        }
                        else{
                            return(
                                <div className="collection">
                                    <div>{collection.title}</div>
                                    <div>{collection.cards.length}</div>
                                </div>
                            )
                        }
                    })}
                    </div>
                    <div>
                        <CardView cards = {this.state.collection[this.state.selected]} />
                    </div>
                </div>
            )
        }
        else{
            return(
                <div>
                    <div className="collectionBar">
                    {this.state.collections.map((collection)=>{
                        if (collection.title===this.state.title) {
                            return(
                                <div className="selectedCollection">
                                    <div>{collection.title}</div>
                                    <div>{collection.cards.length}</div>
                                </div>
                            )
                        }
                        else{
                            return(
                                <div className="collection">
                                    <div>{collection.title}</div>
                                    <div>{collection.cards.length}</div>
                                </div>
                            )
                        }
                    })}
                    </div>
                    <div>
                        <CardView cards = {this.state.collection[this.state.selected]} />
                    </div>
                </div>
            )
        }
    }
}