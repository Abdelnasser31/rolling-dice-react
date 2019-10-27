import React, {Component} from 'react'
import './Rolldice.css'
import Die from './Die'

class Rolldice extends Component{
    constructor(props) {
        super(props);
        this.state = {
            die1: 'three',
            die2: 'six',
            isRolling: false,
        }
    }
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six'],

    }
    roll = e => {
        this.setState({
            die1: this.props.sides[this.random()],
            die2: this.props.sides[this.random()],
            isRolling: true
        })
    setTimeout(() => {
        this.setState({isRolling: false})
    },1000)
    }
    random = () => Math.floor(Math.random() * 6)
    render() {
        return <div className='Rolldice'>
            <div className={this.state.isRolling ? 'Rolldice-dice wobble': 'Rolldice-dice' }>
            <Die color='purple' number={this.state.die1} />
            <Die color='purple' number={this.state.die2} />
            </div>
            <button onClick={this.roll} disabled={this.state.isRolling}>{this.state.isRolling ? 'Rolling' :'Roll Dice!'}</button>
        </div>
    }
}
export default Rolldice;