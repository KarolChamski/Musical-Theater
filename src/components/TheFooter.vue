<template>
<footer>
    <div class="container">
        <div class="logo">
             <router-link to="/home">
            <img  src="../../src/assets/logo.svg" alt="">
            </router-link>
        </div>
        <div class="newsletter">
            <p class="newsletter__title">Newsletter</p>
            <p class="newsletter__description">Subscribe to the newsletter and receive notifications about premieres on an ongoing </p>
            <div class="newsletter__box">

            <input class="newsletter__input" type="email" id="email" placeholder="Enter your e-mail">
            <button class="newsletter__btn"> <img class="footer__newsletter-arrow" src="../../src/assets/arrow1.svg" alt=""></button>
            </div>
        </div>
        <div class="links">
            <ul class="list">
                <li><router-link to ="/home">Customer service</router-link></li>
                <li><router-link to ="/home">Privacy policy</router-link></li>
                <li><router-link to ="/home">Regulations</router-link></li>
                <li><router-link to ="/home">Contact</router-link></li>
            </ul>
        </div>
        <div class="links">
           <ul class="links">
            <li><router-link to ="/home">Gift cards</router-link></li>
            <li><router-link to ="/home">Returns and complains</router-link></li>
            <li><router-link to ="/home">Newsletter</router-link></li>

                <li><img class="links__icon" src="../../src/assets/facebook.svg" alt=""> <img class="links__icon" src="../../src/assets/instagram.svg" alt=""> <img class="links__icon" src="../../src/assets/youtube.svg" alt=""></li>
            </ul>
           
        </div>
        
    </div>
</footer>
</template>

<style lang="scss" scoped>

footer{

    .container{
        background-color: #F6F6F6;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 4rem 3rem;
        height: 20vh;

    }
    .newsletter{
        text-align: left;
        width: 400px;

        &__title{
            font-size: 1.5rem;
        }
        &__description{
            margin: .5rem 0;
            line-height: 24px;
            color: rgb(173, 173, 173);
        }
        &__input{
            padding: .5rem ;
            width: 300px;
            border: 1px solid rgb(194, 194, 194);
            
        }
        &__box{
            display: flex;
        }
        &__btn{
            display: flex;
            justify-content: center;
            align-self: center;
            border: none;
            background-color: black;
            color:white;
            padding: .5rem .7rem;
            margin-left: .5rem;
            cursor: pointer;
            
        }
       
    }

    .links li {
        list-style: none;
        text-align: left;
        margin: 1rem 0;
        }

   .links li a{
        text-decoration: none;
        color: black;
        list-style: none;
        }
       .links__icon{
           width: 20px;
           padding: .3rem;
           cursor: pointer;
           margin: 0 .2rem;
       }
}
</style>