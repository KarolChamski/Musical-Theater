<template>
  <div class="ticket wrapper">
    <div class="ticket__box" v-for="item in $store.state.tickets" :key="item.num">
      <div class="ticket__image">
        <img class="ticket__img" :src="item.image" alt="" />
      </div>
      <div class="ticket__text">
        <h3 class="ticket__title">{{item.title}}</h3>
        <p class="ticket__author">{{item.author}}</p>
        <p class="ticket__type">1x Adult</p>
        <p class="ticket__row">{{item.row}}</p>
        <p class="ticket__seat">{{item.num}}</p>
      </div>
      <div class="ticket__info">
        <h3 class="ticket__date">{{item.date}}</h3>
        <p class="ticket__time">{{item.time}}</p>
      </div>
      <div class="ticket__buttons">
        <button class="ticket__btn">
          <router-link to="/ticket">Show </router-link>
        </button>
        <button class="ticket__btn">Download</button>
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
  &__buttons {
    margin-top: 0.5rem;
  }
  &__text,
  &__info,
  &__image {
    cursor: pointer;
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

  &__buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__btn {
    width: 120px;
    border: none;
    background-color: black;
    color: white;
    text-transform: uppercase;
    text-align: center;
    padding: 0.8rem 1rem;
    margin-left: 3rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }
}
</style>
