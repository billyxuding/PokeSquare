const express = require("express");
const app = express();

const cors = require("cors");

const stripe = require('stripe')('sk_test_51IbJ6LBx7QZ9wBYOhCX4nGGjWZ8nPIWjftxC7qYgMgcZMiKifAiHjo7WxwusCEDGJNkxd3ojwyFPT8g43RB0iyEP00UVq3IPJp'); // secret test key linked to Stripe account

app.post('/create-checkout-session', async (req, res) => {
	const session = await stripe.checkout.sessions.create({
		payment_method_types: ['card'],
		line_items: [
			{
				price_data: {
					currency: 'usd',
					product_data: {
						name: 'Poke Bowl',
						images: ['./pokebowldrawing.jpeg'],
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

require("./config/mongoose.config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

require("./routes/routes")(app);

app.listen(8000, () => console.log("Server is locked and loaded on port 8000"));