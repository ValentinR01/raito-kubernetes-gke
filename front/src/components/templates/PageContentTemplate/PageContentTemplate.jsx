import React from 'react'
import PageContentTemplateStyle from './PageContentTemplate.style'

const PageContentTemplate = ({children}) => {
  return (
    <PageContentTemplateStyle>
      {children}
    </PageContentTemplateStyle>
  )
}

export default PageContentTemplate