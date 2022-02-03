<template>
  <div class="back">
    <button class="back__btn">
      <router-link to="/tickets">Back </router-link>
    </button>
  </div>
  <div class="reservation wrapper">
    <p class="info">
      Tickets purchased electronically cannot be returned or exchange.
    </p>
    <div class="reservation__text">
      <div class="reservation__box">
        <h3 class="reservation__title">Swan Lake</h3>
        <p class="reservation__sector">Big Scene</p>
      </div>
      <div class="reservation__box">
        <p class="reservation__date">17/02/2022</p>
        <p class="reservation__time">/ 9:00 a.m</p>
      </div>
    </div>
  </div>

  <div class="seats wrapper">
    <p class="seats__title">SCENE</p>
    <div class="seats__container">
      <div class="seats__box">
        <div class="seats__row">
          <button class="seats__seat" >1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat">5</button>
        </div>
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat">5</button>
        </div>
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat">5</button>
        </div>
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat seats__inaccesible">3</button>
          <button class="seats__seat seats__inaccesible">4</button>
          <button class="seats__seat">5</button>
        </div>
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat">5</button>
        </div>
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat seats__inaccesible">5</button>
        </div>
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat">5</button>
        </div>
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat seats__inaccesible">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat">5</button>
        </div>
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat">5</button>
        </div>
      </div>
      <div class="seats__letters">
        <p class="seats__letter">a</p>
        <p class="seats__letter">b</p>
        <p class="seats__letter">c</p>
        <p class="seats__letter">d</p>
        <p class="seats__letter">e</p>
        <p class="seats__letter">f</p>
        <p class="seats__letter">g</p>
        <p class="seats__letter">h</p>
        <p class="seats__letter">i</p>
      </div>
      <div class="seats__box">
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat">5</button>
        </div>
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat seats__inaccesible">2</button>
          <button class="seats__seat seats__inaccesible">3</button>
          <button class="seats__seat seats__inaccesible">4</button>
          <button class="seats__seat">5</button>
        </div>
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat seats__inaccesible">5</button>
        </div>
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat">5</button>
        </div>
        <div class="seats__row">
          <button class="seats__seat seats__inaccesible">1</button>
          <button class="seats__seat seats__inaccesible">2</button>
          <button class="seats__seat ">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat">5</button>
        </div>
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat">5</button>
        </div>
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat">5</button>
        </div>
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat seats__inaccesible">5</button>
        </div>
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat">5</button>
        </div>
      </div>
      <div class="seats__letters">
        <p class="seats__letter">a</p>
        <p class="seats__letter">b</p>
        <p class="seats__letter">c</p>
        <p class="seats__letter">d</p>
        <p class="seats__letter">e</p>
        <p class="seats__letter">f</p>
        <p class="seats__letter">g</p>
        <p class="seats__letter">h</p>
        <p class="seats__letter">i</p>
      </div>
      <div class="seats__box">
        <div class="seats__row">
          <button class="seats__seat seats__inaccesible">1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat">5</button>
        </div>
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat">5</button>
        </div>
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat seats__inaccesible">4</button>
          <button class="seats__seat">5</button>
        </div>
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat">5</button>
        </div>
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat">5</button>
        </div>
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat">5</button>
        </div>
        <div class="seats__row">
          <button class="seats__seat seats__inaccesible">1</button>
          <button class="seats__seat seats__inaccesible">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat">5</button>
        </div>
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat">5</button>
        </div>
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat">5</button>
        </div>
      </div>
    </div>
      <div class="seats__container">
      <div class="seats__box">
        <div class="seats__row">
          <button class="seats__seat seats__inaccesible">1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat seats__inaccesible">5</button>
        </div>
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat">5</button>
        </div>
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat seats__inaccesible">4</button>
          <button class="seats__seat">5</button>
        </div>
      </div>
      <div class="seats__letters">
        <p class="seats__letter">a</p>
        <p class="seats__letter">b</p>
        <p class="seats__letter">c</p>
      </div>
      <div class="seats__box">
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat seats__inaccesible">3</button>
          <button class="seats__seat seats__inaccesible">4</button>
          <button class="seats__seat seats__inaccesible">5</button>
        </div>
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat">5</button>
        </div>
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat">5</button>
        </div>
      </div>
      <div class="seats__letters">
        <p class="seats__letter">a</p>
        <p class="seats__letter">b</p>
        <p class="seats__letter">c</p>
      </div>
      <div class="seats__box">
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat">5</button>
        </div>
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat seats__inaccesible">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat">5</button>
        </div>
        <div class="seats__row">
          <button class="seats__seat">1</button>
          <button class="seats__seat">2</button>
          <button class="seats__seat">3</button>
          <button class="seats__seat">4</button>
          <button class="seats__seat">5</button>
        </div>
      </div>
    </div>
  </div>
  <div class="legend wrapper">
      <p class="legend__title">Legend:</p>
      <div class="legend__item">  
          <div class="legend__gray"></div>
          <p class="legend__text"> -inaccessible</p>
      </div>
      <div class="legend__item">  
          <div class="legend__black"></div>
          <p class="legend__text"> -selected</p>
      </div>
  </div>

  <div class="price wrapper">
      <p class="price__text">Total price: $143</p>
      <button class="price__back">back</button>
      <button class="price__submit"> <router-link to="/tickets">submit </router-link></button>
  </div>
</template>


<style lang="scss" scoped>
.back__btn {
  display: flex;
  border: none;
  background-color: transparent;
  margin: 4rem 0 2rem 10rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  a {
    color: black;
    font-weight: bold;
    font-size: 16px;
  }
}

.info,
.reservation__time {
  color: #b60000;
  font-weight: bold;
}
.reservation {
  &__text {
    display: flex;
    justify-content: space-between;
  }
  &__title {
    font-size: 36px;
  }
  &__date {
    font-size: 24px;
    font-weight: bold;
  }
  &__sector {
    font-weight: bold;
  }
}

.seats {
    &__title{
        font-size: 40px;
        text-align: center;
        font-weight: bold;
        margin-bottom: 1rem;
    }
  &__container {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
  &__box{
      margin: 0rem .8rem;
  }
  &__seat{
      font-size: 15px;
      border: 1px solid black;
      background-color: transparent;
      padding: .4rem .7rem;
      margin: .3rem;
      cursor: pointer;
  }
   &__active {
    background-color: rgb(0, 0, 0);
    color: white;
  }
  &__letters{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content:space-around;
  }
  &__letter{
      font-size: 18px;
      text-transform: uppercase;
      font-weight: bold;
  }
  &__inaccesible{
      background: #c4c4c4;
      cursor: auto;
  }
}

.legend{
   
    &__title{
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 1rem;
    }
    &__item{
        display: flex;
        align-items: center;
        margin-bottom: .5rem;
    }
    &__gray,&__black{
        width: 25px;
        height: 25px;
        margin-right: .3rem;
    }
     &__gray{
         background-color: #C4C4C4;
     }
     &__black{
         background-color:black;
     }
}

.price{
    text-align: center;
    &__text{
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 1rem;
    }
    &__back, &__submit{
           width: 120px;
      border:1px solid black;
      text-transform: uppercase;
      text-align: center;
      padding: .8rem 1rem;
      cursor: pointer;
      margin-bottom: 7rem;
    }
    &__submit{
        background-color: black;
        color: white;
    }
    &__back{
        background-color: white;
        color: rgb(0, 0, 0);
        margin-right: 1rem;
    }
}
</style>
