<template>
<div class="confirmation wrapper">
    <h3 class="confirmation__title">Thank you for the order!</h3>
    <p class="confirmation__text">Your tickets are stored in the 'tickets' tab.</p>
    <p class="confirmation__text">There you can print your ticket or show it for validation.</p>
     <button class="confirmation__btn"><router-link to="/tickets"
        >Tickets
      </router-link></button>
</div>
</template>



<style lang="scss" scoped>

.confirmation{
    text-align: center;
    &__title,&__text{
        text-align: center;
    }
    &__title{
        font-size: 30px;
        margin-top: 10rem;
        margin-bottom: 1rem;
    }
    &__btn{
        width: 120px;
       border: none;
       background-color: black;
       color: white;
       text-transform: uppercase;
       text-align: center;
       padding: 0.8rem 1rem;
       margin-left: 3rem;
       margin-bottom: 10rem;
       margin-top: 2rem;
       cursor: pointer;
    }
}
</style>