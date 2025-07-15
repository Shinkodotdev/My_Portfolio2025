import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Room(props) {
  const { nodes, materials } = useGLTF('/models/Room.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={[2, 1.55, 2]}>
        <mesh geometry={nodes.Object_6.geometry} material={materials.Painted_Plaster_Wall} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Wood_Floor} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Dark_wood} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['Material.038']} />
      </group>
      <group position={[-1.244, -0.716, -1.388]}>
        <mesh geometry={nodes.Object_13.geometry} material={materials.Dark_wood} />
        <mesh geometry={nodes.Object_14.geometry} material={materials['Material.012']} />
      </group>
      <group position={[-0.916, -0.947, -1.777]}>
        <mesh geometry={nodes.Object_16.geometry} material={materials['Material.039']} />
        <mesh geometry={nodes.Object_17.geometry} material={materials['Material.035']} />
        <mesh geometry={nodes.Object_18.geometry} material={materials['Material.036']} />
      </group>
      <group scale={[2, 1.55, 2]}>
        <mesh geometry={nodes.Object_22.geometry} material={materials.Painted_Plaster_Wall} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.Wood_Floor} />
        <mesh geometry={nodes.Object_24.geometry} material={materials['Material.023']} />
        <mesh geometry={nodes.Object_25.geometry} material={materials['Material.047']} />
        <mesh geometry={nodes.Object_26.geometry} material={materials['Glass.001']} />
      </group>
      <group position={[-0.915, -0.623, -1.659]} rotation={[-2.021, 0, 0]}>
        <mesh geometry={nodes.Object_28.geometry} material={materials['Material.048']} />
        <mesh geometry={nodes.Object_29.geometry} material={materials['Material.043']} />
        <mesh geometry={nodes.Object_30.geometry} material={materials['Material.040']} />
        <mesh geometry={nodes.Object_31.geometry} material={materials['Material.042']} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.Glass} />
        <mesh geometry={nodes.Object_33.geometry} material={materials['Material.049']} />
        <mesh geometry={nodes.Object_34.geometry} material={materials['Material.050']} />
        <mesh geometry={nodes.Object_35.geometry} material={materials['screen.002']} />
      </group>
      <group position={[-1.199, -0.7, -1.625]} rotation={[-Math.PI, 1.097, 0]}>
        <mesh geometry={nodes.Object_37.geometry} material={materials.Plastic_Black_3} />
        <mesh geometry={nodes.Object_38.geometry} material={materials['Material.040']} />
        <mesh geometry={nodes.Object_39.geometry} material={materials['Material.042']} />
        <mesh geometry={nodes.Object_40.geometry} material={materials['Material.043']} />
        <mesh geometry={nodes.Object_41.geometry} material={materials.Glass_0} />
        <mesh geometry={nodes.Object_42.geometry} material={materials['Material.045']} />
        <mesh geometry={nodes.Object_43.geometry} material={materials['Material.046']} />
        <mesh geometry={nodes.Object_44.geometry} material={materials['Material.003']} />
      </group>
      <group position={[-0.699, -0.693, -1.477]} scale={[0.024, 0.026, 0.031]}>
        <mesh geometry={nodes.Object_52.geometry} material={materials['Material.044']} />
        <mesh geometry={nodes.Object_53.geometry} material={materials['Material.051']} />
        <mesh geometry={nodes.Object_54.geometry} material={materials['Material.053']} />
        <mesh geometry={nodes.Object_55.geometry} material={materials['Material.054']} />
        <mesh geometry={nodes.Object_56.geometry} material={materials['logo.001']} />
      </group>
      <group position={[-0.916, -0.414, -1.71]}>
        <mesh geometry={nodes.Object_60.geometry} material={materials['Material.037']} />
        <mesh geometry={nodes.Object_61.geometry} material={materials['screen.002_0']} />
      </group>
      <group position={[-1.138, 0.582, -1.746]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_63.geometry} material={materials['Material.014']} />
        <mesh geometry={nodes.Object_64.geometry} material={materials['Material.015']} />
        <mesh geometry={nodes.Object_65.geometry} material={materials['Material.016']} />
        <mesh geometry={nodes.Object_66.geometry} material={materials['Material.036']} />
      </group>
      <group position={[-1.511, -0.672, -1.568]} rotation={[0.414, 0.387, -0.164]} scale={0.007}>
        <mesh geometry={nodes.Object_68.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Object_69.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-1.544, -0.497, -1.642]} rotation={[0, 0.419, 0]} scale={[0.817, 0.875, 0.817]}>
        <mesh geometry={nodes.Object_71.geometry} material={materials['Material.025']} />
        <mesh geometry={nodes.Object_72.geometry} material={materials['Material.025']} />
        <mesh geometry={nodes.Object_73.geometry} material={materials['Material.025']} />
        <mesh geometry={nodes.Object_74.geometry} material={materials['screen.002']} />
        <mesh geometry={nodes.Object_75.geometry} material={materials['Material.027']} />
        <mesh geometry={nodes.Object_76.geometry} material={materials['Material.028']} />
        <mesh geometry={nodes.Object_77.geometry} material={materials['Material.029']} />
        <mesh geometry={nodes.Object_78.geometry} material={materials['Material.030']} />
        <mesh geometry={nodes.Object_79.geometry} material={materials['Material.031']} />
        <mesh geometry={nodes.Object_80.geometry} material={materials['Material.034']} />
        <mesh geometry={nodes.Object_81.geometry} material={materials['sticker.001']} />
        <mesh geometry={nodes.Object_82.geometry} material={materials['Material.032']} />
        <mesh geometry={nodes.Object_83.geometry} material={materials['stciker-i.001']} />
        <mesh geometry={nodes.Object_84.geometry} material={materials['Material.033']} />
        <mesh geometry={nodes.Object_85.geometry} material={materials['Material.010']} />
      </group>
      <group position={[-1.003, -0.691, -1.49]} rotation={[0.062, 0, 0]} scale={[0.064, 0.002, 0.01]}>
        <mesh geometry={nodes.Object_87.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.Object_88.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Object_89.geometry} material={materials['Material.011']} />
      </group>
      <group position={[-1.342, -0.306, -1.662]} rotation={[-0.848, -1.143, -0.83]} scale={1.85}>
        <mesh geometry={nodes.Object_93.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Object_94.geometry} material={materials.Animal_Grey_Vinyl} />
        <mesh geometry={nodes.Object_95.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Object_96.geometry} material={materials['logo.001']} />
      </group>
      <group position={[-1.365, -0.624, -1.667]} rotation={[0.414, 0.387, -0.164]} scale={[0.175, 0.17, 0.122]}>
        <mesh geometry={nodes.Object_98.geometry} material={materials['Material.032']} />
        <mesh geometry={nodes.Object_99.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Object_100.geometry} material={materials['Material.036']} />
      </group>
      <group position={[-1.653, -1.248, 1.847]} scale={0.147}>
        <mesh geometry={nodes.Object_102.geometry} material={materials['Material.038']} />
        <mesh geometry={nodes.Object_103.geometry} material={materials.White_Wood} />
        <mesh geometry={nodes.Object_104.geometry} material={materials.AR3DMat_Procedural_Realistic_Mirror} />
      </group>
      <group position={[-0.896, -0.947, -1.756]} scale={0.976}>
        <mesh geometry={nodes.Object_106.geometry} material={materials['Material.036']} />
        <mesh geometry={nodes.Object_107.geometry} material={materials['Material.034']} />
      </group>
      <group position={[-0.853, -0.723, -0.924]} rotation={[0, -1.201, 0]} scale={[0.185, 0.172, 0.185]}>
        <mesh geometry={nodes.Object_109.geometry} material={materials['Material.013']} />
        <mesh geometry={nodes.Object_110.geometry} material={materials['Material.024']} />
        <mesh geometry={nodes.Object_111.geometry} material={materials['Material.026']} />
      </group>
      <group position={[-1.619, -0.693, -1.019]} rotation={[Math.PI, -1.186, Math.PI]} scale={[0.075, 0.014, 0.054]}>
        <mesh geometry={nodes.Object_115.geometry} material={materials['Material.021']} />
        <mesh geometry={nodes.Object_116.geometry} material={materials['Material.022']} />
      </group>
      <group position={[-1.522, -0.675, -0.925]} rotation={[0, -0.385, -0.242]} scale={[0.075, 0.014, 0.054]}>
        <mesh geometry={nodes.Object_118.geometry} material={materials['Material.021']} />
        <mesh geometry={nodes.Object_119.geometry} material={materials['Material.020']} />
      </group>
      <group position={[-0.632, -0.689, -1.617]} rotation={[0, -0.704, 0]} scale={[0.075, 0.014, 0.054]}>
        <mesh geometry={nodes.Object_121.geometry} material={materials['Material.021']} />
        <mesh geometry={nodes.Object_122.geometry} material={materials['Material.041']} />
      </group>
      <group position={[1.248, -1.147, -0.71]} scale={[0.75, 0.1, 1]}>
        <mesh geometry={nodes.Object_126.geometry} material={materials.Mattress_02} />
        <mesh geometry={nodes.Object_127.geometry} material={materials.Checker_blanket} />
        <mesh geometry={nodes.Object_128.geometry} material={materials.Dark_Brown_Leather} />
      </group>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Painted_Plaster_Wall} scale={[2, 1.55, 2]} />
      <mesh geometry={nodes.Object_11.geometry} material={materials['Material.052']} position={[-0.915, -0.623, -1.659]} rotation={[-2.021, 0, 0]} />
      <mesh geometry={nodes.Object_20.geometry} material={materials['Material.019']} position={[-1.782, 0.83, 0.093]} rotation={[0, 0, Math.PI / 2]} scale={[0.014, 0.574, 0.574]} />
      <mesh geometry={nodes.Object_46.geometry} material={materials.Cloth_Fabric} position={[1.513, -0.951, -0.863]} rotation={[0, -0.558, 0]} scale={[0.333, 0.36, 0.226]} />
      <mesh geometry={nodes.Object_48.geometry} material={materials.Cloth_Fabric} position={[1.35, -0.952, -1.481]} rotation={[0.341, -0.008, 0.007]} scale={[0.317, 0.342, 0.215]} />
      <mesh geometry={nodes.Object_50.geometry} material={materials['Material.005']} position={[-0.95, -0.705, -1.481]} scale={[0.089, 0.089, 0.113]} />
      <mesh geometry={nodes.Object_58.geometry} material={materials['Material.036']} position={[-0.936, -0.947, -1.756]} scale={0.976} />
      <mesh geometry={nodes.Object_91.geometry} material={materials['Material.007']} position={[-1.382, -0.371, -1.638]} rotation={[0.601, 0.554, 0.76]} scale={0.005} />
      <mesh geometry={nodes.Object_113.geometry} material={materials['Material.017']} position={[0, -1.414, 0.424]} />
      <mesh geometry={nodes.Object_124.geometry} material={materials['Material.055']} position={[1.264, -0.63, -0.662]} scale={0.643} />
    </group>
  )
}
useGLTF.preload('/models/Room.glb')
