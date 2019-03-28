<template>
  <div id="app">
    <div id="nav">
      <Contacts></Contacts>
      <Location></Location>
      <Form></Form>
    </div>
    <notifications group="form" />
  </div>
</template>

<style lang="scss">
body {
  padding:0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<script>
  import Contacts from './components/Contacts'
  import Form from './components/Form'
  import Location from "./components/Location";
  export default {
    components: {Location, Form, Contacts }
  };
</script>
