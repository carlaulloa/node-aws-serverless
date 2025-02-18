import { InvocationType, InvokeCommand, InvokeCommandInput, LambdaClient } from '@aws-sdk/client-lambda'

export class LambdaService {

  private client: LambdaClient

  constructor(

  ) {
    this.client = new LambdaClient()
  }

  async invoke(
    functionName: string, 
    invocationType: InvocationType | undefined, 
    payload: string
  ) {
      const input: InvokeCommandInput = {
        InvocationType: invocationType,
        FunctionName: functionName, // physical identifier
        Payload: payload
      } 
    
      const command: InvokeCommand = new InvokeCommand(input);
    
      const response = await this.client.send(command);
    
      const strPayload = response.Payload?.transformToString() || '{}'
      const responsePayload = JSON.parse(strPayload)

      return responsePayload
  }
}