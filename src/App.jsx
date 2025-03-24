import React from 'react'
import CustomerRegistration from './sections/CustomerRegistration'
import Login from './sections/Login'
import CreateAccount from './sections/CreateAccount';
import { handleLogin } from "./components/auth";
import LoanApplication from './sections/LoanApplication';

const App = () => {
  return (
    <main className="relative">
    <section className='padding'><CustomerRegistration/></section>
    <section className='padding'><Login handleLogin={handleLogin}/></section>
    <section className="padding"><CreateAccount/></section>
    <section className='padding-x'><LoanApplication/></section>
    </main>
  )
}

export default App