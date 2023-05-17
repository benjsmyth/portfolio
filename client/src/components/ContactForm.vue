<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
axios.defaults.xsrfCookieName = "csrftoken"

export default defineComponent({
  data() {
    return {
      email: '',
      subject: '',
      message: ''
    }
  },
  methods: {
    async sendMail() {
      await axios.post('http://localhost:8000/mail/', document.querySelector('#contact-form'), {
          headers: {
            'Content-Type': 'application/json',
            // 'X-CSRFToken': String
          }
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
    }
  }
});
</script>

<template>
  <div class="contact-form-wrapper
      bg-slate-700 cursor-pointer divide-slate-400 divide-y drop-shadow ease-in-out
      hover:outline-2 m-2 mb-4 outline outline-1 outline-slate-600 px-4 py-2
      rounded-lg text-slate-300/85 transition
    ">
    <div class="contact-form-header
        flex justify-between
      ">
      <h4 class="contact-form-title
        font-bold select-none
      ">Contact
      </h4>
    </div>
    <div class="contact-card-body
        h-80 leading-6 overflow-auto py-1 scroll-smooth text-right text-slate-400 text-sm
      ">
      <form id="contact-form" @submit.prevent="sendMail" class="
          gap-3 grid p-8
        ">
        <fieldset class="gap-5 grid grid-cols-2">
          <label class="contact-label-name
              text-left
            ">
            Email
            <input placeholder="Email" v-model.trim="email" class="contact-input-email
              bg-slate-700 ease-in-out font-mono h-2/3 placeholder-slate-300/50 hover:placeholder-slate-300/75 outline outline-1 outline-slate-500 px-3 py-1 rounded text-slate-300 text-sm transition w-full
            ">
          </label>
          <label class="contact-label-subject
              text-left
            ">
            Subject
            <input placeholder="Subject" v-model.trim="subject" class="contact-input-subject
              bg-slate-700 ease-in-out font-mono h-2/3 placeholder-slate-300/50 hover:placeholder-slate-300/75 outline outline-1 outline-slate-500 px-3 py-1 rounded text-slate-300 text-sm transition w-full
            ">
          </label>
        </fieldset>
        <fieldset>
          <label class="contact-label-message
              text-left
            ">
            Message
            <textarea placeholder="Message" v-model.trim="message" class="contact-textarea-message
              bg-slate-700 ease-in-out font-mono placeholder-slate-300/50 hover:placeholder-slate-300/75 outline outline-1 outline-slate-500 px-3 py-1 rounded text-slate-300 text-sm transition w-full
            ">
            </textarea>
          </label>
          <button type="submit" class="contact-label-button

            ">
            Send
          </button>
        </fieldset>
      </form>
    </div>
  </div>
</template>
