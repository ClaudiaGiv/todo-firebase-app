const stripe = require("stripe")(process.env.VUE_APP_STRIPE_PK);
// const { amount, currency = "gbp" } = JSON.parse(event.body);
//
try {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 222,
        currency: "usd",
        automatic_payment_methods: {enabled: true},
    });
    return {
        statusCode: 200, // http status code
        body: JSON.stringify({
            paymentIntent
        }),
    };
} catch (e) {
    return {
        statusCode: 404, // http status code
        body: "Error",
    };
}

// exports.handler = async (event, context) => {
//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: 222,
//         currency: "usd",
//         automatic_payment_methods: {enabled: true},
//     });
//     return {
//         statusCode: 200, // http status code
//         body: JSON.stringify({
//             paymentIntent
//         }),
//     };
//     // const session = await stripe.checkout.sessions.create({
//     //     payment_method_types: ["card"],
//     //     line_items: [
//     //         {
//     //             price_data: {
//     //                 currency: "usd",
//     //                 product_data: {
//     //                     name: "T-shirt",
//     //                 },
//     //                 unit_amount: 2000,
//     //             },
//     //             quantity: 1,
//     //         },
//     //     ],
//     //     mode: "payment",
//     //     success_url: "https://serverless-payments.netlify.app/success",
//     //     cancel_url: "https://serverless-payments.netlify.app/cancel",
//     // });
// };
