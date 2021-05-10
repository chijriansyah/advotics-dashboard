<template>
  <b-col cols="3"
    ><b-card class="h-100">
      <div class="d-flex justify-content-between align-items-center mb-16px">
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

<style scoped>
.big-item {
  display: flex;
  background-color: #ffe7bd;
  border-radius: 4px;
  height: 80px;
}

.big-item img {
  height: 80px;
  width: 80px;
  border-radius: 4px 0 0;
}

.big-item .detail-item {
  padding: 10px;
  width: 100%;
}

.big-item .detail-item p {
  margin-bottom: 10px;
  font-size: 20px;
}

.big-item .detail-text p {
  margin: 0;
  font-size: 14px;
  color: #00000099;
}

.small-item {
  display: flex;
  background-color: #fff;
  border-radius: 4px;
  height: 60px;
}

.small-item img {
  height: 60px;
  width: 60px;
  border-radius: 4px 0 0;
}

.small-item .detail-item {
  padding: 10px;
  width: 100%;
}

.small-item .detail-item p {
  margin-bottom: 0px;
  font-size: 16px;
}

.small-item .detail-text p {
  margin: 0;
  font-size: 12px;
  color: #00000099;
}
</style>
