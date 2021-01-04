import styled from '@emotion/styled/macro'
import {Dialog as ReachDialog} from '@reach/dialog'
import {keyframes} from '@emotion/core'
import {FaSpinner} from 'react-icons/fa'
import * as colors from 'styles/colors'
import * as mq from 'styles/media-queries'

const buttonVariants = {
  primary: {
    backgroundColor: colors.indigo,
    color: colors.base,
  },
  secondary: {
    backgroundColor: colors.gray,
    color: colors.text,
  },
}

const Button = styled.button(
  {
    padding: '5px 20px',
    border: 0,
    borderRadius: '4px',
  },
  ({variant = 'primary'}) => buttonVariants[variant],
)

const Input = styled.input({
  width: '300px',
  marginLeft: '10px',
})

const FormGroup = styled.div({
  display: 'flex',
  alignItems: 'center',
})

const CircleButton = styled.button({
  borderRadius: '30px',
  padding: '0',
  width: '40px',
  height: '40px',
  lineHeight: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'white',
  color: '#434449',
  border: `1px solid #f1f1f4`,
  cursor: 'pointer',
})

const Dialog = styled(ReachDialog)({
  maxWidth: '450px',
  borderRadius: '3px',
  paddingBottom: '3.5em',
  boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2)',
  margin: '20vh auto',
  [mq.small]: {
    width: '100%',
    margin: '10vh auto',
    backgroundColor: colors.indigo,
    color: colors.gray,
  },
})

const spin = keyframes({
  '0%': {transform: 'rotate(30deg)'},
  '100%': {transform: 'rotate(360deg)'},
})

const Spinner = styled(FaSpinner)({
  animation: `${spin} 2s infinite linear`,
})

export {CircleButton, Dialog, Button, Input, FormGroup, Spinner}
