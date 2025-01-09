# Tenzro TypeScript SDK

Official TypeScript SDK for interacting with the Tenzro API.

## Installation

```bash
npm install @tenzro/sdk
# or
yarn add @tenzro/sdk
```

## Usage

```typescript
import { TenzroClient } from '@tenzro/sdk';

const client = new TenzroClient({
  apiKey: 'your-api-key',
  nid: 'node-id'
});

async function main() {
  // Create a training job
  const job = await client.jobs.create({
    type: 'training',
    model: 'custom-model',
    config: {
      epochs: 100,
      batchSize: 32
    }
  });
  console.log('Created job:', job.id);

  // Get job status
  const jobStatus = await client.jobs.get(job.id);
  console.log('Job status:', jobStatus.status);

  // List jobs
  const jobs = await client.jobs.list(10, 0);
  console.log('Total jobs:', jobs.length);

  // Cancel job
  const cancelledJob = await client.jobs.cancel(job.id);
  console.log('Cancelled job:', cancelledJob.id);
}

main().catch(console.error);
```

## API Reference

### TenzroClient

```typescript
new TenzroClient({
  apiKey: string;
  nid: string;
  baseURL?: string;
})
```

### Jobs

- `create(params: CreateJobParams): Promise<Job>`
- `get(jobId: string): Promise<Job>`
- `list(limit?: number, offset?: number): Promise<Job[]>`
- `cancel(jobId: string): Promise<Job>`

## License

MIT License