
import React, { Component } from 'react'

export default class Paginate extends Component {

    componentDidMount() {
       
    }

    render() {

        return (
            <div className='row'>
                <div className='col'>
                    <nav>
                        <ul className="pagination justify-content-center">
                            <li className="page-item"><a onClick={this.props.previous} className="page-link" href="#">Previous</a></li>
                            <li className="page-item"><a onClick = {this.props.next} className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
