const express = require("express");
const app = express();

const cors = require("cors");

require("./config/mongoose.config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

require("./routes/routes")(app);

// secret test key linked to Stripe account
const stripe = require('stripe')('sk_test_51IbJ6LBx7QZ9wBYOhCX4nGGjWZ8nPIWjftxC7qYgMgcZMiKifAiHjo7WxwusCEDGJNkxd3ojwyFPT8g43RB0iyEP00UVq3IPJp');

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Poke Bowl',
                        images: ['https://cdn.vox-cdn.com/thumbor/6wAmqQlDvT7BVEtTxiuh-SFO8oI=/0x0:2000x1333/1200x900/filters:focal(840x506:1160x826)/cdn.vox-cdn.com/uploads/chorus_image/image/63014219/Pratt_45th_Stop_n_Shop_16.0.0.0.jpg'],
                    },
                    unit_amount: 1495,
                },
                quantity: 1
            }
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel'
    });
    res.json({ id: session.id });
});

app.listen(8000, () => console.log("Server is locked and loaded on port 8000"));