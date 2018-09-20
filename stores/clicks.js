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
      state.color = 'dark-green'
      emitter.emit(state.events.RENDER)
    })

    emitter.on('clicks:moon', function () {
      state.garden = '#garden-night#'
      state.color = 'dark-gray'
      emitter.emit(state.events.RENDER)
    })

    emitter.on('clicks:fall', function () {
      state.garden = '#garden-fall#'
      state.color = 'orange'
      emitter.emit(state.events.RENDER)
    })

    emitter.on('clicks:desert', function () {
      state.garden = '#garden-desert#'
      state.color = 'gold'
      emitter.emit(state.events.RENDER)
    })

    emitter.on('clicks:aqua', function () {
      state.garden = '#garden-aqua#'
      state.color = 'light-blue'
      emitter.emit(state.events.RENDER)
    })

   

  })
}


