const HYGRAPH_PERMANENTAUTH_TOKEN = process.env.NEXT_PUBLIC_HYGRAPH_PERMANENTAUTH_TOKEN || '';
const HYGRAPH_URL = process.env.NEXT_PUBLIC_HYGRAPH_URL || '';

export const GetApi = async (query: string, method: string) => {
    try {
      const headers = {
        'content-type': 'application/json',
        'Authorization': `Bearer ${HYGRAPH_PERMANENTAUTH_TOKEN}`
      };
      const requestBody = {
        query: query,
      };
      const options = {
        method: method,
        headers,
        body: JSON.stringify(requestBody)
      };
      const response = await (await fetch(HYGRAPH_URL, options)).json();
      return response.data
    }
    catch (err) {
      console.log('ERROR DURING FETCH REQUEST', err);
    }
};