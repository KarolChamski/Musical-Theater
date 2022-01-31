<template>
  <div class="back">
    <button class="back__btn">Wstecz</button>
  </div>
  <div class="product">
    <div class="product__box">
      <div class="product__img"></div>
      <div class="product__info">
        <div class="product__info-maintitle">
          <h3 class="product__info-title">{{title}}</h3>
          <h3 class="product__info-data">17/02/22</h3>
        </div>
        <h3 class="product__info-time">17:30</h3>
        <p class="product__info-text">{{description1}}</p>
        <button class="product__info-btn">Kup bilet</button>
      </div>
    </div>
    <p class="product__text">{{description2}}</p>
    <p class="product__text">{{description3}}</p>
    <p class="product__text">{{description4}}</p>
    <p class="product__text">{{description5}}</p>

    <div class="staff">
      <p class="staff__title">Staff</p>
      <div class="staff__box">
      <ul class="staff__list">
        <li v-for="staff in staff1" :key="staff">{{staff}}</li>
      </ul>

      <!-- <ul class="staff__list staff__list-second ">
        <li :v-for="staff in staff2" :key="staff.value">{{staff}}</li>
      </ul> -->

      </div>
    </div>
  </div>
</template>

<script>
export default{
  props: ['title', 'description1','description2','description3','description4','description5','staff1', 'staff2'],
  
}
</script>

<style lang="scss" scoped>
.back__btn {
  display: flex;
  border: none;
  background-color: transparent;
  font-weight: bold;
  margin: 6rem 0 3rem 3rem;
  padding: 0.5rem 1rem;
}

.product {
  &__img {
    height: 350px;
    width: 550px;
    background-position: center;
    background-size: cover;
    background-image: url("../../src/assets/image1.jpg");
  }
  &__box {
    display: flex;
    justify-content: center;
    margin-bottom: 4rem;
  }
  &__info {
    position: relative;
    width: 600px;
    margin-left: 3rem;
    &-maintitle {
      display: flex;
      justify-content: space-between;
      font-size: 30px;
      margin-top: 2rem;
    }
    &-text {
      text-align: left;
      line-height: 28px;
      margin-bottom: 2.5rem;
    }
    &-time {
      text-align: right;
      color: #930000;
      margin-bottom: 1.5rem;
    }
    &-btn {
      position: absolute;
      right: 0;
      border: none;
      background-color: black;
      color: white;
      padding: 0.8rem 2rem;
      font-size: 14px;
    }
  }
  &__text{
      line-height: 28px;
      margin: 3rem 17rem;
  }
}
  .staff{
      margin: 3rem 17rem;

      &__box{
          display: flex;
      }
      &__title{
          font-size: 22px;
          font-weight: bold;
          margin:1rem 0rem;
      }
      &__list li{
          line-height: 30px;
          list-style: none;
      }
      &__list {
          padding: 0;
          margin-bottom: 3rem;
           &-second{
               margin-left: 4rem;
           }
      }
      
  }
</style>
