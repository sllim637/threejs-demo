import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,  
    window.innerWidth / window.innerHeight,
    0.1,
    1000
    );
const orbit = new OrbitControls(camera , renderer.domElement)
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);
//camera.position.z = 5
camera.position.set(0,2,5)
orbit.update()
//camera.position.y = 3

const boxGeometry = new THREE.BoxGeometry();
const boxMatrial = new THREE.MeshBasicMaterial({color : 0x00FF00});
const box = new THREE.Mesh(boxGeometry,boxMatrial);
scene.add(box)

box.rotation.x = 5; 
box.rotation.y = 5 

function animate () {
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    renderer.render(scene , camera);

}
renderer.setAnimationLoop(animate)

