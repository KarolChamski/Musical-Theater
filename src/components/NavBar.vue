<template>
    <div class="navbar">
        <div class="navbar__logo">
            <router-link to="/home">
            <img  src="../../src/assets/logo.svg" alt="">
            </router-link>
            </div>
        <div class="navbar__search">
            <input class="navbar__input" type="text" placeholder="Szukaj">
        </div>
        <div class="navbar__buttons">
            <button>
                <router-link to="/schedule">
                schedule </router-link> </button>
            <button>
                 <router-link to="/tickets">
                 tickets </router-link> </button>
            <button> <router-link to="/cart"> cart </router-link></button>
        </div>
    </div>
</template>

<style lang="scss" scoped>

a{ 
    color: black;
}
.navbar{
    position: fixed;
    display: flex;
    justify-content: space-between;
    height: 40px;
    width: 100%;
    top: 0;
    line-height: 40px;
    background-color: rgb(255, 255, 255);
    z-index: 1000000;

    &__logo{
        margin-left: 1rem;
    }
     &__input{
            padding: .5rem ;
            width: 300px;
            border: 1px solid rgb(194, 194, 194);
            
        }
        &__buttons{
            margin-right: 2rem;
        }
}
button{
    margin: 0 .8rem;
    border: none;
    background-color: transparent;
    text-transform: uppercase;
    cursor: pointer;
    padding: .5rem .5rem;
    font-weight: bold;
    letter-spacing: 1px;
}
</style>
