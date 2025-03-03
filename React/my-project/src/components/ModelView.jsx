import React, { Suspense } from 'react'
import { PerspectiveCamera, view } from '@react-three/drei'
import Lights from './Lights'
const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationSize, size, itme}) => {




  return (
    <View
    index={index}
    id={gsapType}
    className={`border-2 border-red-500 w-full h-full ${index === 2} ? 'right-[-100% : '']`}
    >
        {/* Ambient */}
        <ambientLight intensity={0.3} />

        <PerspectiveCamera makeDefault position={[0, 0, 4]} />
        <Lights />

        <Suspense fallback={<div>Loading</div>} > 
        
        </Suspense>
    </View>
  )
}

export default ModelView
