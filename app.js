let webstore = new Vue({
  el: "#app",

  data: {
    sitename: "M00961778 - Course Work 1",
    lessons: lessons,
    cart: [],
  },

  computed: {
    cartItemCount() {
      return this.cart.length;
    },
  },
});
