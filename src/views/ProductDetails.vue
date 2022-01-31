<template>
  <div class="back">
    <button class="back__btn">Wstecz</button>
  </div>
  <div class="product">
    <div class="product__box">
      <div class="product__img"></div>
      <div class="product__info">
        <div class="product__info-maintitle">
          <h3 class="product__info-title">Swan Lake</h3>
          <h3 class="product__info-data">17/02/22</h3>
        </div>
        <h3 class="product__info-time">17:30</h3>
        <p class="product__info-text">
          Swan Lake is the love story of Prince Siegfried, who on a hunting trip
          encounters a flock of swans, falls in love with the Swan Queen,
          Odette, and swears his allegiance and undying love to her. As a result
          of a curse by the evil sorcerer Baron von Rothbart, Odette can only
          take human form between midnight and daybreak.
        </p>
        <button class="product__info-btn">Kup bilet</button>
      </div>
    </div>
    <p class="product__text">
      Swan Lake is perhaps the most well-known ballet, next to The Nutcracker.
      Petipa choreographed this famous ballet, danced to a glorious score by
      Tchaikovsky, in 1877. Swan Lake is the love story of Prince Siegfried, who
      on a hunting trip encounters a flock of swans, falls in love with the Swan
      Queen, Odette, and swears his allegiance and undying love to her. As a
      result of a curse by the evil sorcerer Baron von Rothbart, Odette can only
      take human form between midnight and daybreak. Only faithful, true love
      can break the spell. This love is expressed in the White Swan pas de deux,
      danced to one of the most familiar sections of the music, and is both
      gentle and tender. During this pas de deux, Odette’s timidness and sense
      of fear of the Prince transitions to acceptance of his love and hope for
      the future.
    </p>
    <p class="product__text">
      To prevent his spell from being broken, von Rothbart transforms his own
      daughter, Odile, to look exactly like Odette. Dressed in black, she is
      presented to Price Siegfried at his birthday party, and he thinks she is
      actually his beloved Odette. Filled with seduction, confidence and bravura
      dancing, the Black Swan pas de deux is in complete contrast to the White
      Swan pas de deux. Technically one of the most difficult variations for a
      ballerina, this piece is famous for its 32 fouettés, a turn requiring the
      dancer to use her leg to whip herself around, made even harder turning on
      pointe. Many consider it to be the most exciting dancing in the entire
      ballet.
    </p>
    <p class="product__text">
      Swan Lake doesn’t end well. Thinking she is his Odette, Prince Siegfried
      swears his love for Odile, both destroying his future with the Swan Queen
      and dooming her to death. In most productions, the prince, distraught,
      commits suicide by jumping into the lake. But there have been many
      variations on a theme. The Bolshoi Ballet created great controversy in the
      ballet world with a 1984 production that had a different ending, where
      Prince Siegfried and Odette lived happily ever after.
    </p>
    <p class="product__text">
      For more information on Swan Lake, please have a look at our website where
      you can access and view two very different versions of the full ballet –
      one traditional and one non-traditional. You can also connect via Zoom for
      a virtual meeting of our new Dance Dialogues on Tuesday, August 18 at 3
      p.m.. Guest facilitator David Lyman, dance critic, will share the history
      and background of Swan Lake, and compare and contrast the Bolshoi and the
      Matthew Bourne productions. Please join us!
    </p>

    <div class="staff">
      <p class="staff__title">Staff</p>
      <div class="staff__box">
      <ul class="staff__list">
        <li>Ceri Murray</li>
        <li>Phebe Evans</li>
        <li>Halimah Grimes</li>
        <li>Aviana Pugh</li>
        <li>Stevie Madden</li>
      </ul>
      <ul class="staff__list staff__list-second ">
        <li>Ciara Rojas</li>
        <li>Nile Duarte</li>
        <li>Aleisha Mendoza</li>
        <li>Charmaine Rayner</li>
        <li>Haseeb Phelps</li>
      </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.back__btn {
  display: flex;
  border: none;
  background-color: transparent;
  font-weight: bold;
  margin: 6rem 0 3rem 3rem;
  padding: 0.5rem 1rem;
}

.product {
  &__img {
    height: 350px;
    width: 550px;
    background-position: center;
    background-size: cover;
    background-image: url("../../src/assets/image1.jpg");
  }
  &__box {
    display: flex;
    justify-content: center;
    margin-bottom: 4rem;
  }
  &__info {
    position: relative;
    width: 600px;
    margin-left: 3rem;
    &-maintitle {
      display: flex;
      justify-content: space-between;
      font-size: 30px;
      margin-top: 2rem;
    }
    &-text {
      text-align: left;
      line-height: 28px;
      margin-bottom: 2.5rem;
    }
    &-time {
      text-align: right;
      color: #930000;
      margin-bottom: 1.5rem;
    }
    &-btn {
      position: absolute;
      right: 0;
      border: none;
      background-color: black;
      color: white;
      padding: 0.8rem 2rem;
      font-size: 14px;
    }
  }
  &__text{
      line-height: 28px;
      margin: 3rem 17rem;
  }
}
  .staff{
      margin: 3rem 17rem;

      &__box{
          display: flex;
      }
      &__title{
          font-size: 22px;
          font-weight: bold;
          margin:1rem 0rem;
      }
      &__list li{
          line-height: 30px;
          list-style: none;
      }
      &__list {
          padding: 0;
          margin-bottom: 3rem;
           &-second{
               margin-left: 4rem;
           }
      }
      
  }
</style>
