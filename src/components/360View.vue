<template>
    <v-container>
        <div>
            <v-row justify="center">
                <v-col cols="12" sm="6" md="4" lg="3" xl="2">
                    <h1 class="title center" data-aos="flip-left" data-aos-duration="2000">Branchers <span class="highlight">360 View</span></h1>
                </v-col>
            </v-row>
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
</template>

<script>
import AOS from 'aos';

export default {
    name: '360View',
    components: {
    },
    mounted() {
        AOS.init();
    },
    data() {
        return {
            contentItems: [
                {
                    iframeSrc: "https://momento360.com/e/u/4e0567c60ff04f2399663f0331bf84d5?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
                    subtitle: "Explore Ambalangoda Branch in 360",
                    description: "Immerse yourself in a virtual tour of our vibrant learning spaces at the Ambalangoda Branch.",
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
.title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
}

.highlight {
    color: #FF5F15;
}

.title {
    font-family: 'Roboto', sans-serif;
    color: #FBB700;
    text-transform: uppercase;
    font-weight: bold;
}

.subtitle {
    font-size: 1.2rem;
    color: #555;
    margin: 20px 0;
}
</style>