import { EventBridgeService } from "../services";

const eventBridgeService = new EventBridgeService()

export const register = async(event) => {
  
  const variable = `EVENT_BUS_NAME`
  const eventBridgeResource = process.env[variable] || ''

  if (!eventBridgeResource) {
    const response = { message: 'Event Bridge not found' }
    return {
      statusCode: 200,
      body: JSON.stringify(response)
    }
  }

  await eventBridgeService.putEvent(
    eventBridgeResource,
    'appointment_mobile',
    'event_create_appointment',
    event.body
  );

  return {
    statusCode: 200,
    body: 'Sent to ' + variable
  }
}