'use client'

import React from 'react'

import classes from './index.module.scss'
import { Category, Media } from '../../../../payload/payload-types'
import Link from 'next/link'

const CategoryCard = ({ title, media,  }: Category) => {
  const mediaUrl = media as Media

  return (
    <Link
      href={'/products'}
      className={classes.card}
      style={{ backgroundImage: `url(${mediaUrl?.url})` }}
    >
      <p className={classes.title}>{title}</p>
    </Link>
  )
}

export default CategoryCard
