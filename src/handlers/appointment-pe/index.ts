export const register = async(event) => {
  console.log('Appointment-PE',event)
  return {
    statusCode: 200,
    body: JSON.stringify(event)
  }
}