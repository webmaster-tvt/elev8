import React, { useEffect } from 'react'

import { fetchPosts, toggleMenu, logoutHandler } from '@store/actions'
import { RootState, useAppDispatch, useAppSelector } from '@store'

import { Intro, Container } from '@components'
import { EditProfile } from './profileedit'
import { ProfileInfo } from './profileinfo'

export const Profile: React.FC = () => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state: RootState) => state)

  useEffect(() => {
    fetchPosts('http://localhost:3000/api/posts/')
  }, [])

  const closeMenu = async () => {
    dispatch(toggleMenu())
  }

  return (
    <div className='bg-white'>
      <header className='pt-4 pb-6 sticky top-0 z-50 '>
        <Container>
          <Intro title='Profile' />
          <div className="flex justify-end items-center">
            <div onClick={closeMenu} className="cursor-pointer" >[CLOSE]
            </div>
          </div>
        </Container>
        {/* <Alert preview={preview} /> */}
      </header>
      <main className="min-h-screen">
        <Container>
        {user.profile.edit
          ? <EditProfile />
          : <ProfileInfo />
        }
        <div className="flex justify-center items-center">
          <div onClick={logoutHandler} className="cursor-pointer" >[LOG OUT]
          </div>
        </div>
        </Container>
      </main>
      <footer className="border-b bg-accent-1 border-accent-2">
        <div className="container mx-auto px-5">
          <p className="py-2 text-center text-sm">The source code for this blog is <a href="https://github.com/mistertaavetti/next-bootstrap" className="underline hover:text-success duration-200 transition-colors">available on GitHub</a>.</p>
        </div>
      </footer>
    </div>
  )
}
