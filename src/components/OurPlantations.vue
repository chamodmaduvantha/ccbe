<template>
  <NavBar></NavBar>
  <div class="page-background">
    <div class="title-container">
      <h1 class="page-title center mt-3" data-aos="flip-left" data-aos-duration="2000" cols="12" sm="6" md="4" lg="3"
        xl="2">Our Plantations</h1>
    </div>
    <v-container>
      <v-timeline side="end">
        <!-- Left Side Item -->

        <v-timeline-item right dot-color="orange">
          <v-card color="#004346" elevation="24" outlined shaped tile data-aos="fade-up" data-aos-duration="2000">
            <v-card-title class="title">Kawatayamuna</v-card-title>
            <v-card-text class="white text--primary">
              <p>Welcome to Vanilla Plantations, where we cultivate the finest vanilla beans with a commitment to
                quality and sustainability. Our plantations are nestled in the heart of nature, allowing our vanilla to
                flourish in its natural environment. We take pride in our meticulous farming practices, ensuring that
                every bean is hand-harvested at peak ripeness for unparalleled flavor and aroma. Whether you're a
                gourmet chef or a home baker, Vanilla Plantations delivers the essence of pure, authentic vanilla to
                elevate your culinary creations.</p>
              <v-btn class="mx-0" outline color="#fff700" to="/kawatayamuna">
                View
              </v-btn>
            </v-card-text>
          </v-card>
        </v-timeline-item>


        <v-timeline-item right dot-color="orange">
          <v-card color="#004346" elevation="24" outlined shaped tile data-aos="fade-up" data-aos-duration="2000">
            <v-card-title class="title">Kawdupalalle</v-card-title>
            <v-card-text class="white text--primary">
              <p>Welcome to Vanilla Plantations, where we cultivate the finest vanilla beans with a commitment to
                quality and sustainability. Our plantations are nestled in the heart of nature, allowing our vanilla to
                flourish in its natural environment. We take pride in our meticulous farming practices, ensuring that
                every bean is hand-harvested at peak ripeness for unparalleled flavor and aroma. Whether you're a
                gourmet chef or a home baker, Vanilla Plantations delivers the essence of pure, authentic vanilla to
                elevate your culinary creations.</p>
              <v-btn class="mx-0" outline color="#fff700" to="/kawlupanella">
                View
              </v-btn>
            </v-card-text>
          </v-card>
        </v-timeline-item>

        <v-timeline-item right dot-color="orange">
          <v-card color="#004346" elevation="24" outlined shaped tile data-aos="fade-up" data-aos-duration="2000">
            <v-card-title class="title">Pathingaskotuwa</v-card-title>
            <v-card-text class="white text--primary">
              <p>Welcome to Vanilla Plantations, where we cultivate the finest vanilla beans with a commitment to
                quality and sustainability. Our plantations are nestled in the heart of nature, allowing our vanilla to
                flourish in its natural environment. We take pride in our meticulous farming practices, ensuring that
                every bean is hand-harvested at peak ripeness for unparalleled flavor and aroma. Whether you're a
                gourmet chef or a home baker, Vanilla Plantations delivers the essence of pure, authentic vanilla to
                elevate your culinary creations.</p>
              <v-btn class="mx-0" outline color="#fff700" to="/patingaskotuwa">
                View
              </v-btn>
            </v-card-text>
          </v-card>
        </v-timeline-item>

        <!-- Right Side Item -->
        <v-timeline-item right dot-color="orange">
          <v-card color="#004346" elevation="24" outlined shaped tile data-aos="fade-up" data-aos-duration="2000">
            <v-card-title class="title">Salagama</v-card-title>
            <v-card-text class="white text--primary">
              <p>Welcome to Vanilla Plantations, where we cultivate the finest vanilla beans with a commitment to
                quality and sustainability. Our plantations are nestled in the heart of nature, allowing our vanilla to
                flourish in its natural environment. We take pride in our meticulous farming practices, ensuring that
                every bean is hand-harvested at peak ripeness for unparalleled flavor and aroma. Whether you're a
                gourmet chef or a home baker, Vanilla Plantations delivers the essence of pure, authentic vanilla to
                elevate your culinary creations.</p>
              <v-btn class="mx-0" outline color="#fff700" @click="openDialog_S">
                View
              </v-btn>
            </v-card-text>
          </v-card>
        </v-timeline-item>

        <v-timeline-item right dot-color="orange">
          <v-card color="#004346" elevation="24" outlined shaped tile data-aos="fade-up" data-aos-duration="2000">
            <v-card-title class="title">Rusigama</v-card-title>
            <v-card-text class="white text--primary">
              <p>Welcome to Vanilla Plantations, where we cultivate the finest vanilla beans with a commitment to
                quality and sustainability. Our plantations are nestled in the heart of nature, allowing our vanilla to
                flourish in its natural environment. We take pride in our meticulous farming practices, ensuring that
                every bean is hand-harvested at peak ripeness for unparalleled flavor and aroma. Whether you're a
                gourmet chef or a home baker, Vanilla Plantations delivers the essence of pure, authentic vanilla to
                elevate your culinary creations.</p>
              <v-btn class="mx-0" outline color="#fff700" @click="openDialog_R">
                View
              </v-btn>
            </v-card-text>
          </v-card>
        </v-timeline-item>

      </v-timeline>
    </v-container>
  </div>

  <!-- Dialog for Salagama -->
  <v-dialog v-model="dialog_S" width="auto">
    <v-card max-width="400" prepend-icon="mdi-update" title="Salagama Plantation">
      <v-card-text>
        The Salagama Plantation is currently under development. Please check back later for more updates!
      </v-card-text>
      <template v-slot:actions>
        <v-btn text @click="closeDialog_S">Close</v-btn>
      </template>
    </v-card>
  </v-dialog>

  <!-- Dialog for Rusigama -->
  <v-dialog v-model="dialog_R" width="auto">
    <v-card max-width="400" prepend-icon="mdi-update" title="Rusigama Plantation">
      <v-card-text>
        The Rusigama Plantation is currently under development. Please check back later for more updates!
      </v-card-text>
      <template v-slot:actions>
        <v-btn text @click="closeDialog_R">Close</v-btn>
      </template>
    </v-card>
  </v-dialog>

  <FooterPage></FooterPage>
</template>

<script>
import NavBar from './NavBar.vue';
import FooterPage from './FooterPage.vue'

//AOS Trasnsition
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'OurPlantations',
  components: {
    NavBar,
    FooterPage
  },
  mounted() {
    AOS.init(); // Initialize AOS when the component is mounted
  },
  methods: {
    openDialog_S() {
      this.dialog_S = true;  // Open the dialog
    },
    closeDialog_S() {
      this.dialog_S = false;  // Close the dialog
    },
    openDialog_R() {
      this.dialog_R = true;  // Open the dialog
    },
    closeDialog_R() {
      this.dialog_R = false;  // Close the dialog
    }
  },
  data: () => ({
    dialog_S: false,
    dialog_R: false,
    items: [
      {
        color: 'red lighten-2',

      },
      {
        color: 'purple darken-1',
      },
      {
        color: 'green lighten-1',
      },
      {
        color: 'indigo',
      }
    ]
  })
}
</script>

<style scoped>
.page-title {
  font-size: 3rem;
  /* Increase font size */
  font-weight: bold;
  /* Make the text bold */
  color: #4CAF50;
  /* Change the text color */
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

.page-background {
  position: relative;
  width: 100%;
  height: auto;
  /* Adjust as needed */
  background: url('https://www.marthastewart.com/thmb/tH9VQ9_oEfvNIU38lBxpDD8ZmG0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ground-vanilla-0422-ef438100408d4db3becf36f12acc7263.jpg') no-repeat center center;
  background-size: cover;
}

.page-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  /* Black overlay with 50% opacity */
  z-index: -1;
  /* Ensure the overlay is behind the content */
}

.content {
  position: relative;
  z-index: 1;
  /* Ensure content is above the overlay */
  padding: 20px;
  /* Adjust as needed */
}

.title-container {
  display: flex;
  justify-content: center;
  /* Centers the title horizontally */
  margin: 0 auto;
  /* Centers the container itself */
}

.page-title {
  font-size: 3rem;
  font-weight: bold;
  color: rgb(2, 58, 16);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 1.5rem;
  padding: 0.5rem 1rem;
  position: relative;
  border-radius: 8px;
  text-align: center;
  z-index: 1;
  display: inline-block;
}

.page-title::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  border-radius: 8px;
  z-index: -1;
}
</style>