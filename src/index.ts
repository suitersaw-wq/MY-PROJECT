import express, { Request, Response } from 'express';

export const app = express();
const PORT = process.env.PORT || 3000;

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

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}
