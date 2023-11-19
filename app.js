let webstore = new Vue({
  el: "#app",
  data: {
    sitename: "M00961778 - Course Work 1",
    lessons: lessons,
    searchQuery: "",
    sortBy: "",
    sortOrder: "asc",
    showCartPage: true,
    order: {
      name: "",
      number: "",
    },
    cart: [],
  },

  computed: {
    cartItemCount() {
      return this.cart.length;
    },

    // Function to allow Placing Order
    canCheckOut() {
      return this.order.name !== "" && this.order.number !== "";
    },

    // function to enable checkout button
    enableCheckout() {
      return this.cart.length > 0;
    },

    // sortedLessons() {
    //   let sortedArray = this.lessons.slice();
    //   if (this.sortBy) {
    //     sortedArray.sort((a, b) => {
    //       let modifier = 1;
    //       if (this.sortOrder === "desc") {
    //         modifier = -1;
    //       }
    //       if (a[this.sortBy] < b[this.sortBy]) return -1 * modifier;
    //       if (a[this.sortBy] > b[this.sortBy]) return 1 * modifier;
    //       return 0;
    //     });
    //   }
    //   return sortedArray;
    // },

    // Function to Filter Lessons based on search as you type
    filteredLessons() {
      const query = this.searchQuery.toLowerCase().trim();
      if (!query) {
        return this.lessons;
      } else {
        return this.lessons.filter(
          (lesson) =>
            lesson.programme.toLowerCase().includes(query) ||
            lesson.location.toLowerCase().includes(query)
        );
      }
    },

    // Function to sort the filtered lessons
    filteredLessonsSorted() {
      return this.filteredLessons.sort((a, b) => {
        let modifier = 1;
        if (this.sortOrder === "desc") {
          modifier = -1;
        }
        if (a[this.sortBy] < b[this.sortBy]) return -1 * modifier;
        if (a[this.sortBy] > b[this.sortBy]) return 1 * modifier;
        return 0;
      });
    },
  },
  methods: {
    addToCart(lesson) {
      this.cart.push(lesson.id);
    },
    canAddToCart(lesson) {
      return lesson.spaces > this.cartCount(lesson.id);
    },

    cartCount(id) {
      let count = 0;
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i] === id) {
          count++;
        }
      }
      return count++;
    },
    toggleCartPage() {
      this.showCartPage = !this.showCartPage;
    },
    removeFromCart(index) {
      const removedLesson = this.cart.splice(index, 1)[0];
      const originalLessonIndex = this.lessons.findIndex(
        (item) => item.id === removedLesson.id
      );

      if (originalLessonIndex !== -1) {
        this.lessons.splice(originalLessonIndex, 0, removedLesson);
      }
    },
    getLessonDetails(lessonId) {
      return this.lessons.find((lesson) => lesson.id === lessonId);
    },
    submitOrder() {
      alert("Order Submitted!");

      window.location.href = "index.html";
    },
  },
});
