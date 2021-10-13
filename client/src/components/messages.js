import { Container } from '@chakra-ui/layout'
import { Textarea } from "@chakra-ui/react"
import React from 'react'

function messages() {
    return (
        <Container className="message">
        <p className= 'messageSender'>userName</p>
           <Textarea isDisabled = "true" placeholder="">kldsjfaklsdjfklasdjfklasdjfklasdjf
               asdfklasdjflkasdjfla
               dsfjalksdfjlkasdfjlkasdjflkasd
           </Textarea>
        </Container>
    )
}

export default messages
