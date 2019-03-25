var app = new Vue({
  el: "#app",
  // delimiters: ["[[", "]]"],
  data: {    
      //in my real app, numOfColumns is being changed dynamically    
      numOfColumns: "3"
  },
  computed: {
      gridStyle() {
        console.log("hello")
          return {
              "grid-template-columns": "repeat(" + this.numOfColumns + ", 1fr)"
              // order: 1
          }
        //I also tried:
        // gridTemplateColumns: "12vw repeat (" + this.numOfColumns + ", 1fr);";
      
      }
  },
  methods: {

  }
})