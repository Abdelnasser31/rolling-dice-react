import React, {Component} from 'react'
import './Rolldice.css'
import Die from './Die'

class Rolldice extends Component{
    render() {
        return <div className='Rolldice'>
            <div className='Rolldice-dice'>
            <Die color='purple' number='three' />
            <Die color='green' number='four' />
            </div>
            <button className='Rolldice-button'>Roll Dice!</button>
        </div>
    }
}
export default Rolldice;