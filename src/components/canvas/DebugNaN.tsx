// DebugNaN.tsx
import { useEffect } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

function hasNaN(a: ArrayLike<number>) {
  for (let i = 0; i < a.length; i++) if (!Number.isFinite(a[i])) return true;
  return false;
}

function validateGeometry(geo: THREE.BufferGeometry, path: string) {
  const pos = geo.attributes.position as THREE.BufferAttribute | undefined;

  if (!pos) {
    console.warn(`[R3F-DEBUG] ${path}: geometry has NO "position" attribute`);
    return;
  }
  const arr = pos.array as ArrayLike<number>;
  const len = arr?.length ?? 0;

  if (!arr || len === 0) {
    console.warn(`[R3F-DEBUG] ${path}: position array is EMPTY`);
    return;
  }
  if (len % 3 !== 0) {
    console.warn(
      `[R3F-DEBUG] ${path}: position length ${len} not multiple of 3`
    );
  }
  if (hasNaN(arr)) {
    console.error(`[R3F-DEBUG] ${path}: position contains NaN`);
  }
}

export default function DebugNaN() {
  const { scene } = useThree();

  useEffect(() => {
    scene.traverse((o) => {
      // Mesh / Points / Line -> toate pot avea geometrie
      // @ts-ignore
      const geo: THREE.BufferGeometry | undefined = o.geometry;
      if (geo) validateGeometry(geo, o.name || o.type);
    });
  }, [scene]);

  return null;
}
