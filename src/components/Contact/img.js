import React from 'react'
import { Image } from 'semantic-ui-react'

import myImg from 'public/images/my_img.jpg'

export const MyImage = () => (
    <Image src={myImg} size="medium" style={{ width: '80%', maxHeight: '400px', margin: '0 auto' }} />
)

export default MyImage
