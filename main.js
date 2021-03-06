import Reveal from "reveal.js";
import Highlight from "reveal.js/plugin/highlight/highlight.esm.js";

const app = document.querySelector("#app");

const slideIntro = `
    <section data-auto-animate>
      <h1>React JS</h1>
    </section>
    <section data-auto-animate>
      <h1>React JS</h1>
      <h1>A brief introduction</h1>
    </section>
`;

const slideJSX = `
  <section data-transition="convex">      
      <h2>JSX</h2>
      <section data-transition="convex">      
        <pre>           
          <code style="text-align:center;" class="javascript" data-trim>
            const element = <h1>Hello, world!</h1>;
          </code
        </pre>
        
      </section>
      <section data-transition="convex">
          <a target="_blank" href="https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAFgRgD4AJRBEAGhgHcQAnBAEwEJsB6AwgbiA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.14.5&externalPlugins=">JSX is Javascript in disguise</a>
      </section>
      
  </section>
`;

const slideComponents = `
  <section data-transition="convex">    
    <section>
        <h2>Components</h2>
        <div style="display:flex; justify-content:space-between;">
        <ul>
          <li>Building blocks</li>          
          <li>Let you split the UI into independent, reusable pieces</li>          
          <li>Composable</li>
        </ul>
        <iframe  src="https://giphy.com/embed/103TZqgLqRJq0M" width="480" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
     </div>
    </section>    
  </section>
`;

const slideComponentLifieCycle = `
    <section>
        <iframe src="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/" width="1200" height="800" frameBorder="0" allowFullScreen></iframe>
    </section>
`;

const slideProps = `
  <section data-transition="convex">
    <h2>How do I pass data between components? Props.</h2>    
    <p class="fragment fade-out">Props are read only</p>
    <p class="fragment fade-in-then-out">Highlight red</p>
    <p class="fragment fade-in-then-out">Fade in, then out</p>
    <p class="fragment fade-up">Slide up while fading in</p>
  </section>
`;

const slideBasicReactComponent = `
  <section data-transition="convex">
    <h3>Basic react component</h3>
    <pre data-id="code-animation">           
        <code class="javascript" data-trim data-line-numbers="|4-7|11">
            function tick() {

                const element = (
                    <div>
                        <h1>Hello, world!</h1>
                        <h2>It is {new Date().toLocaleTimeString()}.</h2>
                    </div>
                );

                // highlight-next-line
                ReactDOM.render(element, document.getElementById('root'));
            }

            setInterval(tick, 1000);
          </code> 
      </pre>
    </section>
`;

const slideBasicReactComponentDemo = `
    <section data-transition="convex">
      <img width="500" height="auto" src="https://reactjs.org/c158617ed7cc0eac8f58330e49e48224/granular-dom-updates.gif" />
    </section>
`;

const slideReactProps = ``;

const slideReactState = ``;

const slideMultiLine = `
  <section data-transition="convex">
      <p class="fragment">Fade in</p>
      <p class="fragment fade-out">Fade out</p>
      <p class="fragment highlight-red">Highlight red</p>
      <p class="fragment fade-in-then-out">Fade in, then out</p>
      <p class="fragment fade-up">Slide up while fading in</p>
   </section>
`;

const slideVertical = `
  <section data-transition="convex">    
     <section data-transition="convex">Vertical Slide 1</section>
     <section data-transition="convex">Vertical Slide 2</section>
     <section data-transition="convex">Vertical Slide 3</section>
   </section>
`;

const slideWithGIF = `
    <section data-background="http://i.giphy.com/90F8aUepslB84.gif">
      <h2>... and GIFs!</h2>
    </section>
`;

const slideStateLifeCycle = `
  <section data-transition="convex">
    <h3>Basic react component</h3>
    <pre data-id="code-animation">           
          <code class="javascript" data-trim data-line-numbers="|5|19-23|8-13|15-17">
          class Clock extends React.Component {

              constructor(props) {
                 super(props);
                 this.state = {date: new Date()};
              }

              componentDidMount() {
                  this.timerID = setInterval(
                    () => this.tick(),
                    1000
                  );
              }

              componentWillUnmount() {
                  clearInterval(this.timerID);
              }

              tick() {
                  this.setState({
                    date: new Date()
                  });
              }

              render() {
                  return (
                    <div>
                      <h1>Hello, world!</h1>
                      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                    </div>
                  );
              }
          }

          ReactDOM.render(
              <Clock />,
              document.getElementById('root')
          );
        </code>
    </pre>  
  </section>
`;

const slideHooks = `
  <section data-transition="convex">
    <h3>Hooks</h3>
    <pre data-id="code-animation">           
      <code class="javascript" data-trim data-line-numbers="|4|9|">
        import React, { useState } from 'react';

        function Example() {
          const [count, setCount] = useState(0);

          return (
              &lt;div&gt;
                  &lt;p&gt;You clicked {count} times&lt;/p&gt;
                  &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
                    Click me
                  &lt;/button&gt;
              &lt;/div&gt;
          );
        }
      </code>
    </pre>
  </section>
`;

const slideDiffingAlgorithm = `    
  <h3>The Diffing Algorithm</h3>
`;

const slideErrorBoundry = `
  <section>
    <h3>Error handling</h3>    
    <pre data-id="code-animation">
      <code class="javascript" data-trim data-line-numbers="|5|13-16|8-11|18-22|29-32|">
          class ErrorBoundary extends React.Component {

            constructor(props) {
              super(props);
              this.state = { hasError: false };
            }

            static getDerivedStateFromError(error) {
              // Update state so the next render will show the fallback UI.
              return { hasError: true };
            }

            componentDidCatch(error, errorInfo) {
              // You can also log the error to an error reporting service
              logErrorToMyService(error, errorInfo);
            }

            render() {
              if (this.state.hasError) {
                // You can render any custom fallback UI
                return <h1>Something went wrong.</h1>;
              }

              return this.props.children; 
            }
          }

          // Use this inside a component like this

          &lt;ErrorBoundary&gt;
            &lt;MyWidget /&gt;
          &lt;/ErrorBoundary&gt;

      </code>
    </pre>
  
  </section>
`;

const slideContext = `
  <section>
    <pre data-id="code-animation">           
      <code class="javascript" data-trim data-line-numbers="|4|">
      // Context lets us pass a value deep into the component tree
      // without explicitly threading it through every component.
      // Create a context for the current theme (with "light" as the default).
      const ThemeContext = React.createContext('light');

      class App extends React.Component {
        render() {
          // Use a Provider to pass the current theme to the tree below.
          // Any component can read it, no matter how deep it is.
          // In this example, we're passing "dark" as the current value.
          return (
            <ThemeContext.Provider value="dark">
              <Toolbar />
            </ThemeContext.Provider>
          );
        }
      }

      // A component in the middle doesn't have to
      // pass the theme down explicitly anymore.
      function Toolbar() {
        return (
          <div>
            <ThemedButton />
          </div>
        );
      }

      class ThemedButton extends React.Component {
        // Assign a contextType to read the current theme context.
        // React will find the closest theme Provider above and use its value.
        // In this example, the current theme is "dark".
        static contextType = ThemeContext;
        render() {
          return <Button theme={this.context}/> 
        }
      }
      </code>
    </pre>
  </section>
`;

const slideVirtualDOM = `
    <section>
        <h3>Why is browser DOM slow?</h3>
        <ul>
          <li>
            Since the browser DOM is is represented in a tree data structure, Changes and updated are faster
          </li>
          <li>
            But after the change, the updated element and it???s children have to be re-rendered to update the UI.
          </li>
          <li>
            The re-rendering or re-painting of the UI is what makes it slow.
          </li>
          <li>
            The more UI components you have, the more expensive the DOM updates could be, since they would need to be re-rendered for every DOM update.
          </li>
        </ul>          
    </section>  
`;

const slideRendering = `
  <section>  
    <h3>Render and commit phases</h3>
    <section> 
      <p>With the current combination of props and state React asking your components to describe what they want their section of the UI to look like in partcular point in time.</p>
    </section>

    <section>
      <ul>
        <li><strong>Important thing to remember is "rendering" is not the same thing as "updating the DOM"</strong></li>       
        <li>The "Render phase" contains all the work of rendering components and calculating changes</li>
        <li>The "Commit phase" is the process of applying those changes to the DOM</li>
      </ul>
    </section>

    <!--section>
      <p>In React's upcoming "Concurrent Mode", it is able to pause the work in the rendering phase to allow the browser to process events. React will either resume, throw away, or recalculate that work later as appropriate. Once the render pass has been completed, React will still run the commit phase synchronously in one step.</p>
    </section-->
      
    <section>
      <p>Remember, rendering is not a bad thing - it's how React knows whether it needs to actually make any changes to the DOM!</p>
    </section>        
  </section>
`;

const slideSources = `
    <section>
      <h3>References and sources</h3>
      <ul>
          <li><a href="https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/#how-does-react-handle-renders">A (Mostly) Complete Guide to React Rendering Behavior</a></li>
          <li><a href="https://gist.github.com/sebmarkbage/75f0838967cd003cd7f9ab938eb1958f">The Rules of React</a></li>
      </ul>
    </section>
`;

const slideFollows = `
 <section>
      <h3>References and sources</h3>
      <ul>
          <li><a href="https://twitter.com/dan_abramov">@dan_abramov</a></li>          
          <li><a href="https://twitter.com/acdlite">@acdlite</a></li>          
          <li><a href="https://twitter.com/acemarke">@acemarke</a></li>          
          <li><a href="https://twitter.com/brian_d_vaughn">@brian_d_vaughn</a></li>          
          <li><a href="https://twitter.com/lunaruan">@lunaruan</a></li>          
          <li><a href="https://twitter.com/rickhanlonii">@rickhanlonii</a></li>                    
      </ul>
    </section>
`;

app.innerHTML = `
    <div class="reveal">
      <div class="slides">
       ${slideRendering}
       ${slideSources}
       ${slideVirtualDOM}
       ${slideErrorBoundry}
       ${slideContext}
       ${slideHooks}
       ${slideStateLifeCycle}
       ${slideIntro}       
       ${slideComponents}
       ${slideBasicReactComponent}
       ${slideBasicReactComponentDemo}
       ${slideJSX}       
       ${slideComponentLifieCycle}       
       ${slideMultiLine}
       ${slideVertical}
      </div>
    </div>
`;

//  <section>
//   <p class="fragment">Fade in</p>
//   <p class="fragment fade-out">Fade out</p>
//   <p class="fragment highlight-red">Highlight red</p>
//   <p class="fragment fade-in-then-out">Fade in, then out</p>
//   <p class="fragment fade-up">Slide up while fading in</p>
//   </section>
//   <section>
//     <video data-autoplay src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
//   </section>
//   <section>
//     <section>Vertical Slide 1</section>
//     <section>Vertical Slide 2</section>
//   </section>
//   <section>Horizontal Slide</section>
//   <section>Horizontal Slide</section>
//   <section>Horizontal Slide</section>
//   <section>
//     <section>Vertical Slide 1</section>
//     <section>Vertical Slide 2</section>
//   </section>

let deck = new Reveal({
  plugins: [Highlight],
});
deck.initialize({
  width: 1200,
  height: 800,
});
