import { SnsService } from "../services";

const snsService = new SnsService()

export const register = async(event) => {
  
  const variable = `SNS_APPOINTMENT`
  const snsResource = process.env[variable] || ''

  if (!snsResource) {
    const response = { message: 'SNS not found' }
    return {
      statusCode: 200,
      body: JSON.stringify(response)
    }
  }

  await snsService.publish(
    snsResource,
    event.body
  );

  return {
    statusCode: 200,
    body: 'Sent to ' + variable
  }
}