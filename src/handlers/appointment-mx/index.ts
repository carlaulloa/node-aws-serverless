export const register = async(event) => {
  console.log('Appointment-MX',event)
  return {
    statusCode: 200,
    body: JSON.stringify(event)
  }
}