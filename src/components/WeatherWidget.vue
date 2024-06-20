<template>
    <div class="weather-widget">
      <h1>Weather Widget</h1>
      <div class="input-button-container">
        <input
          type="text"
          v-model="location"
          @keyup.enter="fetchWeather"
          placeholder="Enter location"
        />
        <button @click="fetchWeather">Get Weather</button>
      </div>
      <div class="weather-info" v-if="weather">
        <div class="weather-details">
          <h2>{{ weather.name }}</h2>
          <p>{{ weather.main.temp }}°C</p>
          <p>{{ weather.weather[0].description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    name: 'WeatherWidget',
    data() {
      return {
        location: '',
        weather: null,
        apiKey: 'YOUR_API_KEY' // Replace with your actual API key
      }
    },
    methods: {
      async fetchWeather() {
        if (this.location) {
          try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.location}&units=metric&appid=${this.apiKey}`)
            this.weather = response.data
          } catch (error) {
            console.error(error)
          }
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .weather-widget {
    border: 1px solid #ccc;
    padding: 1em;
    border-radius: 5px;
    max-width: 600px; /* Adjusted width for wider display */
    margin: auto;
    text-align: left;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .input-button-container {
    display: flex;
    margin-bottom: 10px;
  }
  
  .weather-info {
    display: flex;
    align-items: center;
  }
  
  .weather-details {
    margin-left: 20px; /* Adjust spacing between details */
  }
  
  .weather-widget input {
    width: calc(100% - 110px); /* Adjusted width for input */
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .weather-widget button {
    width: 100px; /* Adjusted width for button */
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007BFF;
    color: #fff;
    cursor: pointer;
  }
  
  .weather-widget button:hover {
    background-color: #0056b3;
  }
  </style>
  