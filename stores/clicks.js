module.exports = store

function store (state, emitter) {
  state.garden = '#garden-sun#'

  emitter.on('DOMContentLoaded', function () {
    emitter.on('clicks:add', function (count) {
      state.totalClicks += count
      emitter.emit(state.events.RENDER)
    })
    
  emitter.on('clicks:sun', function () {
    state.garden = '#garden-sun#'
    emitter.emit(state.events.RENDER)
  })

  emitter.on('clicks:rain', function () {
    state.garden = '#garden-rain#'
    emitter.emit(state.events.RENDER)
  })

   

  })
}


