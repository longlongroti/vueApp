<template>
  <div class="about">
    <van-nav-bar
      title="我的账号"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <br />
    <van-cell-group inset>
      <van-cell title="头像" value="内容"> </van-cell>
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
    <br />
    <br />
    <br />
    <van-cell-group inset>
      <van-cell title="URL 跳转" is-link url="/vant/mobile.html" />
      <van-cell title="路由跳转" is-link to="index" />
    </van-cell-group>
  </div>
</template>
<script>

export default {
  name: "test",
  data() {
    return {};
  },
 
};
</script>
<style scoped>
ol {
  text-align: left;
  font-size: 20px;
  color: red;
  font-style: italic;
  border: 4px solid bisque;
}
</style>
