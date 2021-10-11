import * as THREE from 'https://cdn.skypack.dev/three@<version>';

// create scene and camera with fov 75 degrees and min/max render distance of 0.1/1000
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// create the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// create a basic shape
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function rotate(x,y) {
    cube.rotation.x += x;
    cube.rotation.y += y;
}

// render the scene
function animate() {
    requestAnimationFrame( animate );
    
    rotate(0.01,0.01);

    renderer.render( scene, camera );
}

animate();           