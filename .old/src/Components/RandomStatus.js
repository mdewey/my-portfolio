import React from 'react'


class Status extends React.Component {


    constructor(props) {
        super(props);
        const status = this.getRandomStatus();
        this.state = { status };
    }

    getRandomStatus() {
        const number = Math.floor(Math.random() * 10);// number between 0-9
        switch (number) {
            case 1:
                return "Getting down to business, to defeat the Huns."
            case 2:
                return "Definitely not sword fighting while my code is compiling..."
            case 3:
                return "Being the Weeble; finding my Wobble, but not falling down."
            case 4:
                return "Running..."
            case 5:
                return "Re-designing the world."
            case 6:
                return "Thinking deep thoughts in my hammock."
            case 7:
                return "Learning something new. "
            case 8:
                return "Debugging life."
            case 9:
                return "Getting coffee."
            default:
                return "Status: 418, I'm a teapot"
        }
    }
    render() {
        return (
            <div>
                {this.state.status}
            </div>
        )
    }
}

export default Status
