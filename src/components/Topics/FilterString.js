import React, {Component} from 'react';

export default class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            breeds: ['doberman pinscher','boxer','labrador','beauceron','Belgian malinois', 'German shepherd'],
            userInput: '',
            filteredArray: []
        }
    }
    handleChange(val){
        this.setState({userInput: val})
    }
    filterBreeds(userInput) {
        let breeds = this.state.breeds
        let filteredArray = []

        for(let i = 0; i < breeds.length; i++){
            if(breeds[i].includes(userInput)){
                filteredArray.push(breeds[i])
            }
        }
        this.setState({ filteredArray: filteredArray})
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText"> Breeds: {JSON.stringify(this.state.breeds, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={(e) => this.filterBreeds(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterStringRB"> Filtered Breeds: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}