// create scene and camera with fov 75 degrees and min/max render distance of 0.1/1000
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set(0,0,100);
camera.lookAt(0,0,0);

// create the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 1);
document.body.appendChild(renderer.domElement);

// render the scene
function animate() {
	requestAnimationFrame( animate );

	renderer.render( scene, camera );
}

animate();			  			