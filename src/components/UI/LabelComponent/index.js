import React from 'react'
import PropTypes from 'prop-types'
import { Label } from 'semantic-ui-react'

export const LabelComponent = props => {
    const { color, label } = props

    return (
        <Label basic color={color}>
            {label}
        </Label>
    )
}

LabelComponent.propTypes = {
    color: PropTypes.string,
    label: PropTypes.string
}

export default LabelComponent
