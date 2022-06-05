Vue.component('badge', {
  props: ['isNew', 'isGift'],
  template: `
      <div class="product-badge position-absolute m-2 py-1 px-3 rounded-pill" v-bind:class="{ 'product-badge_new': isNew, 'product-badge_gift': isGift }">
        {{ isNew ? 'NEW' : '' }}
        {{ isGift ? 'Подарок': ''}}
      </div>
  `
})