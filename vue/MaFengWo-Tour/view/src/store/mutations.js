const mutatitons = {
  changCity(state,city) {
    state.city = city
  },
  returnLast() {
    this.$router.push({path:'/Hotel'})
  },
  transmitIndex(state,index) {
    state.letter = index
  }
}
export default mutatitons