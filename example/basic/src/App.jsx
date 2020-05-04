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
  const keys = [ 'App.hello', 'App.hello', 'App.hello' ];
  const label = keys.map((item) => {
    return intl.formatMessage({
      id:item,
      defaultMessage: 'Hello Button'
    })
  });
  return <button aria-label={label}>{label}</button>
}
