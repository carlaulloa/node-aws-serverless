export const register = async(event) => {
  console.log('Appointment-CO',event)
  return {
    statusCode: 200,
    body: JSON.stringify(event)
  }
}