import 'dotenv/config';

import express from 'express';

const PORT = parseInt(String(process.env.PORT), 10) || 3000;

const app = express();

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));
