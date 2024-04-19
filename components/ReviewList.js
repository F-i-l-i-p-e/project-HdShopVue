app.component('review-list', {
  template:
    /*html*/
    `
    <div v-if="reviews.length" class="review-container">
      <h3>Reviews:</h3>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
        <span v-if="review.recommendation === 'true'">Recommended</span>
          <span v-else>Not Recommended</span>
          <br>
          Platform: {{ review.platform }}
          <br>
          "{{ review.text }}"
          <br>
          {{ review.name }}
        </li>
      </ul>
    </div>
  `,
  props: {
    reviews: {
      type: Array,
      required: true
    }
  }
})
