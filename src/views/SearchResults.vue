<template>
    <div class="results">


        <div class="result" v-for="item in this.filteredArr" :key="item.title">
        <router-link
          :to="{
            name: 'details',
            params: {
              title: item.title,
              author: item.author,
              description1: item.description,
              description2: item.description2,
              description3: item.description3,
              description4: item.description4,
              description5: item.description5,
              staff1: item.staff1,
              staff2: item.staff2,
              image: item.image,
            },
          }"
        >

            <p class="result__title">{{item.title}}</p>
            <p class="result__author">{{item.author}}</p>
            <p class="result__description">{{item.shortDescription}}</p>

        </router-link>
            </div>

    </div>
</template>
<script>
export default{
data(){
    return{
        storeArr: [],
        filteredArr: []
    }
},
methods: {
    update(){
        this.storeArr = this.$store.state.shows;
        this.filteredArr = this.storeArr.filter(element =>
        element.title.toLowerCase().includes(this.$store.state.search) )
    }
},

 watch: {
    '$store.state.search'() {
      this.update()
    }
   
}
}
</script>
<style lang="scss" scoped>
.results{
    margin-top: 6rem;
}
a{
    color: #000;
}
.result{
    margin: 2rem;
    &__title{
        font-size: 28px;
        font-weight: bold;
    }
    &__author{
        color: rgb(173, 173, 173);
    }
}
</style>