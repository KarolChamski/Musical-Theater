<template>

  <header>
    <div class="header__img"></div>
    <div class="header__shadow"></div>
  </header>

  <div class="schedule">
    <h2 class="title">Dzisiaj gramy</h2>

    
    <div class="schedule__container">
      <div class="schedule__box">
        <div class="schedule__img"></div>
        <div class="schedule__info">
          <h3 class="schedule__info-title">Swan Lake</h3>
          <p class="schedule__info-time">9:00</p>
          <p class="schedule__info-author">Tchaikovsky</p>
          <p class="schedule__info-description">
            Swan Lake is the love story of Prince Siegfried, who on a hunting trip...
          </p>
          <button class="schedule__btn">
            <router-link :to="{ name: 'details', params: { title: $store.state.swanLake.title , description1: $store.state.swanLake.description, description2: $store.state.swanLake.description2, description3: $store.state.swanLake.description3, description4: $store.state.swanLake.description4, description5: $store.state.swanLake.description5, staff1: $store.state.swanLake.staff1, staff2: $store.state.swanLake.staff2}}">Więcej</router-link></button>
          <button class="schedule__btn">Kup bilet</button>
        </div>
      </div>
      <div class="schedule__box">
        <div class="schedule__img"></div>
        <div class="schedule__info">
          <h3 class="schedule__info-title">Peter Pan</h3>
          <p class="schedule__info-time">9:00</p>
          <p class="schedule__info-author">J.M. Berrie</p>
          <p class="schedule__info-description">
            Peter Pan is a mischievous boy who refuses to grow up...
          </p>
          <button class="schedule__btn">
         <router-link :to="{ name: 'details', params: { title: $store.state.peterPan.title , description1: $store.state.peterPan.description, description2: $store.state.peterPan.description2, description3: $store.state.peterPan.description3, description4: $store.state.peterPan.description4,staff1: $store.state.peterPan.staff1, staff2: $store.state.peterPan.staff2}}">Więcej</router-link></button>
          <button class="schedule__btn">Kup bilet</button>
        </div>
      </div>
      <div class="schedule__box">
        <div class="schedule__img"></div>
        <div class="schedule__info">
          <h3 class="schedule__info-title">Magic To Do</h3>
          <p class="schedule__info-time">9:00</p>
          <p class="schedule__info-author">Stephen Schwartz</p>
          <p class="schedule__info-description">
            Peter Pan is a mischievous boy who refuses to grow up...
          </p>
         <button class="schedule__btn">
         <router-link :to="{ name: 'details', params: { title: $store.state.magicToDo.title , description1: $store.state.magicToDo.description ,staff1: $store.state.magicToDo.staff1, staff2: $store.state.magicToDo.staff2}}">Więcej</router-link></button>
          <button class="schedule__btn">Kup bilet</button>
        </div>
      </div>
      <div class="schedule__box">
        <div class="schedule__img"></div>
        <div class="schedule__info">
          <h3 class="schedule__info-title">Symphonic concert</h3>
          <p class="schedule__info-time">9:00</p>
          <p class="schedule__info-author"></p>
          <p class="schedule__info-description">
            Peter Pan is a mischievous boy who refuses to grow up...
          </p>
         <button class="schedule__btn">
         <router-link :to="{ name: 'details', params: { title: $store.state.symphonicConcert.title , description1: $store.state.symphonicConcert.description ,staff1: $store.state.symphonicConcert.staff1, staff2: $store.state.symphonicConcert.staff2}}">Więcej</router-link></button>
          <button class="schedule__btn">Kup bilet</button>
        </div>
      </div>
    </div>
  </div>

  <div class="premiere">
    <h2 class="title">Premiere</h2>
    <div class="premiere__container">
      <div class="premiere__box">
        
        <div class="premiere__img"></div>
        <h3 class="premiere__title">Swan Lake</h3>
        <p class="premiere__author">Tchaikovsky</p>
        <p class="premiere__description">
          Swan Lake is the love story of Prince Siegfried, who on a hunting
          trip..
        </p>
      </div>
      <div class="premiere__box">
        <div class="premiere__img"></div>
        <h3 class="premiere__title">Swan Lake</h3>
        <p class="premiere__author">Tchaikovsky</p>
        <p class="premiere__description">
          Swan Lake is the love story of Prince Siegfried, who on a hunting
          trip..
        </p>
      </div>
      <div class="premiere__box">
        <div class="premiere__img"></div>
        <h3 class="premiere__title">Swan Lake</h3>
        <p class="premiere__author">Tchaikovsky</p>
        <p class="premiere__description">
          Swan Lake is the love story of Prince Siegfried, who on a hunting
          trip..
        </p>
      </div>
      <div class="premiere__box">
        <div class="premiere__img"></div>
        <h3 class="premiere__title">Swan Lake</h3>
        <p class="premiere__author">Tchaikovsky</p>
        <p class="premiere__description">
          Swan Lake is the love story of Prince Siegfried, who on a hunting
          trip..
        </p>
      </div>
      <div class="premiere__box">
        <div class="premiere__img"></div>
        <h3 class="premiere__title">Swan Lake</h3>
        <p class="premiere__author">Tchaikovsky</p>
        <p class="premiere__description">
          Swan Lake is the love story of Prince Siegfried, who on a hunting
          trip..
        </p>
      </div>
      <div class="premiere__box">
        <div class="premiere__img"></div>
        <h3 class="premiere__title">Swan Lake</h3>
        <p class="premiere__author">Tchaikovsky</p>
        <p class="premiere__description">
          Swan Lake is the love story of Prince Siegfried, who on a hunting
          trip..
        </p>
      </div>
      <div class="premiere__box">
        <div class="premiere__img"></div>
        <h3 class="premiere__title">Swan Lake</h3>
        <p class="premiere__author">Tchaikovsky</p>
        <p class="premiere__description">
          Swan Lake is the love story of Prince Siegfried, who on a hunting
          trip..
        </p>
      </div>
      <div class="premiere__box">
        <div class="premiere__img"></div>
        <h3 class="premiere__title">Swan Lake</h3>
        <p class="premiere__author">Tchaikovsky</p>
        <p class="premiere__description">
          Swan Lake is the love story of Prince Siegfried, who on a hunting
          trip..
        </p>
      </div>
      <div class="premiere__box">
        <div class="premiere__img"></div>
        <h3 class="premiere__title">Swan Lake</h3>
        <p class="premiere__author">Tchaikovsky</p>
        <p class="premiere__description">
          Swan Lake is the love story of Prince Siegfried, who on a hunting
          trip..
        </p>
      </div>
      <div class="premiere__box">
        <div class="premiere__img"></div>
        <h3 class="premiere__title">Swan Lake</h3>
        <p class="premiere__author">Tchaikovsky</p>
        <p class="premiere__description">
          Swan Lake is the love story of Prince Siegfried, who on a hunting
          trip..
        </p>
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
    height: 180px;
    width: 270px;
    background-image: url("../../src/assets/image1.jpg");
    background-position: center;
    background-size: cover;
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
    margin: .5rem 1.5rem;
    cursor: pointer;
  }
  &__img {
    height: 180px;
    width: 100%;
    background-image: url("../../src/assets/image1.jpg");
    background-position: center;
    background-size: cover;
  }
  &__title {
    margin-top: 0.5rem;
  }
  &__author {
    color: rgb(173, 173, 173);
    margin-bottom: 0.3rem;
  }
  &__description {
    margin-bottom: 3rem;
  }
}

.news{
    &__container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
         margin: 3rem 0 6rem 0;
    }
    &__box{
        width: 200px;
        text-align: left;
        margin: 0 1rem;
        cursor: pointer;
    }

    &__img{
        height: 150px;
      width: 100%;
      background-image: url("../../src/assets/image1.jpg");
      background-position: center;
      background-size: cover;
    }
    &__title{
         margin-top: .5rem;
    }
}
</style>


<script>
export default{
    data(){
    return{
      
    }
  }
}
</script>