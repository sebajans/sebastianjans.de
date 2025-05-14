<script lang="ts">
	import { pageTitle } from '$lib/stores/pageTitle';
	import * as Threlte from '@threlte/core';
	import * as Three from 'three';
	// import * as Utils from 'three/src/math/MathUtils';
	import * as Extra from '@threlte/extras';
	import { Spring } from 'svelte/motion';

	const gridHelper = new Three.GridHelper(200, 20);
	const axesHelper = new Three.AxesHelper(10);

	const scale = new Spring(1);
</script>

<svelte:head>
	<title>{$pageTitle}</title>
	<meta
		name="description"
		content="Contact Sebastian Jans via this webform or the mentioned Links."
	/>
</svelte:head>

<div>test</div>
<!-- <Threlte.Canvas>
	<Threlte.Object3DInstance object={gridHelper} />
	<Threlte.Object3DInstance object={axesHelper} />

	<Threlte.PerspectiveCamera position={{ x: 1000, y: 1000, z: 1000 }} fov={50}>
		<Threlte.OrbitControls
			maxPolarAngle={Utils.DEG2RAD * 80}
			autoRotate={true}
			enableZoom={false}
			target={{ y: 100.5 }}
		/>
	</Threlte.PerspectiveCamera>

	<Threlte.AmbientLight color="orange" intensity={0.2} />
	<Threlte.DirectionalLight
		color="white"
		intensity={2}
		position={{ x: 100, y: 200, z: -100 }}
		shadow={{
			camera: { top: 800 }
		}}
	/>
	<Threlte.Group scale={$scale}>
		<Extra.GLTF
			interactive
			on:pointerenter={() => ($scale = 1.2)}
			rotation={{ x: 90 * Utils.DEG2RAD }}
			on:pointerleave={() => ($scale = 1)}
			scale={0.5}
			position={{ x: -200, y: 120, z: -140 }}
			url="productdesign/catEntranceAssembly.glb"
		/>
	</Threlte.Group>
</Threlte.Canvas> -->

<!-- <Threlte.Mesh
geometry={new Three.SphereGeometry(4, 64, 64)}
material={new Three.MeshStandardMaterial({color: 'white'})}
	position={{ y: 4}}
	receiveShadow
	castShadow
/>
<Threlte.Mesh
geometry={new Three.PlaneGeometry(20, 20)}
material={new Three.MeshStandardMaterial({
	color: 'white',
	side: Three.DoubleSide,
	})}
	rotation={{ x: Utils.DEG2RAD * 90}}
	receiveShadow
/> -->
