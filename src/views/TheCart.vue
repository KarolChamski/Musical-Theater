<template>

  <div class="ticket wrapper">
    <div class="ticket__box">
      <img class="ticket__img" src="../../src/assets/image1.jpg" alt="" />
      <div class="ticket__text">
        <h3 class="ticket__title">Swan Lake</h3>
        <p class="ticket__author">Tchaikowsky</p>
        <p class="ticket__type">1x Adult</p>
        <p class="ticket__row">Row: A</p>
        <p class="ticket__seat">Seat: 3</p>
      </div>
      <div class="ticket__info">
        <h3 class="ticket__date">17/01/2022</h3>
        <p class="ticket__time">9:00 a.m</p>
      </div>
      <p class="ticket__edit">E</p>
    </div>
    <div class="ticket__box">
      <img class="ticket__img" src="../../src/assets/image1.jpg" alt="" />
      <div class="ticket__text">
        <h3 class="ticket__title">Swan Lake</h3>
        <p class="ticket__author">Tchaikowsky</p>
        <p class="ticket__type">1x Adult</p>
        <p class="ticket__row">Row: A</p>
        <p class="ticket__seat">Seat: 3</p>
      </div>
      <div class="ticket__info">
        <h3 class="ticket__date">17/01/2022</h3>
        <p class="ticket__time">9:00 a.m</p>
      </div>
      <p class="ticket__edit">E</p>
    </div>
    <div class="ticket__box">
      <img class="ticket__img" src="../../src/assets/image1.jpg" alt="" />
      <div class="ticket__text">
        <h3 class="ticket__title">Swan Lake</h3>
        <p class="ticket__author">Tchaikowsky</p>
        <p class="ticket__type">1x Adult</p>
        <p class="ticket__row">Row: A</p>
        <p class="ticket__seat">Seat: 3</p>
      </div>
      <div class="ticket__info">
        <h3 class="ticket__date">17/01/2022</h3>
        <p class="ticket__time">9:00 a.m</p>
      </div>
      <p class="ticket__edit">E</p>
    </div>
  </div>

  <div class="summary">
    <p class="summary__title wrapper">Summary</p>
    <div class="summary__box">
      <div class="summary__rabats wrapper">
        <p class="summary__text">Rabats</p>
        <button class="summary__code">Add a discount code</button>
      </div>
      <div class="summary__payment wrapper">
        <p class="summary__text">Payment method</p>
        <button class="summary__payment-method">Credit card E</button>
      </div>
      <div class="summary__total wrapper">
        <h3 class="summary__price">Total price 143 $</h3>
        <button class="summary__submit">Submit</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.ticket {
  margin-top: 10rem;
  &__img {
    width: 200px;
  }
  &__box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  &__text {
   flex-grow: 2;
    margin-left: 1rem;
  }
  &__title,
  &__info,
  &__edit {
    margin-top: 0.5rem;
  }

  &__info {
    width: 150px;
  }
  &__title,
  &__date {
    font-size: 24px;
  }
  &__time {
    color: #930000;
    font-weight: bold;
  }
  &__author,
  &__type,
  &__row,
  &__seat {
    color: rgb(173, 173, 173);
  }
  &__author {
    margin-bottom: 0.5rem;
  }
}

.summary {
  &__title {
    font-size: 22px;
    margin-top: 4rem;
    margin-bottom: 1rem;
  }
  &__rabats,
  &__payment,
  &__total {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
  &__code {
    border: none;
    font-weight: bold;
    background: transparent;
    text-decoration: underline;
    cursor: pointer;
  }
  &__submit {
    border: none;
    background: black;
    color: white;
    text-transform: uppercase;
    padding: 0.8rem 2rem;
    cursor: pointer;
  }
  &__payment-method {
    border: none;
    background: transparent;
    cursor: pointer;
  }
  &__price {
    font-size: 24px;
  }
  &__total{
      margin-bottom: 7rem;
  }
  &__rabats,&__payment {
    position: relative;
  }
  &__rabats::after, &__payment::after{
    content: "";
    position: absolute;
    bottom: 0;
    height: 1px;
    width: 100%;
    background-color: #e0e0e0;
  }
}
</style>
