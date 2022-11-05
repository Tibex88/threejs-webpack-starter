import './style.css'
import * as THREE from 'three'
// import path from 'path'
import {
    OrbitControls
} from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader';

import * as dat from 'dat.gui'
// import GLTFLoader from 'three-gltf-loader-wtower'; //delete

//model
var loadedModel

// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0xffffff);

const textureLoader = new THREE.TextureLoader();
const loader = new GLTFLoader();

loader.load(
    // ('/shiba/scene.gltf'),
    // ('/black_game_pad_controller/scene.gltf'),
    ('/dualshock_4/scene.gltf'),
    // ('/ps5/scene.gltf'),
    (gltf) => {
        // called when the resource is loaded
        // gltf.scene.rotation.y = Math.PI / 8;
        // gltf.scene.position.y = 3;
        loadedModel = gltf
        console.log({
            gltf
        });
        const texture = textureLoader.load("/ps5/1.png")
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(4, 4);
        // gltf.scene.scale.set(100, 100, 100)
        let mesh = gltf.scenes[0];
        mesh.material = new THREE.MeshBasicMaterial({
            //     metalness: 0.7,
            map: texture,
            //     specularMap: textureLoader.load(
            //         "VRayMtl39_normal.png"
            //     ),
            //     normalMap: textureLoader.load(
            //         "/ps5/textures/VRayMtl33_normal.png"
            //     ),
            //     roughness: 0.2,
        })
        console.log({
            mesh
        });
        // test.scene.add(gltf.scene);
        scene.add(mesh);
    },
    (xhr) => {
        // called while loading is progressing
        console.log(`${( xhr.loaded / xhr.total * 100 )}% loaded`);
    },
    (error) => {
        // called when loading has errors
        console.error('An error happened', error);
    },
);

//folders
const light1 = gui.addFolder('Light1')
const light2 = gui.addFolder('Light2')
const light3 = gui.addFolder('Light3')
const light4 = gui.addFolder('Light4')

// Objects
const geometry = new THREE.TorusGeometry(.7, .2, 16, 100);

// Materials

const material = new THREE.MeshBasicMaterial()
material.color = new THREE.Color(0xff0000)

// Mesh
const sphere = new THREE.Mesh(geometry, material)
// scene.add(sphere)

// Lights

// const pointLight = new THREE.PointLight(0xffffff)
// pointLight.position.x = 12
// pointLight.position.y = 12
// pointLight.position.z = 40
// scene.add(pointLight)

const pointLight1 = new THREE.PointLight(0xffffff, 2)
pointLight1.position.set(22, 22, 22)

const pointLight2 = new THREE.PointLight(0xffffff, 2)
pointLight2.position.set(30, 30, 30)

const pointLight3 = new THREE.PointLight(0xffffff, 2)
pointLight3.position.set(30, 30, 30)

const pointLight4 = new THREE.PointLight(0xffffff, 2)
pointLight4.position.set(30, 30, 30)

pointLight1.intensity = 5
scene.add(pointLight1)
light1.add(pointLight1.position, 'y').min(-3).max(22).step(0.01)
light1.add(pointLight1.position, 'x').min(-0.4).max(22).step(0.01)
light1.add(pointLight1.position, 'z').min(2).max(22).step(0.01)
light1.add(pointLight1, 'intensity').min(0).max(10).step(0.01)
const pointLightHelper1 = new THREE.PointLightHelper(pointLight1, 1)
scene.add(pointLightHelper1)

pointLight2.intensity = 5
scene.add(pointLight2)
light2.add(pointLight2.position, 'y').min(15).max(30).step(0.01)
light2.add(pointLight2.position, 'x').min(19).max(30).step(0.01)
light2.add(pointLight2.position, 'z').min(17).max(30).step(0.01)
light2.add(pointLight2, 'intensity').min(0).max(10).step(0.01)
const pointLightHelper2 = new THREE.PointLightHelper(pointLight2, 1)
scene.add(pointLightHelper2)


pointLight3.intensity = 5
scene.add(pointLight3)
light3.add(pointLight3.position, 'y').min(10).max(30).step(0.01)
light3.add(pointLight3.position, 'x').min(-5).max(30).step(0.01)
light3.add(pointLight3.position, 'z').min(23).max(30).step(0.01)
light3.add(pointLight3, 'intensity').min(0).max(10).step(0.01)
const pointLightHelper3 = new THREE.PointLightHelper(pointLight3, 1)
scene.add(pointLightHelper3)


pointLight4.intensity = 5
scene.add(pointLight4)
light4.add(pointLight4.position, 'y').min(0.35).max(30).step(0.01)
light4.add(pointLight4.position, 'x').min(7).max(30).step(0.01)
light4.add(pointLight4.position, 'z').min(22).max(30).step(0.01)
light4.add(pointLight4, 'intensity').min(0).max(10).step(0.01)
const pointLightHelper4 = new THREE.PointLightHelper(pointLight4, 1)
scene.add(pointLightHelper4)

// const al = new THREE.AmbientLight(0xffffff, 0.9);
// al.castShadow = true
// let directionalLight = new THREE.DirectionalLight(0xffffff, 2);
// directionalLight.castShadow = true;
// directionalLight.position.set(5, 7, 27);
// directionalLight.intensity = 4;
// scene.add(directionalLight);

// light1.add(directionalLight.position, 'x').min(-100).max(100).step(1)
// light1.add(directionalLight.position, 'y').min(-100).max(100).step(1)
// light1.add(directionalLight.position, 'z').min(-100).max(100).step(1)
// const pointLightHelper = new THREE.PointLightHelper(directionalLight, 1)
// scene.add(pointLightHelper)


// light1.add(al, 'intensity').min(0).max(100).step(1)
// scene.add(al)


/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.01, 100)
camera.position.x = 0
camera.position.y = 12
camera.position.z = 40
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(window.innerWidth, window.innerHeight)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

const clock = new THREE.Clock()

const tick = () => {
    if (loadedModel) {
        const elapsedTime = clock.getElapsedTime()
        // Update objects
        // console.log(loadedModel);
        loadedModel.scene.rotation.y = .5 * elapsedTime

        // Update Orbital Controls
        // controls.update()

        // Render
        renderer.render(scene, camera)
    }
    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}
tick()