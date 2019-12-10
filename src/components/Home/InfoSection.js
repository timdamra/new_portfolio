import React from 'react'
import PropTypes from 'prop-types'

export const InfoSection = props => {
    const { renderProps } = props

    return (
        <section>
            {
                renderProps.length > 0 &&
                renderProps.map(prop => {
                    if (prop instanceof Function) {
                                                
                        return prop()
                    }

                    return null
                })
            }
        </section>
    )
}

InfoSection.propTypes = {
    renderProps: PropTypes.array
}

export default InfoSection
