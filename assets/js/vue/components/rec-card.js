Vue.component('rec-card', {
  props: ['product'],
  methods: {
    getImgUrl(photo) {
      return 'assets/static/images/food/'+photo
    }
  },
  template: `
        <div class="recomendations__card card me-3 align-self-start">
          <badge :isNew="product.isNew" :isGift="product.isGift"></badge>
          <img :src="getImgUrl(product.photo)" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text mt-3">{{ product.description }}</p>
            <button class="recomendations__card-btn btn btn-main rounded-pill ms-auto py-1 px-4">{{ product.price }} ₽</button>
          </div>
        </div>
  `
})