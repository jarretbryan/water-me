module.exports = store

function store (state, emitter) {
  state.garden = '#garden-sun#'
  state.color = 'green'

  emitter.on('DOMContentLoaded', function () {

    emitter.on('clicks:sun', function () {
      state.garden = '#garden-sun#'
      state.color = 'green'
      emitter.emit(state.events.RENDER)
    })

    emitter.on('clicks:rain', function () {
      state.garden = '#garden-rain#'
      emitter.emit(state.events.RENDER)
    })

    emitter.on('clicks:moon', function () {
      state.garden = '#garden-night#'
      state.color = 'dark-green'
      emitter.emit(state.events.RENDER)
    })

   

  })
}


