import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/scribe-token', async (req, res) => {
  try {
    if (!process.env.ELEVENLABS_API_KEY) {
      return res.status(500).json({ error: 'ELEVENLABS_API_KEY not configured' });
    }

    const response = await fetch('https://api.elevenlabs.io/v1/single-use-token/realtime_scribe', {
      method: 'POST',
      headers: {
        'xi-api-key': process.env.ELEVENLABS_API_KEY
      }
    });

    if (!response.ok) {
      const text = await response.text();
      return res.status(500).json({ error: `Token request failed: ${text}` });
    }

    const data = await response.json();
    return res.json({ token: data.token });
  } catch (err) {
    console.error('Error creating scribe token:', err);
    return res.status(500).json({ error: 'Failed to create scribe token' });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT);
