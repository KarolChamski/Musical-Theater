<template>
  <div class="back">
    <button class="back__btn">
      <router-link to="/tickets">Back </router-link>
    </button>
  </div>
  <div class="ticket wrapper">
  <img class="ticket__logo" src="../../src/assets/logo.svg" alt="">
    <p class="ticket__number">1D56FVY63</p>
    <p class="ticket__text">Title:</p>
    <div class="ticket__box">
      <div class="ticket__title">
        <h3 class="ticket__title">{{title}}</h3>
        <p class="ticket__title-sector">Big Scene</p>
      </div>
      <div class="ticket__info">
        <p class="ticket__info">{{time}}</p>
        <p class="ticket__time">{{date}}/01/2022</p>
      </div>
    </div>
    <p class="ticket__type">1x Regular ticket</p>

    <div class="ticket__moreInfo">
      <p class="ticket__sector">Sector: Big Scene</p>
      <p class="ticket__row">Row: {{row}}</p>
      <p class="ticket__seat">Seat: {{num}}</p>
    </div>
    <p class="ticket__message">Please do not copy!</p>

    <p class="ticket__place">Musical Theater in Gdańsk</p>
    <p class="ticket__validateInformation">
      This is your admission ticket, validate your ticket before entering
    </p>
     <img class="ticket__icon" src="../../src/assets/arrow.svg" alt="">
    
    <hr />
    <img class="ticket__qrCode" src="../../src/assets/qrcode.svg" alt="" />
  </div>

  <button class="button">Print</button>
  <button class="button">Download</button>
</template>

<script>
export default{
    props: [
    "title",
    "date",
    "time",
    "row",
    'num'
  ]
}
</script>

<style lang="scss" scoped>
.ticket {
  position: relative;
  border: 1px solid black;
  width: 500px;
  margin-bottom: 3rem;
  padding: 1.2rem;
  &__box {
    display: flex;
    justify-content: space-between;
  }
  &__number {
    position: absolute;
    top: 55px;
    right: 20px;
  }
  &__logo {
    margin-bottom: 4rem;
    margin-top: 2rem;
  }
  &__text,
  &__type {
    color: rgb(173, 173, 173);
  }
  &__title {
    font-size: 36px;
    &-sector {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 3rem;
    }
  }
  &__type {
    margin-bottom: 3rem;
  }
  &__info {
    font-size: 36px;
    font-weight: bold;
  }
  &__time {
    font-size: 18px;
    text-align: right;
  }
  &__moreInfo {
    font-weight: bold;
    line-height: 24px;
  }
  &__message {
    position: absolute;
    bottom: 370px;
    right: -35px;
    transform: rotate(-90deg);
    color: rgb(173, 173, 173);
    font-size: 14px;
  }
  &__seat {
    margin-bottom: 4rem;
  }
  &__place {
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    margin-bottom: 0.3rem;
  }
  &__validateInformation,
  &__icon {
    margin-bottom: 0.3rem;
    text-align: center;
  }
  &__icon {
    position: relative;
    padding: 0.7rem;
    left: 50%;
    transform: translateX(-50%);
  }
  &__qrCode {
    width: 80%;
    display: block;
    margin: 0 auto;
  }
}
.button {
  width: 120px;
  border: none;
  background-color: black;
  color: white;
  text-transform: uppercase;
  text-align: center;
  padding: 0.8rem 1rem;
  margin-left: 1rem;
  margin-bottom: 8rem;
  cursor: pointer;
}
hr {
  border: none;
  border-top: 2px dashed rgb(187, 187, 187);
  color: #fff;
  background-color: #fff;
  height: 1px;
  width: 100%;
  margin-bottom: 1rem;
}
.back__btn {
  display: flex;
  border: none;
  background-color: transparent;
  margin: 6rem 0 2rem 10rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  a {
    color: black;
    font-weight: bold;
    font-size: 16px;
  }
}
</style>
