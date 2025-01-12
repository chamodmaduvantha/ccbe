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
                <v-select
                  :items="['Ambalangoda', 'Galle', 'Horana', 'Matara', 'Piliyandala']"
                  label="Branch"
                  v-model="formData.branch"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  :items="['Social Media', 'Website', 'Friend/Referral', 'Other']"
                  label="How did you hear about us?"
                  v-model="formData.source"
                  required
                ></v-select>
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
        logoPath: require("@/assets/Logo.png"),
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
  if (!this.formData.name || !this.formData.branch || !this.formData.message) {
    alert("Please fill out all required fields.");
    return;
  }

  const branchConfig = {
    Ambalangoda: {
      serviceId: "service_lfaw7ig",
      templateId: "template_2qr8exc",
      publicKey: "RrKZfdB7O-c_xrVE3",
    },
    Galle: {
      serviceId: "service_a0rf5c8",
      templateId: "template_6bv0ico",
      publicKey: "5DFKJ881pqi_jmuPZ",
    },
    Horana: {
      serviceId: "service_06df1jl",
      templateId: "template_2v4t7vx",
      publicKey: "nK87S7OSoDR3ERF3i",
    },
    Matara: {
      serviceId: "service_08efz6a",
      templateId: "template_llhr0ob",
      publicKey: "GNQ1juP2sOqLepOI6",
    },
    Piliyandala: {
      serviceId: "service_mdw48kr",
      templateId: "template_nzbm91b",
      publicKey: "OOatG6LX2Xmx6_jGO",
    },
  };

  const selectedBranchConfig = branchConfig[this.formData.branch];
  if (!selectedBranchConfig) {
    alert("Invalid branch selected.");
    return;
  }

  console.log("Form Data Branch Selected:", this.formData.branch);
  console.log("Selected Branch Config:", selectedBranchConfig);

  const templateParams = {
    name: this.formData.name,
    contact: this.formData.contact || "Not provided",
    branch: this.formData.branch,
    source: this.formData.source || "Not provided",
    message: this.formData.message,
  };

  try {
    const response = await emailjs.send(
      selectedBranchConfig.serviceId,
      selectedBranchConfig.templateId,
      templateParams,
      selectedBranchConfig.publicKey
    );
    console.log("EmailJS Response:", response);
    alert("Inquiry sent successfully!");
    this.dialog = false;
    this.clearForm();
  } catch (error) {
    console.error("Failed to send inquiry. Error details:", error);
    alert(`Failed to send inquiry. Error: ${error.text || error.message || error}`);
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
  
  .v-btn:hover {
    background-color: #120150;
    color: #ffffff !important;
    transition: 0.3s;
  }
  
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
  