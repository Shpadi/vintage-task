<template>
  <div class="contact-us">
    <h1 class="contact-us__title">Contact Us</h1>
    <div class="contact-us__body row">
      <div class="col-md-6 ">
        <Form></Form>
      </div>
      <div class="col-md-6 contact-us__text d-none d-lg-block" >
        <p>Please tell us more about your request and give us info about your company</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Form from "./Form";
  export default {
    components: {Form}
  }
</script>

<style scoped lang="scss">
  .contact-us {
    padding: 50px;
    background-image: url('../assets/img/pattern.png');
    &__title {
      color: #fff;
      font-weight: 400;
      font-size: 24px;
      text-align: left;
    }
    &__body {
      display: flex;
    }
    &__text {
      width: 500px;
      text-align: left;
    }
  }
  input:-webkit-autofill {
    background-color: transparent !important;
  }
  @media only screen and (max-width : 576px) {
    .contact-us {
      padding: 20px;
    }
  }
</style>
