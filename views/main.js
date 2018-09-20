var html = require('choo/html')

var TITLE = 'water-me - main'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy">

    <header class="tc pv4 pv5-ns">
      <h1 class="f4 fw6 db black link hover-green"> Water Me</h1>
      <div class='flex justify-around'>
          <button class="f6 link dim br-pill ba ph3 pv2 mb2 dib bg-yellow">☀️</button>
          <button class="f6 link dim br-pill ba ph3 pv2 mb2 dib bg-blue">🌧</button>
          <button class="f6 link dim br-pill ba ph3 pv2 mb2 dib bg-dark-gray">🌖</button>
      </div>
    </header>
      <main class="pa3 cf center">


      <article class="cf ph3 ph5-ns pv5">
        <header class="fn fl-ns w-50-ns pr4-ns">
          <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
            On Typography
          </h1>
          <h2 class="f3 mid-gray lh-title">
            An excerpt from the Form of the Book by Jan Tschichold
          </h2>
          <time class="f6 ttu tracked gray">Sometime before 1967</time>
        </header>
        <div class="fn fl-ns w-50-ns">
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
        </div>
      </article>

    

      <article class="flex items-center">
        <div class="fl w-100 bg-green b--dotted">
          <h1 class="f6 f2-m f-subheadline-l fw6 tc">hi</h1>
        </div>
      </article>

      <section class="mw5 mw7-ns center bg-green pa3 ph5-ns">
        <h1 class="mt0">Centered Container</h1>
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
}
