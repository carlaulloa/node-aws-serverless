export const register = async(event) => {
  console.log('Appointment-PE',event)
  //throw new Error('Error in appointment pe') // test dlq
  return {
    statusCode: 200,
    body: JSON.stringify(event)
  }
}