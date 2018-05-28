import React from 'react'
import Dimensions from 'react-dimensions'

import WordCloud from 'react-d3-cloud';

const data = [
    {
        text: 'C#',
        value: 10
    }, {
        text: 'NodeJS',
        value: 10
    }, {
        text: 'Python',
        value: 10
    }, {
        text: 'CSS',
        value: 10
    }, {
        text: 'HTML',
        value: 10
    }, {
        text: 'Java',
        value: 10
    }, {
        text: 'Ruby',
        value: 10
    }, {
        text: 'Go',
        value: 10
    }, {
        text: 'VB',
        value: 10
    }, {
        text: 'SQL',
        value: 10
    }, {
        text: 'Neo4j',
        value: 10
    }, {
        text: '.NET Framework',
        value: 10
    }, {
        text: '.NET Core',
        value: 10
    }, {
        text: '.NET Web API',
        value: 10
    }, {
        text: 'Entity Framework',
        value: 10
    }, {
        text: 'Express.js',
        value: 10
    }, {
        text: 'Docker',
        value: 10
    }, {
        text: 'Jade',
        value: 10
    }, {
        text: 'Handlebars',
        value: 10
    }, {
        text: 'AngularJS',
        value: 10
    }, {
        text: 'React',
        value: 10
    }, {
        text: 'VueJS',
        value: 10
    }, {
        text: 'Knockout.js',
        value: 10
    }, {
        text: 'Mongoose',
        value: 10
    }, {
        text: 'Bootstrap',
        value: 10
    }, {
        text: 'Foundation',
        value: 10
    }, {
        text: 'Social Media APIs',
        value: 10
    }, {
        text: 'Google Apps',
        value: 10
    }, {
        text: 'SASS & LESS',
        value: 10
    }, {
        text: 'NUnit',
        value: 10
    }, {
        text: 'Jasmine',
        value: 10
    }, {
        text: 'Custom Chrome Extensions',
        value: 10
    }, {
        text: 'Functional Programming',
        value: 10
    }, {
        text: 'Object Oriented Programming',
        value: 10
    }, {
        text: 'RESTful APIs',
        value: 10
    }, {
        text: 'Mobile First Design',
        value: 10
    }, {
        text: 'API First Design',
        value: 10
    }, {
        text: 'Function First Design',
        value: 10
    }, {
        text: 'Test Driven Development',
        value: 10
    }, {
        text: 'Requirement Driven Development',
        value: 10
    }, {
        text: 'Agile & agile',
        value: 10
    }, {
        text: 'Design Thinking',
        value: 10
    }, {
        text: 'Relational Databases',
        value: 10
    }, {
        text: 'NoSQL Databases',
        value: 10
    }, {
        text: 'Single Page Apps',
        value: 10
    }, {
        text: 'Dependency Injection',
        value: 10
    }, {
        text: 'BIg Data',
        value: 10
    }, {
        text: 'Cloud Computing',
        value: 10
    }, {
        text: 'Source Control',
        value: 10
    }, {
        text: 'Continuous Integration',
        value: 10
    }, {
        text: 'Design Patterns',
        value: 10
    }, {
        text: 'Disciplined Entrepreneurship',
        value: 10
    }, {
        text: 'Visual Studio (Code & 2017)',
        value: 10
    }, {
        text: 'Atom',
        value: 10
    }, {
        text: 'Powershell & Terminal',
        value: 10
    }, {
        text: 'Webpack',
        value: 10
    }, {
        text: 'Gulp',
        value: 10
    }, {
        text: 'Yarn',
        value: 10
    }, {
        text: 'Slack',
        value: 10
    }, {
        text: 'Jira/Trello/Asana',
        value: 10
    }, {
        text: 'Git',
        value: 10
    }, {
        text: 'Github/Bitbucket',
        value: 10
    }, {
        text: 'Vim',
        value: 10
    }, {
        text: 'MS SQL',
        value: 10
    }, {
        text: 'PostgreSQL',
        value: 10
    }, {
        text: 'MySQL',
        value: 10
    }, {
        text: 'MongoDb',
        value: 10
    }, {
        text: 'CouchDb',
        value: 10
    }, {
        text: 'Oracle',
        value: 10
    }, {
        text: 'Azure',
        value: 10
    }, {
        text: 'AWS',
        value: 10
    }, {
        text: 'DocumentDb',
        value: 10
    }, {
        text: 'Rackspace',
        value: 10
    }, {
        text: 'Go Daddy',
        value: 10
    }, {
        text: 'Zeit',
        value: 10
    }, {
        text: 'Surge',
        value: 10
    }, {
        text: 'Docker',
        value: 10
    }, {
        text: 'AI',
        value: 10
    }, {
        text: 'Data Structures',
        value: 10
    }
];

const fontSizeMapper = word => Math.log2(word.value) * 5;
const rotate = word => word.value;

class MyWordCloud extends React.Component {

    render() {
        return (
            <div
                containerWidth={this.props.containerWidth}
                containerHeight={this.props.containerHeight}>
                <WordCloud
                    data={data}
                    fontSizeMapper={fontSizeMapper}
                    width={this.props.containerWidth}/>
            </div>
        )
    }
}

export default Dimensions()(MyWordCloud) // Enhanced component