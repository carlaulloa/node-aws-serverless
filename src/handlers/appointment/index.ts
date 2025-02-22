import { SnsService } from "../services";
import { DataSourceService } from '../services/data-source';

const snsService = new SnsService()

export const register = async(event) => {
  console.log('appointment', event)
  const responseBody = DataSourceService.getDataSource(event)
  console.log(responseBody)

  const variable = `SNS_APPOINTMENT`
  const snsResource = process.env[variable] || ''

  if (!snsResource) {
    const response = { message: 'SNS not found' }
    return {
      statusCode: 200,
      body: JSON.stringify(response)
    }
  }

  if (!responseBody?.body) {
    return {
      statusCode: 200,
      body: 'Body is null'
    }
  }

  await snsService.publish(
    snsResource,
    JSON.stringify(responseBody.body)
  );

  return {
    statusCode: 200,
    body: 'Sent to ' + variable
  }
}