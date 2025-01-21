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
      <v-row justify="center" class="mt-5" data-aos="fade-up" data-aos-duration="3000">
          <!-- Loop through careers array -->
          <v-col v-for="(career, index) in careers" :key="index" cols="12" md="6">
              <v-card outlined class="image-card">
                  <v-img :src="career.image" height="100%" width="100%" cover></v-img>
                  <v-card-actions class="text-center">
                      <v-spacer></v-spacer>
                      <h2 class="image-title">Join Our Team</h2>
                      <a href="mailto:jobs@ccbe.lk?subject=Job Application&body=Dear Hiring Team,%0D%0A%0D%0APlease find my application for the position.%0D%0A%0D%0ARegards,%0D%0A[Your Name]" class="apply-now-button">
                          Apply Now
                      </a>
                      <v-spacer></v-spacer>
                  </v-card-actions>
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
            careers: [
                {
                    image: "https://ik.imagekit.io/u3wbiya66/IMG-20250121-WA0006.jpg?updatedAt=1737434201584",
                },
                {
                    image: "https://ik.imagekit.io/u3wbiya66/IMG-20250121-WA0011.jpg?updatedAt=1737435218639",
                },
                {
                    image: "https://ik.imagekit.io/u3wbiya66/IMG-20250121-WA0009.jpg?updatedAt=1737435218715",
                },
                {
                    image: "https://ik.imagekit.io/u3wbiya66/IMG-20250121-WA0007.jpg?updatedAt=1737435218724",
                },
                {
                    image: "https://ik.imagekit.io/u3wbiya66/IMG-20250121-WA0010.jpg?updatedAt=1737435218885",
                },
                {
                    image: "https://ik.imagekit.io/u3wbiya66/IMG-20250121-WA0012.jpg?updatedAt=1737435219022",
                },
                {
                    image: "https://ik.imagekit.io/u3wbiya66/IMG-20250121-WA0008.jpg?updatedAt=1737435219045",
                },
                {
                    image: "https://ik.imagekit.io/u3wbiya66/IMG-20250121-WA0015.jpg?updatedAt=1737435219046",
                },
                {
                    image: "https://ik.imagekit.io/u3wbiya66/IMG-20250121-WA0014.jpg?updatedAt=1737435219125",
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

.paragraph {
    font-family: "Roboto", sans-serif;
    font-weight: 14px;
    font-size: 20px;
    font-style: normal;
    text-align: center;
}

.image-card {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
}

.image-title {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 10px;
}

.apply-now-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #FF5F15;
    color: white;
    text-decoration: none;
    font-size: 16px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    margin-top: 10px;
}

.apply-now-button:hover {
    background-color: #cc4a12;
}

.v-card-actions {
    flex-direction: column;
    align-items: center;
}

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
