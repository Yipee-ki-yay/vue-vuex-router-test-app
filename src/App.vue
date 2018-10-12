<template>
  <div>
    <header>
      <div class="container">
        <div class="row">
          <div class="col col-sm-9">
            <h1>Site</h1>
          </div>
          <div class="col col-sm-3">
            <h1>In Cart:</h1>
          </div>
        </div>
      </div>
    </header>
    <section>
      <div class="container">
        <div class="row">
          <div class="col col-sm-3 menu">
            {{ menuList }}
            <ul class="list-group">
              <li class="list-group-item">Product</li>
              <li class="list-group-item">Cart</li>
              <li class="list-group-item">Checkout</li>
            </ul>
          </div>
          <div class="col col-sm-9">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  computed: {
    menuList() {
      return this.$store.getters['products/items'];
    }    
  }
}
</script>

<style>
  .menu {
    border-right: 1px solid #ddd;
  }
  .list-group-item {
    transition: background .3s, color .3s;
  }
  .list-group-item a {
    text-decoration: none;
  }
  .list-group-item.active a {
    color: inherit;
  }
  .slide-enter {

  }
  .slide-enter-active {
    animation: slideIn .5s;
  }
  .slide-enter-to {

  }
  .slide-leave {

  }
  .slide-leave-active {
    animation: slideOut .5s;
  }
  .slide-leave-to {

  }

  @keyframes slideIn {
    from {
      transform: rotateY(90deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }
  @keyframes slideOut {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(90deg); 
    }
  }
</style>
