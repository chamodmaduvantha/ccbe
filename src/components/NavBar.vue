<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white full-width-nav" style="background-color: #5E0000;">
    <v-row align="center" justify="space-between" class="w-100">
        <div class="d-flex align-items-center">
            <a class="navbar-brand" href="#">
                <img :src="logoPath" alt="Company Logo" width="70" height="70" class="d-inline-block align-top ml-3 mt-2 mr-1">
            </a>
            <h2 class="text-white ml-3 mt-2" style="font-family: Arial, sans-serif; font-weight: bold; color: #5E0000 !important;">CCBE</h2>
        </div>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </v-row>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item mr-3">
                <v-btn rounded="xl" size="large" color="#FBB700" to="/" block>Home</v-btn>
            </li>
            <li class="nav-item mr-3">
                <v-btn rounded="xl" size="large" color="#FBB700" to="/courses" block>Courses</v-btn>
            </li>
            <li class="nav-item mr-3">
                <v-btn rounded="xl" size="large" color="#FBB700" to="/corevalues" block>Core Values</v-btn>
            </li>
            <li class="nav-item mr-3">
                <v-btn rounded="xl" size="large" color="#FBB700" @click="dialog = true" block>Inquiry</v-btn>
            </li>
            <li class="nav-item mr-3">
                <v-btn rounded="xl" size="large" color="#FBB700" to="/about" block>About Us</v-btn>
            </li>
            <li class="nav-item mr-3">
                <v-btn rounded="xl" size="large" color="#FBB700" to="/contact" block>Contact</v-btn>
            </li>
        </ul>
    </div>
  </nav>

  <div class="pa-4 text-center">
      <v-dialog v-model="dialog" max-width="600">
          <v-card prepend-icon="mdi-account" title="Inquiry Form">
              <v-card-text>
                  <v-row dense>
                      <v-col cols="12" md="6">
                          <v-text-field label="Your Name" v-model="formData.name" required></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                          <v-text-field label="Contact Number" v-model="formData.contact"></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                          <v-select :items="['Ambalangoda', 'Galle', 'Horana', 'Matara', 'Piliyandala']" label="Branch" v-model="formData.branch" required></v-select>
                      </v-col>
                      <v-col cols="12" md="6">
                          <v-select :items="['Social Media', 'Website', 'Friend/Referral', 'Other']" label="How did you hear about us?" v-model="formData.source" required></v-select>
                      </v-col>
                      <v-col cols="12">
                          <v-textarea label="Type your message" v-model="formData.message" required></v-textarea>
                      </v-col>
                  </v-row>
                  <small class="text-caption text-medium-emphasis">*indicates required field</small>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>
                  <v-btn color="primary" text="Submit" variant="tonal" @click="sendInquiry"></v-btn>
              </v-card-actions>
          </v-card>
      </v-dialog>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      logoPath: require('@/assets/Logo.png'),
      dialog: false,
      formData: {
        name: "",
        contact: "",
        branch: "",
        source: "",
        message: "",
      },
    };
  },
  methods: {
    async sendInquiry() {
      // Check for required fields
      if (!this.formData.name || !this.formData.branch || !this.formData.message) {
        alert("Please fill out all required fields.");
        return;
      }

      // Prepare the data to send in the email
      const templateParams = {
        name: this.formData.name,
        contact: this.formData.contact || "Not provided",
        branch: this.formData.branch,
        source: this.formData.source || "Not provided",
        message: this.formData.message,
      };

      try {
        // Send email via EmailJS
        console.log(templateParams); // Log the data being sent
        await emailjs.send(
          "service_gf8aggm", // Your EmailJS Service ID
          "template_42eo8hf", // Your EmailJS Template ID
          templateParams,
          "f1gYNf13lMtK2WjbR" // Your EmailJS Public Key
        );

        alert("Inquiry sent successfully!");
        this.dialog = false; // Close the dialog
        this.clearForm(); // Reset the form
      } catch (error) {
        console.error("Failed to send inquiry:", error);
        alert("An error occurred. Please try again.");
      }
    },

    clearForm() {
      this.formData = {
        name: "",
        contact: "",
        branch: "",
        source: "",
        message: "",
      };
    },
  },
};
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
