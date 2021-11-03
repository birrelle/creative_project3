<template>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  
  <link rel="stylesheet" href="styles.css" />
  <title>Emily Little | Digital Art</title>
  </head>
  <body>
    <div id="app">
    <div id="menu">
    <div class="image">
      <router-link to="/">
        <img src="/images/logo.png" class="logo">
      </router-link>
    </div>
    <div id="side">
      <router-link to="/">
        <div class="menu-item">
          <p>Home</p>
        </div>
      </router-link>
      <router-link to="/about">
        <div class="menu-item">
          <p>About</p>
        </div>
      </router-link>
      <router-link to="/shop">
        <div class="menu-item">
          <p>Shop</p>
        </div>
      </router-link>
      <router-link to="/cart">
        <div class="menu-item cart">
          <p>Cart({{numItems}}) </p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
      <div class="footer">GitHub repository: <a href="https://github.com/birrelle/creative_project3" id="foot">github.com</a></div>
    </div>
    </body>
</html>
</template>

<script>
export default {
  computed: {
  numItems() {
    return this.$root.$data.cart.length;
    }
  }

}
</script>

<style>
  * {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

#menu {
  margin-bottom: 50px;
}

#menu a {
  color: #000000;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  flex-direction:row;
  margin:auto;
  justify-content:center;
  font-family: 'Montserrat', sans-serif !important;
  font-variant: small-caps !important;
  font-size: 27px !important;

}

.cart {
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}

.logo {
    max-width: 100%;
    object-fit: cover;
    padding-left: 10%;
}
.image {
    width:30%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    display: block;
}


.footer {
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: rgb(119, 125, 134);
    color: white;
    text-align: center;
    font-family: Georgia, 'Times New Roman', Times, serif;
    margin-top: 200px;
    padding: 15px;
  }

  #foot {
      color: black;
  }

  #foot.hover {
    text-decoration: black  !important;
  }
</style>





