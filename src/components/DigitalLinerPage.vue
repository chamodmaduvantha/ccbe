<template>
    <div class="marquee-container">
      <!-- The running text -->
      <div class="marquee" :style="{ animationDuration: animationSpeed + 's' }">
        <span>{{ message }}</span>
        <!-- Duplicate the message for seamless looping -->
        <span>{{ message }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message:
          "THE GOLD PARTNER FOR THE BRITISH COUNCIL & THE LARGEST CAMBRIDGE ENGLISH QUALIFICATIONS PREPARATION NETWORK IN SRI LANKA.",
        animationSpeed: 15, // Adjust this to control the speed (in seconds)
      };
    },
  };
  </script>
  
  <style>
  /* Marquee container */
  .marquee-container {
    width: 100%; /* Full width of the screen */
    overflow: hidden; /* Hide overflow text */
    white-space: nowrap;
    background-color: #ff5f15; /* Background color for the banner */
    color: white; /* Text color */
    padding: 10px 0; /* Vertical padding */
    font-size: 1.2rem; /* Font size of the text */
    display: flex;
    align-items: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  
  /* Marquee animation */
  .marquee {
    display: flex; /* Use flex to align the duplicate messages */
    will-change: transform;
    animation: marquee linear infinite; /* Infinite linear animation */
  }
  
  .marquee span {
    flex-shrink: 0; /* Prevent shrinking of the text */
    padding-right: 50px; /* Add some spacing between the duplicate messages */
  }
  
  /* Keyframes for marquee */
  @keyframes marquee {
    0% {
      transform: translateX(0); /* Start at the container's left edge */
    }
    100% {
      transform: translateX(-100%); /* Move completely out of the container */
    }
  }
  </style>
  