'use client'

import React, { Fragment, useEffect, useState } from 'react'

import classes from './index.module.scss'

import { Settings } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { Button } from '../../../_components/Button'

export const LogoutPage: React.FC<{
  settings: Settings
}> = props => {
  const { settings } = props
  const { productsPage } = settings || {}
  const { logout } = useAuth()
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const performLogout = async () => {
      try {
        await logout()
        setSuccess('Logged out successfully.')
      } catch (_) {
        setError('You are already logged out.')
      }
    }

    performLogout()
  }, [logout])

  return (
    <Fragment>
      {(error || success) && (
        <div className={classes.wrapper}>
          <h1>{error || success}</h1>
          <p>{'What would you like to do next?'}</p>
          <div className={classes.actionBtn}>
            {typeof productsPage === 'object' && productsPage?.slug && (
              <Fragment>
                <Button href={`/${productsPage.slug}`} label="Shop" appearance="primary" />
              </Fragment>
            )}
            <Button href="/login" label="Login" appearance="secondary" />
          </div>
        </div>
      )}
    </Fragment>
  )
}
