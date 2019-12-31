import React from 'react'
import { Image } from 'semantic-ui-react'

import myImg from 'public/images/my_img.jpg'

export const MyImage = () => (
    <Image src={myImg} size="medium" />
)

export default MyImage
