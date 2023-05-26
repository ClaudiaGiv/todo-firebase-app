<template>
  <div class="container">
    <div>
      <label>Name</label>
      <input
          type="text"
          v-model="name"
          name="name"
          placeholder="Your Name"
      >
      <label>Email</label>
      <input
          type="email"
          v-model="email"
          name="email"
          placeholder="Your Email"
      >
      <label>Message</label>
      <textarea
          name="message"
          v-model="message"
          cols="30" rows="5"
          placeholder="Message">
          </textarea>

      <button @click="sendEmail">Send</button>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: "Contact",
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail() {
      // console.log(e)
      // try {
        emailjs.send('service_ouf78jk', 'template_0yz5kpa', {
          to_name: this.name,
          from_name: "Claudia",
          email_to: this.email,
          message: this.message
        },"mLv_Q_gymcHT0P7ms").then(() => {
          console.log("trimis")
        })
      //
      // } catch (error) {
      //   console.log({error})
      // }
      // // Reset form field
      // this.name = ''
      // this.email = ''
      // this.message = ''

      // emailjs.send("service_ouf78jk","template_0yz5kpa",{
      //   to_name: "Maria",
      //   from_name: "Clau",
      //   message: "Heiii cf?",
      //   reply_to: "claudia.givan@gmail.com",
      //   email_to: "clau_givan@yahoo.com",
      // }, "mLv_Q_gymcHT0P7ms");
      // console.log("trimis")
    },
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>
