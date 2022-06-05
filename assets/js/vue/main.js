import './components/location.js';
import './components/product.js';
import './components/product-counter.js';
import './components/badge.js';
import './components/rec-card.js'

const app = new Vue({
  el: '#app',
  data: {
    products: [
      {
        id: 1,
        name: 'Чизбургер барбекю',
        description: 'Соус коктейль, фарш из отборной говядины, маринованные огурцы, спелые томаты, сыр моцарелла, сыр чеддер, соус барбекю, хрустящий лук',
        photo: 'pizza-cheese.png',
        isNew: false,
        isGift: false,
        price: 760,
        oldPrice: 930
      },
      {
        id: 2,
        name: 'Суприм',
        description: 'Соус томатный, сыр моцарелла, колбаса пепперони, ветчина, лук, сладкий перец, грибной микс, свинина, говядина, оливки черные',
        photo: 'pizza-supreme.png',
        isNew: true,
        isGift: false,
        price: 690
      },
      {
        id: 3,
        name: 'Бургер "Два сыра"',
        description: 'Ароматная котлета из мраморной говядины с сыром чеддер и моцарелла, хрустящим луком, маринованными корнишонами, свежими томатами, соусом коктейль и барбекю в мягкой пшеничной булочке. Картофель и соус приобретается отдельно',
        photo: 'burger-double-cheese.png',
        isNew: true,
        isGift: false,
        price: 180
      },
      {
        id: 4,
        name: 'Суши Унаги',
        description: 'Угорь',
        photo: 'sushi-unagi.png',
        isNew: true,
        isGift: false,
        price: 120
      },
      {
        id: 5,
        name: 'Умэ',
        description: 'Лосось, угорь, сыр «Филадельфия», авокадо',
        photo: 'ume.png',
        isNew: true,
        isGift: false,
        price: 385,
        oldPrice: 420
      },
      {
        id: 6,
        name: 'Морс "Смородина"',
        description: 'Морс "Смородина", 1 л',
        photo: 'juice-berry.png',
        isNew: false,
        isGift: true,
        price: 145
      },
      {
        id: 7,
        name: 'Суши Эби',
        description: 'Креветка',
        photo: 'pizza-supreme.png',
        isNew: true,
        isGift: false,
        price: 130
      }
    ],
    basket: {
      items: {},
      gifts: {},
      totalPrice: 0
    }
  },
  mounted() {
    // MOCKED DATA, FOR EXAMPLE
    this.basket.items = {
      1: {
        count: 1,
        data: this.products[0],
        price: this.products[0].price
      },
      2: {
        count: 1,
        data: this.products[1],
        price: this.products[1].price
      },
      3: {
        count: 1,
        data: this.products[2],
        price: this.products[2].price
      },
      4: {
        count: 1,
        data: this.products[3],
        price: this.products[3].price
      },
      5: {
        count: 1,
        data: this.products[4],
        price: this.products[4].price
      },    
    }

    this.basket.gifts = {
      6: {
        data: this.products[5]
      }
    }

    this.calcTotalPrice();
  },
  methods: {
    incrementBasketProductCount(id) {
      const product = this.basket.items[id];
      product.count++;
      this.priceUpdate(product);
    },

    decrementBasketProductCount(id) {
      const product = this.basket.items[id];
	  
      if(product.count - 1 === 0) {
        Vue.delete(this.basket.items, id);
        this.calcTotalPrice();
      } else {
        product.count--;
        this.priceUpdate(product);
      }
    },

    priceUpdate(product) {
      product.price = product.count * product.data.price;
      this.calcTotalPrice();
    },

    calcTotalPrice() {
      this.basket.totalPrice = 0;

      for(let id of Object.keys(this.basket.items)) {
        this.basket.totalPrice += this.basket.items[id].price;
      }
    },

    scrollHorizontally(e) {
      e = window.event || e;
      const delta = e.deltaY || e.detail || e.wheelDelta;
      this.$refs.recomendations__cards.scrollLeft -= delta;
      e.preventDefault();
    }
  }
})