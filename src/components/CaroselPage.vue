<template>
  <div class="carousel-container">
    <v-carousel v-if="items.length" cycle interval="4000" data-aos="flip-left" data-aos-duration="2000" height="400"
      show-arrows="hover" hide-delimiter-background>
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <v-img :src="item.src" class="carousel-image" cover></v-img>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.items = [
        { src: require("../assets/carosel/1.jpg") },
        { src: require("../assets/carosel/2.jpg") },
        { src: require("../assets/carosel/3.jpg") },
      ];
      console.log("Images loaded:", this.items);
    },
  },
};
</script>

<style scoped>
.carousel-container {
  width: 100%;
  max-height: 400px;
  overflow: hidden;
}

carousel-image {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Ensures the entire image is visible */
}


</style>
