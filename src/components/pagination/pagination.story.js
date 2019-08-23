import React from 'react'
import { storiesOf } from '@storybook/react'

import Pagination from './index'

const stories = storiesOf('Pagination', module)

stories.add('without props', () => (
  <Pagination />
))

stories.add('with total', () => (
    <Pagination total={10} />
))

stories.add('with activePage', () => (
    <Pagination total={10} activePage={5} />
))

stories.add('with pageLink', () => (
    <Pagination total={10} pageLink='http://mypage.com/page/%page%'/>
))

stories.add('with callback', () => (
    <Pagination 
        total={10} 
        activePage={5} 
        pageLink='http://mypage.com/page/%page%'
        onClick={(page) => window.alert(page)} />
))