// src/client.ts
import axios, { AxiosInstance } from 'axios';
import { ClientConfig, CreateJobParams, Job } from './types';

export class TenzroClient {
  private client: AxiosInstance;
  private config: ClientConfig;

  constructor(config: ClientConfig) {
    this.config = config;
    this.client = axios.create({
      baseURL: config.baseURL || 'https://api.tenzro.com/v0',
      headers: {
        'Authorization': `Bearer ${config.apiKey}`,
        'X-Node-ID': config.nid,
        'Content-Type': 'application/json',
      },
    });
  }

  jobs = {
    create: async (params: CreateJobParams): Promise<Job> => {
      const { data } = await this.client.post<Job>('/jobs', params);
      return data;
    },

    get: async (jobId: string): Promise<Job> => {
      const { data } = await this.client.get<Job>(`/jobs/${jobId}`);
      return data;
    },

    list: async (limit: number = 10, offset: number = 0) => {
      const { data } = await this.client.get('/jobs', {
        params: { limit, offset },
      });
      return data;
    },

    cancel: async (jobId: string): Promise<Job> => {
      const { data } = await this.client.post<Job>(`/jobs/${jobId}/cancel`);
      return data;
    },
  };
}
