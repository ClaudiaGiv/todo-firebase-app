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
      pk : import.meta.env.STRIPE_PK,
      elementsOptions: {
        appearance: {}, // appearance options
      },
      confirmParams: {
        return_url: 'http://localhost:8080/success', // success url
      },
    };
  },
  mounted () {
    this.generatePaymentIntent();
  },
  methods: {
    async generatePaymentIntent () {
      const intent = await fetch("/.netlify/functions/stripe", {
        method: "POST",
        body: JSON.stringify({
          amount: 500,
        }),
      });
      const { paymentIntent } = await intent.json();
      console.log(paymentIntent)
      this.elementsOptions.clientSecret = paymentIntent.client_secret;
    },
    pay () {
      this.$refs.paymentRef.submit();
    },
  },
};
</script>
