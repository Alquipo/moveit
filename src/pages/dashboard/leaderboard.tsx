import Head from 'next/head'
// import { useEffect } from 'react';
import SideBar from 'components/SideBar'
import styled from 'styled-components'
import axios from 'axios'
import UserGithub from 'components/UserGithub'
import { useEffect, useState } from 'react'

const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: row;
  @media (max-width: 720px) {
    flex-direction: column;
  }
  transition: all 0.2s;
`

const Content = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;

  overflow-y: auto;
  > h1 {
    color: ${({ theme }) => theme.colors.title};
    font-size: 2.8rem;
  }
  .ranking {
    flex: 1;
    margin-top: 2.5rem;
    .ranking-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.5rem;
      > strong {
        color: ${({ theme }) => theme.colors.text};
        font-weight: bold;
      }
      > div:first-child {
        font-size: 0.875rem;
        text-transform: uppercase;
        > strong {
          margin-right: 2.18rem;
        }
      }
      > div:last-child {
        font-size: 0.875rem;
        text-transform: uppercase;

        > strong {
          margin-left: 12rem;
        }
      }
    }
    .ranking-list {
      flex: 1;
    }
  }
`

export default function Leaderboard() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('/api/user').then((response) => {
      setUsers(response.data.users)
    })
  }, [])

  return (
    <Container>
      <Head>
        <title>Ranking | move.it</title>
      </Head>
      <SideBar />
      <Content>
        <h1>Ranking geral</h1>

        <div className="ranking">
          <div className="ranking-title">
            <div>
              <strong>Posição</strong>
              <strong>Usuário</strong>
            </div>
            <div>
              <strong>Desafios</strong>
            </div>
          </div>
          <div className="ranking-list">
            {users.map((user, i) => (
              <UserGithub key={user._id} position={i} user={user} />
            ))}
          </div>
        </div>
      </Content>
    </Container>
  )
}
