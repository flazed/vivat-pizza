Vue.component('product', {
  props: ['id', 'product', 'count', 'increment', 'decrement'],
  methods: {
    getImgUrl(photo) {
      return 'assets/static/images/food/'+photo
    }
  },
  template: `
        <div class="basket__product mb-2 mb-sm-3 d-flex position-relative">
          <div class="basket__product-remove position-absolute top-0 end-0 m-sm-3 rounded-circle" :class="{'m-product-remove': product.isGift}"></div>
          <div class="basket__product-preview col-6 col-sm-3 pe-sm-4 position-relative">
            <badge :isNew="product.isNew" :isGift="product.isGift"></badge>
            <span class="basket__product-name">{{ product.name }}</span>
            <img :src='getImgUrl(product.photo)'>
          </div>
          <div class="basket__product-info col-6 col-sm-9 pt-3 pe-1 pe-sm-3 pb-3">
            <h3>{{ product.name }}</h3>
            <p class="basket__product-description">{{ product.description }}</p>
            <product-counter
            v-if="!product.isGift"
            :id="id"
            :count="count"
            :increment="increment"
            :decrement="decrement"
            :price="product.price"
            :oldPrice="product.oldPrice"></product-counter>
          </div>
        </div>
  `
})