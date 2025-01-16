<template>
    <div class="carousel">
      <button @click="prevSlide" class="nav left">‹</button>
      <div class="carousel-track-container">
        <div
          class="carousel-track"
          :style="{ transform: `translateX(-${currentSlide * (100 / visibleCards)}%)` }"
        >
          <div
            v-for="(course, index) in courses"
            :key="index"
            class="carousel-card"
          >
            <img :src="course.image" alt="Course Image" class="course-image" />
            <div class="course-info">
              <h3>{{ course.title }}</h3>
              <p>{{ course.description }}</p>
              <span>{{ course.level }}</span>
            </div>
          </div>
        </div>
      </div>
      <button @click="nextSlide" class="nav right">›</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentSlide: 0,
        visibleCards: 3, // Number of visible cards per slide
        intervalId: null, // Store the interval ID for auto-slide
        courses: [
          {
            title: "MSc in Facilities Management",
            description: "Kingston University (UK)",
            level: "Postgraduate Level",
            image: require("../assets/cards/22.jpg"),
          },
          {
            title: "BA (Hons) in Fashion (TOP UP)",
            description: "London Metropolitan University (UK)",
            level: "Undergraduate Level",
            image: require("../assets/cards/33.jpg"),
          },
          {
            title: "BSc (Hons) in Nursing (TOP UP)",
            description: "London Metropolitan University (UK)",
            level: "Undergraduate Level",
            image: require("../assets/cards/22.jpg"),
          },
          {
            title: "BEng (Hons) in Biomedical Engineering (TOP UP)",
            description: "London Metropolitan University (UK)",
            level: "Undergraduate Level",
            image: require("../assets/cards/33.jpg"),
          },
          {
            title: "Pearson BTEC Level 5 HND in Business",
            description: "Management",
            level: "Higher National Diploma",
            image: require("../assets/cards/22.jpg"),
          },
        ],
      };
    },
    methods: {
      nextSlide() {
        // Move to the next slide or loop back to the first slide
        if (this.currentSlide < Math.ceil(this.courses.length / this.visibleCards) - 1) {
          this.currentSlide++;
        } else {
          this.currentSlide = 0; // Reset to the first slide
        }
      },
      prevSlide() {
        // Move to the previous slide or loop back to the last slide
        if (this.currentSlide > 0) {
          this.currentSlide--;
        } else {
          this.currentSlide = Math.ceil(this.courses.length / this.visibleCards) - 1; // Go to the last slide
        }
      },
      startAutoSlide() {
        this.intervalId = setInterval(() => {
          this.nextSlide();
        }, 2000); // Auto-slide every 2 seconds
      },
      stopAutoSlide() {
        clearInterval(this.intervalId);
      },
    },
    mounted() {
      this.startAutoSlide(); // Start auto-slide when the component is mounted
    },
    beforeUnmount() {
      this.stopAutoSlide(); // Stop auto-slide when the component is destroyed
    },
  };
  </script>
  
  <style>
  .carousel {
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: auto;
  }
  
  .carousel-track-container {
    overflow: hidden;
    width: 100%;
  }
  
  .carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out; /* Smooth sliding effect */
  }
  
  .carousel-card {
    flex: 0 0 calc(100% / 4); /* Divide the width into 4 cards */
    box-sizing: border-box;
    padding: 1rem;
    text-align: center;
  }
  
  .course-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 1rem;
  }
  
  .course-info h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  .course-info p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  
  .course-info span {
    font-size: 0.9rem;
    color: gray;
  }
  
  .nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #fff;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    z-index: 10;
  }
  
  .nav.left {
    left: 1rem;
  }
  
  .nav.right {
    right: 1rem;
  }
  
  @media (max-width: 768px) {
    .carousel-card {
      flex: 0 0 calc(100% / 2); /* Show 2 cards per slide on smaller screens */
    }
  }
  
  @media (max-width: 480px) {
    .carousel-card {
      flex: 0 0 100%; /* Show 1 card per slide on very small screens */
    }
  }
  </style>
  