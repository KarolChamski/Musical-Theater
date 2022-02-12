<template>
  <div class="back">
    <button class="back__btn">
      <router-link to="/schedule">Back </router-link>
    </button>
  </div>
  <div class="reservation wrapper">
    <p class="info">
      Tickets purchased electronically cannot be returned or exchange.
    </p>
    <div class="reservation__text">
      <div class="reservation__box">
        <h3 class="reservation__title">{{ title }}</h3>
        <p class="reservation__sector">Big Scene</p>
      </div>
      <div class="reservation__box">
        <p class="reservation__date">{{this.date}}/01/2022</p>
        <p class="reservation__time">{{this.time}}</p>
      </div>
    </div>
  </div>

  <div class="seats wrapper">
    <p class="seats__title">SCENE</p>
    <div class="seats__container">
      <div class="seats__box">
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[0]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[3]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[6]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[9]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[12]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[15]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[18]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[21]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[24]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
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
          <button
            class="seats__seat"
            v-for="seat in seats[1]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[4]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[7]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[10]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[13]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[16]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[19]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[22]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[25]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
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
          <button
            class="seats__seat"
            v-for="seat in seats[2]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[5]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[8]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[11]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[14]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[17]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[20]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[23]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[26]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
      </div>
    </div>
    <div class="seats__container">
      <div class="seats__box">
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[27]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[30]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[33]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
      </div>
      <div class="seats__letters">
        <p class="seats__letter">J</p>
        <p class="seats__letter">K</p>
        <p class="seats__letter">L</p>
      </div>
      <div class="seats__box">
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[28]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[31]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[34]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
      </div>
      <div class="seats__letters">
        <p class="seats__letter">J</p>
        <p class="seats__letter">K</p>
        <p class="seats__letter">L</p>
      </div>
      <div class="seats__box">
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[29]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[32]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
        <div class="seats__row">
          <button
            class="seats__seat"
            v-for="seat in seats[35]"
            :key="seat.num"
            @click="chooseSeat(seat)"
            :disabled="!seat.available"
            :class="{ seats__active: seat.active }"
          >
            {{ seat.num }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="legend wrapper">
    <p class="legend__title">Legend:</p>
    <div class="legend__item">
      <div class="legend__gray"></div>
      <p class="legend__text">-inaccessible</p>
    </div>
    <div class="legend__item">
      <div class="legend__black"></div>
      <p class="legend__text">-selected</p>
    </div>
  </div>

  <div class="price wrapper">
    <p class="price__text">Total price: ${{totalPrice}}</p>
    <button class="price__back">back</button>
    
      <router-link @click="submitReservation" to="/cart"
        > <button class="price__submit">submit</button> 
      </router-link>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      seats: [
        [
          {
            num: 1,
            row: "A",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 2,
            row: "A",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 3,
            row: "A",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 4,
            row: "A",
            available: false,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 5,
            row: "A",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 6,
            row: "A",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 7,
            row: "A",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 8,
            row: "A",
            available: false,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 9,
            row: "A",
            available: false,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 10,
            row: "A",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 11,
            row: "A",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 12,
            row: "A",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 13,
            row: "A",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 14,
            row: "A",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 15,
            row: "A",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 1,
            row: "B",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 2,
            row: "B",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 3,
            row: "B",
            available: false,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 4,
            row: "B",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 5,
            row: "B",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 6,
            row: "B",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 7,
            row: "B",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 8,
            row: "B",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 9,
            row: "B",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 10,
            row: "B",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 11,
            row: "B",
            available: false,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 12,
            row: "B",
            available: false,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 13,
            row: "B",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 14,
            row: "B",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 15,
            row: "B",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 1,
            row: "C",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 2,
            row: "C",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 3,
            row: "C",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 4,
            row: "C",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 5,
            row: "C",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 6,
            row: "C",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 7,
            row: "C",
            available: false,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 8,
            row: "C",
            available: false,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 9,
            row: "C",
            available: false,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 10,
            row: "C",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 11,
            row: "C",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 12,
            row: "C",
            available: false,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 13,
            row: "C",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 14,
            row: "C",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 15,
            row: "C",
            available: true,
            price: 38,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 1,
            row: "D",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 2,
            row: "D",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 3,
            row: "D",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 4,
            row: "D",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 5,
            row: "D",
            available: false,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 6,
            row: "D",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 7,
            row: "D",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 8,
            row: "D",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 9,
            row: "D",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 10,
            row: "D",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 11,
            row: "D",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 12,
            row: "D",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 13,
            row: "D",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 14,
            row: "D",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 15,
            row: "D",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 1,
            row: "E",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 2,
            row: "E",
            available: false,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 3,
            row: "E",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 4,
            row: "E",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 5,
            row: "E",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 6,
            row: "E",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 7,
            row: "E",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 8,
            row: "E",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 9,
            row: "E",
            available: false,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 10,
            row: "E",
            available: false,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 11,
            row: "E",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 12,
            row: "E",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 13,
            row: "E",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 14,
            row: "E",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 15,
            row: "E",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 1,
            row: "F",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 2,
            row: "F",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 3,
            row: "F",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 4,
            row: "F",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 5,
            row: "F",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 6,
            row: "F",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 7,
            row: "F",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 8,
            row: "F",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 9,
            row: "F",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 10,
            row: "F",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 11,
            row: "F",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 12,
            row: "F",
            available: false,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 13,
            row: "F",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 14,
            row: "F",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 15,
            row: "F",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 1,
            row: "G",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 2,
            row: "G",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 3,
            row: "G",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 4,
            row: "G",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 5,
            row: "G",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 6,
            row: "G",
            available: false,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 7,
            row: "G",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 8,
            row: "G",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 9,
            row: "G",
            available: false,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 10,
            row: "G",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 11,
            row: "G",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 12,
            row: "G",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 13,
            row: "G",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 14,
            row: "G",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 15,
            row: "G",
            available: true,
            price: 30,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 1,
            row: "H",
            available: true,
            price: 25,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 2,
            row: "H",
            available: true,
            price: 25,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 3,
            row: "H",
            available: true,
            price: 25,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 4,
            row: "H",
            available: true,
            price: 25,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 5,
            row: "H",
            available: true,
            price: 25,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 6,
            row: "H",
            available: true,
            price: 25,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 7,
            row: "H",
            available: true,
            price: 25,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 8,
            row: "H",
            available: true,
            price: 25,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 9,
            row: "H",
            available: true,
            price: 25,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 10,
            row: "H",
            available: true,
            price: 25,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 11,
            row: "H",
            available: false,
            price: 25,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 12,
            row: "H",
            available: true,
            price: 25,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 13,
            row: "H",
            available: true,
            price: 25,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 14,
            row: "H",
            available: true,
            price: 25,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 15,
            row: "H",
            available: true,
            price: 25,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 1,
            row: "I",
            available: true,
            price: 25,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 2,
            row: "I",
            available: true,
            price: 25,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 3,
            row: "I",
            available: true,
            price: 25,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 4,
            row: "I",
            available: true,
            price: 25,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 5,
            row: "I",
            available: true,
            price: 25,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 6,
            row: "I",
            available: true,
            price: 25,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 7,
            row: "I",
            available: true,
            price: 25,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 8,
            row: "I",
            available: false,
            price: 25,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 9,
            row: "I",
            available: true,
            price: 25,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 10,
            row: "I",
            available: true,
            price: 25,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 11,
            row: "I",
            available: true,
            price: 25,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 12,
            row: "I",
            available: true,
            price: 25,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 13,
            row: "I",
            available: true,
            price: 25,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 14,
            row: "I",
            available: true,
            price: 25,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 15,
            row: "I",
            available: true,
            price: 25,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 1,
            row: "J",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 2,
            row: "J",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 3,
            row: "J",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 4,
            row: "J",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 5,
            row: "J",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 6,
            row: "J",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 7,
            row: "J",
            available: false,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 8,
            row: "J",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 9,
            row: "J",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 10,
            row: "J",
            available: false,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 11,
            row: "J",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 12,
            row: "J",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 13,
            row: "J",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 14,
            row: "J",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 15,
            row: "J",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 1,
            row: "K",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 2,
            row: "K",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 3,
            row: "K",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 4,
            row: "K",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 5,
            row: "K",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 6,
            row: "K",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 7,
            row: "K",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 8,
            row: "K",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 9,
            row: "K",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 10,
            row: "K",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 11,
            row: "K",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 12,
            row: "K",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 13,
            row: "K",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 14,
            row: "K",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 15,
            row: "K",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 1,
            row: "L",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 2,
            row: "L",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 3,
            row: "L",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 4,
            row: "L",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 5,
            row: "L",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 6,
            row: "L",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 7,
            row: "L",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 8,
            row: "L",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 9,
            row: "L",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 10,
            row: "L",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
        [
          {
            num: 11,
            row: "L",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 12,
            row: "L",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 13,
            row: "L",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 14,
            row: "L",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
          {
            num: 15,
            row: "L",
            available: true,
            price: 22,
            active: false,
            title: this.title,
            author: this.author,
            date: this.date,
            time: this.time,
            image: this.image
          },
        ],
      ],
      cart: [],
    };
  },
  props: ["title", "author", "date", "time", "image"],
  methods: {
    chooseSeat(seat) {
      if (seat.active != true) {
        seat.active = true;
        this.cart.push(seat);
      } else {
        seat.active = false;
        for (let i = 0; i < this.cart.length; i++) {
          if (this.cart[i].num === seat.num && this.cart[i].row === seat.row ) {
            this.cart.splice(i, 1);
          }
        }
      }
    },
    submitReservation() {
      this.cart.forEach(item => this.$store.commit('updateCart', item))
      // this.$store.commit('updateCart', this.cart);
      console.log(this.$store.state.cart);
    },
  },
  computed:{
        totalPrice(){
      return this.cart.reduce ((acc,cur) =>  acc + cur.price , 0)
    }
  }
};
</script>

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
  &__title {
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
  &__box {
    margin: 0rem 0.8rem;
  }
  &__seat {
    font-size: 15px;
    border: 1px solid black;
    background-color: transparent;
    padding: 0.4rem 0.7rem;
    margin: 0.3rem;
    cursor: pointer;
  }
  &__active {
    background-color: rgb(0, 0, 0);
    color: white;
  }
  &__letters {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  &__letter {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
  }
  &__seat:disabled {
    background: #c4c4c4;
    color: #000;
    cursor: auto;
  }
}

.legend {
  &__title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  &__item {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  &__gray,
  &__black {
    width: 25px;
    height: 25px;
    margin-right: 0.3rem;
  }
  &__gray {
    background-color: #c4c4c4;
  }
  &__black {
    background-color: black;
  }
}

.price {
  text-align: center;
  &__text {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  &__back,
  &__submit {
    width: 120px;
    border: 1px solid black;
    text-transform: uppercase;
    text-align: center;
    padding: 0.8rem 1rem;
    cursor: pointer;
    margin-bottom: 7rem;
  }
  &__submit {
    background-color: black;
    color: white;
  }
  &__back {
    background-color: white;
    color: rgb(0, 0, 0);
    margin-right: 1rem;
  }
}
</style>
