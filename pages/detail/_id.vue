<!-- 파일명의 _는 라우터의 param임을 의미함, id는 param으로 넘길 값을 의미 -->
<template>
  <div>
    <h1>
      상세 페이지
    </h1>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route);
  }
}
</script>

<style>

</style>