<template>
  <div>
    <h1>
      id페이지
    </h1>
    <div>
      <img :src="product.imageUrl" :alt="product.name">
      <p>name: {{ product.name }}</p>
      <p>price: {{ product.price }}</p>a
    </div>
  </div>
  
</template>

<script>
import {fetchProductById} from '@/api/index';

export default {
  async asyncData({ params }) {
    const response = await fetchProductById(params.id);
    const product = response.data
    return { product } ;
  }
}
</script>

<style>

</style>