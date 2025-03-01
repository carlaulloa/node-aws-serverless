export const register = async(event) => {
  console.log('help-desk',event)
  return {
    statusCode: 200,
    body: JSON.stringify(event)
  }
}