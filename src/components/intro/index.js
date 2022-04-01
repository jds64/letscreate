import styled from 'styled-components'
import Logo from './logo'
import Footer from '../footer'

import { useState } from 'react'
import ShopOnEtsy from './shopOnEtsy'

const Stage = styled.div`
  display: grid;
  grid-template-columns: minmax(128px, 1fr) minmax(128px, 1fr);
  grid-gap: 16px;
  min-height: 100vh;
  width: 100%;

  background: #006AAC;
  color: white;
  font-family: classico-urw, sans-serif;

  @media screen and (max-width: 800px) {
    grid-template-columns: none;
    grid-template-rows: 512px 1fr;
  }

  @media screen and (max-width: 600px) {
    grid-template-rows: 360px 1fr;
  }
`

const Section = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0px 24px;

  p {
    font-size: 24px;
  }
`;

const LocalContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 32px 24px;
`

const CustomForm = styled.form`
  display: block;
  margin-bottom: 32px;
  div {
    margin: 8px 0px;
  }
`;

const FormLabel = styled.label`
  display: block;
  font-size: 14px;
  opacity: 0.33;
`;

const FormInput = styled.input`
  display: block;
  min-width: 240px;
  border: 1px solid #0004;
  border-radius: 6px;
  padding: 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 16px;

  &:focus {
    outline: 3px solid #09f5;
  }
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  min-height: 144px;
  border: 1px solid #0004;
  padding: 8px 10px;
  border-radius: 6px;
  margin-top: 1px;
  margin-bottom: 16px;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;

  &:focus {
    outline: 3px solid #09f5;
  }

  &::-webkit-resizer {
    background: url(/images/webkit-handler.png);
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
  }

  &::placeholder {
    color: #bbb;
  }
`;

const SubmitButton = styled.button`
  padding: 6px 12px;
  font-size: 16px;
  font-family: classico-urw, sans-serif;
  border-radius: 6px;
  border: 1px solid #0002;
  box-shadow: 0px 1px 0px #0002;
  background-color: #f5f5f5;
  cursor: pointer;

  &:active {
    box-shadow: none;
    transform: translateY(1px);
  }
`;

export default function Intro() {

  const [formIsSent, setFormSent] = useState(false)

  const formSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    }

    setFormSent(true)
  }

  return (
    <div>
      <Stage>
        <Section>
          <Logo width={512} height={512} />
        </Section>
        <Section>
          <div>
            <p>At Let's Create, we offer a wide range of unique, high-quality gifts suitable for all occasions.</p>
            <p>We employ cutting-edge technology and intimate craftsmanship for our designs, paired with only the finest responsibly sourced materials, to create the best product for you: <em>the customer.</em></p>
            <p>Our team has over 40 years' collective, accredited experience across creative and technical fields which enables us to provide an exceptional service in a reasonable time-frame.</p>
            <p>We aim to offer a memorable gifting experience - from the unboxing to the product itself, it's all part of the magic.</p>
            <p>We hope you like our shop, but if you have any questions or requests, don't hesitate to contact us via the form below, or email <strong>letscreate1974@gmail.com</strong></p>
            <ShopOnEtsy />
          </div>
        </Section>
      </Stage>
      <LocalContainer style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '100%' }}>
          {!formIsSent? 
          <>
            <h1 style={{ fontFamily: 'classico-urw, sans-serif', color: '#006AAC' }}>Get in Touch</h1>
            <CustomForm id="x" onSubmit={formSubmit}>
              <div>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormInput id="name" type="text" autoComplete="name" required />
              </div>
              <div>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput id="email" type="email" autoComplete="email" required />
              </div>
              <div>
                <FormLabel htmlFor="">Message</FormLabel>
                <TextArea id="message" form="x" placeholder="Message..." required />
                <SubmitButton type="submit">Send Message</SubmitButton>
              </div>
            </CustomForm>
          </>:
            <>
              <div style={{ fontFamily: 'classico-urw, sans-serif', padding: '64px 0px', margin: 'auto', textAlign: 'center' }}>
                <h1 style={{ textAlign: 'center' }}>Thank you! We'll get back to you as soon as possible.</h1>
              </div>
            </>
            }
          <div class="mapouter" style={{ margin: 'auto', textAlign: 'center' }}>
            <div class="gmap_canvas">
              <style jsx>{`
                iframe {
                  width: 100%;
                  height: 200px;
                }
              `}</style>
              <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=90%20High%20Street%20Strood,%20ME2%204TP&t=k&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" />
              <br/>
              <style jsx>{`.mapouter{position:relative;text-align:right;height:500px;width:500px;}`}</style>
              <style jsx>{`.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:500px;}`}</style>
            </div>
          </div>
        </div>
      </LocalContainer>
      <Footer />
    </div>
  )
}