<!-- 파일명의 _는 라우터의 param임을 의미함, id는 param으로 넘길 값을 의미 -->
<template>
  <div>
    <h1> 상세 페이지 </h1>
    <div>
      {{ product }}
      <img :src = "product.imageUrl" :alt="product.name">
      <p>name: {{ product.name }} </p>
      <p>price: {{ product.price }}</p>
    </div>
  </div>
</template>

<script>
import { fetchProductById } from '@/api/index'

export default {
  async asyncData({params}) {
    const response = await fetchProductById(); 
    const product = response.data
    return {product};
  }
}
</script>
<style>

</style>