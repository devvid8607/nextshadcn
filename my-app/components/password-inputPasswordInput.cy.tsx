import React from 'react'
import { PasswordInput } from './password-input'

describe('<PasswordInput />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PasswordInput />)
  })
})