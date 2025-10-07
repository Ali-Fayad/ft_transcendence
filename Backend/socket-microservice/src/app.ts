import Fastify from 'fastify';
import websocket from '@fastify/websocket';
import { configPlugin } from './plugins/config';
import wsRoutes from './routes/ws.routes';

import { swaggerPlugin } from './plugins/swagger';
import wsInfoRoutes from './routes/ws.info.routes';

export async function buildApp() {
  const app = Fastify({ logger: true });
  await app.register(configPlugin);

  await app.register(swaggerPlugin);

  await app.register(websocket);
  await app.register(wsRoutes);

  await app.register(wsInfoRoutes);

  app.get('/health', async () => ({ ok: true }));
  return app;
}
