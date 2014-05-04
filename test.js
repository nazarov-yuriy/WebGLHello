var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled = true;
renderer.shadowMapSoft = true;

document.body.appendChild(renderer.domElement);

var mesh;

var spotLight = new THREE.SpotLight(0xFFFFFF, 1.0);
spotLight.position.x = 50;
spotLight.position.y = 90;
spotLight.position.z = 50;
spotLight.castShadow = true;
scene.add(spotLight);

var geometry = new THREE.PlaneGeometry( 100, 100 );
var material = new THREE.MeshLambertMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
var plane = new THREE.Mesh( geometry, material );
plane.rotation.x = 3.14/2;
plane.receiveShadow = true;
scene.add( plane );

camera.position.z = 60;
camera.position.y = 40;
camera.lookAt(new THREE.Vector3( 0, 20, 0 ));

var render = function () {
    requestAnimationFrame(render, null);
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
};

loader = new THREE.JSONLoader();
loader.load( "teapot.js", function( geometry ) {
    mesh = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial() );
    mesh.scale.set( 10, 10, 10 );
    mesh.castShadow = true;
    scene.add( mesh );
    render();
} );