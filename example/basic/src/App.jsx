import React from 'react'
import { injectIntl, useIntl } from 'react-intl'

export const SubmitButton = injectIntl(({ intl }) => {
  const label = intl.formatMessage({
    id: 'App.submit',
    defaultMessage: 'Submit Button'
  })
  return <button aria-label={label}>{label}</button>
})

export const HelloButton = () => {
  const intl = useIntl();
  const id = 'App.hello';
  const label = intl.formatMessage({
    id,
    defaultMessage: 'Hello Button'
  })
  return <button aria-label={label}>{label}</button>
}
