import Reveal from "reveal.js";
import Highlight from "reveal.js/plugin/highlight/highlight.esm.js";

const app = document.querySelector("#app");

const slideJSX = `
  <section>
     JSX
  </section>
`;

const slideBasicReactComponent = `
  <section data-transition="convex">
    <h3>Basic react component</h3>
    <pre>           
        <code class="javascript" data-trim>
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

app.innerHTML = `
    <div class="reveal">
      <div class="slides">
       ${slideJSX}
       <section data-auto-animate>
          <h1>React</h1>
        </section>
        <section data-auto-animate>
          <h1>React</h1>
          <h1>Introduction</h1>
        </section>
       ${slideBasicReactComponent}
       ${slideBasicReactComponentDemo}
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
  width: 960,
  height: 700,
});
