<template>

  <div class="ticket wrapper">
            <h3 class="ticket__title" v-if="$store.state.cart.length == 0">Your cart is empty</h3>
    <div class="ticket__box" v-for=" item in $store.state.cart" :key="item.num">
      <img class="ticket__img" :src="item.image" alt="" />
      <div class="ticket__text">
        <h3 class="ticket__title">{{item.title}}</h3>
        <p class="ticket__author">{{item.author}}</p>
        <p class="ticket__type">1x Adult</p>
        <p class="ticket__type">$ {{item.price}}</p>
        
        <p class="ticket__row">Row: {{item.row}}</p>
        <p class="ticket__seat">Seat: {{item.num}}</p>
      </div>
      <div class="ticket__info">
        <h3 class="ticket__date">{{item.date}}/01/2022</h3>
        <p class="ticket__time">{{item.time}}</p>
      </div>
      <img class="ticket__edit" src="../../src/assets/edit.svg" alt="">
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
        <h3 class="summary__price">Total price {{totalPrice}} $</h3>
        <button v-if="$store.state.cart.length !== 0" class="summary__submit" @click="submitCart"><router-link to="/confirmation"
        >submit
      </router-link></button>
      </div>
    </div>
  </div>
</template>

<script>
export default{

  props: ["image"],
  methods:{
    submitCart(){
      if(this.$store.state.cart.length !== 0){
        this.$store.commit('addToTicket');
        console.log('ELO');
      }
    }
  },
  computed:{
    totalPrice(){
      return this.$store.state.cart.reduce ((acc,cur) =>  acc + cur.price , 0)
    }
  }
}
</script>


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
  &__edit{
  align-self: flex-start;
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
