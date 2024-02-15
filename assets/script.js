var app = new Vue({
  el: "#app",
  data: {
    sitename: "AfterSchool",
    cart: [],
    showCheckout: false,
    lessons: lessons,
    sortBy: "subject",
    sortOrderAsc: true,
  },
  computed: {
    sortedLessons() {
      const attribute = this.sortBy;
      const order = this.sortOrderAsc ? 1 : -1;

      function compare(a, b) {
        if (a[attribute] < b[attribute]) return -1 * order;
        if (a[attribute] > b[attribute]) return 1 * order;
        return 0;
      }
      return this.lessons.sort(compare);
    },
  },
  methods: {
    toggleSortOrder() {
      this.sortOrderAsc = !this.sortOrderAsc;
    },
  },
});
