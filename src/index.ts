import Anthropic from '@anthropic-ai/sdk';
import express, { Request, Response } from 'express';

export const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const anthropic = new Anthropic();

export function greet(name: string): string {
  return `Hello, ${name}!`;
}

app.get('/', (_req: Request, res: Response) => {
  res.send(greet('World'));
});

app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

app.get('/greet/:name', (req: Request, res: Response) => {
  res.send(greet(req.params.name));
});

interface ChatRequest {
  message: string;
  model?: string;
}

app.post('/ai/chat', async (req: Request, res: Response) => {
  const { message, model = 'claude-sonnet-4-20250514' } =
    req.body as ChatRequest;

  if (!message) {
    res.status(400).json({ error: 'message is required' });
    return;
  }

  try {
    const response = await anthropic.messages.create({
      model,
      max_tokens: 1024,
      messages: [{ role: 'user', content: message }],
    });

    const textContent = response.content.find((block) => block.type === 'text');
    res.json({
      response: textContent ? textContent.text : '',
      model: response.model,
      usage: response.usage,
    });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}
