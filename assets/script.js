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
  },
});
