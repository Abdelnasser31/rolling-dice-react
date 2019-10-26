import React, {Component} from 'react';


class Die extends Component{
    static defaultProps = {
        number: 'five',
        color: 'red',
    }
    render(){
        const {number, color} = this.props
     return   <div>
            <i className={`fas fa-9x fa-dice-${number}`} style={{color: color}}></i>
        </div>
    }
}

export default Die