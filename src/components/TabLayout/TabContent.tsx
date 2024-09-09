import { ReactNode } from 'react'

interface ITabContent {
  children: ReactNode;
}

export const TabContent = ({ children }: ITabContent) => {
  return (
    <div>{children}</div>
  )
}
