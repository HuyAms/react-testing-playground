import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import UserProfile from '../UserProfile'
import { buildUser } from '../../tests/mocks'

it('shows a user profile', () => {

    const nonAdminUser = buildUser({role: 'user'})

    console.log('nonAdminUser: ', nonAdminUser)

    render(<UserProfile user={nonAdminUser}/>)

    expect(screen.getByText(nonAdminUser.username)).toBeInTheDocument()
    expect(screen.getByText(nonAdminUser.email)).toBeInTheDocument()
    expect(screen.queryByRole('button', {name: /edit/i})).not.toBeInTheDocument()
})

it('admin can see Edit button', () => {

    const adminUser = buildUser({role: 'admin'})

    render(<UserProfile user={adminUser}/>)

    expect(screen.getByRole('button', {name: /edit/i})).toBeInTheDocument()
})