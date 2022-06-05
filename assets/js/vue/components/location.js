Vue.component('location', {
  props: ['geo', 'phone'],
  template: `
      <div class="header__location-info">
        <div class="header__location-pos">
          <img class="mb-1 me-1" src="assets/static/icons/pos_mark.svg" alt="">
          <span class="header__location-geo">{{ geo }}</span>
          Круглосуточно
        </div>
        <span class="header__location-phone">{{ phone }}</span>
      </div>
  `
})