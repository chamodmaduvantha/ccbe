<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white full-width-nav" style="background-color: #B7BF99 !important;">
    <v-row>
      <a class="navbar-brand" href="#">
        <div class="ml-4 mt-1">
      <img :src="logoPath" alt="Company Logo" width="70" height="70" class="d-inline-block align-top ml-1">
    </div>
    </a>
      <h3 class="mt-4" style="color: #010227; font-family: Arial, sans-serif; font-weight: bold;">CCBE</h3>
    </v-row>
    

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active mr-1 mb-1 mt-2" custom-bg>
          <v-btn rounded="xl" size="x-large" color="#272643" to="/" block mt-3>Home</v-btn>
        </li>
        <li class="nav-item active mr-1 mb-1 mt-2">
          <v-btn rounded="xl" size="x-large" id="ourplantation" to="/" block mt-3>Courses</v-btn>
        </li>
        <li class="nav-item active mr-1 mb-1 mt-2">
          <v-btn rounded="xl" size="x-large" id="contactus" block to="/" mt-3>Inquiry</v-btn>
        </li>
        <li class="nav-item active mr-1 mb-1 mt-2">
          <v-btn rounded="xl" size="x-large" id="aboutus" to="/" block mt-3>AboutUs</v-btn>
        </li>
        <li class="nav-item active mr-1 mb-1 mt-2">
          <v-btn rounded="xl" size="x-large" id="aboutus" to="/" block mt-3>Contact</v-btn>
        </li>
      </ul>
    </div>
  </nav>

</template>

<script>
export default {
  data() {
    return {
      logoPath: require('@/assets/Logo.png') // Example of using a local image file
    };
  }
}
</script>

<style scoped>
/* Full-width navbar spanning the entire viewport width */
.full-width-nav {
  width: 100vw;
  padding: 0;
  margin: 0;
}

/* Ensure buttons align properly and occupy space */
.nav-item {
  display: flex;
  align-items: center;
}

/* Button hover effects */
#ourplantation:hover,
#contactus:hover,
#aboutus:hover {
  background-color: #120150;
  transition: 0.7s;
  color: #ffffff;
}

/* Remove any margins that could affect full-width behavior */
.navbar-brand {
  margin-left: 0 !important;
}

/* For smaller screens */
@media (max-width: 768px) {
  .navbar-brand {
    margin-left: 0;
  }
  .navbar-nav {
    justify-content: center;
  }
}
</style>
