<template>
    <div class="navbar">
        <div class="navbar__logo">
            <h2><router-link to="/home">LOGO</router-link></h2>
            
            </div>
        <div class="navbar__search">
            <input class="navbar__input" type="text" placeholder="Szukaj">
        </div>
        <div class="navbar__buttons">
            <button>repertoire</button>
            <button>tickets</button>
            <button>🛒</button>
            <button>🙍‍♂️</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>

a{ 
    color: black;
}
.navbar{
    position: fixed;
    justify-content: space-between;
    height: 40px;
    width: 100%;
    top: 0;
    line-height: 40px;
    background-color: rgb(255, 255, 255);
    display: flex;
    z-index: 1000000;

    &__logo{
        margin-left: 1rem;
    }
     &__input{
            padding: .5rem ;
            width: 300px;
            border: 1px solid rgb(194, 194, 194);
            
        }
}
button{
    margin: 0 .5rem;
    border: none;
    background-color: transparent;
    text-transform: uppercase;
    cursor: pointer;
    padding: .5rem 1rem;
}
</style>
