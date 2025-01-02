<template>
    <NavBar></NavBar>
    <v-container>
        <div>
            <v-row justify="center">
                <v-col cols="12" sm="6" md="4" lg="3" xl="2">
            <h1 class="page-title center" data-aos="flip-left" data-aos-duration="2000">Rusigama</h1>
                </v-col>
            </v-row>

            <v-row>
                <!-- Loop to create 10 iframes -->
                <v-col v-for="(item, index) in items" :key="index" cols="12" sm="6" md="4" lg="3" xl="2">
                    <v-card class="pa-3">
                        <iframe width="100%" height="200px" frameborder="0" :src="item.iframeSrc" allowfullscreen></iframe>
                        
                    </v-card>
                    <v-card-subtitle class="black--text mt-3" style="color: black; font-weight: bold;">
                        {{ item.subtitle }}
                    </v-card-subtitle>
                    <v-card-text>
                        <div>{{ item.description }}</div>
                    </v-card-text>
                </v-col>
                <v-col v-for="(item, index) in item" :key="index" cols="12" sm="6" md="4" lg="3" xl="2">
                    <v-card class="pa-3">
                        <v-img width="100%" height="200px" frameborder="0" :src="item.src" cover></v-img>
                    </v-card>
                    <v-card-subtitle class="black--text mt-3" style="color: black; font-weight: bold;">
                        {{ item.subtitle }}
                    </v-card-subtitle>
                    <v-card-text>
                        <div>{{ item.description }}</div>
                    </v-card-text>
                </v-col>
            </v-row>
        </div>
    </v-container>
<FooterPage></FooterPage>
</template>


<script>
import NavBar from './NavBar.vue';


//AOS Trasnsition
import AOS from 'aos';
import 'aos/dist/aos.css';
import FooterPage from './FooterPage.vue'

export default {
    name: 'SalPlant',
    components: {
        NavBar,
        FooterPage
    },
    mounted() {
        AOS.init();
    },
    data() {
        return {
            items: [
                {
                    iframeSrc: "https://momento360.com/e/u/8d66e4c629634156ac29212d8d85197e?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
                    subtitle: "Sub Title",
                    description: "Vanilla cultivation is the primary focus at Agroventures."
                },

            ],
            item: [
                {
                    src: "https://agroventuresplantations.com/images/data/image/media/22/custom_241-2000.jpg",
                    subtitle: "Sub Title",
                    description: "1 Vanilla cultivation is the primary focus at Agroventures."
                },
                {
                    src: "https://i.postimg.cc/YCRzXBz9/1.jpg",
                    subtitle: "Sub Title",
                    description: "2 Vanilla cultivation is the primary focus at Agroventures."
                },
                {
                    src: "https://i.postimg.cc/fWV81NJy/6.jpg",
                    subtitle: "Sub Title",
                    description: "3 Vanilla cultivation is the primary focus at Agroventures."
                },
            ]
            
        };
    }
}

</script>


<style>
.v-card {
    max-width: 100%;
    height: auto;
}

iframe {
    border: none;
}

.page-title {
    font-size: 3rem;
    /* Increase font size */
    font-weight: bold;
    /* Make the text bold */
    color: rgb(2, 58, 16);
    /* Change text color to white */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    /* Add a subtle text shadow */
    margin-bottom: 1.5rem;
    /* Add some space below the title */
    padding: 0.5rem 1rem;
    /* Add padding around the title */
    border-radius: 8px;
    /* Round the corners of the title background */
    text-align: center;
}
.page-title {
  text-align: center; /* Centers the text */
  font-size: 2rem; /* You can adjust the font size for different screen sizes */
}

@media (max-width: 600px) {
  .page-title {
    font-size: 1.5rem; /* Smaller font size for mobile devices */
  }
}
</style>