let webstore = new Vue({
  el: "#app",

  data: {
    sitename: "M00961778 - Course Work 1",
    lessons: lessons,
    sortBy: "",
    sortOrder: "",
    cart: [],
  },

  computed: {
    cartItemCount() {
      return this.cart.length;
    },

    sortedLessons() {
      let sortedArray = this.lessons.slice();
      if (this.sortBy) {
        sortedArray.sort((a, b) => {
          let modifier = 1;
          if (this.sortOrder === "desc") {
            modifier = -1;
          }
          if (a[this.sortBy] < b[this.sortBy]) return -1 * modifier;
          if (a[this.sortBy] > b[this.sortBy]) return 1 * modifier;
          return 0;
        });
      }
      return sortedArray;
    },
  },
});
