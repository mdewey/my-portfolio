import React from 'react'
import Dimensions from 'react-dimensions'

import WordCloud from 'react-d3-cloud';

const data = [
    {
        text: 'Hey',
        value: 1000
    }, {
        text: 'lol',
        value: 200
    }, {
        text: 'first impression',
        value: 800
    }, {
        text: 'very cool',
        value: 1000000
    }, {
        text: 'duck',
        value: 10
    }
];

const fontSizeMapper = word => Math.log2(word.value) * 5;
const rotate = word => word.value % 360;

class MyWordCloud extends React.Component {

    render() {
        return (
            <div
                containerWidth={this.props.containerWidth}
                containerHeight={this.props.containerHeight}>
                <WordCloud
                    data={data}
                    fontSizeMapper={fontSizeMapper}
                    rotate={rotate}
                    width={this.props.containerWidth}
                    />
            </div>
        )
    }
}

export default Dimensions()(MyWordCloud) // Enhanced component