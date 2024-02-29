<template>
  <div>
    <p>넉스트 시작하기</p>
    <div>
      <ul>
        <li v-for="product in products" :key="product.id">
          <img :src="product.imageUrl" :alt="product.name"/>
          <p>{{ product.name }}</p>
          <p>{{ product.price }}</p>
        </li>
      </ul>
    </div>
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

  // data() {
  //   return {
  //     products: [],
  //   }
  // },
  // async created() {

  // },
}

</script>

<style>

</style>