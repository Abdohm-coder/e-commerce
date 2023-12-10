'use client'

import { createContext, useContext, useState } from 'react'

export const INITIAL_FILTER_DATA = {
  categoryFilters: [],
  setCategoryFilters: () => {},
  sort: '',
  setSort: () => {},
}

interface IContextType {
  sort: string
  categoryFilters: string[]
  setSort: React.Dispatch<React.SetStateAction<string>>
  setCategoryFilters: React.Dispatch<React.SetStateAction<string[]>>
}

const FilterContext = createContext<IContextType>(INITIAL_FILTER_DATA)

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [categoryFilters, setCategoryFilters] = useState([])
  const [sort, setSort] = useState('-createdAt')
  return (
    <FilterContext.Provider value={{ sort, setSort, categoryFilters, setCategoryFilters }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => useContext(FilterContext)
