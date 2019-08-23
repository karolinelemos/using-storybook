import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Repos from './index'

const stories = storiesOf('Repos', module)

stories.add('with title props', () => (
  <Repos
    title="Favoritos"
  />
))

stories.add('with repos', () => (
    <Repos 
        title="Favoritos"
        repos={[{
            link: 'https://github.com/karolinelemos/k-weather-app',
            name: 'Weather app'
        }]} 
    />
))
