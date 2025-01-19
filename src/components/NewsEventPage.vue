<template>
<NavBar></NavBar>
<v-container>
    <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">
        News <span class="highlight">& Events</span>
    </h1>
    <br />
    <p class="paragraph" data-aos="fade-up" data-aos-duration="3000" style="text-align: center;">
        <b>At Cambridge College of British English (CCBE)</b>, we are constantly evolving to offer our students the best learning experiences. Our upcoming events include language workshops, cultural exchange programs, and exciting new course launches designed to meet the needs of learners of all ages. Whether you're interested in expanding your vocabulary, improving your accent, or exploring advanced language techniques, our events offer unique opportunities for growth. Stay tuned for announcements on our seasonal events, student achievements, and exciting collaborations with language experts. At CCBE, every moment is a chance to learn, connect, and celebrate the joy of mastering English.
    </p>
    <br />

    <v-row>
        <!-- Loop through the cards array -->
        <v-col v-for="(card, index) in cards" :key="index" cols="12" sm="6" md="4">
            <v-card class="mx-auto" max-width="344">
                <v-img :src="card.image" height="200px" cover></v-img>

                <v-card-title>{{ card.title }}</v-card-title>

                <v-card-subtitle>{{ card.subtitle }}</v-card-subtitle>

                <v-card-actions>

                    <v-spacer></v-spacer>

                    <v-btn :icon="card.show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="toggleCard(index)"></v-btn>
                </v-card-actions>

                <v-expand-transition>
                    <div v-show="card.show">
                        <v-divider></v-divider>

                        <v-card-text>{{ card.content }}</v-card-text>
                    </div>
                </v-expand-transition>
            </v-card>
        </v-col>
    </v-row>
</v-container>
<ChatBot></ChatBot>
<FooterPage></FooterPage>
</template>

<script>
import AOS from 'aos';
import NavBar from './NavBar.vue';
import FooterPage from './FooterPage.vue';
import ChatBot from './ChatBot.vue'

export default {

    name: 'NewsEventPage',
    components: {
        NavBar,
        FooterPage,
        ChatBot,
    },
    data() {
        return {
            // Array of card data
            cards: [{
                    image: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                    title: "Top Western Road Trips",
                    subtitle: "1,000 miles of wonder",
                    content: "Explore the best road trips across the western United States. Unmatched scenic beauty awaits!",
                    show: false,
                },
                {
                    image: "https://cdn.vuetifyjs.com/images/cards/desert.jpg",
                    title: "Desert Adventures",
                    subtitle: "Sands of time",
                    content: "Discover the serene beauty of desert landscapes with our guided tours and expert advice.",
                    show: false,
                },
                {
                    image: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
                    title: "Mountain Escapades",
                    subtitle: "Reach new heights",
                    content: "Adventure in the heart of towering peaks. Perfect for hikers, climbers, and nature lovers.",
                    show: false,
                },
            ],
        };
    },
    methods: {
        toggleCard(index) {
            this.cards[index].show = !this.cards[index].show;
        },
        exploreCard(card) {
            alert(`Exploring: ${card.title}`);
        },
    },
};
AOS.init();
</script>

<style>
.title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
}

.highlight {
    color: #FF5F15;
}

.paragraph {
    font-family: "Roboto", sans-serif;
    font-weight: 14px;
    font-size: 20px;
    font-style: normal;
    text-align: center;
}

.title {
    font-family: 'Roboto', sans-serif;
    color: #FBB700;
    text-transform: uppercase;
    font-weight: bold;
}

.v-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
}

.stats-row .v-col:hover {
    transform: scale(1.05);
    opacity: 0.9;
}
</style>
