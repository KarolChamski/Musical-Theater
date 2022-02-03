<template>
  <div class="calendar">
    <div class="calendar__title wrapper">
      <h3 class="calendar__month">January 2022</h3>
      <button class="calendar__arrow">left</button>
      <button class="calendar__arrow">right</button>
    </div>
    <div class="calendar__days wrapper">
      <button
        @click="setCurrDate(day)"
        v-for="day in days"
        :key="day.number"
        class="calendar__btn"
        :class="{ calendar__active: day.active }"
      >
        <p class="calendar__btn-day">{{ day.name }}</p>
        <p class="calendar__btn-number">{{ day.number }}</p>
      </button>
    </div>
  </div>
  <div class="schedule wrapper">
    <h3 class="schedule__date">{{ currDate }}/01/2022</h3>
    <p class="schedule__day">{{ currName }}</p>

    <div v-for="show in $store.state.shows" :key="show.title">
      <div class="schedule__box" v-if="group === show.group">
        <router-link
          :to="{
            name: 'details',
            params: {
              title: show.title,
              description1: show.description,
              description2: show.description2,
              description3: show.description3,
              description4: show.description4,
              description5: show.description5,
              staff1: show.staff1,
              staff2: show.staff2,
            },
          }"
        >
          <img class="schedule__img" src="../../src/assets/image1.jpg" alt="" />
        </router-link>

        <div class="schedule__text">
          <div class="schedule__maintitle">
            <router-link
              :to="{
                name: 'details',
                params: {
                  title: show.title,
                  description1: show.description,
                  description2: show.description2,
                  description3: show.description3,
                  description4: show.description4,
                  description5: show.description5,
                  staff1: show.staff1,
                  staff2: show.staff2,
                },
              }"
            >
              <h3 class="schedule__title">{{ show.title }}</h3>
            </router-link>
            <h3 class="schedule__time">9:00 a.m</h3>
          </div>
          <p class="schedule__author">{{ show.author }}</p>
          <p class="schedule__description">{{ show.mediumDescription }}</p>
        </div>
        <div class="schedule__btns">
          <router-link
            :to="{
              name: 'details',
              params: {
                title: show.title,
                description1: show.description,
                description2: show.description2,
                description3: show.description3,
                description4: show.description4,
                description5: show.description5,
                staff1: show.staff1,
                staff2: show.staff2,
              },
            }"
          >
            <button class="schedule__btn">details</button>
          </router-link>

          <button class="schedule__btn">
            <router-link to="/reservation">Buy ticket </router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: [
        { number: 1, name: "Th", fullName: "Thursday", active: true },
        { number: 2, name: "Fr", fullName: "Friday", active: false },
        { number: 3, name: "Sa", fullName: "Saturday", active: false },
        { number: 4, name: "Su", fullName: "Sunday", active: false },
        { number: 5, name: "Mo", fullName: "Monday", active: false },
        { number: 6, name: "Tu", fullName: "Tuesday", active: false },
        { number: 7, name: "We", fullName: "Wednesday", active: false },
        { number: 8, name: "Th", fullName: "Thursday", active: false },
        { number: 9, name: "Fr", fullName: "Friday", active: false },
        { number: 10, name: "Sa", fullName: "Saturday", active: false },
        { number: 11, name: "Su", fullName: "Sunday", active: false },
        { number: 12, name: "Mo", fullName: "Monday", active: false },
        { number: 13, name: "Tu", fullName: "Tuesday", active: false },
        { number: 14, name: "We", fullName: "Wednesday", active: false },
        { number: 15, name: "Th", fullName: "Thursday", active: false },
        { number: 16, name: "Fr", fullName: "Friday", active: false },
        { number: 17, name: "Sa", fullName: "Saturday", active: false },
        { number: 18, name: "Su", fullName: "Sunday", active: false },
        { number: 19, name: "Mo", fullName: "Monday", active: false },
        { number: 20, name: "Tu", fullName: "Tuesday", active: false },
        { number: 21, name: "We", fullName: "Wednesday", active: false },
        { number: 22, name: "Th", fullName: "Thursday", active: false },
        { number: 23, name: "Fr", fullName: "Friday", active: false },
        { number: 24, name: "Sa", fullName: "Saturday", active: false },
        { number: 25, name: "Su", fullName: "Sunday", active: false },
        { number: 26, name: "Mo", fullName: "Monday", active: false },
        { number: 27, name: "Tu", fullName: "Tuesday", active: false },
        { number: 28, name: "We", fullName: "Wednesday", active: false },
        { number: 29, name: "Th", fullName: "Thursday", active: false },
        { number: 30, name: "Fr", fullName: "Friday", active: false },
        { number: 31, name: "Sa", fullName: "Saturday", active: false },
      ],
      currDate: 1,
      group: 1,
      currName: "Thursday",
    };
  },
  methods: {
    setCurrDate(day) {
      this.days.forEach((day) => (day.active = false));
      this.currDate = day.number;
      this.currName = day.fullName;
      day.active = true;
      if (day.number % 2 === 0) {
        this.group = 1;
      } else {
        this.group = 2;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.calendar {
  padding: 3rem 0;
  &__title {
    display: flex;
    margin-bottom: 1rem;
  }
  &__month {
    margin-right: 3rem;
  }
  &__arrow {
    border: none;
    background-color: black;
    text-transform: uppercase;
    margin-right: 1rem;
    color: white;
  }
  &__btn {
    border: none;
    background-color: white;
    margin-right: 0.6rem;
    padding: 0.4rem;
    cursor: pointer;

    &-day {
      color: rgb(173, 173, 173);
      text-align: center;
    }
    &-number {
      font-size: 16px;
      text-align: center;
    }
  }
  &__active {
    background-color: rgb(0, 0, 0);
    color: white;
  }
}

.schedule {
  a {
    color: #000;
  }
  &__img {
    width: 270px;
  }
  &__box {
    display: flex;
    margin: 1rem 0rem;
  }
  &__text {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  &__maintitle {
    display: flex;
    margin-top: 0.5rem;
  }
  &__title {
    margin-right: 1rem;
  }
  &__description {
    line-height: 24px;
  }
  &__time {
    color: #930000;
  }
  &__author {
    color: rgb(173, 173, 173);
    margin-bottom: 0.3rem;
  }
  &__btns {
    display: flex;
    flex-direction: column;
  }
  &__btn {
    border: none;
    color: white;
    background-color: black;
    text-transform: uppercase;
    padding: 0.7rem 1.5rem;
    margin-bottom: 0.5rem;
    width: 140px;
    text-align: center;
    cursor: pointer;
    a {
      color: white;
    }
  }
}

.next {
  text-align: right;
  &__btn {
    border: none;
    background: transparent;
    text-transform: uppercase;
    margin: 4rem 10rem 6rem 0;
    font-weight: bold;
  }
}
</style>
