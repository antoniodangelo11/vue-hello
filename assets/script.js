const app = Vue.createApp({
    data() {
      return {
        message: 'PILLOLA ROSSA',
        message1: 'PILLOLA BLU',
        img: 'img/Pills.webp',
        title: 'text-danger',
        title1: 'text-primary',
        space: 'text-dark',
        container: 'text-center',
        chooseVue: 'HAI SCELTO VUE.JS',
        chooseJs: 'HAI SCELTO VANILLA.JS',
      }
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

app.mount('#app');