app.component('product-display', {
  props: {
    // Define a prop named "premium" which is of type Boolean and is required
    premium: {
      type: Boolean,
      required: true
    }
  },
  template:
    /*html*/
    `
   <div class="product-display">
        
    <div class="product-container">
      <div class="product-image">
        <img :src="image" />
      </div>

      <div class="product-info">
        <!-- Display the product name -->
        <h1>{{ productName }}</h1>
        <!-- Display whether the product is in stock or out of stock -->
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <!-- Display the delivery method -->
        <p>Delivery Method: {{ delivery }}</p>

        <ul>
          <!-- Display details about the product -->
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <!-- Radio inputs to select product variant -->
        <div class="radio-container">
          <!-- Loop through each variant and create radio inputs -->
          <template v-for="(variant, index) in variants">
            <input type="radio" :key="variant.id" :value="index" v-model="selectedVariant" />
            <label>{{ variant.title }}</label>
          </template>
        </div>

        <!-- Add to cart button -->
        <button class="button" v-on:click="addToCart" 
          :disabled="!inStock"
          :class="{ disabledButton: !inStock }"
        >
          Add to cart
        </button>
      </div>
    </div>

    <!-- Review list and form components -->
    <review-list :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview" ></review-form>
  </div>
   `,
  data() {
    return {
      // Set the default product name
      product: 'HELLDIVERS™ 2', 
      // Initialize the selected variant index to 0
      selectedVariant: 0,
      // Provide details about the product
      details: [
        'HELLDIVERS™ 2 is a 3rd person squad-based shooter that sees the elite forces of the Helldivers battling to win an intergalactic struggle to rid the galaxy of the rising alien threats. From a 3rd person perspective, players use a variety of weapons (pistols, machine guns, flamethrowers) and stratagems (turrets, airstrikes, etc.) to shoot and kill the alien threats. Players can also aim down the sights for a more accurate 1st person camera view. Combat is accompanied by frequent sprays of blood and dismemberment as players exterminate the alien forces or players and squad mates are hit by environmental explosions or friendly fire. Enemy encampments and battlefield environments depict bloodstains and dismembered corpses.'
      ],
      // Define variants of the product with their respective details
      variants: [
        {
          id: 2234,
          title: 'Regular',
          image: './assets/images/hdRegular.jpg',
          quantity: 2
        },
        {
          id: 2235,
          title: 'Deluxe',
          image: './assets/images/hdDeluxe.jpg',
          quantity: 0
        }
      ],
      // Initialize an empty array to store reviews
      reviews: []
    }
  },
  methods: {
    // Method to emit an event when the "Add to cart" button is clicked
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    // Method to add a review to the list of reviews
    addReview(review) {
      this.reviews.push(review)
    }
  },
  computed: {
    // Computed property to return the product name
    productName() {
      return this.product
    },
    // Computed property to return the image of the selected variant
    image() {
      return this.variants[this.selectedVariant].image
    },
    // Computed property to check if the selected variant is in stock
    inStock() {
      return this.variants[this.selectedVariant].quantity
    },
    // Computed property to determine the delivery method based on premium status
    delivery() {
      if (this.premium) {
        return 'Steam Key'
      }
      return 2.99
    }
  }
})
