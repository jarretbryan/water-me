var html = require('choo/html')

var TITLE = 'water-me - main'

var tracery = require('tracery-grammar')
var plants = require('../garden.json')
var gardens = tracery.createGrammar(plants)

module.exports = view

// function seed(){
//   return html`<h1 class="f6 f2-m f-subheadline-l fw6 tc" > ${gardens.flatten('#garden-sun#') }</h1 >`
// }

// function genGarden(){
//   for (let i=1; i<5; i++){
//     console.log(seed())
//     seed()
//   }
// }


function view (state, emit) {
  console.log(`${gardens.flatten('#garden-sun#')}`)

  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy">
      <header class="tc pv4 pv5-ns">
        <h1 class="f4 fw6 db black link hover-green"> water me</h1>
        <div class='flex justify-around'>
            <button class="f6 link dim br-pill ba ph3 pv2 mb2 dib bg-yellow">☀️</button>
            <button class="f6 link dim br-pill ba ph3 pv2 mb2 dib bg-blue" onclick=${makeRain}>🌧</button>
            <button class="f6 link dim br-pill ba ph3 pv2 mb2 dib bg-dark-gray">🌖</button>
            <button class="f6 link dim br-pill ba ph3 pv2 mb2 dib bg-orange">🍁</button>
            <button class="f6 link dim br-pill ba ph3 pv2 mb2 dib bg-yellow">🏜</button>
        </div>
      </header>
      <main class="pa3 cf center">
   
        <section class="mw5 mw7-ns center bg-green pa3 ph5-ns">
          <h1 class="mt0 tc">${gardens.flatten(state.garden)}</h1>
          <h1 class="mt0 tc">${gardens.flatten('#garden-sun#')}</h1>
          <h1 class="mt0 tc">${gardens.flatten('#garden-sun#')}</h1>
          <h1 class="mt0 tc">${gardens.flatten('#garden-sun#')}</h1>
          <h1 class="mt0 tc">${gardens.flatten('#garden-rain#')}</h1>
          <p class="lh-copy measure">
            Water your plants🐝
          </p>
        </section>


        <section class="fl mw6 w-50-m w-third-l pa3">
          <p>
            So far we've provided you with one base view, <a
            href="/oh-no">one fallback view</a>, and one store. This serves
            as an example. A place to start from. It's your project now, so
            go ahead and delete them once you know how they work.
          </p>

          <p>Number of clicks stored: ${state.totalClicks}</p>

          <button class="dim ph3 ba bw1 pv2 b--black pointer bg-white"
            onclick=${handleClick}>
            Emit a click event
          </button>

          <br><br>
        </section>

      </main>
    </body>
  `

  function handleClick () {
    emit('clicks:add', 1)
  }

  function makeRain(){
    emit('clicks:rain')
  }
}
