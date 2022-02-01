<template>
  <div class="back">
    <button class="back__btn">Wstecz</button>
  </div>
  <div class="product wrapper">
    <div class="product__box">

        <img class="product__img" src="../../src/assets/image1.jpg" alt="">

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
      <div class="product__date">
        <h3 class="product__date-title">Select a date</h3>
        <div class="product__date-btns">
          <button class="product__date-btn">
            <p class="product__date-date">17/02/2022</p>
            <p class="product__date-time">5:30 pm</p>
            <p class="product__date-day">Saturday</p>
          </button>
          <button class="product__date-btn">
            <p class="product__date-date">17/02/2022</p>
            <p class="product__date-time">5:30 pm</p>
            <p class="product__date-day">Saturday</p>
          </button>
          <button class="product__date-btn">
            <p class="product__date-date">17/02/2022</p>
            <p class="product__date-time">5:30 pm</p>
            <p class="product__date-day">Saturday</p>
          </button>
          <button class="product__date-btn">
            <p class="product__date-date">17/02/2022</p>
            <p class="product__date-time">5:30 pm</p>
            <p class="product__date-day">Saturday</p>
          </button>
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
      <ul class="staff__list staff__list-second ">
        <li v-for="staff in staff2" :key="staff">{{staff}}</li>
      </ul>

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
  &__box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;

  }
  &__img {
    width: 550px;
  }
  &__info {
    position: relative;
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
      margin: 3rem 0rem;
  }

  &__date{
    background-color: #f0f0f0;
    padding: 3rem;
&-title{
  font-size: 30px;
  margin-bottom: 1.5rem;
}
    &-btns{
      display: flex;
    }
    &-btn{
      position: relative;
      border: none;
      background: white;
      cursor: pointer;
      width: 250px;
      padding: 1rem;
      margin-right:2rem;
    }
    &-date{
      font-size: 18px;
      font-weight: bold;
    }
    &-time{
      position: absolute;
      top: 16px;
      right: 16px;
      font-size: 18px;
      font-weight: bold;
      color: #930000;
    }
    &-day{
      font-size: 14px;
      color: rgb(173, 173, 173);
    }
  }
}


  .staff{
      margin: 3rem 0rem;

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
