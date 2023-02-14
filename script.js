console.log('THREE', THREE)
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

scene.add(camera)

console.log('La scene', scene)