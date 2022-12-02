import { GetStaticProps } from "next";
import { useEffect, useState } from "react";

const HYGRAPH_PERMANENTAUTH_TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Njk5MTgzNjAsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2xiNWRlZzhiMDNkdjAxdWszMXFjY24xay9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNGQ5ZDAyM2EtMjVkNi00MzZiLWI1MjktNjgxMDQ1NGUwOTBjIiwianRpIjoiY2xiNWU5eDUyMDRoczAxdDVkbGZoNTd1MSJ9.FsTWov9a7MJUTBMqr92qsFfXZCQvu7nJhY2BKOR9Ssq6H3yoPiMORoTt24X7J-5zCYAKAqxgi6kjEzcQUQWl1R9R110eM1lUcRqv0BvafEcvK1nXG3126x4HLrlKgtLVkn0RKVixy_JhBpFwphODmQ7YOoHmTDPu7b2hPzK134H1pdoH9oKXpqoJKo0AlcnDlnOTUxvbcWjxNesw7mbWFk0MFXM9x--ynSvhZseCsMvvUTTKWIvYHc8FvU4qy7DEGNoDcgp-SVy4fHGpYpxfrO5tt9cIcKE7xEayZRovPWaZeMLKDvp4L6g47fzYzjaPDYH9UpkYuo2lTHc0W6d9SaZYguip3wyzxGI_bMhs1j3Yi2jfJzVHZTzQIKytESPAs68R2w0sH6SfCGuLf4-ldQVuMw-Xgjp5b5DAWkvM-kE3b_ibukclhRpSc-59tTpxVm3fpiDcwgvdhHHwsrW39phuRYTaNbue1lC9BXh6DhJz5ezcIqLbH3Jt7qkr37Pq54XSMVe2dxoO6Hq_JFHaMnMQgSgHLwxq9jF1oGeR49RaNKhcnUw6UCxjEjYOe_b0wraTSwzRsw_mi7Nu4T00luao1ukT6AvHvtfkTwtIYABGm9eDOU9zanYfmDJ7Znmsn4Y0jMMQGIyCwsA0E6Wp_kH1qRQWJwsAvT_y9NiigKs'
const HYGRAPH_URL = 'https://sa-east-1.cdn.hygraph.com/content/clb5deg8b03dv01uk31qccn1k/master'

interface Player{
    id: Number | undefined,
    name: String
}

type PlayerListProps = {
    players: Player[];
}

const PlayersListPage = (props: PlayerListProps) =>{
    const {players} = props;

    return (
        <>
            <div>
                <h1>Jogadores disponíveis</h1>
            </div>
            <ul>
                {players.map((item:Player, key) => {
                    return (
                        <li key={key}>{item.name}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default PlayersListPage;

export const getStaticProps: GetStaticProps =  async (context) =>{
    const getUserDetailByFetchAPICall = async () => {
        try {
          const headers = {
            'content-type': 'application/json',
            'Authorization': `Bearer ${HYGRAPH_PERMANENTAUTH_TOKEN}`
          };
          const requestBody = {
            query: `query {
                players {
                    id
                    name
                    country
                }
            }`,
          };
          const options = {
            method: 'POST',
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

    const {players} = await getUserDetailByFetchAPICall();

    return {
        props: {
            players: players
        }
    }
}