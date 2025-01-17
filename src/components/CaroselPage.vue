<template>
<div class="parallax-carousel-container">
    <v-carousel v-if="items.length" cycle interval="5000" data-aos="zoom-in" data-aos-duration="2000" height="500" show-arrows="hover" hide-delimiter-background>
        <v-carousel-item v-for="(item, i) in items" :key="i">
            <div class="parallax-item" :style="{ backgroundImage: `url(${item.src})` }">
                <div class="parallax-overlay">
                    <h2 class="carousel-title">{{ item.title }}</h2>
                    <p class="carousel-subtitle">{{ item.subtitle }}</p>
                </div>
            </div>
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
            this.items = [{
                    src: require("../assets/carosel/1.jpg"),
                    title: "Explore Beautiful Destinations",
                    subtitle: "Discover the world's best places with us.",
                },
                {
                    src: require("../assets/carosel/2.jpg"),
                    title: "Adventure Awaits",
                    subtitle: "Take the leap into unforgettable experiences.",
                },
                {
                    src: require("../assets/carosel/3.jpg"),
                    title: "Unparalleled Luxury",
                    subtitle: "Experience the height of comfort and elegance.",
                },
            ];
            console.log("Parallax carousel images loaded:", this.items);
        },
    },
};
</script>

<style scoped>
.parallax-item {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    /* Creates the parallax effect */
    position: relative;
}

.parallax-overlay {
    background: rgba(0, 0, 0, 0.4);
    /* Add a dark overlay for better text readability */
    color: white;
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    width: 80%;
}
.parallax-carousel-container {
  padding-top: 0; /* Prevent extra space */
  width: 100%;
}
.carousel-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;
}

.carousel-subtitle {
    font-size: 1.25rem;
    line-height: 1.5;
}

@media (max-width: 768px) {
    .carousel-title {
        font-size: 1.8rem;
    }

    .carousel-subtitle {
        font-size: 1rem;
    }
}

</style>
