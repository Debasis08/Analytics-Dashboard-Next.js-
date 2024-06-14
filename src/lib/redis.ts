import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://vocal-tahr-49470.upstash.io',
  token: process.env.REDIS_KEY!,
})

// const data = await redis.set('foo', 'bar');