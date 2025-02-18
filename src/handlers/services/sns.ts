import { PublishCommand, PublishCommandInput, SNSClient } from '@aws-sdk/client-sns';
export class SnsService {
  private client: SNSClient;

  constructor() {
    this.client = new SNSClient()
  }

  async publish(topicArn: string, message: string) {
      const input: PublishCommandInput = {
        TopicArn: topicArn,
        Message: message
      }
    
      const command = new PublishCommand(input);
      const response = await this.client.send(command);
      return response;
  }
}