import React from 'react'
import PropTypes from 'prop-types'
import { Card, Icon, Image } from 'semantic-ui-react'

import LabelComponent from '../LabelComponent'

export const CardComponent = props => (
  <Card>
    {
      props.link ? (
        <a
            target="_blank" 
            rel="noopener noreferrer"
            href={props.link}
        >
          {props.imgIcon ? <i className={props.imgIcon}></i> : <Image src={props.pic} wrapped ui={false} />}
        </a> 
      ) : <Image src={props.pic} wrapped ui={false} />
    }
    <Card.Content>
      <Card.Header>{props.header}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.meta}</span>
      </Card.Meta>
      <Card.Description>
        {props.labelList &&
        props.labelList.length > 0 && 
        !props.description ? (
          props.labelList.map((label, idx) => {            
            return (
              <LabelComponent
                  color='teal'                    
                  label={label}
                  key={label + idx}
              />
            )
          })
        ) : props.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a className="card--center">
        <Icon name={props.icon} />        
      </a>
    </Card.Content>
  </Card>
)

CardComponent.propTypes = {
  pic: PropTypes.any,
  header: PropTypes.string,
  meta: PropTypes.string,
  icon: PropTypes.string,
  labelList: PropTypes.array,
  description: PropTypes.string,
  link: PropTypes.string,
  imgIcon: PropTypes.string
}

export default CardComponent
