<template>
  <div>
    <router-view />
  </div>
</template>

<script>
  /* eslint-disable */
  import QRScanner from 'cordova-plugin-qrscanner' /* eslint-disable */
  export default {
    methods: {
      openScan() {
        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
          console.log("Lets Rock baby")
        }

      }
    },
    mounted() {
      console.log("Try me")
      this.openScan()
    }
  }
</script>


<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>