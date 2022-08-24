import React, { Component } from 'react'

export default class FooterComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div >
                <footer className="float-md-end">
                    <span className="text-muted"><p className="text-center">All Right Resurved 2021</p></span>
                </footer>
                
            </div>
        )
    }
}
