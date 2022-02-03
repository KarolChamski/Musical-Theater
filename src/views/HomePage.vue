<template>
  <header>
    <div class="header__img"></div>
    <div class="header__shadow"></div>
  </header>

  <div class="schedule">
    <h2 class="title">Today's schedule</h2>

    <div class="schedule__container">
      <div class="schedule__box">
        <router-link
          :to="{
            name: 'details',
            params: {
              title: $store.state.shows[0].title,
              description1: $store.state.shows[0].description,
              description2: $store.state.shows[0].description2,
              description3: $store.state.shows[0].description3,
              description4: $store.state.shows[0].description4,
              description5: $store.state.shows[0].description5,
              staff1: $store.state.shows[0].staff1,
              staff2: $store.state.shows[0].staff2,
            },
          }"
        >
          <img class="schedule__img" :src="$store.state.shows[0].image" alt="" />
        </router-link>
        <div class="schedule__info">
          <h3 class="schedule__info-title">{{$store.state.shows[0].title}}</h3>
          <p class="schedule__info-time">9:00</p>
          <p class="schedule__info-author">{{$store.state.shows[0].author}}</p>
          <p class="schedule__info-description">
            {{$store.state.shows[0].shortDescription}}
          </p>
          <button class="schedule__btn">
            <router-link
              :to="{
                name: 'details',
                params: {
                  title: $store.state.shows[0].title,
                  description1: $store.state.shows[0].description,
                  description2: $store.state.shows[0].description2,
                  description3: $store.state.shows[0].description3,
                  description4: $store.state.shows[0].description4,
                  description5: $store.state.shows[0].description5,
                  staff1: $store.state.shows[0].staff1,
                  staff2: $store.state.shows[0].staff2,
                },
              }"
              >Więcej</router-link
            >
          </button>
          
          <button class="schedule__btn">
              <router-link to="/reservation">Buy ticket
              </router-link></button>
        </div>
      </div>
      <div class="schedule__box">
        <router-link
          :to="{
            name: 'details',
            params: {
              title: $store.state.shows[3].title,
              description1: $store.state.shows[3].description,
              description2: $store.state.shows[3].description2,
              description3: $store.state.shows[3].description3,
              description4: $store.state.shows[3].description4,
              staff1: $store.state.shows[3].staff1,
              staff2: $store.state.shows[3].staff2,
            },
          }"
        >
          <img class="schedule__img" src="../../src/assets/image1.jpg" alt="" />
        </router-link>
        <div class="schedule__info">
          <h3 class="schedule__info-title">{{$store.state.shows[3].title}}</h3>
          <p class="schedule__info-time">9:00</p>
          <p class="schedule__info-author">{{$store.state.shows[3].author}}</p>
          <p class="schedule__info-description">
            {{$store.state.shows[3].shortDescription}}
          </p>
          <button class="schedule__btn">
            <router-link
              :to="{
                name: 'details',
                params: {
                  title: $store.state.shows[3].title,
                  description1: $store.state.shows[3].description,
                  description2: $store.state.shows[3].description2,
                  description3: $store.state.shows[3].description3,
                  description4: $store.state.shows[3].description4,
                  staff1: $store.state.shows[3].staff1,
                  staff2: $store.state.shows[3].staff2,
                },
              }"
              >Więcej</router-link
            >
          </button>
          <button class="schedule__btn">
              <router-link to="/reservation">Kup bilet
              </router-link></button>
        </div>
      </div>

      <div class="schedule__box">
        <router-link
          :to="{
            name: 'details',
            params: {
              title: $store.state.shows[5].title,
              description1: $store.state.shows[5].description,
              staff1: $store.state.shows[5].staff1,
              staff2: $store.state.shows[5].staff2,
            },
          }"
        >
          <img class="schedule__img" src="../../src/assets/image1.jpg" alt="" />
        </router-link>
        <div class="schedule__info">
          <h3 class="schedule__info-title">{{$store.state.shows[5].title}}</h3>
          <p class="schedule__info-time">9:00</p>
          <p class="schedule__info-author">
            {{ $store.state.shows[5].author }}
          </p>
          <p class="schedule__info-description">
            {{ $store.state.shows[5].shortDescription }}
          </p>
          <button class="schedule__btn">
            <router-link
              :to="{
                name: 'details',
                params: {
                  title: $store.state.shows[5].title,
                  description1: $store.state.shows[5].description,
                  staff1: $store.state.shows[5].staff1,
                  staff2: $store.state.shows[5].staff2,
                },
              }"
              >Więcej</router-link
            >
          </button>
         <button class="schedule__btn">
              <router-link to="/reservation">Kup bilet
              </router-link></button>
        </div>
      </div>

      
      <div class="schedule__box">
        <router-link
          :to="{
            name: 'details',
            params: {
              title: $store.state.shows[6].title,
              description1: $store.state.shows[6].description,
              staff1: $store.state.shows[6].staff1,
              staff2: $store.state.shows[6].staff2,
            },
          }"
        >
          <img class="schedule__img" src="../../src/assets/image1.jpg" alt="" />
        </router-link>
        <div class="schedule__info">
          <h3 class="schedule__info-title">{{$store.state.shows[6].title}}</h3>
          <p class="schedule__info-time">9:00</p>
          <p class="schedule__info-author"></p>
          <p class="schedule__info-description">
            {{$store.state.shows[6].shortDescription}}
          </p>
          <button class="schedule__btn">
            <router-link
              :to="{
                name: 'details',
                params: {
                  title: $store.state.shows[6].title,
                  description1: $store.state.shows[6].description,
                  staff1: $store.state.shows[6].staff1,
                  staff2: $store.state.shows[6].staff2,
                },
              }"
              >Więcej</router-link
            >
          </button>
         <button class="schedule__btn">
              <router-link to="/reservation">Kup bilet
              </router-link></button>
        </div>
      </div>
    </div>
  </div>

  <div class="premiere">
    <h2 class="title">Premiere</h2>
    <div class="premiere__container">
        <div class="premiere__box" v-for="premiere in $store.state.shows" :key="premiere.title">
      <router-link 
        :to="{
          name: 'details',
          params: {
            title: premiere.title,
            description1: premiere.description,
            description2: premiere.description2,
            description3: premiere.description3,
            description4: premiere.description4,
            description5: premiere.description5,
            staff1: premiere.staff1,
            staff2: premiere.staff2,
          },
        }"
      >
      
          <img :src="premiere.image" class="premiere__img" alt="">
          <h3 class="premiere__title">{{premiere.title}}</h3>
          <p class="premiere__author">{{premiere.author}}</p>
          <p class="premiere__description">{{premiere.shortDescription}}
          </p>
      </router-link>
        </div>

    </div>
  </div>

  <div class="news">
    <h2 class="title">News</h2>
    <div class="news__container">
      <div class="news__box">
        <div class="news__img"></div>
        <h3 class="news__title">Coming soon Pinocchio on DVD</h3>
      </div>
      <div class="news__box">
        <div class="news__img"></div>
        <h3 class="news__title">Coming soon Pinocchio on DVD</h3>
      </div>
      <div class="news__box">
        <div class="news__img"></div>
        <h3 class="news__title">Coming soon Pinocchio on DVD</h3>
      </div>
      <div class="news__box">
        <div class="news__img"></div>
        <h3 class="news__title">Coming soon Pinocchio on DVD</h3>
      </div>
      <div class="news__box">
        <div class="news__img"></div>
        <h3 class="news__title">Coming soon Pinocchio on DVD</h3>
      </div>
      <div class="news__box">
        <div class="news__img"></div>
        <h3 class="news__title">Coming soon Pinocchio on DVD</h3>
      </div>
      <div class="news__box">
        <div class="news__img"></div>
        <h3 class="news__title">Coming soon Pinocchio on DVD</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
header {
  position: relative;
  height: 400px;
  width: 100%;
  .header__img {
    height: 100%;
    background-image: url("../../src/assets/image1.jpg");
    background-position: center;
    background-size: cover;
  }
  .header__shadow {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    background-color: rgba(0, 0, 0, 0.226);
  }
}

.title {
  text-align: center;
  margin: 5rem 0 1rem 0;
}

.schedule {
  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  &__box {
    display: flex;
    text-align: left;
    margin: 3rem 3rem;
  }

  &__info {
    position: relative;
    align-self: center;
    width: 350px;
    margin: 0 1rem;
    &-author {
      color: rgb(173, 173, 173);
    }
    &-time {
      line-height: 24px;
      font-weight: bold;
      margin: 0;
      position: absolute;
      top: 0;
      right: 0;
      color: rgb(175, 0, 0);
    }
    &-description {
      margin: 0.5rem 0;
    }
  }

  &__btn {
    border: none;
    background-color: black;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    margin: 0.5rem 1rem;
    padding: 0.7rem 2rem;
  }

  &__img {
    width: 270px;
  }
}

.premiere {
  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 3rem 0;
  }
  a {
    margin: 0 1.5rem;
  }
  &__box {
    width: 270px;
    text-align: left;
    margin: 0.5rem 1.5rem;
    padding: 0rem;
    cursor: pointer;
  }
  &__img {
    height: 180px;
    width: 100%;
  }
  &__title {
    margin-top: 0.5rem;
    color: #000;
  }
  &__author {
    color: rgb(173, 173, 173);
    margin-bottom: 0.3rem;
  }
  &__description {
    margin-bottom: 3rem;
    color: #000;
  }
}

.news {
  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 3rem 0 6rem 0;
  }
  &__box {
    width: 200px;
    text-align: left;
    margin: 0 1rem;
  }

  &__img {
    height: 150px;
    width: 100%;
    background-image: url("../../src/assets/image1.jpg");
    background-position: center;
    background-size: cover;
  }
  &__title {
    margin-top: 0.5rem;
  }
}
</style>

<script>
export default {
  data() {
    return {};
  },
};
</script>
