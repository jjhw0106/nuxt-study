<template>
  <div class="app">
    <main>
      <div>
        <input type="text"/>
      </div>
      <ul>
        <li 
          class="item flex" 
          v-for="product in products" 
          @click="moveToDetailPage(product.id)"
          :key="product.id">
          <img class="product-image" :src="product.imageUrl" :alt="product.name"/>
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  // asyncData여야만 한다.
  // nuxt에서 pages 폴더 하위의 vue 파일에만 적용되는 속성
  // 페이지 진입되기 전 호출된다.
  async asyncData() {
    const response = await axios.get('http://localhost:3000/products');
    // const products = response.data;
    // console.log(response.data)
    const products = response.data.map(item => ({
      ...item,
      imageUrl: item.imageUrl.replace('{id}', Math.floor(Math.random() * 30))
    }));
    return { products }
  },

  methods: {
    moveToDetailPage(id) {
      console.log(id);
      // nuxt는 내부적으로 router를 가지고 있다.
      this.$router.push(`detail/${id}`);
    }
  }
}

</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>