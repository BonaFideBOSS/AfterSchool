var app = new Vue({
  el: "#app",
  data: {
    sitename: "AfterSchool",
    cart: [],
    showLessons: true,
    lessons: lessons,
    search: "",
    sortBy: "subject",
    sortOrderAsc: true,
  },
  computed: {
    // Search Functionality
    filteredLessons() {
      const query = this.search.toLowerCase();
      return this.lessons.filter(
        (lesson) =>
          lesson.subject.toLowerCase().includes(query) ||
          lesson.location.toLowerCase().includes(query)
      );
    },

    // Sort Functionality
    sortedLessons() {
      const attribute = this.sortBy;
      const order = this.sortOrderAsc ? 1 : -1;

      function compare(a, b) {
        if (a[attribute] < b[attribute]) return -1 * order;
        if (a[attribute] > b[attribute]) return 1 * order;
        return 0;
      }
      return this.filteredLessons.sort(compare);
    },
  },
  methods: {
    // Function to change sort order - ASC or DESC
    toggleSortOrder() {
      this.sortOrderAsc = !this.sortOrderAsc;
    },

    // Add to Cart Functionality
    addToCart(lesson) {
      if (this.canAddToCart(lesson)) {
        this.cart.push(lesson.id);
      }
    },

    removeFromCart(lesson) {
      const index = this.cart.indexOf(lesson.id);
      if (index > -1) {
        this.cart.splice(index, 1);
      }
    },

    cartItemCount(lessonId) {
      return this.cart.filter((id) => id === lessonId).length;
    },

    canAddToCart(lesson) {
      return lesson.spaces > this.cartItemCount(lesson.id);
    },

    canRemoveFromCart(lesson) {
      return this.cartItemCount(lesson.id) > 0;
    },
    // End of Add to Cart Functionality

    // Shopping Cart Functionality
    showCheckout() {
      this.showLessons = this.showLessons ? false : true;
    },
  },
});
