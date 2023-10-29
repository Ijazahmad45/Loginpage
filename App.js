
import React from 'react'
import Container from './src/components/container'
import Button from './src/components/button'
import Checkbox from './src/components/Checkbox'
import CheckboxContainer from './src/components/CheckboxContainer'
import CheckboxText from './src/components/CheckboxText'
import CheckboxLabel from './src/components/CheckboxLabel'
import FormContainer from './src/components/FormContainer'
import Image from './src/components/Image'
import Input from './src/components/Input'
import InputContainer from './src/components/InputContainer'
import InputLabel from './src/components/InputLabel'
import LeftColumn from './src/components/LeftColumn'
import LoginButton from './src/components/LoginButton'

import PasswordInput from './src/components/PasswordInput'
import RegisterText from './src/components/RegisterText'
import RightColumn from './src/components/RightColumn'
import TermsText from './src/components/TermsText'
import Title from './src/components/Title'

 function App() {
  return (
    <div className='app'>
            <Container>
              <LeftColumn >
                <Image
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4518aec0-20ca-470a-a243-76294bf6fe83?apiKey=d68ce86b2a6247f1a46eccd4168b2ff5&"
                />
              </LeftColumn>
              <RightColumn>
                <FormContainer>
                  <Title>Login</Title>
                  <InputContainer>
                  <InputLabel>Login ID</InputLabel> 
                  <Input  placeholder="Enter Login ID" />
                    
                  </InputContainer>
                  <InputContainer>
                    <InputLabel>Password</InputLabel>
                    <PasswordInput placeholder="Enter Password" />
                  </InputContainer>
                  <CheckboxContainer>
                    <CheckboxLabel>
                      <Checkbox />
                      <CheckboxText>Remember Me</CheckboxText>
                    </CheckboxLabel>
                    <TermsText>
                    <Checkbox />
                      <span style={{marginLeft:'5px'}}><span style={{ color: "rgba(115,123,134,1)" }}>Agree to </span>
                      <span style={{ color: "rgba(247,135,25,1)" }}>
                        Terms & Conditions
                      </span></span>
                    </TermsText>
                  </CheckboxContainer>
                  <Button>Change Password</Button>
                  
                <RegisterText>
               <div>
               <LoginButton>Login</LoginButton>
                  <span>
                    Don’t have an account?{" "}
                  </span>
                  <span style={{ fontWeight: 700, color: "rgba(4,7,47,1)" }}>
                    {" "}
                  </span>
                  <span style={{ fontWeight: 700, color: "rgba(247,135,25,1)" }}>
                    Register Here
                  </span>
               </div>
        
          </RegisterText> 
                </FormContainer>
                {/* */}
      </RightColumn>
    </Container>
     </div>
  )
}

export default App;