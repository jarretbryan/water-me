var html = require('choo/html')

var TITLE = 'water-me - main'

var tracery = require('tracery-grammar')
var plants = require('../garden.json')
var gardens = tracery.createGrammar(plants)
var footer = require('./footer')

module.exports = view

function view (state, emit) {
  console.log(`${gardens.flatten(state.garden)}`)

  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy">
       <main class="pa3 cf center">

       <header class="tc">
         <h1 class="f4 fw6 db black link hover-green"> water me</h1>
       </header>

       <p class="tc">
            🐝 care for your plants 🐝
          </p>
   
        <section class="ba br4 mw5 mw7-ns center bg-green pa3 ph5-ns">
          <h1 class="mt0 tc">${gardens.flatten(state.garden)}</h1>
          <h1 class="mt0 tc">${gardens.flatten(state.garden)}</h1>
          <h1 class="mt0 tc">${gardens.flatten(state.garden)}</h1>
          <h1 class="mt0 tc">${gardens.flatten(state.garden)}</h1>
          <h1 class="mt0 tc">${gardens.flatten(state.garden)}</h1>
        </section>


        <div class="mt4">
        <div class='flex justify-around'>
                <button class="f6 link dim br-pill ba ph3 pv2 mb2 dib bg-yellow" onclick=${sun}>☀️</button>
                <button class="f6 link dim br-pill ba ph3 pv2 mb2 dib bg-blue" onclick=${rain}>🌧</button>
                <button class="f6 link dim br-pill ba ph3 pv2 mb2 dib bg-dark-gray" onclick=${moon}>🌖</button>
                <button class="f6 link dim br-pill ba ph3 pv2 mb2 dib bg-orange">🍁</button>
                <button class="f6 link dim br-pill ba ph3 pv2 mb2 dib bg-yellow">🏜</button>
            </div>
        </div>

           <footer class="tc pv4 pv5-ns">
            
            ${footer()}
          </footer>

      </main>
    </body>
  `

  function rain(){
    emit('clicks:rain')
  }

  function sun(){
    emit('clicks:sun')
  }

  function moon() {
    emit('clicks:moon')
  }

}
