<template>
  <b-col cols="3"
    ><b-card>
      <div class="d-flex justify-content-between align-items-center">
        <p class="card-title">{{ title }}</p>
        <a href="#"
          ><img
            class="icon-more"
            :src="require('@/assets/images/Icon - More - Filled.svg')"
            alt=""
        /></a>
      </div>
      <div>
        <ul class="p-0 m-0" style="list-style: none">
          <!-- <li class="card-item">
            <b-card>
              <div class="big-item">
                <img :src="require('@/assets/images/product.png')" alt="" />
                <div class="detail-item">
                  <p>NAMA PRODUK</p>
                  <div class="d-flex justify-content-between detail-text">
                    <p>Rp 2000</p>
                    <p>100</p>
                  </div>
                </div>
              </div>
            </b-card>
          </li> -->
          <li
            v-for="(product, index) in products"
            :key="index"
            class="card-item"
          >
            <b-card>
              <div :class="`${index === 0 ? 'big-item' : 'small-item'}`">
                <img :src="product.img" alt="" />
                <div class="detail-item">
                  <p>{{ product.name }}</p>
                  <div class="d-flex justify-content-between detail-text">
                    <p>{{ product.price | toRp }}</p>
                    <p>{{ product.totalOrder }}</p>
                  </div>
                </div>
              </div>
            </b-card>
          </li>
        </ul>
      </div>
    </b-card></b-col
  >
</template>

<script>
export default {
  name: "CardSKU",
  props: {
    title: {
      type: String,
      default: "",
    },
    products: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
