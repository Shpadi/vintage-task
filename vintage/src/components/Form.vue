<template>
  <div class="contact-us">
    <h1 class="contact-us__title">Contact Us</h1>
    <div class="contact-us__body">
      <form method="post"
            action="#"
            class="form"
            @submit.prevent="sendDataEvent">
        <div :class="{'form__item': true,
                      'error': errors.has('userName'),}">
          <p v-if="errors.has('userName')" class="form__hint">User name must be more than 2 symbols</p>
          <label class="form__label" for="name">Name</label>
          <input type="text"
                 v-validate="'required|min:3'"
                 class="form__input"
                 name="userName"
                 id="name"
                 v-model="userName">
        </div>
        <div :class="{'form__item': true,
                      'error': errors.has('phone'),}">
          <p v-if="errors.has('phone')" class="form__hint">User phone must be 10 symbols and be numeric</p>
          <label class="form__label" for="phone">Phone</label>
          <input v-validate="'required|min:10|max:10|numeric'"
                 type="tel"
                 class="form__input"
                 id="phone"
                 name="phone"
                 max="10"
                 v-model="userPhone">
        </div>
        <div :class="{'form__item': true,
                      'error': errors.has('email'),}">
          <p v-if="errors.has('email')" class="form__hint">Email not  correct</p>
          <label class="form__label" for="email">Email</label>
          <input v-validate="'required|email'"
                 name="email"
                 type="email"
                 class="form__input"
                 id="email"
                 v-model="userEmail">
        </div>
        <div class="form__agree">
          <input type="checkbox" id="checkbox" class="checkbox" v-model="isPersonalDataChecked">
          <label for="checkbox">I agree the processing of personal data </label>
        </div>
        <button type="submit" :class="{'form__submit': true,
                                       'disabled': isDataLoading}"
                                        :disabled="isDataLoading">
          <template v-if="!isDataLoading"> GET IN TOUCH </template>
          <template v-else> LOADING </template>
        </button>
      </form>
      <div class="contact-us__text">
        <p>Please tell us more about your request and give us info about your company</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    name: 'Form',
    data() {
      return {
        userName: '',
        userPhone: '',
        userEmail: '',
        isDataLoading: false,
        isPersonalDataChecked: false,
      }
    },
    methods: {
      ...mapActions({
        sendData: 'sendFormData',
      }),
      sendDataEvent() {
        if (!this.isPersonalDataChecked) return this.showNotification('error', 'Agree with proessing')

        if ((this.errors.items.length===0) && this.userName && this.userPhone && this.userEmail) {
          let data = {
            name: this.userName,
            phone: this.userPhone,
            email: this.userEmail,
          }
          let payload = {
            data,
            onSuccess: this.sendDataSuccess,
          }
          this.isDataLoading = true;
          return this.sendData(payload);
        }
        this.showNotification('error', 'Not all fields correct')
      },
      showNotification(type, text) {
        this.$notify({
          group: 'form',
          title: 'Important message',
          type: type,
          text: text
        });
      },
      sendDataSuccess() {
        this.isDataLoading = false;
        this.showNotification('success', 'Request send')
      }
    }
  }
</script>

<style scoped lang="scss">
  .contact-us {
    padding: 35px 25px;
    background-image: url('../assets/img/pattern.png');
    &__title {
      color: #fff;
      font-weight: 400;
      font-size: 24px;
      text-align: left;
    }
    &__body {
      display: flex;
      justify-content: space-between;
    }
    &__text {
      width: 500px;
      text-align: left;
    }
  }

  .form {
    width: 400px;
    &__item {
      margin-bottom: 15px;
      border-bottom: 1px solid #000;
      color: #000;
      display: flex;
      align-items: center;
      position: relative;
    }

    &__hint {
      position: absolute;
      top:-10px;
      font-size: 10px;
    }

    &__input {
      border: none;
      background: transparent;
      font-size: 20px;
      width: 100%;
      padding: 10px;
      outline: none;
    }

    &__submit {
      padding: 20px;
      color: #fff;
      background-color: #000;
      border: none;
      min-width: 200px;
    }

    &__label {
      padding-right: 20px;
    }

    &__agree {
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      color: #fff;
      .checkbox {
        width: 15px;
        height: 15px;
        margin-right: 10px;
      }
    }
  }

  .disabled {
    background: cadetblue;
    color: #000;
  }

  .error {
    color: red;
    border-color: red;
    .form__input {
      color: red;
    }
  }

  input:-webkit-autofill {
    background-color: transparent !important;
  }
</style>
