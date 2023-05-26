<template>
  <div>
    <stripe-element-payment
        ref="paymentRef"
        :pk="pk"
        :elements-options="elementsOptions"
        :confirm-params="confirmParams"
    />
    <button @click="pay">Pay Now</button>
  </div>
</template>

<script>
import { StripeElementPayment } from '@vue-stripe/vue-stripe';
export default {
  components: {
    StripeElementPayment,
  },
  data () {
    return {
      pk : process.env.VUE_APP_STRIPE_PK,
      elementsOptions: {
        appearance: {}, // appearance options
      },
      confirmParams: {
        return_url: 'https://main--nimble-madeleine-f7ef24.netlify.app/contact', // success url
      },
    };
  },
  created () {
    this.generatePaymentIntent();
    console.log("import.meta.env.VITE_STRIPE_PK")
    console.log(process.env.VUE_APP_STRIPE_PK)
  },
  methods: {
    async generatePaymentIntent () {
      const intent = await fetch("http://localhost:9999/.netlify/functions/stripe", {
        method: "POST",
        body: JSON.stringify({
          amount: 500,
        }),
      });
      const paymentIntent = await intent.json();
      console.log(paymentIntent)
      this.elementsOptions.clientSecret = paymentIntent.client_secret;
    },
    pay () {
      this.$refs.paymentRef.submit();
    },
  },
};
</script>
