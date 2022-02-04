<template>
<footer>
    <div class="footer__container">
        <div class="footer__logo">
            <h2>LOGO</h2>
        </div>
        <div class="footer__newsletter">
            <p class="footer__newsletter-title">Newsletter</p>
            <p class="footer__newsletter-description">Subscribe to the newsletter and receive notifications about premieres on an ongoing </p>
            <input class="footer__newsletter-input" type="text" placeholder="Enter your e-mail">
            <button class="footer__newsletter-btn">></button>
        </div>
        <div class="footer__links">
            <ul class="footer__list">
                <li><a href="">Customer service</a></li>
                <li><a href="">Privacy policy</a></li>
                <li><a href="">Regulations</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
        <div class="footer__links">
           <ul class="footer__links">
                <li><a href="">Gift cards</a></li>
                <li><a href="">Returns and complains</a></li>
                <li><a href="">Newsletter</a></li>
                <li><a href="">1</a><a href="">2</a><a href="">3</a></li>
            </ul>
           
        </div>
        
    </div>
</footer>
</template>

<style lang="scss" scoped>

.footer{
   
    &__container{
        background-color: #F6F6F6;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 4rem 2rem;
    }
    &__newsletter{
        text-align: left;
        width: 400px;

        &-title{
            font-size: 1.5rem;
        }
        &-description{
            margin: .5rem 0;
            line-height: 24px;
            color: rgb(173, 173, 173);
        }
        &-input{
            padding: .5rem ;
            width: 300px;
            border: 1px solid rgb(194, 194, 194);
            
        }
        &-btn{
            border: none;
            background-color: black;
            color:white;
            padding: .5rem .7rem;
            margin-left: .5rem;
        }
    }

    &__links li {
        list-style: none;
        text-align: left;
        margin: 1rem 0;
        }

    &__links li a{
        text-decoration: none;
        color: black;
        list-style: none;
        }
}
</style>