'use client'

import React from 'react'

import classes from './index.module.scss'
import { Category, Media } from '../../../../payload/payload-types'
import Link from 'next/link'
import { useFilter } from '../../../_providers/Filter'

const CategoryCard = ({ title, media, id }: Category) => {
  const mediaUrl = media as Media

  const { setCategoryFilters } = useFilter()
  return (
    <Link
      href={'/products'}
      className={classes.card}
      style={{ backgroundImage: `url(${mediaUrl?.url})` }}
      onClick={() => setCategoryFilters([id])}
    >
      <p className={classes.title}>{title}</p>
    </Link>
  )
}

export default CategoryCard
