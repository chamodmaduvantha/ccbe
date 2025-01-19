<template>
    <div>
      <!-- Chatbot Icon -->
      <div class="chatbot-container">
        <v-tooltip activator="hover" location="left" transition="scale-transition">
          <template v-slot:activator="{ props }">
            <img v-bind="props" class="chatbot-image" :src="require('@/assets/icons/CCBEBot.jpg')" alt="Chatbot" @click="toggleChatWindow" />
          </template>
          <span>Hi! How can I assist you today?</span>
        </v-tooltip>
      </div>
  
      <!-- Chat Window -->
      <div v-if="isChatOpen" class="chat-window">
        <div class="chat-header">
          <span>Chat with us</span>
          <button class="close-button" @click="toggleChatWindow">×</button>
        </div>
  
        <!-- Main Menu Categories -->
        <div v-if="!selectedCategory" class="chat-menu">
          <p>Please choose a category to continue:</p>
          <ul>
            <li v-for="category in menuCategories" :key="category" @click="selectCategory(category)">
              {{ category }}
            </li>
          </ul>
        </div>
  
        <!-- Subcategories for "About Us" -->
        <div v-if="selectedCategory === 'About Us' && !selectedSubCategory" class="chat-menu">
          <p>Please choose an option under "About Us":</p>
          <ul>
            <li v-for="subCategory in aboutUsSubCategories" :key="subCategory" @click="selectSubCategory(subCategory)">
              {{ subCategory }}
            </li>
          </ul>
          <button @click="resetCategory">Go Back</button>
        </div>
  
        <!-- Subcategories for "Courses" -->
        <div v-if="selectedCategory === 'Courses' && !selectedSubCategory" class="chat-menu">
          <p>Please choose a course:</p>
          <ul>
            <li v-for="subCategory in coursesSubCategories" :key="subCategory" @click="selectSubCategory(subCategory)">
              {{ subCategory }}
            </li>
          </ul>
          <button @click="resetCategory">Go Back</button>
        </div>
  
        <!-- Subcategories for "Contact" -->
        <div v-if="selectedCategory === 'Contact' && !selectedSubCategory" class="chat-menu">
          <p>Please choose a contact option:</p>
          <ul>
            <li v-for="subCategory in contactSubCategories" :key="subCategory" @click="selectSubCategory(subCategory)">
              {{ subCategory }}
            </li>
          </ul>
          <button @click="resetCategory">Go Back</button>
        </div>
  
        <!-- About Us Details -->
        <div v-if="selectedCategory === 'About Us' && selectedSubCategory" class="chat-content">
          <h3>{{ selectedSubCategory }}</h3>
          <p v-html="subCategoryDetails[selectedSubCategory]"></p>
          <button @click="resetSubCategory">Back to About Us</button>
        </div>
  
        <!-- Course Details -->
        <div v-if="selectedCategory === 'Courses' && selectedSubCategory" class="chat-content">
          <h3>{{ selectedSubCategory }}</h3>
          <p v-html="subCategoryDetails[selectedSubCategory]"></p>
          <button @click="resetSubCategory">Back to Courses</button>
        </div>
  
        <!-- Contact Details -->
        <div v-if="selectedCategory === 'Contact' && selectedSubCategory" class="chat-content">
          <h3>{{ selectedSubCategory }}</h3>
          <p v-html="subCategoryDetails[selectedSubCategory]"></p>
          <button @click="resetSubCategory">Back to Contact</button>
        </div>
  
        <!-- Chat Content for Other Categories -->
        <div v-else-if="selectedCategory && selectedCategory !== 'About Us' && selectedCategory !== 'Courses' && selectedCategory !== 'Contact'" class="chat-content">
          <p>You selected: <strong>{{ selectedCategory }}</strong></p>
          <p>How can we assist you with {{ selectedCategory.toLowerCase() }}?</p>
          <button @click="resetCategory">Go Back</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ChatWindow",
    data() {
      return {
        isChatOpen: false, // Toggle chat window visibility
        menuCategories: ["About Us", "Courses", "Contact"], // Main menu options
        aboutUsSubCategories: ["Our Branches", "Our Certification"], // About Us subcategories
        coursesSubCategories: [
          "Pre Schoolers",
          "Young Learners (Age 6-12)",
          "For Schools (Age 13-18)",
          "English Skills For O/L's",
          "English Skills For A/L's",
          "IELTS"
        ],
        contactSubCategories: [
          "Ambalangoda College",
          "Galle College",
          "Horana College",
          "Matara College",
          "Piliyandala College",
        ], // Subcategories for Courses
        subCategoryDetails: {
          "Our Branches": `
            <ul class="branch-list">
              <li class="branch-item"><strong>Ambalangoda Branch</strong><br />123 Main Street, Ambalangoda</li>
              <li class="branch-item"><strong>Galle Branch</strong><br />456 High Street, Galle</li>
              <li class="branch-item"><strong>Horana Branch</strong><br />No: 149 Graceland,Circular Road,Horana,12400</li>
              <li class="branch-item"><strong>Matara Branch</strong><br />No: 352,Kumarathunga Mawatha,Matara,81000</li>
              <li class="branch-item"><strong>Piliyandala Branch</strong><br />No: 119 ,Moratuwa Road,Piliyandala,10300</li>
            </ul>
          `,
          "Our Certification": `
            <div class="certification-text">
              Our organization takes pride in its achievements, consistently being recognized for excellence in education and service. 
              In 2022, we were honored with the Silver Award and the Southern Award, marking our commitment to innovation and quality.
              Building on this success, 2023 was a milestone year, as we received the prestigious Gold Award alongside the Southern Award, showcasing our growth and dedication.
              Additionally, we were recognized with the IELTS Award and the Cambridge Award, reflecting our outstanding contributions to language education.
              Continuing this legacy, we proudly earned the Cambridge Award again in 2024, reaffirming our leadership in educational excellence.
            </div>
          `,
          "Pre Schoolers": `
            Our institution boasts an exceptional team of experienced teaching staff dedicated to nurturing the academic and personal growth of every student. Comprising seasoned educators with diverse backgrounds and expertise, our faculty brings a wealth of knowledge and passion to the classroom. With years of teaching experience under their belts, they possess a deep understanding of pedagogical principles and best practices, ensuring that each lesson is tailored to meet the unique needs of every learner. Beyond delivering curriculum content, our instructors serve as mentors, guiding students on their educational journey and instilling in them a lifelong love for learning. Through their unwavering commitment to excellence, our teaching staff inspires students to reach their full potential and achieve academic success.
          `,
          "Young Learners (Age 6-12)": `
            This programme for primary school students builds children’s English skills to prepare them for academic excellence and beyond. The topics were developed to inspire young learners through fun and fascinating information about the real world. We keep children motivated to learn through songs, games, video activities, language presentations, and group projects. Children will improve their language abilities step by step in a friendly and co-operative environment that builds their confidence in their English. They will learn how to communicate and become little storytellers while striving for success in different areas of their lives.
          `,
          "For Schools (Age 13-18)": `
            This programme is suitable for secondary school students and provides better academic, social and career opportunities through English mastery. We provide learners with a friendly learning space where they can improve their language abilities through the four core skills of reading, writing, speaking and listening. This programme teaches learners to discover their own voices to communicate effortlessly. We use materials which provide learners with the language, vocabulary, grammar and the skills to do well in the Cambridge English examinations. We also encourage plenty of speaking practice in order to increase the learner’s confidence in their English skills. Learners can take the Cambridge English exams as they progress through this programme and upon passing, will be awarded valuable certificates that will help open doors to the best colleges, universities and careers worldwide. Starting from a basic English skill level to the highest level, these courses train students on the use of language in real life through meaningful communication. At the end of this programme, students will be able to read, write, listen and speak at a high level of English fluency.
          `,
          "English Skills For O/L's": `
            This programme is suitable for secondary school students and provides better academic, social and career opportunities through English mastery. We provide learners with a friendly learning space where they can improve their language abilities through the four core skills of reading, writing, speaking and listening. This programme teaches learners to discover their own voices to communicate effortlessly. We use materials which provide learners with the language, vocabulary, grammar and the skills to do well in the Cambridge English examinations. We also encourage plenty of speaking practice in order to increase the learner’s confidence in their English skills. Learners can take the Cambridge English exams as they progress through this programme and upon passing, will be awarded valuable certificates that will help open doors to the best colleges, universities and careers worldwide. Starting from a basic English skill level to the highest level, these courses train students on the use of language in real life through meaningful communication. At the end of this programme, students will be able to read, write, listen and speak at a high level of English fluency.
          `,
          "English Skills For A/L's": `
            This programme is suitable for secondary school students and provides better academic, social and career opportunities through English mastery. We provide learners with a friendly learning space where they can improve their language abilities through the four core skills of reading, writing, speaking and listening. This programme teaches learners to discover their own voices to communicate effortlessly. We use materials which provide learners with the language, vocabulary, grammar and the skills to do well in the Cambridge English examinations. We also encourage plenty of speaking practice in order to increase the learner’s confidence in their English skills. Learners can take the Cambridge English exams as they progress through this programme and upon passing, will be awarded valuable certificates that will help open doors to the best colleges, universities and careers worldwide. Starting from a basic English skill level to the highest level, these courses train students on the use of language in real life through meaningful communication. At the end of this programme, students will be able to read, write, listen and speak at a high level of English fluency.
          `,
          "IELTS": `
            The International English Language Testing System (IELTS) is an exam that measures the language proficiency of people who want to study, work or live abroad in English speaking countries. IELTS is the standard test used for university entry in Australia, New Zealand, Canada, United Kingdom (UK) and the United States (US). At CCBE, we have a course to prepare you for the IELTS exams in order to gain access to international colleges or universities, improve career opportunities or for migration purposes in English-speaking countries.
          `,
          "Ambalangoda College": `
            <div>
              <strong>Ambalangoda College</strong><br />
              Address: 123 Main Street, Ambalangoda<br />
              Email: <a href="mailto:ambalangoda@college.com">ambalangoda@college.com</a><br />
              WhatsApp: <a href="https://wa.me/+94707997501" target="_blank">+94707997501</a><br />
              Landline: 091 2 252 452
            </div>
          `,
          "Galle College": `
            <div>
              <strong>Galle College</strong><br />
              Address: 456 High Street, Galle<br />
              Email: <a href="mailto:galle@college.com">galle@college.com</a><br />
              WhatsApp: <a href="https://wa.me/+94705725666" target="_blank">+94705725666</a><br />
              Landline: 091 22 37 37 3
            </div>
          `,
          "Horana College": `
            <div>
              <strong>Horana College</strong><br />
              Address: No: 149 Graceland, Circular Road, Horana, 12400<br />
              Email: <a href="mailto:horana@college.com">horana@college.com</a><br />
              WhatsApp: <a href="https://wa.me/+94707997512" target="_blank">+94707997512</a><br />
              Landline: 034 2 205 503
            </div>
          `,
          "Matara College": `
            <div>
              <strong>Matara College</strong><br />
              Address: No: 352, Kumarathunga Mawatha, Matara, 81000<br />
              Email: <a href="mailto:matara@college.com">matara@college.com</a><br />
              WhatsApp: <a href="https://wa.me/+94707997506" target="_blank">+94707997506</a><br />
              Landline: 041 20 50 200
            </div>
          `,
          "Piliyandala College": `
            <div>
              <strong>Piliyandala College</strong><br />
              Address: No: 119, Moratuwa Road, Piliyandala, 10300<br />
              Email: <a href="mailto:piliyandala@college.com">piliyandala@college.com</a><br />
              WhatsApp: <a href="https://wa.me/+94705834666" target="_blank">+94705834666</a><br />
              Landline: 011 2 180 008
            </div>
          `
        },
  
        selectedCategory: null,
        selectedSubCategory: null
      };
    },
  
    methods: {
      toggleChatWindow() {
        this.isChatOpen = !this.isChatOpen;
      },
      selectCategory(category) {
        this.selectedCategory = category;
        this.selectedSubCategory = null;
      },
      selectSubCategory(subCategory) {
        this.selectedSubCategory = subCategory;
      },
      resetCategory() {
        this.selectedCategory = null;
        this.selectedSubCategory = null;
      },
      resetSubCategory() {
        this.selectedSubCategory = null;
      }
    }
  };
  </script>

  <style scoped>
  /* Chatbot Icon */
  .chatbot-container {
    position: fixed;
    bottom: 16px;
    right: 16px;
    z-index: 1000;
  }
  
  .chatbot-image {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  }
  
  .chatbot-image:hover {
    transform: scale(1.1);
  }
  
  /* Chat Window */
  .chat-window {
    position: fixed;
    bottom: 80px;
    right: 16px;
    width: 300px;
    height: 400px;
    background: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    z-index: 1100;
  }
  
  /* Chat Header */
  .chat-header {
    background-color: #007bff;
    color: white;
    padding: 10px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .chat-header .close-button {
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
  }
  
  /* Menu and Submenu */
  .chat-menu {
    flex: 1;
    padding: 16px;
    overflow-y: auto;
  }
  
  .chat-menu p {
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .chat-menu ul {
    list-style: none;
    padding: 0;
  }
  
  .chat-menu li {
    margin: 10px 0;
    padding: 10px;
    background: #f0f0f0;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    transition: background 0.3s ease;
  }
  
  .chat-menu li:hover {
    background: #dcdcdc;
  }
  
  /* Chat Content */
  .chat-content {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
    display: flex;
    flex-direction: column;
  }
  
  .chat-content button {
    align-self: flex-start;
    padding: 5px 10px;
    margin-top: 10px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .chat-content button:hover {
    background: #0056b3;
  }
  
  .branch-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .branch-item {
    margin-bottom: 10px;
    font-size: 14px;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .branch-item strong {
    display: block;
    font-size: 16px;
    color: #007bff;
  }
  
  /* Certification Text */
  .certification-text {
    text-align: justify;
    margin-bottom: 20px;
    line-height: 1.6;
  }
  </style>
  