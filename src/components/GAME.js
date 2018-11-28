import React, {Component} from 'react';

export default class Game extends Component {
    render(){
        return(
            <div>
                <h1>Welcome to THE GAME </h1>
                <h3>Will you play?</h3>
                <button onClick={"You Lose"}>I will play</button>
                
            </div>
        )
    }
}