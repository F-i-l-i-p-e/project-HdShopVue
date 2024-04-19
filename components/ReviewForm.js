app.component('review-form', {
  // Define the template for the review form component
  template:
    /*html*/
    `
    <form class="review-form" @submit.prevent="onSubmit">
      <!-- Display the title of the review form -->
      <h3>Leave a game review</h3>

      <!-- Input field for the reviewer's name -->
      <label for="name">Your Name:</label>
      <input id="name" v-model="name">
    
      <!-- Text area for the review -->
      <label for="review">Your Review:</label>      
      <textarea id="review" v-model="text"></textarea>

      <!-- Radio buttons for recommending or not recommending -->
      <label></label>
      <div>
        <label for="recommend">Recommend</label>
        <input type="radio" id="recommend" value="true" v-model="recommendation">
        <label for="not-recommend">Do Not Recommend</label>
        <input type="radio" id="not-recommend" value="false" v-model="recommendation">
      </div>

      <!-- Dropdown menu for selecting the platform -->
      <label for="platform">Platform:</label>
      <select id="platform" v-model="platform">
        <option value="Steam">Steam</option>
        <option value="Epic">Epic</option>
        <option value="PS">PS</option>
        <option value="XBOX">XBOX</option>
        <option value="Nintendo">Nintendo</option>
      </select>
  
      <!-- Submit button -->
      <input class="button" type="submit" value="Submit">  
    
    </form>
  `,
  // Define data properties for the form inputs
  data() {
    return {
      name: '', // Reviewer's name
      text: '', // Review text
      recommendation: null, // Recommendation status
      platform: null // Platform selection
    }
  },
  // Define methods for form submission
  methods: {
    onSubmit() {
      // Check if any field is left empty
      if (this.name === '' || this.text === '' || this.recommendation === null || this.platform === null) {
        alert('Review is incomplete. Please fill out every field.')
        return
      }

      // Create a review object with form data
      const review = {
        name: this.name,
        text: this.text,
        recommendation: this.recommendation,
        platform: this.platform
      }
      // Emit the review-submitted event with the review object
      this.$emit('review-submitted', review)
      // Clear the form fields after submission
      this.name = ''
      this.text = ''
      this.recommendation = null
      this.platform = null
    }
  }
})
