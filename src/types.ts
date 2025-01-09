// src/types.ts
export interface ClientConfig {
    apiKey: string;
    nid: string;
    baseURL?: string;
  }
  
  export interface JobConfig {
    [key: string]: any;
  }
  
  export interface CreateJobParams {
    type: string;
    model: string;
    config: JobConfig;
  }
  
  export enum JobStatus {
    PENDING = 'pending',
    RUNNING = 'running',
    COMPLETED = 'completed',
    FAILED = 'failed',
  }
  
  export interface Job {
    id: string;
    type: string;
    model: string;
    status: JobStatus;
    config: JobConfig;
    createdAt: string;
    updatedAt: string;
  }