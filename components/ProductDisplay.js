app.component('product-display', {
  props: {
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
        <h1>{{ productName }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Delivery Method: {{ delivery }}</p>

        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <!-- Radio inputs to select product variant -->
<div class="radio-container">
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
      product: 'HELLDIVERS™ 2', 
      selectedVariant: 0,
      details: [
        'HELLDIVERS™ 2 is a 3rd person squad-based shooter that sees the elite forces of the Helldivers battling to win an intergalactic struggle to rid the galaxy of the rising alien threats. From a 3rd person perspective, players use a variety of weapons (pistols, machine guns, flamethrowers) and stratagems (turrets, airstrikes, etc.) to shoot and kill the alien threats. Players can also aim down the sights for a more accurate 1st person camera view. Combat is accompanied by frequent sprays of blood and dismemberment as players exterminate the alien forces or players and squad mates are hit by environmental explosions or friendly fire. Enemy encampments and battlefield environments depict bloodstains and dismembered corpses.'
      ],
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
      reviews: []
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    addReview(review) {
      this.reviews.push(review)
    }
  },
  computed: {
    productName() {
      return this.product
    },
    image() {
      return this.variants[this.selectedVariant].image
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity
    },
    delivery() {
      if (this.premium) {
        return 'Steam Key'
      }
      return 2.99
    }
  }
})
