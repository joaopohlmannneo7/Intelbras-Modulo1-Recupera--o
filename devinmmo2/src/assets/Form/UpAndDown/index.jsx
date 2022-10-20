import React from 'react';
import styled from 'styled-components';
import { FaArrowDown, FaArrowUp} from 'react-icons/fa'

class Upvote extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            addend: 0 // either 1, 0, or -1
        }
    }

    toggleIncrement = () => {
        this.setState(prevState => ({
            addend: prevState.addend === 1 ? 0 : 1
        }))
    }

    toggleDecrement = () => {

        this.setState(prevState => ({
            addend: prevState.addend === -1 ? 0 : -1
        }))
    }

    render() {
        return (
            <Box2>
                 <FaArrowDown id="DownVote"onClick={this.toggleDecrement}>
                    -
                </FaArrowDown>
                
                <span id='number'>{this.state.count + this.state.addend}</span>
                <FaArrowUp id="Up" onClick={this.toggleIncrement}>
                    +
                </FaArrowUp>
            </Box2>
        );
    }
}

export default Upvote;

const Box2 = styled.div`
position: absolute;
left: 600px;
top: 56px;

#DownVote{
    width: 90px;
    height: 30px;
    color: red;
}

#Up{
    width: 90px;
    height: 30px;
    color: green;
}
span{
    font-size: 22px;

}
`