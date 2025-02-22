export class DataSourceService {
  static getDataSource(event: Record<string, any>) {
    if (event.body) {
      const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
      return { source: 'API_GATEWAY', body }
    }

    if (event.Records && event.Records[0]?.eventSource === 'aws:sqs') {
      const body = event.Records[0].body;
      const data = typeof body === 'string' ? JSON.parse(body) : body;
      return { source: 'SQS', body: data.detail }
    }

    return null;
  }
}