<template>
    <NavBar></NavBar>
    <v-container>
        <div>
            <v-row justify="center">
                <v-col cols="12" sm="6" md="4" lg="3" xl="2">
                    <h1 class="page-title center" data-aos="flip-left" data-aos-duration="2000">Kawdupalalle</h1>
                </v-col>
            </v-row>

            <v-container>
                <h3 class="page-titl" data-aos="flip-left" data-aos-duration="2000">Images & 360 View</h3>
            </v-container>

            <v-row>
                <!-- Loop through all items (images and iframes) -->
                <v-col v-for="(item, index) in contentItems" :key="index" cols="12" sm="6" md="4" lg="3" xl="2">
                    <v-card class="pa-3" v-if="item.iframeSrc">
                        <iframe width="100%" height="200px" frameborder="0" :src="item.iframeSrc"
                            allowfullscreen></iframe>
                        <v-card-subtitle class="black--text mt-3" style="color: black; font-weight: bold;">
                            {{ item.subtitle }}
                        </v-card-subtitle>
                        <v-card-text>
                            <div>{{ item.description }}</div>
                        </v-card-text>
                    </v-card>

                    <!-- Image Fullscreen Trigger -->
                    <v-card class="pa-3" v-else @click="toggleFullscreen($event)">
                        <v-img width="100%" height="200px" :src="item.src" class="fullscreen-image" cover></v-img>
                        <v-card-subtitle class="black--text mt-3" style="color: black; font-weight: bold;">
                            {{ item.subtitle }}
                        </v-card-subtitle>
                        <v-card-text>
                            <div>{{ item.description }}</div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>



            <v-container>
                
            </v-container>
        </div>

        <!-- Fullscreen Dialog for Images -->
        <v-dialog v-model="fullscreenDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card>
                <v-toolbar dark color="green-darken-4">
                    <v-btn icon @click="closeFullscreen">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>{{ selectedItem.subtitle }}</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                    <v-container>
                        <v-row justify="center">
                            <v-col>
                                <div class="mt-4" style="font-size: 18px; font-weight: 500;">{{ selectedItem.description
                                    }}</div>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-container>
    <FooterPage></FooterPage>
</template>

<script>
import NavBar from './NavBar.vue';
import FooterPage from './FooterPage.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    name: 'SalPlant',
    components: {
        NavBar,
        FooterPage,
    },
    mounted() {
        AOS.init();
    },
    data() {
        return {
            contentItems: [
                {
                    iframeSrc: "https://player.vimeo.com/video/1028340331?h=837d36d8a5",
                    subtitle: "A Glimpse into the Heart of a Vanilla Plantation",
                    description: "Explore the lush fields, delicate vines, and rich history behind the worlds most aromatic spice.",
                },
                {
                    iframeSrc: "https://momento360.com/e/u/910b0994d8684d1c80eb240715db01d6?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
                    subtitle: "Kawdupalalle - 360° Virtual Tour",
                    description: "Explore the Lush Vanilla Plantations and Scenic Beauty of Kawdupalalle in an Immersive 360° Experience.",
                },
                {
                    src: "https://i.imghippo.com/files/PSs7521Jqg.jpg",
                    subtitle: "Welcome to Kawdupalalle Vanilla Estate",
                    description: "Home of Premium Vanilla Cultivation - Experience Nature, Quality, and Sustainability.",
                },
                {
                    src: "https://i.imghippo.com/files/cYO8183xoA.jpg",
                    subtitle: "Welcome to Kawatayamuna Vanilla Estate",
                    description: "Home of Premium Vanilla Cultivation - Experience Nature, Quality, and Sustainability.",
                },
                {
                    iframeSrc: "https://momento360.com/e/u/8f507d246d5e495f824afd5f1971cb52?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
                    subtitle: "Kawdupalalle - 360° Virtual Tour",
                    description: "Embark on a Virtual Journey Through the Verdant Vanilla Plantations and Breathtaking Scenery of Kawdupalalle in Stunning 360° Vision.",
                },
                {
                    src: "https://i.imghippo.com/files/BE4102KA.jpg",
                    subtitle: "Dedication in Every Harvest",
                    description: "Hardworking Hands Cultivating Quality Vanilla for the World.",
                },
                {
                    src: "https://i.imghippo.com/files/ADb4596Itg.jpg",
                    subtitle: "Nature's Finest Vanilla Blossoms",
                    description: "Growing with Care, Each Plant Represents Quality and Sustainability.",
                },
                {
                    src: "https://i.imghippo.com/files/iSO8910KfQ.jpg",
                    subtitle: "The Heart of Vanilla Cultivation",
                    description: "Our Skilled Team Nurturing Each Plant to Perfection.",
                },
                {
                    src: "https://i.imghippo.com/files/Sph3047GtQ.jpg",
                    subtitle: "Nature's Finest Vanilla Blossoms",
                    description: "Growing with Care, Each Plant Represents Quality and Sustainability.",
                },
                {
                    src: "https://imgpx.com/y38fgPX3Frq5.jpg",
                    subtitle: "Lush Green Vanilla Vines",
                    description: "Where Flavor Begins: The First Stages of Premium Vanilla Production.",
                },
                {
                    src: "https://imgpx.com/kpEA6AFJd6CP.jpg",
                    subtitle: "Emerging Vanilla Splendor",
                    description: "The Journey from Green Vines to Aromatic Vanilla Begins Here.",
                },
                {
                    src: "https://imgpx.com/hDqNZsFdgFsA.jpg",
                    subtitle: "In-Progress Vanilla Greenhouses",
                    description: "A Journey of Growth and Innovation in Sustainable Vanilla Cultivation.",
                }, 
            ],
            fullscreenDialog: false, // Control for the fullscreen image dialog
            selectedItem: {}, // The currently selected image or video item
        };
    },
    methods: {
        openFullscreen(item) {
            this.selectedItem = item;
            this.fullscreenDialog = true;
        },
        closeFullscreen() {
            this.fullscreenDialog = false;
        },
        async toggleFullscreen(event) {
            const imgElement = event.target.closest('.v-img');  // Get the image element wrapped in v-img
            if (!document.fullscreenElement) {
                // Enter fullscreen
                if (imgElement.requestFullscreen) {
                    await imgElement.requestFullscreen();
                } else if (imgElement.mozRequestFullScreen) { /* Firefox */
                    await imgElement.mozRequestFullScreen();
                } else if (imgElement.webkitRequestFullscreen) { /* Chrome, Safari, and Opera */
                    await imgElement.webkitRequestFullscreen();
                } else if (imgElement.msRequestFullscreen) { /* IE/Edge */
                    await imgElement.msRequestFullscreen();
                }
            } else {
                // Exit fullscreen
                if (document.exitFullscreen) {
                    await document.exitFullscreen();
                } else if (document.mozCancelFullScreen) { /* Firefox */
                    await document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) { /* Chrome, Safari, and Opera */
                    await document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) { /* IE/Edge */
                    await document.msExitFullscreen();
                }
            }
        },
    },
};
</script>

<style>
.v-card {
    max-width: 100%;
    height: auto;
    cursor: pointer;
}

.page-title {
    font-size: 3rem;
    font-weight: bold;
    color: rgb(2, 58, 16);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-bottom: 1.5rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    text-align: center;
}

.decorated-image {
    border: 1px solid #4CAF50;
    border-radius: 10px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.page-title {
    text-align: center;

}
</style>