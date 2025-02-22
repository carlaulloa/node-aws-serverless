import { EventBridgeClient, PutEventsCommand, PutEventsCommandInput } from '@aws-sdk/client-eventbridge'

export class EventBridgeService {

  private client: EventBridgeClient

  constructor(

  ) {
    this.client = new EventBridgeClient()
  }

  async putEvent(
    busName: string, 
    source: string,
    detailType: string,
    detail: string
  ) {
      const input: PutEventsCommandInput = {
        Entries: [
          {
            Source: source,
            DetailType: detailType,
            Detail: detail,
            EventBusName: busName
          }
        ]
      } 
    
      const command: PutEventsCommand = new PutEventsCommand(input);
    
      const response = await this.client.send(command);
    
      return response
  }
}