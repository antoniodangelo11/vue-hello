const app = Vue.createApp({
  data() {
    return {
      container: "text-center",
      startMessage: "PILLOLA ROSSA",
      endMessage: "PILLOLA BLU",
      colorRed: "text-danger",
      space: "text-dark",
      colorBlu: "text-primary",
      chooseVue: "HAI SCELTO VUE.JS",
      chooseJs: "HAI SCELTO VANILLA.JS",
      img: "img/Pills.webp",
    };
  },
  methods: {
    pillsRed() {
      alert(this.chooseVue);
    },
    pillsBlu() {
      alert(this.chooseJs);
    },
  },
});

// Spazio lasciato di proposito

app.mount("#app");
