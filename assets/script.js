const app = Vue.createApp({
    data() {
      return {
        message: 'PILLOLA ROSSA',
        message1: 'PILLOLA BLU',
        img: 'img/Pills.webp',
        title: ['text-danger', 'text-center'],
        container: 'text-center'
        
      }
    }
});

// Spazio lasciato di proposito

app.mount('#app');