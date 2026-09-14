import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Sparkles, Shield, Maximize2 } from 'lucide-react';

export const ThreeDCore: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [modelType, setModelType] = useState<'kettlebell' | 'plate' | 'dumbbell'>('kettlebell');
  const [isRotating, setIsRotating] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    let width = container.clientWidth;
    let height = container.clientHeight || 450;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1, 5.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const mainSpot = new THREE.SpotLight(0xf5f5f5, 12);
    mainSpot.position.set(5, 8, 5);
    mainSpot.angle = Math.PI / 4;
    mainSpot.penumbra = 0.8;
    mainSpot.castShadow = true;
    scene.add(mainSpot);

    const rimLight = new THREE.DirectionalLight(0xa0a5b5, 5);
    rimLight.position.set(-6, -2, -4);
    scene.add(rimLight);

    const topColdLight = new THREE.PointLight(0xddeeff, 4, 12);
    topColdLight.position.set(0, 4, 2);
    scene.add(topColdLight);

    // Group for objects
    const artifactGroup = new THREE.Group();
    scene.add(artifactGroup);

    // Materials
    const darkCastIron = new THREE.MeshStandardMaterial({
      color: 0x18181a,
      roughness: 0.65,
      metalness: 0.85,
    });

    const polishedSteel = new THREE.MeshStandardMaterial({
      color: 0x8e8e96,
      roughness: 0.28,
      metalness: 0.95,
    });

    const brassAccent = new THREE.MeshStandardMaterial({
      color: 0xc8a86b,
      roughness: 0.35,
      metalness: 0.8,
    });

    const whiteChalk = new THREE.MeshStandardMaterial({
      color: 0xe8e8e5,
      roughness: 0.95,
      metalness: 0.05,
    });

    // Builder Functions
    const buildKettlebell = () => {
      artifactGroup.clear();
      const kbGroup = new THREE.Group();

      // Main heavy spherical bell (flattened bottom)
      const bellGeo = new THREE.SphereGeometry(1.25, 48, 48);
      const bell = new THREE.Mesh(bellGeo, darkCastIron);
      bell.scale.set(1, 0.92, 1);
      bell.castShadow = true;
      bell.receiveShadow = true;
      kbGroup.add(bell);

      // Handle (Torus with cut-off or cylinder arcs)
      const handleCurve = new THREE.CylinderGeometry(0.14, 0.14, 1.4, 32);
      const handleTop = new THREE.Mesh(handleCurve, polishedSteel);
      handleTop.rotation.z = Math.PI / 2;
      handleTop.position.set(0, 1.85, 0);
      handleTop.castShadow = true;
      kbGroup.add(handleTop);

      // Handle uprights
      const postLeft = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.15, 0.9, 24), polishedSteel);
      postLeft.position.set(-0.65, 1.45, 0);
      postLeft.rotation.z = 0.15;
      postLeft.castShadow = true;
      kbGroup.add(postLeft);

      const postRight = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.15, 0.9, 24), polishedSteel);
      postRight.position.set(0.65, 1.45, 0);
      postRight.rotation.z = -0.15;
      postRight.castShadow = true;
      kbGroup.add(postRight);

      // Embossed Weight Badge
      const badgeGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.08, 32);
      const badge = new THREE.Mesh(badgeGeo, brassAccent);
      badge.rotation.x = Math.PI / 2;
      badge.position.set(0, 0, 1.22);
      kbGroup.add(badge);

      // Subtle chalk marks
      const chalkGeo = new THREE.RingGeometry(0.58, 0.65, 32);
      const chalkRing = new THREE.Mesh(chalkGeo, whiteChalk);
      chalkRing.position.set(0, 0, 1.23);
      kbGroup.add(chalkRing);

      kbGroup.position.y = -0.4;
      artifactGroup.add(kbGroup);
    };

    const buildPlate = () => {
      artifactGroup.clear();
      const plateGroup = new THREE.Group();

      // Outer rim
      const outerRimGeo = new THREE.CylinderGeometry(1.8, 1.8, 0.35, 64);
      const outerRim = new THREE.Mesh(outerRimGeo, darkCastIron);
      outerRim.rotation.x = Math.PI / 2;
      plateGroup.add(outerRim);

      // Inner disc recess
      const innerRecessGeo = new THREE.CylinderGeometry(1.5, 1.5, 0.22, 64);
      const innerRecess = new THREE.Mesh(innerRecessGeo, darkCastIron);
      innerRecess.rotation.x = Math.PI / 2;
      plateGroup.add(innerRecess);

      // Center Hub (chrome ring for 50mm Olympic sleeve)
      const hubGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.38, 48);
      const hub = new THREE.Mesh(hubGeo, polishedSteel);
      hub.rotation.x = Math.PI / 2;
      plateGroup.add(hub);

      // Center hole
      const holeGeo = new THREE.CylinderGeometry(0.25, 0.25, 0.42, 32);
      const holeMesh = new THREE.Mesh(holeGeo, new THREE.MeshBasicMaterial({ color: 0x050505 }));
      holeMesh.rotation.x = Math.PI / 2;
      plateGroup.add(holeMesh);

      // Grip holes / slots
      for (let i = 0; i < 3; i++) {
        const angle = (i * Math.PI * 2) / 3;
        const slotGeo = new THREE.TorusGeometry(0.22, 0.08, 16, 32);
        const slot = new THREE.Mesh(slotGeo, polishedSteel);
        slot.position.set(Math.cos(angle) * 0.95, Math.sin(angle) * 0.95, 0);
        plateGroup.add(slot);
      }

      // Lettering ring
      const ringText = new THREE.Mesh(new THREE.RingGeometry(1.15, 1.35, 48), brassAccent);
      ringText.position.z = 0.18;
      plateGroup.add(ringText);

      const ringTextBack = ringText.clone();
      ringTextBack.position.z = -0.18;
      ringTextBack.rotation.y = Math.PI;
      plateGroup.add(ringTextBack);

      artifactGroup.add(plateGroup);
    };

    const buildDumbbell = () => {
      artifactGroup.clear();
      const dbGroup = new THREE.Group();

      // Knurled Center Shaft
      const shaftGeo = new THREE.CylinderGeometry(0.14, 0.14, 1.6, 32);
      const shaft = new THREE.Mesh(shaftGeo, polishedSteel);
      shaft.rotation.z = Math.PI / 2;
      dbGroup.add(shaft);

      // Left Heavy Hex Head
      const headGeo = new THREE.CylinderGeometry(0.95, 0.95, 0.75, 6);
      const leftHead = new THREE.Mesh(headGeo, darkCastIron);
      leftHead.rotation.z = Math.PI / 2;
      leftHead.position.x = -1.15;
      dbGroup.add(leftHead);

      // Left Inset Plate Ring
      const leftRing = new THREE.Mesh(new THREE.RingGeometry(0.3, 0.65, 24), brassAccent);
      leftRing.rotation.y = -Math.PI / 2;
      leftRing.position.x = -1.54;
      dbGroup.add(leftRing);

      // Right Heavy Hex Head
      const rightHead = new THREE.Mesh(headGeo, darkCastIron);
      rightHead.rotation.z = Math.PI / 2;
      rightHead.position.x = 1.15;
      dbGroup.add(rightHead);

      // Right Inset Plate Ring
      const rightRing = new THREE.Mesh(new THREE.RingGeometry(0.3, 0.65, 24), brassAccent);
      rightRing.rotation.y = Math.PI / 2;
      rightRing.position.x = 1.54;
      dbGroup.add(rightRing);

      dbGroup.rotation.z = 0.25;
      dbGroup.rotation.y = 0.35;
      artifactGroup.add(dbGroup);
    };

    // Load initial
    if (modelType === 'kettlebell') buildKettlebell();
    else if (modelType === 'plate') buildPlate();
    else buildDumbbell();

    // Mouse Interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let velocity = { x: 0.004, y: 0.003 };

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      previousMousePosition = { x: clientX, y: clientY };
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - previousMousePosition.x;
      const deltaY = clientY - previousMousePosition.y;

      artifactGroup.rotation.y += deltaX * 0.008;
      artifactGroup.rotation.x += deltaY * 0.008;

      velocity = { x: deltaX * 0.003, y: deltaY * 0.003 };
      previousMousePosition = { x: clientX, y: clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', onPointerDown);
    domEl.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('mouseup', onPointerUp);
    window.addEventListener('touchend', onPointerUp);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight || 450;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (!isDragging) {
        if (isRotating) {
          artifactGroup.rotation.y += 0.007;
          artifactGroup.position.y = Math.sin(clock.getElapsedTime() * 1.5) * 0.08 - (modelType === 'kettlebell' ? 0.2 : 0);
        } else {
          // Inertia dampening
          artifactGroup.rotation.y += velocity.x;
          artifactGroup.rotation.x += velocity.y;
          velocity.x *= 0.95;
          velocity.y *= 0.95;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      domEl.removeEventListener('mousedown', onPointerDown);
      domEl.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchend', onPointerUp);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [modelType, isRotating]);

  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-b from-[#141416]/90 to-[#0b0b0d] border border-[#26262c] overflow-hidden p-4 md:p-6 shadow-2xl">
      {/* Background Gritty Mesh */}
      <div className="absolute inset-0 gritty-overlay opacity-40 pointer-events-none" />

      {/* Top Controls Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-[#24242a] pb-4 mb-2">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#a2a2aa]">
            Interactive 3D Iron Engine
          </span>
        </div>

        {/* Model Switcher Tabs */}
        <div className="inline-flex rounded-lg bg-[#0e0e11] p-1 border border-[#222228]">
          <button
            id="tab-kb"
            onClick={() => setModelType('kettlebell')}
            className={`px-3 py-1.5 text-xs font-mono tracking-wider transition-colors rounded ${
              modelType === 'kettlebell'
                ? 'bg-[#2a2a32] text-white font-semibold'
                : 'text-[#888892] hover:text-white'
            }`}
          >
            32KG Bell
          </button>
          <button
            id="tab-plate"
            onClick={() => setModelType('plate')}
            className={`px-3 py-1.5 text-xs font-mono tracking-wider transition-colors rounded ${
              modelType === 'plate'
                ? 'bg-[#2a2a32] text-white font-semibold'
                : 'text-[#888892] hover:text-white'
            }`}
          >
            45LB Plate
          </button>
          <button
            id="tab-dumbbell"
            onClick={() => setModelType('dumbbell')}
            className={`px-3 py-1.5 text-xs font-mono tracking-wider transition-colors rounded ${
              modelType === 'dumbbell'
                ? 'bg-[#2a2a32] text-white font-semibold'
                : 'text-[#888892] hover:text-white'
            }`}
          >
            Hex DB
          </button>
        </div>

        {/* Rotation Toggle */}
        <div className="flex items-center gap-2">
          <button
            id="btn-spin"
            onClick={() => setIsRotating(!isRotating)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded border transition-colors ${
              isRotating
                ? 'border-[#3d3d46] text-[#e0e0e6] bg-[#1a1a20]'
                : 'border-[#26262e] text-[#70707a] hover:text-white'
            }`}
            title="Toggle Auto Rotation"
          >
            <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} />
            <span>{isRotating ? 'Auto Orbit' : 'Free Drag'}</span>
          </button>
        </div>
      </div>

      {/* 3D Canvas Canvas Mount */}
      <div
        ref={mountRef}
        className="relative w-full h-[360px] md:h-[420px] cursor-grab active:cursor-grabbing flex items-center justify-center select-none"
      />

      {/* Bottom Specs Ticker */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 border-t border-[#202026] text-xs font-mono text-[#8e8e98]">
        <div className="bg-[#0e0e11]/80 p-2.5 rounded border border-[#1e1e24]">
          <span className="text-[10px] text-[#606068] block uppercase">Material Grade</span>
          <span className="text-[#e2e2e8] font-medium">A48 Class 30 Grey Iron</span>
        </div>
        <div className="bg-[#0e0e11]/80 p-2.5 rounded border border-[#1e1e24]">
          <span className="text-[10px] text-[#606068] block uppercase">Knurl Density</span>
          <span className="text-[#e2e2e8] font-medium">1.2mm Volcano Precision</span>
        </div>
        <div className="bg-[#0e0e11]/80 p-2.5 rounded border border-[#1e1e24]">
          <span className="text-[10px] text-[#606068] block uppercase">Calibration Margin</span>
          <span className="text-[#e2e2e8] font-medium">± 10 Grams IWF Spec</span>
        </div>
        <div className="bg-[#0e0e11]/80 p-2.5 rounded border border-[#1e1e24]">
          <span className="text-[10px] text-[#606068] block uppercase">Drag To Inspect</span>
          <span className="text-[#e2e2e8] font-medium">360° Kinematic Freedom</span>
        </div>
      </div>
    </div>
  );
};
