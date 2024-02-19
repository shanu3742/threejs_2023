
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
console.log('hello')
let targetEl= document.getElementById('canvas');
console.log(targetEl);

let canConfig = {
    width:window.innerWidth,
    height:window.innerHeight,
    margin:[10,10,10,10] , //[l,r,t,b]
}





//step2 create scene  and add camera  

const scene  = new THREE.Scene();
const acceptRatio = canConfig.width/canConfig.height;
const camera= new THREE.PerspectiveCamera(45,acceptRatio,1,1000);
//set camera position 
camera.position.set(0,0,3);



//step4 add a item(box) to scene 

//step4-1 create geometry 

const boxGeometry = new THREE.BoxGeometry(1,1,1);

//step4-2 create box material  
const boxMaterial = new THREE.MeshBasicMaterial({color:'red'});
const  box = new THREE.Mesh(boxGeometry,boxMaterial)
scene.add(box)


//step5- add  orbit controls 
const control = new OrbitControls(camera,targetEl);
control.update();
control.enableDamping=true;

//step1 update canvas  dimension  and create rendering area 
const rendrer = new THREE.WebGLRenderer({canvas:targetEl});
rendrer.setSize(canConfig.width,canConfig.height);

//step3:-add scene and camera to render 

 rendrer.render(scene,camera);

//step6 to manage orbit controll we have to update fram each second 
const tick  = () =>{
    control.update();
    rendrer.render( scene, camera ); 
    requestAnimationFrame(tick)

}
tick()

