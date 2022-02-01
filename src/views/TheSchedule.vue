<template>
  <div class="calendar">
    <div class="calendar__title wrapper">
      <h3 class="calendar__month">January 2022</h3>
      <button class="calendar__arrow">left</button>
      <button class="calendar__arrow">right</button>
    </div>
    <div class="calendar__days wrapper">

      <button @click="setCurrDate(day)" v-for="day in days" :key="day.number" class="calendar__btn" :class="{ calendar__active: day.active }">
        <p class="calendar__btn-day">{{day.title}}</p>
        <p class="calendar__btn-number">{{day.number}}</p>
      </button>

    </div>
  </div>
  <div class="schedule wrapper">
          <h3 class="schedule__date" >{{currDate}}/01/2022</h3>
          <p class="schedule__day">Saturday</p>

          <div class="schedule__box">
              <div class="schedule__img"></div>
              <div class="schedule__text">
                  <div class="schedule__maintitle">
                      <h3 class="schedule__title">Swan Lake</h3>
                      <h3 class="schedule__time">/ 9:00 a.m</h3>
                  </div>
                  <p class="schedule__author"> Tchaikovsky</p>
                  <p class="schedule__description"> Swan Lake is the love story of Prince Siegfried, who on a hunting trip encounters a flock of swans, falls in love with the Swan Queen, Odette, and swears his allegiance and undying love to her. As a result of a curse by the evil sorcerer Baron von Rothbart, Odette can only take human form between midnight and daybreak.</p>
              </div>
              <div class="schedule__btns">
                  <button class="schedule__btn">details</button>
                  <button class="schedule__btn">buy ticket</button>
              </div>
          </div>
          <div class="schedule__box">
              <div class="schedule__img"></div>
              <div class="schedule__text">
                  <div class="schedule__maintitle">
                      <h3 class="schedule__title">Swan Lake</h3>
                      <h3 class="schedule__time">/ 9:00 a.m</h3>
                  </div>
                  <p class="schedule__author"> Tchaikovsky</p>
                  <p class="schedule__description"> Swan Lake is the love story of Prince Siegfried, who on a hunting trip encounters a flock of swans, falls in love with the Swan Queen, Odette, and swears his allegiance and undying love to her. As a result of a curse by the evil sorcerer Baron von Rothbart, Odette can only take human form between midnight and daybreak.</p>
              </div>
              <div class="schedule__btns">
                  <button class="schedule__btn">details</button>
                  <button class="schedule__btn">buy ticket</button>
              </div>
          </div>
          <div class="schedule__box">
              <div class="schedule__img"></div>
              <div class="schedule__text">
                  <div class="schedule__maintitle">
                      <h3 class="schedule__title">Swan Lake</h3>
                      <h3 class="schedule__time">/ 9:00 a.m</h3>
                  </div>
                  <p class="schedule__author"> Tchaikovsky</p>
                  <p class="schedule__description"> Swan Lake is the love story of Prince Siegfried, who on a hunting trip encounters a flock of swans, falls in love with the Swan Queen, Odette, and swears his allegiance and undying love to her. As a result of a curse by the evil sorcerer Baron von Rothbart, Odette can only take human form between midnight and daybreak.</p>
              </div>
              <div class="schedule__btns">
                  <button class="schedule__btn">details</button>
                  <button class="schedule__btn">buy ticket</button>
              </div>
          </div>
      
  </div>

<div class="next">
    <button class="next__btn">next</button>
</div>
</template>

<script>
export default{
  data(){
    return{
      days: [
        {number: '01',
        title: 'Th',
        active: false},
        {number: '02',
        title: 'Fr',
        active: false},
        {number: '03',
        title: 'Sa',
        active: false},
        {number: '04',
        title: 'Su',
        active: false},
        {number: '05',
        title: 'Mo',
        active: false},
        {number: '06',
        title: 'Tu',
        active: false},
        {number: '07',
        title: 'We',
        active: false},
      ],
      currDate: '01',
    }
  },
  methods:{
    setCurrDate(day){
      this.days.forEach(day => day.active = false);
      this.currDate = day.number;
      day.active = true;
    }

  }
}
</script>

<style lang="scss" scoped>

.calendar{
    padding: 3rem 0;
    &__title{
        display: flex;
        margin-bottom: 1rem;
    }
    &__month{
        margin-right: 3rem;
    }
    &__arrow{
        border: none;
        background-color: black;
        text-transform: uppercase;
        margin-right: 1rem;
        color: white;
    }
    &__btn{
        border: none;
        background-color: white;
        margin-right: .6rem;
        padding: .4rem;
        cursor: pointer;

        &-day{
            color: rgb(173, 173, 173);
            text-align: center;
        }
        &-number{
            font-size: 16px;
            text-align: center;
        }
    }
        &__active{
          background-color: rgb(0, 0, 0);
          color: white;
        }


}

.schedule{
    &__img{
flex-shrink: 0;
    height: 150px;
    width: 200px;
    background-position: center;
    background-size: cover;
    background-image: url("../../src/assets/image1.jpg");
    }
    &__box{
        display: flex;
        margin: 1rem 0rem;
    }
    &__text{
        margin-left: 1rem;
    }

    &__maintitle{
        display: flex;
        margin-top: .5rem;
    }
    &__title{
        margin-right: 1rem;
    }
    &__description{
        line-height: 24px;
    }
    &__time{
        color: #930000;
    }
    &__author{
        color: rgb(173, 173, 173);
        margin-bottom: .3rem;
    }
&__btns{
    display: flex;
    flex-direction: column;
}
    &__btn{
        border: none;
        color: white;
        background-color: black;
        text-transform: uppercase;
        padding: 0.7rem 1.5rem;
        margin-bottom: .5rem;
        width: 140px;
        text-align: center;

    }
}

.next{
    text-align: right;
    &__btn{
        border: none;
        background:transparent;
        text-transform: uppercase;
        margin:4rem 10rem 6rem 0;
        font-weight: bold;
        
    }
}

</style>
