<template>
    <div class="flex_container">
        <div class="container">
          <div class="images">
            <img :src="'/images/product/'+ product.image" class="shop_item" />
          </div>
        </div>
  
    
        <div class="container">
          <div class="about_text">
            <div class="title">{{product.name}}</div>
            <div class="header_two">{{product.price}}</div>
            <div class="header_two">{{product.size}}</div>
            <div class = "desc">{{product.description}}</div>

            <div class="buttons">
              <button v-on:click="addToCart(product)" class="add">Add to Cart</button>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      random: 0,
      amount: 0,
      product: {},
    }
  },
  created() {
    this.product = this.$root.$data.products.find(product => product.id === parseInt(this.$route.params.id));
    this.random =
      Math.floor(Math.random() * 90) + 10;
    this.amount = this.random * parseFloat(this.product.price.replace(/\$|,/g, ''));
    this.amount = this.amount.toFixed(2);
  },
  methods: {
    addToCart(product) {
      this.$root.$data.cart.push(product);
    },
  }
}
</script>

<style scoped>
@media only screen and (max-width: 500px) {

  .flex_container {
      flex-direction: column !important;
      /* height: 70% !important; */
  }
  .title {
    font-size: 35px !important;
  }

  .shop_item {
    margin-top: 5px !important;
    margin-bottom: 0px I !important;
    max-width: 325px !important;
  }
  
}


.container {
    display: flex;
    flex-direction: row;
    flex: 1 1 30%;
    margin: 10px;
  
}

.flex_container {
  display: flex;
    /* flex-direction: row; */
    flex-wrap: wrap;
    width: 75% !important;
    margin: 0 auto;
    background-color: #ebe0d4;
    border-radius: 10px;
    height: 100%;
}




.shop_item {
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
}

.slideshow-buttons {
  top: 70%;
  display: none;
}


.title{
    font-variant: small-caps;
    font-size: 45px;
    font-family: 'Montserrat', sans-serif ;
    margin-top: 10px;
    font-weight:lighter;
}

.header_two {
  font-variant: small-caps;
  font-size: 25px;
  margin-top: 10px;
  font-family: 'Montserrat', sans-serif ;

}

.desc {
  letter-spacing: 0;
  margin-top: 20px;
  margin-bottom: 17px;
  color: #4E4E4E;
  font-size: 1.2em;
  line-height: 1.6em;
  margin-right: 25px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

button {
  background: darken(#c3caaf, 10%);
  padding: 10px;
  display: inline-block;
  outline: 0;
  border: 0;
  margin: 0px;
  border-radius: 2px;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: #a7af91;
  cursor: pointer;
  margin-top: 30px;
  margin-bottom: 30px
}
button:hover {
    background: #c3caaf;
    transition: all .4s ease-in-out;
}

.add {
  width: 67%;
}

.like {
  width: 22%;
}



.pick {
  margin-top: 11px;
  margin-bottom:0;
  margin-left: 20px;
}

.image {
  max-width: 100%;
  object-fit: cover;
}

.dropdown {
  position: relative;
  display: inline-block;
  font-family: Georgia, 'Times New Roman', Times, serif !important;
}

select {
  font-size: 15px;
  border: 1px;
  border-style:hidden;
  padding: 5px ;
  padding-right: 85px;
  background-color: #fdf4eb;
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif ;
  font-weight: bold;
  width:250px;
}

.dropdown:hover .dropdown-content {
  display: block;
  border-radius: 5px;
}

p:hover {
  background-color: #ebe0d4;;
}

.option {
  font-family: 'Montserrat', sans-serif ;
  font-size: 14px;
  margin-bottom: 10px;
  margin-top: 20px;
}
</style>
