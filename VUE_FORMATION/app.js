const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Shoes",
      image: "assets/socks_green.jpg",
      inventory: 45,
      details: ["50% cotton", "30% polyester", "20% wool"],
      variantes: [
        { id: 2234, color: "Green", image: "./assets/socks_green.jpg" },
        { id: 2235, color: "Blue", image: "./assets/socks_blue.jpg" },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
});
