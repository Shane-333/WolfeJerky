require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package
const plaid = require('plaid');

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware

console.log(plaid.environments); // Add this line to check the environments

const client = new plaid.Client({
  clientID: process.env.PLAID_CLIENT_ID,
  secret: process.env.PLAID_SECRET,
  env: plaid.environments[process.env.PLAID_ENV],
});

app.post('/create_link_token', async (req, res) => {
  const { userId } = req.body; // Get user ID from request body

  try {
    const response = await client.createLinkToken({
      user: {
        client_user_id: userId,
      },
      client_name: 'Wolfe Jerky',
      products: ['auth', 'transactions'],
      country_codes: ['US'],
      language: 'en',
    });
    res.json(response);
  } catch (error) {
    console.error('Error creating link token:', error);
    res.status(500).send('Error creating link token');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
