//Creation de la scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({
    color: 0xff0000
})

//On mix la forme et le matériel
const mesh = new THREE.Mesh(geometry, material)

// On ajoute la forme à la scène (On  ne voit toujours pas la forme sur le HTML)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// position de la camera qui nous permet de voir l'object
camera.position.z = 3

scene.add(camera)


//canvas
const canvas = document.querySelector('canvas.webgl')

//rendering scene
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
// on met une taille à notre canvas
renderer.setSize(sizes.width, sizes.height)

// on voit le canvas mais pas la forme
renderer.render(scene, camera)