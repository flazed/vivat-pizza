Vue.component('product-counter', {
  props: ['id', 'count', 'increment', 'decrement', 'price', 'oldPrice'],
  template: `
      <div class="basket__product-counter-container mt-sm-4 d-flex justify-content-end">
        <div class="basket__product-price">
          <span class="basket__old-price" v-if="oldPrice">{{ oldPrice }}</span>
          <span>{{ price }} ₽</span>
        </div>
        <div class="basket__product-counter mx-3 d-flex justify-content-center align-items-center">
          <button v-on:click="decrement(id)">-</button>
          <span>{{ count }}</span>
          <button v-on:click="increment(id)">+</button>
        </div>
        <div class="basket__product-price">
          <span class="basket__old-price" v-if="oldPrice">{{ count*oldPrice }}</span>
          <span>{{ count*price }} ₽</span>
        </div>
      </div>
  `
})