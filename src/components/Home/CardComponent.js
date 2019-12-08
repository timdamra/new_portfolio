import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import myPic from '../../../public/images/pic.jpg'

export const CardComponent = () => (
  <Card>
    <Image src={myPic} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Hatim Damra</Card.Header>
      <Card.Meta>
        <span className='date'>JavaScript/React Enthusiast</span>
      </Card.Meta>
      <Card.Description>
        software dev.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a className="home__grid__card--center">
        <Icon name='code' />        
      </a>
    </Card.Content>
  </Card>
)

export default CardComponent
