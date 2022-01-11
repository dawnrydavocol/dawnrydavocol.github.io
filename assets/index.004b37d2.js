var _=Object.defineProperty;var x=(s,e,t)=>e in s?_(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var o=(s,e,t)=>(x(s,typeof e!="symbol"?e+"":e,t),t);import{P as I,W as G,S as z,R as v,O as K,G as P,E as j,U as B,V as H,a as W,b as N,c as F,d as S,M as g,D as u,e as a,f as w,g as k,h as R,T as C,B as V,i as U,F as J,j as Y,k as q,A as Q,l as O,I as X,m as E,n as f,o as M,p as y,C as Z,q as $,L as ee,r as te}from"./vendor.c4724e33.js";const ie=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}};ie();class ne{constructor(e){o(this,"threeScene");o(this,"threeCamera");o(this,"threeRenderer");o(this,"canvasElement");o(this,"threeCompositeObjectsArray");o(this,"canvasWidth");o(this,"canvasHeight");o(this,"finalComposer");o(this,"bloomComposer");o(this,"orbitControl");o(this,"mBloomPass");this.canvasElement=e,this.threeCamera=new I(64,e.offsetWidth/e.offsetHeight,.1,1200),this.threeRenderer=new G({antialias:!0,canvas:this.canvasElement}),this.threeCompositeObjectsArray=new Array,this.threeScene=new z,this.canvasHeight=this.canvasElement.offsetHeight,this.canvasWidth=this.canvasElement.offsetWidth,this.initDefault()}initDefault(){this.threeCamera.position.z=20,this.threeRenderer.setPixelRatio(window.devicePixelRatio),this.threeRenderer.toneMapping=v,this.threeRenderer.setSize(this.canvasElement.offsetWidth,this.canvasElement.offsetHeight)}animateCompositeObjects(e){this.threeCompositeObjectsArray.forEach(t=>{t.onAnimate(e)})}enableOnWindowResize(){const e=()=>{const t=this.canvasElement.offsetWidth,n=this.canvasElement.offsetHeight;this.threeCamera.aspect=t/n,this.threeCamera.updateProjectionMatrix(),this.threeRenderer.setSize(t,n),this.bloomComposer.setSize(t,n)};return window.addEventListener("resize",e),this}setBloomParamters(e=1,t=0,n=1){this.mBloomPass.threshold=t,this.mBloomPass.strength=e,this.mBloomPass.radius=n}loadCompositeObjInScene(){this.threeCompositeObjectsArray.forEach(e=>{this.threeScene.add(e.object3DGroup)})}enableOrbitControl(){return this.orbitControl=new K(this.threeCamera,this.threeRenderer.domElement),this.orbitControl.autoRotate=!0,this.orbitControl.update(),this}enableGrid(e=1e3,t=1e3){return this.threeScene.add(new P(e,t)),this}enableBloomPostProcessing(){this.bloomComposer=new j(this.threeRenderer),this.finalComposer=new j(this.threeRenderer),this.mBloomPass=new B(new H(this.canvasWidth,this.canvasHeight),1,1,0);const e=new W(new N({uniforms:{baseTexture:{value:null},bloomTexture:{value:this.bloomComposer.renderTarget2.texture}},vertexShader:document.getElementById("vertexshader").textContent,fragmentShader:document.getElementById("fragmentshader").textContent,defines:{}}),"baseTexture"),t=new F(this.threeScene,this.threeCamera);return e.needsSwap=!1,this.bloomComposer.renderToScreen=!1,this.bloomComposer.addPass(t),this.bloomComposer.addPass(this.mBloomPass),this.bloomComposer.setSize(this.canvasWidth,this.canvasHeight),this.finalComposer.addPass(t),this.finalComposer.addPass(e),this.finalComposer.setSize(this.canvasWidth,this.canvasHeight),this}addCompositeObj(e){this.threeCompositeObjectsArray.push(e)}onAnimate(e){this.orbitControl&&this.orbitControl.update,this.animateCompositeObjects(e),this.threeRenderer.render(this.threeScene,this.threeCamera),this.bloomComposer&&this.finalComposer&&(this.bloomComposer.render(),this.finalComposer.render())}}class A{constructor(e){o(this,"object3DGroup",new S);o(this,"component3DMap",new Map);this.object3DGroup.name=e}addThreeObjects(e,t){this.component3DMap.set(e,t),this.object3DGroup.add(t)}}var c;(function(s){s.ELECTRON_1="electron1",s.ELECTRON_2="electron2",s.ELECTRON_3="electron3",s.ELECTRON_4="electron4",s.ELECTRON_5="electron5",s.ELECTRON_6="electron6",s.NUCLEUS="nucleus"})(c||(c={}));class oe extends A{constructor(e){super(e);o(this,"componentsAnimMixer",new Map);this.initObject()}initObject(){const e=new g({side:u,wireframe:!0}),t=new g({side:u}),n=()=>{const r=new a(new w(.5,20,20),t),m=new k;return m.add(r),{pivot:m,sphereMesh:r}},i={atom1:n(),atom2:n(),atom3:n(),atom4:n(),atom5:n(),atom6:n(),nucleus:new a(new w(1,16,16),e)};return i.atom1.sphereMesh.position.x=2,i.atom2.sphereMesh.position.x=3,i.atom3.sphereMesh.position.x=4,i.atom4.sphereMesh.position.x=5,i.atom5.sphereMesh.position.x=6,i.atom6.sphereMesh.position.x=7,this.addThreeObjects(c.ELECTRON_1,i.atom1.pivot),this.addThreeObjects(c.ELECTRON_2,i.atom2.pivot),this.addThreeObjects(c.ELECTRON_3,i.atom3.pivot),this.addThreeObjects(c.ELECTRON_4,i.atom4.pivot),this.addThreeObjects(c.ELECTRON_5,i.atom5.pivot),this.addThreeObjects(c.ELECTRON_6,i.atom6.pivot),this.addThreeObjects(c.NUCLEUS,i.nucleus),this}onAnimate(e){this.component3DMap.get(c.ELECTRON_1).rotation.z+=.04,this.component3DMap.get(c.ELECTRON_2).rotation.z+=.1,this.component3DMap.get(c.ELECTRON_3).rotation.z+=.07,this.component3DMap.get(c.ELECTRON_4).rotation.y+=.06,this.component3DMap.get(c.ELECTRON_5).rotation.y+=.2,this.component3DMap.get(c.ELECTRON_6).rotation.z+=.1,this.component3DMap.get(c.NUCLEUS).rotation.z+=.1,this.componentsAnimMixer.forEach((t,n)=>{t.update(e)})}setWingsWaving(){return this}}class se extends A{constructor(e){super(e);o(this,"componentKeys",{outerCore:"outerCore",innerCore:"innerCore",ring1:"ring1",ring2:"ring2",ring3:"ring3",ring4:"ring4",ring5:"ring5"});this.initObject()}initObject(){const e=new g({side:u}),t=new g({side:u,wireframe:!0}),n=new a(new w(1,32,32),e),i=new a(new R(2.5,4),t),r=new a(new C(4,.2,16,64),e),m=new a(new C(4.5,.2,16,64),t),d=new a(new C(5,.2,16,64),e),T=new a(new C(5.5,.2,16,64),t),b=new a(new C(6,.2,16,64),e);return this.addThreeObjects(this.componentKeys.innerCore,n),this.addThreeObjects(this.componentKeys.outerCore,i),this.addThreeObjects(this.componentKeys.ring1,r),this.addThreeObjects(this.componentKeys.ring2,m),this.addThreeObjects(this.componentKeys.ring3,d),this.addThreeObjects(this.componentKeys.ring4,T),this.addThreeObjects(this.componentKeys.ring5,b),this}onAnimate(e){this.component3DMap.get(this.componentKeys.innerCore),this.component3DMap.get(this.componentKeys.outerCore).rotation.x+=.1,this.component3DMap.get(this.componentKeys.ring1).rotation.x+=.01,this.component3DMap.get(this.componentKeys.ring1).rotation.x+=.01,this.component3DMap.get(this.componentKeys.ring2).rotation.y+=.02,this.component3DMap.get(this.componentKeys.ring2).rotation.x+=.02,this.component3DMap.get(this.componentKeys.ring3).rotation.y+=.03,this.component3DMap.get(this.componentKeys.ring3).rotation.x+=.03,this.component3DMap.get(this.componentKeys.ring4).rotation.y+=.04,this.component3DMap.get(this.componentKeys.ring4).rotation.x+=.04,this.component3DMap.get(this.componentKeys.ring5).rotation.x+=.05,this.component3DMap.get(this.componentKeys.ring5).rotation.y+=.05}}class re extends A{constructor(e){super(e);o(this,"componentsKey",{globalParticles:"globalParticles"});this.initObject()}initObject(){const e=new V,t=[],n=new U().load("../src/assets/materials/circle-512.png");for(let r=0;r<1e5;r++){const m=Math.random()*1200-600,d=Math.random()*1200-600,T=Math.random()*1200-600;t.push(m,d,T)}e.setAttribute("position",new J(t,3));const i=new Y(e,new q({color:1048575,size:1,map:n,blending:Q,depthTest:!0,transparent:!0}));return this.addThreeObjects(this.componentsKey.globalParticles,i),i.rotation.x=Math.random()*6,i.rotation.y=Math.random()*6,i.rotation.z=Math.random()*6,this}onAnimate(e){this.object3DGroup.rotation.z+=.002}}class ae extends A{constructor(e){super(e);o(this,"leftRingComponentsGroup",new S);o(this,"rightRingComponentsGroup",new S);o(this,"componentsAnimMixer",new Map);o(this,"satelliteComponentsObj",new Map);o(this,"groupComponentsKey",{leftWing:"leftWing",rightWing:"rightWing"});o(this,"componentKey",{primaryRingRight:"primaryRingRight",secondaryRingRight:"secondaryRingRight",thirdRingRight:"thirdRingRight",primaryRingLeft:"primaryRingLeft",secondaryRingLeft:"secondaryRingLeft",thirdRingLeft:"thirdRingLeft",outerRing1:"outerRing1",outerRing2:"outerRing2",core:"core"});this.initObject()}initObject(){const e=new g({side:u}),t=new g({side:u,wireframe:!0}),n=new a(new O(3,6,64,32,0,4),t),i=new a(new O(2,4,64,32,0,4),e),r=new a(new C(4,.2,3,64),e),m=new a(new O(3,6,64,32,0,4),t),d=new a(new O(2,4,64,32,0,4),e),T=new a(new C(4,.2,3,64),e),b=new a(new X(2,0),e);return m.position.z=2,d.position.z=3,T.position.z=4,n.position.z=-2,i.position.z=-3,r.position.z=-4,this.leftRingComponentsGroup.add(n),this.leftRingComponentsGroup.add(i),this.leftRingComponentsGroup.add(r),this.rightRingComponentsGroup.add(m),this.rightRingComponentsGroup.add(d),this.rightRingComponentsGroup.add(T),this.satelliteComponentsObj.set(this.componentKey.core,b),this.satelliteComponentsObj.set(this.componentKey.primaryRingLeft,n),this.satelliteComponentsObj.set(this.componentKey.secondaryRingLeft,i),this.satelliteComponentsObj.set(this.componentKey.thirdRingLeft,r),this.satelliteComponentsObj.set(this.componentKey.primaryRingRight,m),this.satelliteComponentsObj.set(this.componentKey.secondaryRingRight,d),this.satelliteComponentsObj.set(this.componentKey.thirdRingRight,T),this.addThreeObjects(this.componentKey.core,b),this.addThreeObjects(this.groupComponentsKey.leftWing,this.leftRingComponentsGroup),this.addThreeObjects(this.groupComponentsKey.leftWing,this.rightRingComponentsGroup),this}onAnimate(e){this.componentsAnimMixer.forEach((t,n)=>{t.update(e)}),this.satelliteComponentsObj.get(this.componentKey.core).rotation.x+=.06,this.satelliteComponentsObj.get(this.componentKey.primaryRingLeft).rotation.z+=.5,this.satelliteComponentsObj.get(this.componentKey.secondaryRingLeft).rotation.z-=.1,this.satelliteComponentsObj.get(this.componentKey.thirdRingLeft).rotation.z+=.2,this.satelliteComponentsObj.get(this.componentKey.primaryRingRight).rotation.z+=.05,this.satelliteComponentsObj.get(this.componentKey.secondaryRingRight).rotation.z-=.1,this.satelliteComponentsObj.get(this.componentKey.thirdRingRight).rotation.z+=.02}setWingsWaving(){const e={totalDuration:1,leftWing:{positionKeyFrame:[0,.5,1],positionValue:[0,0,this.leftRingComponentsGroup.position.z,0,0,this.rightRingComponentsGroup.position.z+-2,0,0,this.leftRingComponentsGroup.position.z]},rightWing:{positionKeyFrame:[0,.5,1],positionValue:[0,0,this.rightRingComponentsGroup.position.z,0,0,this.rightRingComponentsGroup.position.z+2,0,0,this.rightRingComponentsGroup.position.z]}},t=new E("Action",e.totalDuration,[new f(".position",e.leftWing.positionKeyFrame,e.leftWing.positionValue,M)]),n=new E("Action",e.totalDuration,[new f(".position",e.rightWing.positionKeyFrame,e.rightWing.positionValue,M)]);return this.componentsAnimMixer.set(this.groupComponentsKey.leftWing,new y(this.leftRingComponentsGroup)),this.componentsAnimMixer.set(this.groupComponentsKey.rightWing,new y(this.rightRingComponentsGroup)),this.componentsAnimMixer.get(this.groupComponentsKey.leftWing).clipAction(t).play(),this.componentsAnimMixer.get(this.groupComponentsKey.rightWing).clipAction(n).play(),this}}var l;(function(s){s.CORE="core",s.PRIMARY_SHELL="primaryShell",s.SECONDARY_SHELL="secondaryShell",s.LEFT_ORBITER="thirdShell",s.RIGHT_ORBITER="fourthShell"})(l||(l={}));class he extends A{constructor(e){super(e);o(this,"componentsAnimMixer",new Map);this.initObject()}initObject(){const e=new g({side:u,wireframe:!0}),t=new g({side:u}),n={core:new a(new R(2,1),t),primaryShell:new a(new R(3,2),e),secondaryShell:new a(new R(8,4),e),leftOrbiter:new a(new R(2,0),t),rightOrbiter:new a(new R(2,0),t)};return this.addThreeObjects(l.PRIMARY_SHELL,n.primaryShell),this.addThreeObjects(l.SECONDARY_SHELL,n.secondaryShell),this.addThreeObjects(l.LEFT_ORBITER,n.leftOrbiter),this.addThreeObjects(l.RIGHT_ORBITER,n.rightOrbiter),this.addThreeObjects(l.CORE,n.core),this}onAnimate(e){this.component3DMap.get(l.PRIMARY_SHELL).rotation.x+=.02,this.component3DMap.get(l.SECONDARY_SHELL).rotation.z+=.02,this.componentsAnimMixer.forEach((t,n)=>{t.update(e)})}animateOrbiters(){const e={totalDuration:2,leftSide:{positionKeyFrame:[0,1,2],positionValue:[-16,0,0,-10,0,0,-16,0,0]},rightSide:{positionKeyFrame:[0,1,2],positionValue:[16,0,0,10,0,0,16,0,0]}},t=new E("Action",e.totalDuration,[new f(".position",e.rightSide.positionKeyFrame,e.rightSide.positionValue,M)]),n=new E("Action",e.totalDuration,[new f(".position",e.leftSide.positionKeyFrame,e.leftSide.positionValue,M)]);this.componentsAnimMixer.set(l.RIGHT_ORBITER,new y(this.component3DMap.get(l.RIGHT_ORBITER))),this.componentsAnimMixer.set(l.LEFT_ORBITER,new y(this.component3DMap.get(l.LEFT_ORBITER)));const i=this.componentsAnimMixer.get(l.RIGHT_ORBITER).clipAction(t),r=this.componentsAnimMixer.get(l.LEFT_ORBITER).clipAction(n);return i.play(),r.play(),this}}class p{constructor(e,t,n,i,r){o(this,"mTargetTextHTML_Element");o(this,"mCharChangeDuration");o(this,"mCharDurationOffset");o(this,"mToDisplayCharacters",new Array);o(this,"mCharactersToAnimate");o(this,"mIsAnimating",!1);o(this,"mMessageToDisplay");this.mCharDurationOffset=i,this.mMessageToDisplay=e,this.mTargetTextHTML_Element=t,this.mCharChangeDuration=n,this.mCharactersToAnimate=r,this.initMessageToDisplay()}initMessageToDisplay(){this.mMessageToDisplay!==null?this.mTargetTextHTML_Element.textContent=" ":this.mMessageToDisplay=this.mTargetTextHTML_Element.textContent}changeText(e){this.mMessageToDisplay=e,this.initMessageToDisplay(),this.animate()}animate(){if(this.mToDisplayCharacters.length=0,!this.mIsAnimating){this.mIsAnimating=!0,setTimeout(()=>{this.mIsAnimating=!1},(this.mCharactersToAnimate.length-1)*this.mCharDurationOffset+this.mCharChangeDuration*(this.mCharactersToAnimate.length-1));for(let e=0;e<this.mMessageToDisplay.length;e++){let t=this.mMessageToDisplay[e];for(let n=0;n<this.mCharactersToAnimate.length;n++){let i=this.mCharactersToAnimate[n];if(setTimeout(()=>{n===0&&this.mToDisplayCharacters.push(t),this.mToDisplayCharacters[e]=i,this.mTargetTextHTML_Element.textContent=this.mToDisplayCharacters.join("")},this.mCharDurationOffset*n+this.mCharChangeDuration*e),t===i)break}}}}}o(p,"JAP_CHARS","\u65E5\u4E00\u5927\u5E74\u4E2D\u4F1A\u4EBA\u672C\u6708\u9577\u56FD\u51FA\u4E0A\u5341\u751F\u5B50\u5206\u6771\u4E09\u884C\u540C\u4ECA\u9AD8\u91D1\u6642\u624B\u898B\u5E02\u529B\u7C73\u81EA\u524D\u5186\u5408\u7ACB\u5185\u4E8C\u4E8B\u793E\u8005\u4EAC\u9593\u7530\u4F53\u5B66\u4E0B\u76EE\u4E94\u5F8C\u65B0\u660E\u65B9\u90E8"),o(p,"KOR_CHARS","\u3131 \u3134 \u3137 \u3139 \u3141 \u3142 \u3145 \u3147 \u3148 \u314A \u314B \u314C \u314D \u314E\u314F \u3151 \u3153 \u3155 \u3157 \u315B \u315C \u3160 \u3161 \u3163"),o(p,"ASCII_CHARS","1234567890-=!@#$%^&*()_+qwertyuiop[]asdfghjkl;zxcvbnm,./QWERTYUIOP{}|ASDFGHJKL:\"ZXCVBNM<>? `'\u25C9 ");var h;(function(s){s.SATELLIT_1="satellite1",s.SATELLIT_2="satellite2",s.TESSERACT="tesseract",s.ATOM1="atom1",s.CONSTELLATION="constellation"})(h||(h={}));var L;(function(s){s.ANIM_CAMERA="camera"})(L||(L={}));class me{constructor(e,t){o(this,"mThreeClock");o(this,"mThreeScene");o(this,"mAnimationMixerMap");o(this,"mCompositeObjectMap");o(this,"mGsapTimeline");o(this,"mStopAnimation",!1);o(this,"mTimelineSliderHTML_Element");o(this,"mElapsedTime",0);o(this,"mTimelineSliderTime",1);this.mThreeScene=new ne(e),this.mThreeClock=new Z,this.mTimelineSliderHTML_Element=t,this.mAnimationMixerMap=new Map,this.mCompositeObjectMap=new Map,this.mGsapTimeline=$.timeline({repeat:0,repeatDelay:1}),this.initThreeScene(),this.initObjects(),this.initAnimation()}initThreeScene(){this.mThreeScene.enableOrbitControl().enableBloomPostProcessing().enableOnWindowResize()}initObjects(){const e=new he(h.TESSERACT),t=new ae(h.SATELLIT_1),n=new se(h.SATELLIT_2),i=new oe(h.ATOM1),r=new re(h.CONSTELLATION);t.object3DGroup.position.z=400,n.object3DGroup.position.z=200,i.object3DGroup.position.z=0,e.object3DGroup.position.z=-200,e.animateOrbiters(),t.setWingsWaving(),this.mCompositeObjectMap.set(h.TESSERACT,e),this.mCompositeObjectMap.set(h.SATELLIT_1,t),this.mCompositeObjectMap.set(h.SATELLIT_2,n),this.mCompositeObjectMap.set(h.ATOM1,i),this.mCompositeObjectMap.set(h.CONSTELLATION,r),this.mCompositeObjectMap.forEach(m=>{this.mThreeScene.addCompositeObj(m)}),this.mThreeScene.loadCompositeObjInScene(),this.initGsapAnimation()}initGsapAnimation(){const e=new p(null,document.getElementById("text-story__first-story-p"),5,10,p.KOR_CHARS+p.JAP_CHARS+p.ASCII_CHARS),t={firstParagraph:new p(null,document.getElementById("text-story__second-story-p1"),5,10,p.KOR_CHARS+p.JAP_CHARS+p.ASCII_CHARS),secondParagraph:new p(null,document.getElementById("text-story__second-story-p2"),6,12,p.KOR_CHARS+p.JAP_CHARS+p.ASCII_CHARS),thirdParagraph:new p(null,document.getElementById("text-story__second-story-p3"),7,14,p.KOR_CHARS+p.JAP_CHARS+p.ASCII_CHARS)};this.mGsapTimeline.from("#text-story__second-story",{opacity:0,x:100,duration:2,onStart:()=>{t.firstParagraph.mIsAnimating||t.firstParagraph.animate(),t.secondParagraph.mIsAnimating||t.secondParagraph.animate(),t.thirdParagraph.mIsAnimating||t.thirdParagraph.animate()}},14),this.mGsapTimeline.to("#text-story__second-story",{opacity:0,x:100,duration:2},26),this.mGsapTimeline.from("#text-story__first-story",{opacity:0,x:-100,duration:2,onStart:()=>{e.mIsAnimating||e.changeText("My name is Dawnry Davocol, I'm 22 years old Programmer/Developer.")}},0),this.mGsapTimeline.from("#text-story__first-story-p",{duration:1,onStart:()=>{e.mIsAnimating||e.changeText("I'm an I.T. college student studying in Jose Maria College of Davao city.")}},6),this.mGsapTimeline.to("#text-story__first-story",{display:"none",opacity:0,x:-100,duration:2},13),this.mGsapTimeline.play()}initAnimation(){const e={Satellite1:{z:this.mCompositeObjectMap.get(h.SATELLIT_1).object3DGroup.position.z},Satellite2:{z:this.mCompositeObjectMap.get(h.SATELLIT_2).object3DGroup.position.z},Atom:{z:this.mCompositeObjectMap.get(h.ATOM1).object3DGroup.position.z},Tesseract:{z:this.mCompositeObjectMap.get(h.TESSERACT).object3DGroup.position.z}};(()=>{const n=[0,0,1e3,0,0,e.Satellite1.z+100,0,0,e.Satellite1.z,0,0,e.Satellite2.z+100,0,0,e.Satellite2.z,0,0,e.Atom.z+100,0,0,e.Atom.z,0,0,e.Tesseract.z+100,0,0,e.Tesseract.z],i=[0,1,13,14,26,28,40,41,53],r=new f(".position",i,n,te),m=new y(this.mThreeScene.threeCamera),d=new E("slowmove",-1,[r]);this.mAnimationMixerMap.set(L.ANIM_CAMERA,[m,m.clipAction(d)])})(),this.initAnimationSlider(),this.playAnimation()}animateCameraLookAt(){if(this.mElapsedTime>=0&&this.mElapsedTime<14){const e=this.mCompositeObjectMap.get(h.SATELLIT_1).object3DGroup.position;this.mThreeScene.orbitControl.target=e}else if(this.mElapsedTime>=14&&this.mElapsedTime<26){const e=this.mCompositeObjectMap.get(h.SATELLIT_2).object3DGroup.position;this.mThreeScene.orbitControl.target=e}else if(this.mElapsedTime>=26&&this.mElapsedTime<40){const e=this.mCompositeObjectMap.get(h.ATOM1).object3DGroup.position;this.mThreeScene.orbitControl.target=e}else if(this.mElapsedTime>=40&&this.mElapsedTime<53){const e=this.mCompositeObjectMap.get(h.TESSERACT).object3DGroup.position;this.mThreeScene.orbitControl.target=e}}playAnimation(){this.mAnimationMixerMap.forEach(e=>{const t=e[1];t.clampWhenFinished=!0,t.setLoop(ee,0),t.play()})}initAnimationSlider(){this.mTimelineSliderHTML_Element.oninput=e=>{this.mStopAnimation=!0,this.mTimelineSliderTime=parseFloat(this.mTimelineSliderHTML_Element.value),this.mElapsedTime=this.mTimelineSliderTime}}updateAnimationMixers(){this.mElapsedTime<=53?this.mStopAnimation?this.mAnimationMixerMap.forEach(e=>{e[0].setTime(this.mTimelineSliderTime)}):(this.mAnimationMixerMap.forEach(e=>{e[0].setTime(this.mElapsedTime)}),this.updateTimelineSlider()):this.mStopAnimation=!0}updateTimelineSlider(){this.mTimelineSliderHTML_Element.value=this.mElapsedTime.toString()}onAnimate(){const e=this.mThreeClock.getDelta();this.mStopAnimation||(this.mElapsedTime+=e),this.animateCameraLookAt(),this.mGsapTimeline.seek(this.mElapsedTime),this.updateAnimationMixers(),this.mThreeScene.onAnimate(e)}}const pe=new me(document.getElementById("main-canvas"),document.getElementById("animation-timeline-slider"));function D(){requestAnimationFrame(D),pe.onAnimate()}D();
