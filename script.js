// CANVAS

const canvas = document.querySelector("#forest");



// SAHNE

const scene = new THREE.Scene();


// SİS

scene.fog = new THREE.FogExp2(
    0x101522,
    0.03
);




// KAMERA

const camera = new THREE.PerspectiveCamera(

    75,

    window.innerWidth / window.innerHeight,

    0.1,

    1000

);


camera.position.set(
    0,
    3,
    8
);



// RENDER

const renderer = new THREE.WebGLRenderer({

    canvas:canvas,
    antialias:true

});


renderer.setSize(

    window.innerWidth,
    window.innerHeight

);





// IŞIK

const moonLight = new THREE.DirectionalLight(

    0xbfd8ff,

    1.5

);


moonLight.position.set(

    -10,
    20,
    5

);


scene.add(moonLight);



const ambient = new THREE.AmbientLight(

    0x334455,

    0.8

);


scene.add(ambient);





// ZEMİN

const groundGeometry =
new THREE.PlaneGeometry(

    200,
    200

);


const groundMaterial =
new THREE.MeshStandardMaterial({

    color:0x101c12

});


const ground =
new THREE.Mesh(

    groundGeometry,
    groundMaterial

);


ground.rotation.x =
-Math.PI/2;


scene.add(ground);






// AĞAÇ FONKSİYONU


function createTree(x,z){


    const trunk =
    new THREE.Mesh(

        new THREE.CylinderGeometry(
            0.3,
            0.5,
            5
        ),

        new THREE.MeshStandardMaterial({

            color:0x3b2415

        })

    );


    trunk.position.set(

        x,
        2.5,
        z

    );


    scene.add(trunk);




    const leaves =
    new THREE.Mesh(

        new THREE.SphereGeometry(
            2.5,
            16,
            16
        ),

        new THREE.MeshStandardMaterial({

            color:0x123d1c

        })

    );


    leaves.position.set(

        x,
        5.5,
        z

    );


    scene.add(leaves);


}



// AĞAÇLAR


createTree(-8,-15);

createTree(8,-20);

createTree(-15,-35);

createTree(15,-40);







// ANİMASYON


function animate(){


    requestAnimationFrame(animate);



    // kamera yavaş hareket


    camera.position.z -=0.01;


    camera.rotation.y =
    Math.sin(Date.now()*0.0003)
    *
    0.2;




    renderer.render(

        scene,
        camera

    );


}


animate();






// EKRAN BOYUTU


window.addEventListener(

"resize",

()=>{


camera.aspect =
window.innerWidth /
window.innerHeight;


camera.updateProjectionMatrix();



renderer.setSize(

window.innerWidth,
window.innerHeight

);


}

);
