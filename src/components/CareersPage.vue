<template>
<NavBar></NavBar>
<v-container>
    <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">
        <span class="highlight">Careers</span>
    </h1>
    <p class="paragraph" data-aos="fade-up" data-aos-duration="3000" style="text-align: center;">
        <b>Cambridge College of British English (CCBE)</b> Careers is your gateway to a world of possibilities and a launchpad for your professional aspirations. Be part of a prestigious institution that not only prioritizes academic excellence but also nurtures a thriving community of dedicated professionals. Together, we inspire confidence, build futures, and redefine what it means to succeed.
        Your career journey begins here at Cambridge College of British English!
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
                  <a href="mailto:jobs@ccbe.lk?subject=Job Application&body=Dear Hiring Team,%0D%0A%0D%0APlease find my application for the position.%0D%0A%0D%0ARegards,%0D%0A[Your Name]" 
   class="apply-now-button">
   Apply Now
</a>
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
import NavBar from './NavBar.vue';
import FooterPage from './FooterPage.vue';
import ChatBot from './ChatBot.vue';
import AOS from 'aos';

export default {
    name: 'CareersPage',
    data() {
        return {
            dialog: false,
            successDialog: false,
            cards: [{
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsu5_VDfFM9wtCWkU_FY4xbusUYZC92J-6mw&s",
                    title: "HR Executive (Female)",
                    subtitle: "Qualifications",
                    content: "Explore the best road trips across the western United States. Unmatched scenic beauty awaits!",
                    show: false,
                },
                {
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk-DDipvxubwmxaKbupkDyRguolzQhn1jNpw&s",
                    title: "IT Executive",
                    subtitle: "Qualifications",
                    content: "Discover the serene beauty of desert landscapes with our guided tours and expert advice.",
                    show: false,
                },
                {
                    image: "https://e2e2u7e4v6q.exactdn.com/wp-content/uploads/2023/02/pexels-fauxels-3184328.jpg?strip=all&lossy=1&fit=427%2C427&ssl=1",
                    title: "Assistant Lecturer",
                    subtitle: "Qualifications",
                    content: "Adventure in the heart of towering peaks. Perfect for hikers, climbers, and nature lovers.",
                    show: false,
                },
            ],
        };
    },
    components: {
        NavBar,
        FooterPage,
        ChatBot,
    },
    mounted() {
        AOS.init(); // Initialize AOS when the component is mounted
    },
};
</script>

  
<style scoped>
.title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
}

.highlight {
    color: #FF5F15;
}

.subtitle {
    font-size: 1.2rem;
    color: #555;
    margin: 20px 0;
}

.professionals-grid {
    margin-top: 30px;
}

.name {
    font-weight: bold;
    font-size: 1.1rem;
    margin: 10px 0;
}

.paragraph {
    font-family: "Roboto", sans-serif;
    font-weight: 14px;
    font-size: 20px;
    font-style: normal;
    text-align: center;
}

.horizontal-scroll {
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    padding: 10px;
    scrollbar-width: none;
    /* For Firefox */
    -ms-overflow-style: none;
    /* For Internet Explorer and Edge */
}

.horizontal-scroll::-webkit-scrollbar {
    display: none;
    /* For Chrome, Safari, and Opera */
}

.why-choose-us {
    padding: 40px 20px;
    background-color: #f9f9f9;
}

.section-title {
    font-size: 2.5rem;
    color: #272643;
    font-family: "Arial", sans-serif;
    margin-bottom: 20px;
}

.stats-row .v-col {
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.stats-card {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
}

.stats-card-img {
    object-fit: cover;
    border-bottom: 3px solid #FBB700;
}

.card-content {
    padding: 20px;
}

.stat-value {
    font-size: 28px;
    color: #FBB700;
    font-weight: bold;
}

.stat-label {
    font-size: 18px;
    color: rgb(20, 10, 10);
    font-family: 'Roboto', sans-serif;
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
