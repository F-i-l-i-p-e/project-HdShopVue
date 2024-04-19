app.component('review-list', {
  // Define the template for the review list component
  template:
    /*html*/
    `
    <div v-if="reviews.length" class="review-container">
      <!-- Display the title if there are reviews -->
      <h3>Reviews:</h3>
      <ul>
        <!-- Loop through each review and display its details -->
        <li v-for="(review, index) in reviews" :key="index">
          <!-- Display whether the review is recommended or not -->
          <span v-if="review.recommendation === 'true'">Recommended</span>
          <span v-else>Not Recommended</span>
          <br>
          <!-- Display the platform of the review -->
          Platform: {{ review.platform }}
          <br>
          <!-- Display the text of the review -->
          "{{ review.text }}"
          <br>
          <!-- Display the name of the reviewer -->
          {{ review.name }}
        </li>
      </ul>
    </div>
  `,
  // Define props for the reviews data
  props: {
    reviews: {
      type: Array,
      required: true
    }
  }
})
