const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Shoes",
      inStock: true,
      image: "assets/socks_green.jpg",
      inventory: 45,
      details: ["50% cotton", "30% polyester", "20% wool"],
      variantes: [
        { 'id': 2234, 'color': "green", 'image': "./assets/socks_green.jpg", 'inStock': true },
        { 'id': 2235, 'color': "blue", 'image': "./assets/socks_blue.jpg", 'inStock': false },
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
