<template>
  <header>
    <img class="header__img" src="../../src/assets/header.jpeg" alt="">
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
              author: $store.state.shows[0].author,
              description1: $store.state.shows[0].description,
              description2: $store.state.shows[0].description2,
              description3: $store.state.shows[0].description3,
              description4: $store.state.shows[0].description4,
              description5: $store.state.shows[0].description5,
              staff1: $store.state.shows[0].staff1,
              staff2: $store.state.shows[0].staff2,
              image: $store.state.shows[0].image
            },
          }"
        >
          <img
            class="schedule__img"
            :src="$store.state.shows[0].image"
            alt=""
          />
        </router-link>
        <div class="schedule__info">
          <h3 class="schedule__info-title">
            {{ $store.state.shows[0].title }}
          </h3>
          <p class="schedule__info-time">{{ $store.state.shows[0].time }}</p>
          <p class="schedule__info-author">
            {{ $store.state.shows[0].author }}
          </p>
          <p class="schedule__info-description">
            {{ $store.state.shows[0].shortDescription }}
          </p>
          
            <router-link
              :to="{
                name: 'details',
                params: {
                  title: $store.state.shows[0].title,
                  author: $store.state.shows[0].author,
                  description1: $store.state.shows[0].description,
                  description2: $store.state.shows[0].description2,
                  description3: $store.state.shows[0].description3,
                  description4: $store.state.shows[0].description4,
                  description5: $store.state.shows[0].description5,
                  staff1: $store.state.shows[0].staff1,
                  staff2: $store.state.shows[0].staff2,
                  image: $store.state.shows[0].image,
                },
              }"
              ><button class="schedule__btn">Więcej</button></router-link
            >
          

          
            <router-link
              :to="{
                name: 'reservation',
                params: {
                  title: $store.state.shows[0].title,
                  author: $store.state.shows[0].author,
                  date: $store.state.shows[0].date,
                  time: $store.state.shows[0].time,
                  image: $store.state.shows[0].image,
                },
              }"
              ><button class="schedule__btn">Buy ticket</button>
            </router-link>
          
        </div>
      </div>
      <div class="schedule__box">
        <router-link
          :to="{
            name: 'details',
            params: {
              title: $store.state.shows[2].title,
              author: $store.state.shows[2].author,
              description1: $store.state.shows[2].description,
              description2: $store.state.shows[2].description2,
              description3: $store.state.shows[2].description3,
              description4: $store.state.shows[2].description4,
              staff1: $store.state.shows[2].staff1,
              staff2: $store.state.shows[2].staff2,
              image: $store.state.shows[2].image
            },
          }"
        >
          <img
            class="schedule__img"
            :src="$store.state.shows[2].image"
            alt=""
          />
        </router-link>
        <div class="schedule__info">
          <h3 class="schedule__info-title">
            {{ $store.state.shows[2].title }}
          </h3>
          <p class="schedule__info-time">{{ $store.state.shows[2].time }}</p>
          <p class="schedule__info-author">
            {{ $store.state.shows[2].author }}
          </p>
          <p class="schedule__info-description">
            {{ $store.state.shows[2].shortDescription }}
          </p>
          
            <router-link
              :to="{
                name: 'details',
                params: {
                  title: $store.state.shows[2].title,
                  author: $store.state.shows[2].author,
                  description1: $store.state.shows[2].description,
                  description2: $store.state.shows[2].description2,
                  description3: $store.state.shows[2].description3,
                  description4: $store.state.shows[2].description4,
                  staff1: $store.state.shows[2].staff1,
                  staff2: $store.state.shows[2].staff2,
                  image: $store.state.shows[2].image
                },
              }"
              ><button class="schedule__btn">Więcej</button></router-link
            >
          
          
            <router-link
              :to="{
                name: 'reservation',
                params: {
                  title: $store.state.shows[2].title,
                  author: $store.state.shows[2].author,
                  date: $store.state.shows[2].date,
                  time: $store.state.shows[2].time,
                  image: $store.state.shows[2].image,
                },
              }"
              ><button class="schedule__btn">Kup bilet</button>
            </router-link>
          
        </div>
      </div>

      <div class="schedule__box">
        <router-link
          :to="{
            name: 'details',
            params: {
              title: $store.state.shows[4].title,
author: $store.state.shows[4].author,
              description1: $store.state.shows[4].description,
              staff1: $store.state.shows[4].staff1,
              staff2: $store.state.shows[4].staff2,
              image: $store.state.shows[4].image,
            },
          }"
        >
          <img
            class="schedule__img"
            :src="$store.state.shows[4].image"
            alt=""
          />
        </router-link>
        <div class="schedule__info">
          <h3 class="schedule__info-title">
            {{ $store.state.shows[4].title }}
          </h3>
          <p class="schedule__info-time">{{ $store.state.shows[4].time }}</p>
          <p class="schedule__info-author">
            {{ $store.state.shows[4].author }}
          </p>
          <p class="schedule__info-description">
            {{ $store.state.shows[4].shortDescription }}
          </p>
          
            <router-link
              :to="{
                name: 'details',
                params: {
                  title: $store.state.shows[4].title,
                  author: $store.state.shows[4].author,
                  description1: $store.state.shows[4].description,
                  staff1: $store.state.shows[4].staff1,
                  staff2: $store.state.shows[4].staff2,
                  image: $store.state.shows[4].image,
                },
              }"
              ><button class="schedule__btn">Więcej</button></router-link
            >
          
          
            <router-link
              :to="{
                name: 'reservation',
                params: {
                  title: $store.state.shows[4].title,
                  author: $store.state.shows[4].author,
                  date: $store.state.shows[4].date,
                  time: $store.state.shows[4].time,
                  image: $store.state.shows[4].image,
                },
              }"
              ><button class="schedule__btn">Kup bilet</button>
            </router-link>
          
        </div>
      </div>

      <div class="schedule__box">
        <router-link
          :to="{
            name: 'details',
            params: {
              title: $store.state.shows[6].title,
              author: $store.state.shows[6].author,
              description1: $store.state.shows[6].description,
              staff1: $store.state.shows[6].staff1,
              staff2: $store.state.shows[6].staff2,
              image: $store.state.shows[6].image,
            },
          }"
        >
          <img
            class="schedule__img"
            :src="$store.state.shows[6].image"
            alt=""
          />
        </router-link>
        <div class="schedule__info">
          <h3 class="schedule__info-title">
            {{ $store.state.shows[6].title }}
          </h3>
          <p class="schedule__info-time">{{ $store.state.shows[6].time }}</p>
          <p class="schedule__info-author"></p>
          <p class="schedule__info-description">
            {{ $store.state.shows[6].shortDescription }}
          </p>
          
            <router-link
              :to="{
                name: 'details',
                params: {
                  title: $store.state.shows[6].title,
                  author: $store.state.shows[6].author,
                  description1: $store.state.shows[6].description,
                  staff1: $store.state.shows[6].staff1,
                  staff2: $store.state.shows[6].staff2,
                  image: $store.state.shows[6].image,
                },
              }"
              ><button class="schedule__btn">Więcej</button></router-link
            >
          
          
            <router-link
              :to="{
                name: 'reservation',
                params: {
                  title: $store.state.shows[6].title,
                  author: $store.state.shows[6].author,
                  date: $store.state.shows[6].date,
                  time: $store.state.shows[6].time,
                  image: $store.state.shows[6].image,
                },
              }"
              ><button class="schedule__btn">Kup bilet</button>
            </router-link>
          
        </div>
      </div>
    </div>
  </div>

  <div class="premiere">
    <h2 class="title">Premiere</h2>
    <div class="premiere__container">
      <div
        class="premiere__box"
        v-for="premiere in $store.state.shows"
        :key="premiere.title"
      >
        <router-link
          :to="{
            name: 'details',
            params: {
              title: premiere.title,
              author: premiere.author,
              description1: premiere.description,
              description2: premiere.description2,
              description3: premiere.description3,
              description4: premiere.description4,
              description5: premiere.description5,
              staff1: premiere.staff1,
              staff2: premiere.staff2,
              image: premiere.image,
            },
          }"
        >
          <img :src="premiere.image" class="premiere__img" alt="" />
          <h3 class="premiere__title">{{ premiere.title }}</h3>
          <p class="premiere__author">{{ premiere.author }}</p>
          <p class="premiere__description">{{ premiere.shortDescription }}</p>
        </router-link>
      </div>
    </div>
  </div>

  <div class="news">
    <h2 class="title">News</h2>
    <div class="news__container">
      <div class="news__box">
        <router-link
          :to="{
            name: 'news',
            params: {
              title: 'Pinocchio on DVD coming soon',
              image: '../../src/assets/pinocchio.jpg',
            },
          }"
        >
        <img class="news__img" src="../../src/assets/pinocchio.jpg" alt="" />
        <h3 class="news__title">Pinocchio on DVD coming soon</h3>
                 </router-link>
      </div>
      <div class="news__box">
                <router-link
          :to="{
            name: 'news',
            params: {
              title: 'Valentines day in the Musical Theater',
              image: '../../src/assets/valentine.jpeg',
            },
          }"
        >
        <img class="news__img" src="../../src/assets/valentine.jpeg" alt="" />
        <h3 class="news__title">Valentines day in the Musical Theater</h3>
        </router-link>
      </div>
      <div class="news__box">
                <router-link
          :to="{
            name: 'news',
            params: {
              title: 'Don Giovanni W.A Mozart for Grandmas and Grandpas Day',
              image: '../../src/assets/woman.jpg',
            },
          }"
        >
        <img class="news__img" src="../../src/assets/woman.jpg" alt="" />
        <h3 class="news__title">
          Don Giovanni W.A Mozart for Grandma's and Grandpa's Day
        </h3>
        </router-link>
      </div>
      <div class="news__box">
                <router-link
          :to="{
            name: 'news',
            params: {
              title: 'COVID information',
              image: '../../src/assets/curtain.jpg',
            },
          }"
        >
        <img class="news__img" src="../../src/assets/curtain.jpg" alt="" />
        <h3 class="news__title">COVID information</h3>
        </router-link>
      </div>
      <div class="news__box">
                <router-link
          :to="{
            name: 'news',
            params: {
              title: 'Rehearsals for the premiere The Haunted Manor S. Moniuszko',
              image: '../../src/assets/rehearsals.jpg',
            },
          }"
        >
        <img class="news__img" src="../../src/assets/rehearsals.jpg" alt="" />
        <h3 class="news__title">
          Rehearsals for the premiere The Haunted Manor S. Moniuszko
        </h3>
        </router-link>
      </div>
      <div class="news__box">
                <router-link
          :to="{
            name: 'news',
            params: {
              title: 'Don Quixote Ludwig Minkus coming soon',
              image: '../../src/assets/donquixote.jpg',
            },
          }"
        >
        <img class="news__img" src="../../src/assets/donquixote.jpg" alt="" />
        <h3 class="news__title">Don Quixote Ludwig Minkus coming soon</h3>
        </router-link>
      </div>
      <div class="news__box">
                <router-link
          :to="{
            name: 'news',
            params: {
              title: 'New Years Eve to the disco rhythm',
              image: '../../src/assets/newyear.jpeg',
            },
          }"
        >
        <img class="news__img" src="../../src/assets/newyear.jpeg" alt="" />
        <h3 class="news__title">New Year's Eve to the disco rhythm</h3>
        </router-link>
      </div>
  
    </div>
  </div>
</template>

<style lang="scss" scoped>
header {
  position: relative;
  height: 500px;
  width: 100%;
  .header__img {
     width: 100%;
  height: 100%;
  object-fit: cover;
  object-position:center;
  
  }
  .header__shadow {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    background-color: rgba(0, 0, 0, 0.308);
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
    margin: 2rem 3rem;
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
  a{
    color: black;
  }
  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 2rem 0 6rem 0;
  }
  &__box {
    width: 220px;
    text-align: left;
    margin: 1rem 1rem;
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
  mounted () {
  window.scrollTo(0, 0)
},
};
</script>
