<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white full-width-nav" style="background-color: #5E0000;">
    <v-row align="center" justify="space-between" class="w-100">
      <div class="d-flex align-items-center">
        <a class="navbar-brand" href="#">
          <img :src="logoPath" alt="Company Logo" width="70" height="70" class="d-inline-block align-top ml-3 mt-2 mr-1">
        </a>
        <h2 class="text-white ml-3 mt-2" style="font-family: Arial, sans-serif; font-weight: bold; color: #5E0000 !important;" >CCBE</h2>
      </div>
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </v-row>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item mr-3">
          <v-btn rounded="xl" size="large" color="#FBB700" to="/">Home</v-btn>
        </li>
        <li class="nav-item mr-3">
          <v-btn rounded="xl" size="large" color="#FBB700" to="/courses">Courses</v-btn>
        </li>
        <li class="nav-item mr-3">
          <v-btn rounded="xl" size="large" color="#FBB700" to="/inquiry">Inquiry</v-btn>
        </li>
        <li class="nav-item mr-3">
          <v-btn rounded="xl" size="large" color="#FBB700" to="/about">About Us</v-btn>
        </li>
        <li class="nav-item">
          <v-btn rounded="xl" size="large" color="#FBB700" to="/contact">Contact</v-btn>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      logoPath: require('@/assets/Logo.png') // Adjust path as needed
    };
  }
}
</script>

<style scoped>
.full-width-nav {
  width: 100%;
  padding: 0;
  margin: 0;
}

.navbar-brand img {
  transition: transform 0.3s;
}

.navbar-brand img:hover {
  transform: scale(1.1);
}

.nav-item v-btn {
  font-weight: bold;
  font-family: Arial, sans-serif;
}

/* Hover effect for buttons */
.v-btn:hover {
  background-color: #120150;
  color: #ffffff !important;
  transition: 0.3s;
}

/* Responsive styles */
@media (max-width: 768px) {
  .navbar-nav {
    justify-content: center;
    flex-direction: column;
  }

  .nav-item {
    margin-bottom: 10px;
  }
}
</style>
