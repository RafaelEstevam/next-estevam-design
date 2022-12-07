import { GraphQLClient } from "graphql-request";

const HYGRAPH_PERMANENTAUTH_TOKEN = process.env.NEXT_PUBLIC_HYGRAPH_PERMANENTAUTH_TOKEN || '';
const HYGRAPH_URL = process.env.NEXT_PUBLIC_HYGRAPH_URL || '';
const HYGRAPH_URL_CRUD = process.env.NEXT_PUBLIC_HYGRAPH_CRUD || '';

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
      const isVoid = response && Object.keys(response).length === 0;
      if(!isVoid){
        return response.data
      }else{
        return false
      }
    }
    catch (err) {
      console.log('ERROR DURING FETCH REQUEST', err);
    }
};

export const PostApi = async (mutation: string, method: string) => {
  const hygraph = new GraphQLClient(HYGRAPH_URL_CRUD, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_CRUD_TOKEN}`,
    },
  });

  try {
    // const { createSubmission } = await hygraph.request(`
    //   mutation {
    //     createContactForm(data: {name:"teste", email:"teste@teste.com", subject: "teste", message:"teste"}) {
    //       id
    //       name
    //       email
    //       subject
    //       message
    //     }
    //   }`
    // );
    const {createSubmission} = await hygraph.request(mutation);
  } catch ({ message }) {
    console.log(message);
  }
};