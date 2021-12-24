const app = Vue.createApp({
  data() {
    return {
      product: "Shoes",
      image: "assets/socks_green.jpg",
      inventory: 45,
      details: ["50% cotton", "30% polyester", "20% wool"],
      variantes: [
        { id: 2234, color: "Green" },
        { id: 2235, color: "Blue" },
      ],
    };
  },
});
