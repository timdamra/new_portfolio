import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const src = process.env.NODE_ENV === 'production' 
? 'https://cdn1.imggmi.com/uploads/2019/12/8/d73912e871086fcb903a9b47f0f52c6d-full.jpg' 
: '/public/images/pic.jpg'

export const CardComponent = () => (
  <Card>
    <Image src={src} wrapped ui={false} />
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
