// packages
import React, {Component} from 'react';
// components css
import './index.scss';

// images

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <section className="hero"></section>
        </header>
        <section className="body">
          <header>
            <section className="title-block">
              <div className="face-pic"></div>
              <h2>Mark Dewey</h2>
            </section>
            <h4>- Developer - Instructor - Explorer -</h4>
          </header>
          <section className="contact-info sub-section">
            <a href="#contact" className="contact-button">
              <i className="material-icons">info</i>Just looking to contact me?</a>
          </section>

          <section className="current-status-section sub-section">
            <em className="current-status-header">Current Status:</em>
            <div className="current-status-text">Something something motivational.</div>
          </section>

          <section className="projects-section section">
            <header>
              <h2>Recent Projects</h2>
            </header>
            <section className="projects-list">
              <div className="project serverless-demo">
                <div>
                  <a href="#">Serverless Demo</a>
                </div>
              </div>
              <div className="project student-list">
                <div>
                  <a href="#">Tampa Bay Demo Day</a>
                </div>
              </div>
              <div className="project pathfinder">
                <div>
                  <a href="#">PathfinderTools</a>
                </div>
              </div>
              <div className="project trainable-bot">
                <div>
                  <a href="#">Trainable Bot</a>
                </div>
              </div>
            </section>
            <footer>
              <a
                href="https://www.github.com/mdewey"
                target="_blank"
                rel="noopener noreferrer">
                <nav>
                  <i className="devicon-github-plain colored"></i>
                  view all projects github
                </nav>
              </a>
            </footer>
          </section>

          <section className="section core-values">
            <header>
              <h2>Core Values</h2>
            </header>
            <h4>Theses are the princples that I bring to my every day life, in and outside
              of work.</h4>
            <ul>
              <li>Always be learning.</li>
              <li>Design before you build.</li>
              <li>Improvise. Adapt. Overcome.</li>
              <li>Organize the Choas.</li>
            </ul>
          </section>

          <section className="section">
            <header>
              <h2>Currently Working In</h2>
            </header>
            <section className="current-skills-list">
              <section className="current-skill dot-net">
                <svg viewBox="0 0 128 128">
                  <path
                    fill="#1384C8"
                    d="M40.335 78.188h-1.685v-9.65c0-.762.05-1.69.14-2.785h-.038c-.158.64-.303 1.104-.43 1.391l-4.902 11.044h-.821l-4.911-10.964c-.138-.306-.283-.799-.43-1.471h-.036c.052.576.081 1.509.081 2.804v9.631h-1.626v-14.371h2.225l4.409 10.021c.332.754.547 1.328.651 1.72h.069c.288-.785.517-1.375.688-1.762l4.505-9.979h2.11v14.371h.001zM45.523 78.188h-1.639v-10.263h1.639v10.263zm.283-13.942c0 .303-.106.555-.317.763-.207.208-.464.312-.764.312-.293 0-.548-.101-.757-.301-.209-.201-.313-.458-.313-.774 0-.296.104-.549.313-.754s.464-.305.757-.305c.3 0 .557.099.764.305.211.205.317.458.317.754"></path>
                  <path
                    fill="#1384C8"
                    d="M55.764 77.713c-.786.483-1.726.722-2.812.722-1.472 0-2.655-.488-3.561-1.464-.879-.947-1.321-2.169-1.321-3.667 0-1.681.48-3.042 1.45-4.077.964-1.036 2.261-1.553 3.892-1.553.892 0 1.683.174 2.375.521v1.687c-.766-.538-1.576-.805-2.445-.805-1.045 0-1.896.365-2.555 1.093-.687.745-1.034 1.742-1.034 2.985 0 1.194.317 2.14.948 2.837.633.694 1.476 1.042 2.538 1.042.897 0 1.738-.295 2.524-.882v1.561h.001zM63.604 69.59c-.289-.223-.706-.331-1.255-.331-.668 0-1.229.298-1.683.901-.516.673-.771 1.604-.771 2.795v5.232h-1.644v-10.262h1.644v2.116h.039c.241-.749.614-1.325 1.112-1.733.466-.373.992-.561 1.572-.561.438 0 .762.047.984.14l.002 1.703zM72.758 73.075c0-1.313-.296-2.317-.89-3.006-.575-.662-1.38-.992-2.416-.992-1.021 0-1.841.334-2.453 1.003-.647.715-.971 1.725-.971 3.035 0 1.228.308 2.192.93 2.879.618.692 1.45 1.039 2.494 1.039 1.08 0 1.907-.352 2.474-1.051.555-.684.832-1.652.832-2.907m1.685-.057c0 1.635-.462 2.949-1.382 3.934-.924.989-2.167 1.483-3.73 1.483-1.54 0-2.767-.494-3.665-1.483-.881-.953-1.323-2.211-1.323-3.776 0-1.786.5-3.162 1.503-4.139.929-.906 2.17-1.363 3.726-1.363 1.53 0 2.726.477 3.587 1.422.853.95 1.284 2.258 1.284 3.922M82.589 75.442c0 .84-.313 1.536-.942 2.091-.687.601-1.63.901-2.816.901-.971 0-1.822-.203-2.545-.618v-1.766c.804.654 1.692.983 2.667.983 1.301 0 1.952-.479 1.952-1.434 0-.401-.143-.734-.431-.991-.289-.262-.851-.576-1.685-.943-.859-.376-1.472-.762-1.833-1.163-.434-.476-.652-1.093-.652-1.854 0-.852.341-1.561 1.014-2.125.675-.567 1.542-.85 2.606-.85.815 0 1.546.159 2.194.481v1.654c-.677-.488-1.451-.732-2.329-.732-.544 0-.981.136-1.307.399-.329.27-.494.614-.494 1.034 0 .455.138.808.412 1.061.244.233.761.519 1.541.852.876.367 1.509.748 1.895 1.137.5.494.753 1.121.753 1.883M92.629 73.075c0-1.313-.297-2.317-.892-3.006-.575-.662-1.381-.992-2.415-.992-1.021 0-1.841.334-2.456 1.003-.646.715-.969 1.725-.969 3.035 0 1.228.309 2.192.924 2.879.626.692 1.459 1.039 2.501 1.039 1.082 0 1.906-.352 2.474-1.051.555-.684.833-1.652.833-2.907m1.688-.057c0 1.635-.466 2.949-1.388 3.934-.92.989-2.163 1.483-3.727 1.483-1.542 0-2.768-.494-3.667-1.483-.881-.953-1.323-2.211-1.323-3.776 0-1.786.504-3.162 1.502-4.139.928-.906 2.171-1.363 3.728-1.363 1.531 0 2.725.477 3.584 1.422.855.95 1.291 2.258 1.291 3.922"></path>
                  <path
                    fill="#1384C8"
                    d="M101.555 64.438c-.323-.179-.682-.27-1.091-.27-1.15 0-1.721.724-1.721 2.175v1.582h2.405v1.392h-2.405v8.871h-1.645v-8.871h-1.745v-1.392h1.745v-1.664c0-1.129.346-2.016 1.05-2.654.603-.555 1.34-.831 2.217-.831.508 0 .902.061 1.189.178v1.484zM108.039 78.085c-.388.222-.904.333-1.543.333-1.791 0-2.687-1.01-2.687-3.029v-6.07h-1.761v-1.394h1.761v-2.504l1.646-.533v3.037h2.583v1.394h-2.583v5.791c0 .688.112 1.18.348 1.465.237.295.625.439 1.173.439.409 0 .763-.109 1.063-.331v1.402zM19.237 118.242c0 .805-.286 1.5-.867 2.087-.577.585-1.278.88-2.102.88-.805 0-1.489-.295-2.05-.88-.562-.587-.841-1.283-.841-2.087 0-.827.279-1.525.841-2.103.561-.58 1.245-.867 2.05-.867.823 0 1.524.292 2.102.878.581.588.867 1.286.867 2.092"></path>
                  <path
                    fill="#1384C8"
                    d="M56.018 120.606h-5.358l-19.448-30.034c-.454-.723-.847-1.508-1.179-2.365h-.16c.139.804.209 2.531.209 5.175v27.224h-4.416v-37.68h5.732l18.865 29.56c.751 1.173 1.265 2.013 1.525 2.519h.104c-.175-1.083-.266-2.932-.266-5.54v-26.539h4.39v37.68h.002zM84.332 120.606h-19.971v-37.68h19.104v3.993h-14.69v12.534h13.612v3.995h-13.613v13.164h15.558v3.994zM114.623 86.919h-10.854v33.688h-4.415v-33.688h-10.875v-3.995h26.144v3.995z"></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#1384C8"
                    d="M82.108 46.33c.479-1.232 1.022-2.445 1.427-3.701 2.288-7.097 4.554-14.2 6.805-21.309.865-2.731 1.813-5.42 3.515-7.767 2.692-3.709 6.442-5.652 10.88-6.331 1.741-.266 3.518-.389 5.28-.406 5.267-.05 10.536-.015 15.804-.01.28 0 .56.029.957.052-.129.304-.199.525-.311.724-1.955 3.494-3.872 7.009-5.885 10.468-3.505 6.022-7.016 12.042-10.631 17.998-2.319 3.819-4.834 7.52-7.687 10.974-2.105 2.548-4.321 4.984-7.146 6.77-1.925 1.217-3.981 1.929-6.315 1.917-8.278-.045-16.556-.012-24.834-.024-2.461-.004-4.568-.941-6.356-2.603-2.563-2.381-4.093-5.412-5.345-8.608-2.284-5.835-3.563-11.951-5.031-18.014-.688-2.838-1.47-5.654-2.215-8.478-.048-.183-.142-.354-.25-.617l-.577.542c-3.228 3.207-6.071 6.741-8.615 10.498-.693 1.024-.926 2.374-1.313 3.591-1.424 4.47-2.722 8.983-4.264 13.411-1.477 4.242-4.125 7.616-8.264 9.61-2.42 1.165-5.004 1.795-7.689 1.855-3.98.088-7.962.098-11.943.134-.952.009-.996-.069-.748-.99 1.707-6.338 3.87-12.514 6.58-18.492 2.794-6.167 6.085-12.048 10.231-17.419 2.823-3.657 5.941-7.031 9.843-9.582 1.979-1.293 4.083-2.315 6.477-2.584.394-.045.793-.073 1.189-.073 8.478-.004 16.956.082 25.433-.039 4.547-.065 7.839 1.855 10.304 5.515 1.533 2.276 2.63 4.761 3.553 7.328 1.861 5.178 3.018 10.547 4.325 15.878.748 3.051 1.581 6.081 2.379 9.12.06.228.157.446.238.668l.199-.006z"></path>
                </svg>
              </section>
              <section className="current-skill node-js">
                <svg viewBox="0 0 128 128">
                  <path
                    fill="#83CD29"
                    d="M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path>
                </svg>
              </section>
              <section className="current-skill">
                <svg viewBox="0 0 128 128">
                  <path
                    d="M64 81.7c7.3 7.1 14.5 11.3 20.3 11.3 1.9 0 3.7-.4 5.2-1.3 5.2-3 7.1-10.5 5.3-21.2-.3-1.9-.7-3.8-1.2-5.8 2-.6 3.8-1.2 5.6-1.8 10.1-3.9 15.7-9.3 15.7-15.2 0-6-5.6-11.4-15.7-15.2-1.8-.7-3.6-1.3-5.6-1.8.5-2 .9-3.9 1.2-5.8 1.7-10.9-.2-18.5-5.4-21.5-1.5-.9-3.3-1.3-5.2-1.3-5.7 0-13 4.2-20.3 11.3-7.2-7.1-14.4-11.3-20.2-11.3-1.9 0-3.7.4-5.2 1.3-5.2 3-7.1 10.5-5.3 21.2.3 1.9.7 3.8 1.2 5.8-2 .6-3.8 1.2-5.6 1.8-10.1 3.9-15.7 9.3-15.7 15.2 0 6 5.6 11.4 15.7 15.2 1.8.7 3.6 1.3 5.6 1.8-.5 2-.9 3.9-1.2 5.8-1.7 10.7.2 18.3 5.3 21.2 1.5.9 3.3 1.3 5.2 1.3 5.8.2 13-4 20.3-11zm-5.6-13.5c1.8.1 3.7.1 5.6.1 1.9 0 3.8 0 5.6-.1-1.8 2.4-3.7 4.6-5.6 6.7-1.9-2.1-3.8-4.3-5.6-6.7zm-12.4-10.3c1 1.7 1.9 3.3 3 4.9-3.1-.4-6-.9-8.8-1.5.9-2.7 1.9-5.5 3.1-8.3.8 1.6 1.7 3.3 2.7 4.9zm-5.8-24.1c2.8-.6 5.7-1.1 8.8-1.5-1 1.6-2 3.2-3 4.9-1 1.7-1.9 3.3-2.7 5-1.3-2.9-2.3-5.7-3.1-8.4zm5.5 13.7c1.3-2.7 2.7-5.4 4.3-8.1 1.5-2.6 3.2-5.2 4.9-7.8 3-.2 6-.3 9.1-.3 3.2 0 6.2.1 9.1.3 1.8 2.6 3.4 5.2 4.9 7.8 1.6 2.7 3 5.4 4.3 8.1-1.3 2.7-2.7 5.4-4.3 8.1-1.5 2.6-3.2 5.2-4.9 7.8-3 .2-6 .3-9.1.3-3.2 0-6.2-.1-9.1-.3-1.8-2.6-3.4-5.2-4.9-7.8-1.6-2.7-3-5.4-4.3-8.1zm39.1-5.4l-2.7-5c-1-1.7-1.9-3.3-3-4.9 3.1.4 6 .9 8.8 1.5-.9 2.8-1.9 5.6-3.1 8.4zm0 10.8c1.2 2.8 2.2 5.6 3.1 8.3-2.8.6-5.7 1.1-8.8 1.5 1-1.6 2-3.2 3-4.9.9-1.5 1.8-3.2 2.7-4.9zm2.3 34.7c-.8.5-1.8.7-2.9.7-4.9 0-11-4-17-10 2.9-3.1 5.7-6.6 8.5-10.5 4.7-.4 9.2-1.1 13.4-2.1.5 1.8.8 3.6 1.1 5.4 1.4 8.5.3 14.6-3.1 16.5zm5.2-52.7c11.2 3.2 17.9 8.1 17.9 12.6 0 3.9-4.6 7.8-12.7 10.9-1.6.6-3.4 1.2-5.2 1.7-1.3-4.1-2.9-8.3-4.9-12.6 2-4.3 3.7-8.5 4.9-12.6zm-8-28.2c1.1 0 2 .2 2.9.7 3.3 1.9 4.5 7.9 3.1 16.5-.3 1.7-.7 3.5-1.1 5.4-4.2-.9-8.7-1.6-13.4-2.1-2.7-3.9-5.6-7.4-8.5-10.5 6-5.9 12.1-10 17-10zm-14.7 20.1c-1.8-.1-3.7-.1-5.6-.1s-3.8 0-5.6.1c1.8-2.4 3.7-4.6 5.6-6.7 1.9 2.1 3.8 4.4 5.6 6.7zm-28.7-19.4c.8-.5 1.8-.7 2.9-.7 4.9 0 11 4 17 10-2.9 3.1-5.7 6.6-8.5 10.5-4.7.4-9.2 1.1-13.4 2.1-.5-1.8-.8-3.6-1.1-5.4-1.4-8.5-.3-14.5 3.1-16.5zm-5.2 52.7c-11.2-3.2-17.9-8.1-17.9-12.6 0-3.9 4.6-7.8 12.7-10.9 1.6-.6 3.4-1.2 5.2-1.7 1.3 4.1 2.9 8.3 4.9 12.6-2 4.3-3.7 8.6-4.9 12.6zm2.1 11c.3-1.7.7-3.5 1.1-5.4 4.2.9 8.7 1.6 13.4 2.1 2.7 3.9 5.6 7.4 8.5 10.5-6 5.9-12.1 10-17 10-1.1 0-2-.2-2.9-.7-3.4-1.9-4.5-8-3.1-16.5zM33.6 112.3c2.2-2.7 2.3-5.7 1.1-8.7-1.2-3-3.7-4.4-6.8-4.5-3.7-.1-7.5 0-11.2 0h-.7v25.9h3v-9.8h4.7c.6 0 1.1.2 1.4.7l6 9.3c.1.2.4.5.6.5h3.9c-2.4-3.7-4.7-7.2-7.1-10.8 2.1-.3 3.9-1 5.1-2.6zm-14.6-.2v-9.9h1.1c2.3 0 4.7-.1 7 .1 2.7.1 4.6 2.2 4.6 4.9s-2.2 4.8-4.9 4.9c-2.4.1-4.8 0-7.8 0zM57.7 113.4c-1.6-7-8-8.8-12.9-6.6-3.8 1.7-5.5 5-5.6 9.1-.1 3.1.8 5.9 3.2 8 2.7 2.4 6 2.7 9.4 2.1 1.9-.4 3.6-1.3 4.9-2.7-.5-.7-1-1.4-1.5-2-2.8 2.4-5.9 3.2-9.3 1.6-2.2-1.1-3.3-3.8-3.5-5.8h15.5v-1.3c.1-.9 0-1.7-.2-2.4zm-15.1 1.6c-.3-3 2.7-6.2 6-6.2 3.8-.1 6.2 2.2 6.3 6.2h-12.3zM73.3 106.3c-1.5-.3-3.1-.4-4.6-.3-2.4.2-4.5 1.3-6.2 3.1.5.7.9 1.4 1.5 2.2.2-.2.4-.4.6-.5 1.6-1.5 3.5-2.3 5.8-2.1 1.8.1 3.5.7 4 2.5.4 1.4.3 2.9.4 4.4-.3 0-.4-.1-.5-.2-2.4-2-5.1-2.4-8-1.7-2.7.7-4.4 2.8-4.6 5.5-.2 3.1 1.2 5.4 3.9 6.5 1.7.7 3.6.7 5.4.3 1.4-.3 2-1.1 4-2.2v1.3h2.8c0-4 .1-8.9 0-13.5 0-2.9-1.7-4.7-4.5-5.3zm1.4 12.6c-.1.3 0 .6 0 .9 0 2.1-.5 2.8-2.5 3.6-1.4.5-2.9.7-4.4.2-1.7-.5-2.9-2-2.9-3.7-.1-1.7 1-3.4 2.7-3.9 2.3-.8 4.4-.3 6.3 1.1.6.5 1 1 .8 1.8zM90.3 109c2.6-.8 5-.3 6.8 1.9l.3.2c.7-.6 1.3-1.2 2.1-1.9-.3-.3-.4-.5-.6-.8-2.9-3.1-8.6-3.5-12.1-1-4.9 3.6-4.8 10.6-2.4 14.3 2.3 3.5 5.6 4.7 9.5 4.2 2.3-.3 4.2-1.4 5.7-3.3-.7-.6-1.4-1.2-2.1-1.9-.2.2-.3.3-.4.5-2.7 3-7.2 2.7-9.6-.5-1.4-1.9-1.7-4.1-1.3-6.3.2-2.5 1.5-4.5 4.1-5.4zM111.1 122.6c-.2.1-.3.2-.3.2-.8.6-1.6.7-2.5.4-.9-.4-1-1.2-1.1-2v-11.4c0-.2 0 .2.1-.8h3.8v-3h-4v-5h-3v5.4h-2.6c-.2 0-.5.2-.5.4-.1.7 0 1.2 0 2.2h3.2v12.799999999999999c0 1.6.4 3 1.8 3.8 1.5.9 4.4.7 5.7-.4.2-.1.3-.5.3-.6-.3-.6-.6-1.3-.9-2z"></path>
                </svg>
              </section>
              <section className="current-skill">
                <svg viewBox="0 0 128 128">
                  <path
                    fill="#B3B3B3"
                    d="M63.81 1.026l-59.257 20.854 9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635z"></path>
                  <path fill="#A6120D" d="M117.536 25.998l-53.864-18.369v112.785l45.141-24.983z"></path>
                  <path fill="#DD1B16" d="M11.201 26.329l8.026 69.434 44.444 24.651v-112.787z"></path>
                  <path
                    fill="#F2F2F2"
                    d="M78.499 67.67l-14.827 6.934h-15.628l-7.347 18.374-13.663.254 36.638-81.508 14.827 55.946zm-1.434-3.491l-13.295-26.321-10.906 25.868h10.807l13.394.453z"></path>
                  <path
                    fill="#B3B3B3"
                    d="M63.671 11.724l.098 26.134 12.375 25.888h-12.446l-.027 10.841 17.209.017 8.042 18.63 13.074.242z"></path>
                </svg>
              </section>
            </section>
            <footer>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://mdewey.github.io/resume/">
                <i className="material-icons">book</i>view full resume</a>
            </footer>
          </section>

          <section className="section">
            <header>
              <h2>My Buzzwords</h2>
            </header>
            <section className="word-cloud">
              <span>C#</span>
              <span>NodeJS</span>
              <span>Python</span>
              <span>CSS</span>
              <span>HTML</span>
              <span>Java</span>
              <span>Ruby</span>
              <span>Go</span>
              <span>VB</span>
              <span>SQL</span>
              <span>Neo4j</span>
              <span>.NET Framework</span>
              <span>.NET Core</span>
              <span>.NET Web API</span>
              <span>Entity Framework</span>
              <span>Express.js</span>
              <span>Docker</span>
              <span>Jade</span>
              <span>Handlebars</span>
              <span>AngularJS</span>
              <span>React</span>
              <span>VueJS</span>
              <span>Knockout.js</span>
              <span>Mongoose</span>
              <span>Bootstrap</span>
              <span>Foundation</span>
              <span>Social Media APIs</span>
              <span>Google Apps</span>
              <span>SASS & LESS</span>
              <span>NUnit</span>
              <span>Jasmine</span>
              <span>Custom Chrome Extensions</span>
              <span>Functional Programming</span>
              <span>Object Oriented Programming</span>
              <span>RESTful APIs</span>
              <span>Mobile First Design</span>
              <span>API First Design</span>
              <span>Function First Design</span>
              <span>Test Driven Development</span>
              <span>Requirement Driven Development</span>
              <span>Agile & agile</span>
              <span>Design Thinking</span>
              <span>Relational Databases</span>
              <span>NoSQL Databases</span>
              <span>Single Page Apps</span>
              <span>Dependency Injection</span>
              <span>BIg Data</span>
              <span>Cloud Computing</span>
              <span>Source Control</span>
              <span>Continuous Integration</span>
              <span>Design Patterns</span>
              <span>Disciplined Entrepreneurship</span>
              <span>Visual Studio (Code & 2017)</span>
              <span>Atom</span>
              <span>Powershell & Terminal</span>
              <span>Webpack</span>
              <span>Gulp</span>
              <span>Yarn</span>
              <span>Slack</span>
              <span>Jira/Trello/Asana</span>
              <span>Git</span>
              <span>Github/Bitbucket</span>
              <span>Vim</span>
              <span>MS SQL</span>
              <span>PostgreSQL</span>
              <span>MySQL</span>
              <span>MongoDb</span>
              <span>CouchDb</span>
              <span>Oracle</span>
              <span>Azure</span>
              <span>AWS</span>
              <span>DocumentDb</span>
              <span>Rackspace</span>
              <span>Go Daddy</span>
              <span>Zeit</span>
              <span>Surge</span>
              <span>Docker</span>
              <span>AI</span>
              <span>Data Structures</span>
              
            </section>
            <footer>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://mdewey.github.io/resume/">
                <i className="material-icons">book</i>view full resume</a>
            </footer>
          </section>

          <section className="section">
            <header>
              <h2>Current Hobbies</h2>
            </header>
            <h4>I believe in good, healthy work-life balance. While not behind a keyboard I
              enjoy the outdoors as much as possible. My current hobbies include:</h4>
            <ul>
              <li>Fitness</li>
              <li>Learning Music</li>
              <li>Ultimate Frisbee</li>
              <li>Juggling</li>
              <li>Video &amp; Table top Gaming</li>
            </ul>
          </section>

          <section id="contact" className="section">
            <header>
              <h2>Contact</h2>
            </header>
            <ul>
              <li><i class="material-icons">email</i>Email</li>
              <li><i class="material-icons">phone</i>Phone</li>
              <li><i class="fab fa-linkedin-in"></i>Linkedin</li>
              <li><i class="fab fa-twitter"></i>Twitter</li>
              <li><i class="fab fa-slack"></i>Slack</li>
              <li><i className="material-icons">book</i> resume</li>
            </ul>
          </section>

        </section>
      </div>
    );
  }
}

export default App;
