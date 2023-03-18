const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);



async function mockProducts() {
  const product = await stripe.products.create({
    name: 'Basic product',
    default_price_data: {
      unit_amount: 1,
      currency: 'usd',
    },
    expand: ['default_price'],
  });
  console.log(product);
  const price = await stripe.prices.create({
    product: `${product.id}}`,
    unit_amount: 1,
    currency: 'usd',
    recurring: { interval: 'month' },
  });
  return price;
}

router.post('/create', async (req, res) => {
  const price = await mockProducts();
  res.status(200).json({ price });
});
router.post('/update', async (req, res) => {
  const product = await stripe.products.update(
    'prod_NXssrGWXoXGFqR',
    { default_price: 50 }
  );
  res.status(200).json({ product });
});



router.post('/checkout', async (req, res) => {
  const {line_items} = req.body;
  const session = await stripe.checkout.sessions.create({
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
    line_items: [
      { price: 'price_1MmnCnCMKsOGPDDkygbZufrY', quantity: 10 },
      { price: 'price_1MmnCnCMKsOGPDDkygbZufrY', quantity: 10 },
      { price: 'price_1MmnCnCMKsOGPDDkygbZufrY', quantity: 10 },
      { price: 'price_1MmnCnCMKsOGPDDkygbZufrY', quantity: 10 },
      { price: 'price_1MmnCnCMKsOGPDDkygbZufrY', quantity: 10 },
      { price: 'price_1MmnCnCMKsOGPDDkygbZufrY', quantity: 10 },
    ],
    mode: 'payment',
    payment_method_types: ['card'],
  });

  console.log(session);
  res.status(200).json({ id: session.id });

});





module.exports = router;

const product = [{
  id: 'prod_NXssrGWXoXGFqR',
  object: 'product',
  active: true,
  attributes: [],
  created: 1679097311,
  default_price: {
    id: 'price_1Mmn75CMKsOGPDDkDOtvkfbW',
    object: 'price',
    active: true,
    billing_scheme: 'per_unit',
    created: 1679097311,
    currency: 'usd',
    custom_unit_amount: null,
    livemode: false,
    lookup_key: null,
    metadata: {},
    nickname: null,
    product: 'prod_NXssrGWXoXGFqR',
    recurring: null,
    tax_behavior: 'unspecified',
    tiers_mode: null,
    transform_quantity: null,
    type: 'one_time',
    unit_amount: 1,
    unit_amount_decimal: '1'
  },
  description: null,
  images: [],
  livemode: false,
  metadata: {},
  name: 'Basic product',
  package_dimensions: null,
  shippable: null,
  statement_descriptor: null,
  tax_code: null,
  type: 'service',
  unit_label: null,
  updated: 1679097311,
  url: null
}, {
  id: 'prod_NXsp2Md8T5DHAw',
  object: 'product',
  active: true,
  attributes: [],
  created: 1679097085,
  default_price: {
    id: 'price_1Mmn3RCMKsOGPDDkJs4w5PNl',
    object: 'price',
    active: true,
    billing_scheme: 'per_unit',
    created: 1679097085,
    currency: 'usd',
    custom_unit_amount: null,
    livemode: false,
    lookup_key: null,
    metadata: {},
    nickname: null,
    product: 'prod_NXsp2Md8T5DHAw',
    recurring: {
      aggregate_usage: null,
      interval: 'month',
      interval_count: 1,
      trial_period_days: null,
      usage_type: 'licensed'
    },
    tax_behavior: 'unspecified',
    tiers_mode: null,
    transform_quantity: null,
    type: 'recurring',
    unit_amount: 1,
    unit_amount_decimal: '1'
  },
  description: null,
  images: [],
  livemode: false,
  metadata: {},
  name: 'Basic Dashboard',
  package_dimensions: null,
  shippable: null,
  statement_descriptor: null,
  tax_code: null,
  type: 'service',
  unit_label: null,
  updated: 1679097085,
  url: null
}]