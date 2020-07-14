// this room animates geometric shapes (ducks) to represent
// the number of people (duckies) in the room
// to be used for when stream is brb or "being setup"
// moscoww:
  // !feed the ducks
// steve:
  // instancing
  // water effects
// yana:
  // zombie ducks if they die
// tonewexp:
  // earn points to feed!
  // (ducks may die?)
  // spend points to get a zombied duck?


let scene = new THREE.Scene()
let camera = new THREE.PerspectiveCamera(
  90, window.innerWidth / window.innerHeight, 0.1, 1000 )

let renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild(renderer.domElement)

let pos = new THREE.Vector3(10,0,0)


let boxGeometry = new THREE.BoxGeometry()
let boxMaterial = new THREE.MeshStandardMaterial(
  {color:0xF4C2Cc}
)
let box = new THREE.Mesh(boxGeometry, boxMaterial )
let box2 = new THREE.Mesh(boxGeometry, boxMaterial )
box.position.set( 1, 0, 0 )
scene.add( box )
scene.add( box2 )

let lightAmbient = new THREE.AmbientLight( 0x404040 )
scene.add( lightAmbient )

let lightDirectional = new THREE.DirectionalLight( 0xffffff, 0.7 )
scene.add ( lightDirectional )

camera.position.z = 5

function animate() {
	requestAnimationFrame( animate );
  box.rotation.x += 0.01
  box.rotation.y += 0.01
  // toTheRight = new THREE.Vector3(0.01, 0, 0)
  // box.position.add(toTheRight)

	renderer.render( scene, camera );
}
animate();
