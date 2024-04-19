app.component('review-form', {
  template:
    /*html*/
    `
    <form class="review-form" @submit.prevent="onSubmit">
      <h3>Leave a game review</h3>

      <label for="name">Your Name:</label>
      <input id="name" v-model="name">
    
      <label for="review">Your Review:</label>      
      <textarea id="review" v-model="text"></textarea>

      <label></label>
      <div>
      <label for="recommend">Recommend</label>
        <input type="radio" id="recommend" value="true" v-model="recommendation">
        <label for="not-recommend">Do Not Recommend</label>
        <input type="radio" id="not-recommend" value="false" v-model="recommendation">
  
      </div>

      <label for="platform">Platform:</label>
      <select id="platform" v-model="platform">
        <option value="Steam">Steam</option>
        <option value="Epic">Epic</option>
        <option value="PS">PS</option>
        <option value="XBOX">XBOX</option>
        <option value="Nintendo">Nintendo</option>
      </select>
  
      <input class="button" type="submit" value="Submit">  
    
    </form>
  `,
  data() {
    return {
      name: '',
      text: '',
      recommendation: null,
      platform: null
    }
  },
  methods: {
    onSubmit() {
      if (this.name === '' || this.text === '' || this.recommendation === null || this.platform === null) {
        alert('Review is incomplete. Please fill out every field.')
        return
      }

      const review = {
        name: this.name,
        text: this.text,
        recommendation: this.recommendation,
        platform: this.platform
      }
      this.$emit('review-submitted', review)
      this.name = ''
      this.text = ''
      this.recommendation = null
      this.platform = null
    }
  }
})
