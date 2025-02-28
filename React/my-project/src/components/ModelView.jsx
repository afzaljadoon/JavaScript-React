import React from 'react'
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
    </View>
  )
}

export default ModelView
