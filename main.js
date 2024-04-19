const app = Vue.createApp({
  data() {
    // Data properties
    return {
      premium: true, // Premium status
      cart: [] // Cart items
    }
  },
  methods: {
    // Method to update cart
    updateCart(id) {
      this.cart.push(id); // Add item to cart
    }
  }
});
