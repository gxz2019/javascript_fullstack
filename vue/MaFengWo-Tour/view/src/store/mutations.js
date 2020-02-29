const mutatitons = {
  changCity(state,city) {
    state.city = city
  },
  returnLast() {
    this.$router.push({path:'/Hotel'})
  }
}
export default mutatitons