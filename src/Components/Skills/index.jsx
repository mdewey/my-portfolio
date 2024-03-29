import React,{useState, useEffect, useRef, useCallback} from 'react'
import './style.scss'
import WordCloud from 'react-d3-cloud'

const data = [
  {
    text: 'C#',
    value: 100
  },
  {
    text: 'NodeJS',
    value: 75
  },
  {
    text: 'Python',
    value: 25
  },
  {
    text: 'CSS',
    value: 50
  },
  {
    text: 'HTML',
    value: 50
  },
  {
    text: 'Java',
    value: 10
  },
  {
    text: 'Ruby',
    value: 10
  },
  {
    text: 'Go',
    value: 25
  },
  {
    text: 'VB',
    value: 10
  },
  {
    text: 'SQL',
    value: 75
  },
  {
    text: 'Neo4j',
    value: 10
  },
  {
    text: '.NET Framework',
    value: 80
  },
  {
    text: '.NET Core',
    value: 100
  },
  {
    text: '.NET Web API',
    value: 90
  },
  {
    text: 'Entity Framework',
    value: 80
  },
  {
    text: 'Express.js',
    value: 100
  },
  {
    text: 'Docker',
    value: 75
  },
  {
    text: 'Jade',
    value: 20
  },
  {
    text: 'Handlebars',
    value: 10
  },
  {
    text: 'AngularJS',
    value: 25
  },
  {
    text: 'React',
    value: 80
  },
  {
    text: 'VueJS',
    value: 25
  },
  {
    text: 'Knockout.js',
    value: 5
  },
  {
    text: 'Mongoose',
    value: 20
  },
  {
    text: 'Bootstrap',
    value: 60
  },
  {
    text: 'Foundation',
    value: 10
  },
  {
    text: 'Social Media APIs',
    value: 10
  },
  {
    text: 'Google Apps',
    value: 10
  },
  {
    text: 'SASS',
    value: 75
  },
  {
    text: 'NUnit',
    value: 40
  },
  {
    text: 'Jasmine',
    value: 20
  },
  {
    text: 'Custom Chrome Extensions',
    value: 50
  },
  {
    text: 'Functional Programming',
    value: 100
  },
  {
    text: 'Object Oriented Programming',
    value: 80
  },
  {
    text: 'RESTful APIs',
    value: 85
  },
  {
    text: 'Mobile First Design',
    value: 70
  },
  {
    text: 'API First Design',
    value: 70
  },
  {
    text: 'Function First Design',
    value: 70
  },
  {
    text: 'Test Driven Development',
    value: 90
  },
  {
    text: 'Requirement Driven Development',
    value: 70
  },
  {
    text: 'Agile & agile',
    value: 40
  },
  {
    text: 'Design Thinking',
    value: 40
  },
  { text: 'Design', value: 33 },
  {
    text: 'Relational Databases',
    value: 40
  },
  {
    text: 'NoSQL Databases',
    value: 40
  },
  {
    text: 'Single Page Apps',
    value: 45
  },
  {
    text: 'Dependency Injection',
    value: 45
  },
  {
    text: 'Big Data',
    value: 44
  },
  {
    text: 'Cloud Computing',
    value: 30
  },
  {
    text: 'Source Control',
    value: 30
  },
  {
    text: 'Continuous Integration',
    value: 30
  },
  {
    text: 'Design Patterns',
    value: 40
  },

  {
    text: 'Visual Studio',
    value: 25
  },
  {
    text: 'VS Code',
    value: 25
  },
  {
    text: 'Powershell & Terminal',
    value: 30
  },
  {
    text: 'Webpack',
    value: 10
  },
  {
    text: 'Gulp',
    value: 10
  },
  {
    text: 'Yarn',
    value: 10
  },
  {
    text: 'Slack',
    value: 10
  },
  {
    text: 'agile tools',
    value: 10
  },
  {
    text: 'Git',
    value: 70
  },
  {
    text: 'Github',
    value: 20
  },
  {
    text: 'Vim',
    value: 10
  },
  {
    text: 'MS SQL',
    value: 60
  },
  {
    text: 'PostgreSQL',
    value: 25
  },
  {
    text: 'MySQL',
    value: 10
  },
  {
    text: 'MongoDb',
    value: 70
  },
  {
    text: 'CouchDb',
    value: 10
  },
  {
    text: 'Azure',
    value: 10
  },
  {
    text: 'AWS',
    value: 50
  },
  {
    text: 'DocumentDb',
    value: 10
  },
  {
    text: 'Zeit',
    value: 10
  },
  {
    text: 'Netlify',
    value: 10
  },
  {
    text: 'AI',
    value: 66
  },
  {
    text: 'Data Structures',
    value: 55
  }
]


const Skills = () => {
    const fontSizeMapper = useCallback(word => Math.log2(word.value) * 3, [])
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const elementRef = useRef(null);
    const updateSize = useCallback(() => {
      const newWidth = elementRef.current.clientWidth;
      setWidth(newWidth);

      const newHeight = elementRef.current.clientHeight;
      setHeight(newHeight);
    }, []);

    useEffect(() => {
      window.addEventListener("resize", updateSize);
      updateSize();
    }, [updateSize]);

    return (
      <section className="section" id="buzzwords">
        <header>
          <h2>My Buzzwords</h2>
        </header>
        <section className="word-cloud" id="wordCloud" >
          <div
            ref={elementRef}
            style={{
              width: '100%', 
              margin: '1rem'
              }}
          >
            <WordCloud
              data={data}
              fontSize={fontSizeMapper}
              width={width}
              height={height}
              rotate={() => 0}
              padding={5}
            />
          </div>
        </section>
        <footer>
          <a href="https://resume.markdewey.dev/#skills" target={"_blank"} rel="noreferrer">
             full list of skills
          </a>
        </footer>
      </section>
    )
}

// export default Dimensions()(Skills) 
export default Skills;
