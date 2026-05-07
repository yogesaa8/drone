import {
  OrbitControls,
  Environment,
  Float,
  Html,
  Center,
  Bounds,
  useGLTF,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function GlbDroneModel({ model }) {
  const group = useRef(null);
  const { scene } = useGLTF(model, true);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.25;
  });

  return (
    <Bounds fit clip margin={1.05}>
      <Center>
        <group ref={group} scale={1.15}>
          <primitive object={scene} />
        </group>
      </Center>
    </Bounds>
  );
}

function DroneModel({ variant = "raven-x1" }) {
  const group = useRef(null);
  const propsRef = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.25;
    propsRef.forEach((p) => {
      if (p.current) p.current.rotation.y += delta * 30;
    });
  });

  // Visual variations per drone
  const config = {
    "raven-x1": { body: "#3a4a2a", accent: "#9bbf5a", arm: 1.4, size: 1 },
    "falcon-m4": { body: "#2d3a2a", accent: "#c9b886", arm: 1.55, size: 1.05 },
    "viper-a7": { body: "#1f2620", accent: "#6b7d4a", arm: 1.3, size: 0.95 },
    "atlas-hl": { body: "#2a2a2a", accent: "#a8a890", arm: 1.75, size: 1.2 },
  }[variant] || { body: "#3a4a2a", accent: "#9bbf5a", arm: 1.4, size: 1 };

  const armPositions = [
    [config.arm, 0, config.arm],
    [-config.arm, 0, config.arm],
    [config.arm, 0, -config.arm],
    [-config.arm, 0, -config.arm],
  ];

  return (
    <group ref={group} scale={config.size}>
      {/* Center body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.6, 0.35, 1.1]} />
        <meshStandardMaterial
          color={config.body}
          metalness={0.6}
          roughness={0.4}
        />
      </mesh>

      {/* Top sensor */}
      <mesh position={[0, 0.28, 0]}>
        <cylinderGeometry args={[0.18, 0.22, 0.18, 16]} />
        <meshStandardMaterial
          color={config.accent}
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>

      {/* Camera gimbal */}
      <mesh position={[0, -0.28, 0.35]}>
        <sphereGeometry args={[0.18, 24, 24]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[0, -0.28, 0.5]}>
        <cylinderGeometry
          args={[0.08, 0.08, 0.08, 16]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <meshStandardMaterial
          color={config.accent}
          emissive={config.accent}
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Arms + motors + props */}
      {armPositions.map((pos, i) => {
        const len = Math.hypot(pos[0], pos[2]);
        const angle = Math.atan2(pos[2], pos[0]);
        return (
          <group key={i}>
            {/* arm */}
            <mesh
              position={[pos[0] / 2, 0, pos[2] / 2]}
              rotation={[0, -angle, 0]}
            >
              <boxGeometry args={[len, 0.1, 0.12]} />
              <meshStandardMaterial
                color="#1a1a1a"
                metalness={0.7}
                roughness={0.4}
              />
            </mesh>
            {/* motor */}
            <mesh position={[pos[0], 0.08, pos[2]]}>
              <cylinderGeometry args={[0.16, 0.16, 0.18, 16]} />
              <meshStandardMaterial
                color={config.accent}
                metalness={0.8}
                roughness={0.3}
              />
            </mesh>
            {/* prop */}
            <group ref={propsRef[i]} position={[pos[0], 0.2, pos[2]]}>
              <mesh>
                <boxGeometry args={[0.9, 0.02, 0.06]} />
                <meshStandardMaterial
                  color="#3a3a3a"
                  transparent
                  opacity={0.6}
                />
              </mesh>
              <mesh rotation={[0, Math.PI / 2, 0]}>
                <boxGeometry args={[0.9, 0.02, 0.06]} />
                <meshStandardMaterial
                  color="#3a3a3a"
                  transparent
                  opacity={0.6}
                />
              </mesh>
            </group>
            {/* landing leg */}
            <mesh position={[pos[0] * 0.6, -0.35, pos[2] * 0.6]}>
              <cylinderGeometry args={[0.025, 0.025, 0.4, 8]} />
              <meshStandardMaterial color="#0a0a0a" />
            </mesh>
          </group>
        );
      })}

      {/* Status LED */}
      <mesh position={[0.6, 0.2, 0]}>
        <sphereGeometry args={[0.04, 12, 12]} />
        <meshStandardMaterial
          color="#ff3a2a"
          emissive="#ff3a2a"
          emissiveIntensity={2}
        />
      </mesh>
    </group>
  );
}

function Loader() {
  return (
    <Html center>
      <div className="label-mono text-tactical text-[10px]">LOADING MODEL…</div>
    </Html>
  );
}

const DroneViewer = ({ variant, model }) => {
  return (
    <Canvas
      shadows
      camera={{ position: [3.5, 2.2, 4], fov: 38 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ touchAction: "none" }}
    >
      <color attach="background" args={["#0d0f0c"]} />
      <fog attach="fog" args={["#0d0f0c", 8, 18]} />

      <ambientLight intensity={0.35} />
      <directionalLight
        position={[5, 6, 3]}
        intensity={1.2}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-4, 2, -3]} intensity={0.6} color="#9bbf5a" />
      <pointLight position={[4, -2, 3]} intensity={0.4} color="#c9a84c" />

      <Suspense fallback={<Loader />}>
        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
          {model ? (
            <GlbDroneModel model={model} />
          ) : (
            <DroneModel variant={variant} />
          )}
        </Float>
        <Environment preset="warehouse" />
      </Suspense>

      {/* ground grid */}
      <gridHelper
        args={[20, 20, "#3a4a2a", "#1a1f15"]}
        position={[0, -0.6, 0]}
      />

      <OrbitControls
        makeDefault
        enableZoom
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        zoomSpeed={1.35}
        minDistance={1.2}
        maxDistance={12}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 1.9}
      />
    </Canvas>
  );
};

export default DroneViewer;
