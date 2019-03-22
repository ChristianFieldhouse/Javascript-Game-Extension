
var para = document.createElement("button");
para.id = "pasta1";
var t = document.createTextNode("Click to Play");
para.appendChild(t);
document.body.appendChild(para); 

document.getElementById("pasta1").onclick = function() { 
	playGame(); 
};


function playGame(){
	
	document.getElementById("pasta1").style.visibility = "hidden";

	var canv = document.createElement("canvas");
	canv.id = "c";
	canv.width = "600";
	canv.height = "500";
	canv.style = "border:1px solid #000000;";
	 document.body.appendChild(canv); 

	var tank1v = document.createElement("img");
	tank1v.id = "Tank1";
	tank1v.src = "https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/12998533_987379094649797_8555659471534147311_n.jpg?oh=c7603746e29884d79173cb7f86a7a6ed&oe=57ECE8B4";
	tank1v.style.visibility = "hidden";
	document.body.appendChild(tank1v); 

	var tank2v = document.createElement("img");
	tank2v.id = "Tank2";
	tank2v.src = "https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/944882_987379084649798_1883550804690826894_n.jpg?oh=a801527f64b047ddeebd1c357003d978&oe=57FA222B";
	tank2v.style.visibility = "hidden";
	document.body.appendChild(tank2v); 

	var tblv = document.createElement("img");
	tblv.id = "tblock";
	tblv.src = "https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/12987235_987379101316463_2251029847087464922_n.jpg?oh=45f74a9e81ebde70f9f73200df04572f&oe=5800F2F8";
	tblv.style.visibility = "hidden";
	document.body.appendChild(tblv); 

	var tshv = document.createElement("img");
	tshv.id = "tshell";
	tshv.src = "https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/12963932_987379111316462_1114737141195557903_n.jpg?oh=2c3b9206646aa917ce4ebbbfe1e3a273&oe=57F7667D";
	tshv.style.visibility = "hidden";
	document.body.appendChild(tshv); 

	var sshv = document.createElement("img");
	sshv.id = "sshell";
	sshv.src ="https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/12987235_987379071316466_8469663010466744488_n.jpg?oh=6ac0a5fbe14b7a9365298237a9b1806c&oe=583632A9";
	sshv.style.visibility = "hidden";
	document.body.appendChild(sshv); 

	var rwinv = document.createElement("img");
	rwinv.id = "rwin";
	rwinv.src ="https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/12998527_987379037983136_7022546367524336566_n.jpg?oh=e746aea64a8d4801804fdd8925ccc7f9&oe=57F82B8D";
	rwinv.style.visibility = "hidden";
	document.body.appendChild(rwinv); 

	var gwinv = document.createElement("img");
	gwinv.id = "gwin";
	gwinv.src ="https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/12974447_987379021316471_8239513533552187376_n.jpg?oh=5210ea34aec8535afc6b1ea3651a4dec&oe=58063347";
	gwinv.style.visibility = "hidden";
	document.body.appendChild(gwinv); 

	var coinv = document.createElement("img");
	coinv.id = "coin";
	coinv.src ="https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/12993583_987378987983141_8056389410933615554_n.jpg?oh=c13b33666d97ece96788917c45b3ef4e&oe=57F93AE6";
	coinv.style.visibility = "hidden";
	document.body.appendChild(coinv); 

	var sblv = document.createElement("img");
	sblv.id = "sblock";
	sblv.src = "https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/12993619_987379047983135_5327085029439626474_n.jpg?oh=7fa2cd9486c7a52338690fb81e0691d9&oe=58000000";
	sblv.style.visibility = "hidden";
	document.body.appendChild(sblv); 

	var redv = document.createElement("img");
	redv.id = "redwins";
	redv.src ="https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/12961502_987379041316469_8093366994844379123_n.jpg?oh=5386d967ffd1297a47b6b6f73f5b52f3&oe=58361C8C"
	redv.style.visibility = "hidden";
	document.body.appendChild(redv); 

	var amov = document.createElement("img");
	amov.id = "amo";
	amov.src = "https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/12998727_987378991316474_6015309854400482566_n.jpg?oh=52c31305e5633e19215908afa8a89e0f&oe=580312D0";
	amov.style.visibility = "hidden";
	document.body.appendChild(amov); 

	var greenv = document.createElement("img");
	greenv.id = "greenwins";
	greenv.src ="https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/12994416_987379027983137_2673548242780768985_n.jpg?oh=cfa8bba0432c705887a1507bab98dc12&oe=580A94D1";
	greenv.style.visibility = "hidden";
	document.body.appendChild(greenv); 

	var g1v = document.createElement("img");
	g1v.id = "gun1";
	g1v.src ="https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/12994486_987379001316473_5596416832218296651_n.jpg?oh=086de49926b51954bf58a5e1c5208432&oe=5807ED4F";
	g1v.style.visibility = "hidden";
	document.body.appendChild(g1v); 

	var g2v = document.createElement("img");
	g2v.id = "gun2";
	g2v.src = "https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/12805875_987379007983139_7784968173398060585_n.jpg?oh=3189cd7e1fb9cc2aa96b47a29702bd8c&oe=57EA965E"
	g2v.style.visibility = "hidden";
	document.body.appendChild(g2v); 

	var tun1v = document.createElement("audio");
	tun1v.id = "tune1";
	tun1v.setAttribute("src","http://gamethemesongs.com/uploads/audio/Plants%20vs%20Zombies%20-%20Main%20Menu.mp3");
	document.body.appendChild(tun1v); 

	var tun2v = document.createElement("audio");
	tun2v.id = "tune2";
	tun2v.setAttribute("src","http://gamethemesongs.com/uploads/audio/Plants%20vs%20Zombies%20-%20Day%20Stage.mp3");
	document.body.appendChild(tun2v); 

	var tun3v = document.createElement("audio");
	tun3v.id = "tune3";
	tun3v.setAttribute("src","http://gamethemesongs.com/uploads/audio/Plants%20vs%20Zombies%20-%20Night%20Stage.mp3");
	document.body.appendChild(tun3v); 

	var tun4v = document.createElement("audio");
	tun4v.id = "tune4";
	tun4v.setAttribute("src","http://gamethemesongs.com/uploads/audio/Plants%20vs%20Zombies%20-%20Pool%20Stage.mp3");
	document.body.appendChild(tun4v); 

	var tun5v = document.createElement("audio");
	tun5v.id = "tune5";
	tun5v.setAttribute("src","http://gamethemesongs.com/uploads/audio/Plants%20vs%20Zombies%20-%20Mini%20Games.mp3");
	document.body.appendChild(tun5v); 

	var tun6v = document.createElement("audio");
	tun6v.id = "tune6";
	tun6v.setAttribute("src","http://gamethemesongs.com/uploads/audio/Plants%20vs%20Zombies%20-%20Roof%20Stage.mp3");
	document.body.appendChild(tun6v); 

	var tun7v = document.createElement("audio");
	tun7v.id = "tune7";
	tun7v.setAttribute("src","http://gamethemesongs.com/uploads/audio/Plants%20vs%20Zombies%20-%20Boss%20Battle.mp3");
	document.body.appendChild(tun7v); 




	var mormv = document.createElement("audio");
	mormv.id = "morm2";
	mormv.setAttribute("src","http://soundbible.com/mp3/Lawn Mower Cutoff Sound -SoundBible.com-517647793.mp3");
	document.body.appendChild(mormv); 

	var pewv = document.createElement("audio");
	pewv.id = "pew2";
	pewv.setAttribute("src","http://member.productioncrate.com/content/audio/SOUNDSCRATE-BulletFlyby.wav");
	document.body.appendChild(pewv); 

	var coin$v = document.createElement("audio");
	coin$v.id = "coin2";
	coin$v.setAttribute("src","http://soundbible.com/mp3/Cash Register Cha Ching-SoundBible.com-184076484.mp3");
	document.body.appendChild(coin$v); 

	var reloav = document.createElement("audio");
	reloav.id = "reload";
	reloav.setAttribute("src","http://soundbible.com/mp3/shotgun-reload-old_school-RA_The_Sun_God-580332022.mp3");
	document.body.appendChild(reloav); 

	var ev1v = document.createElement("audio");
	ev1v.id = "Evil1";
	ev1v.setAttribute("src","http://soundbible.com/mp3/Evil Laugh Male 2-SoundBible.com-1998254197.mp3");
	document.body.appendChild(ev1v); 

	var ev2v = document.createElement("audio");
	ev2v.id = "Evil2";
	ev2v.setAttribute("src","http://soundbible.com/mp3/Evil Laugh-SoundBible.com-874992221.mp3");
	document.body.appendChild(ev2v); 


	////////////////////////////////////////////////////// Audiovisual fles ////////////////////////////////////////////////////////


	var T1 = document.getElementById("Tank1"); // pictures
	var T2 = document.getElementById("Tank2");
	var G1 = document.getElementById("gun1");
	var G2 = document.getElementById("gun2");
	var gwin = document.getElementById("gwin");
	var rwin = document.getElementById("rwin");
	var S1 = document.getElementById("tshell");
	var coin = document.getElementById("coin");
	var S2 = document.getElementById("sshell");
	var amo = document.getElementById("amo");
	var B1 = document.getElementById("tblock");
	var B2 = document.getElementById("sblock");  
	var redwins = document.getElementById("redwins"); 
	var greenwins = document.getElementById("greenwins"); 
	var c = document.getElementById("c");		// canvas


	var pew2 = document.getElementById("pew2");	//sounds
	var morm2 = document.getElementById("morm2");
	var coin2 = document.getElementById("coin2");
	var reload = document.getElementById("reload");
	var Evil1 = document.getElementById("Evil1");
	var Evil2 = document.getElementById("Evil2");


	var tune1 = document.getElementById("tune1"); // tunes
	var tune2 = document.getElementById("tune2");
	var tune3 = document.getElementById("tune3");
	var tune4 = document.getElementById("tune4");
	var tune5 = document.getElementById("tune5");
	var tune6 = document.getElementById("tune6");
	var tune7 = document.getElementById("tune7");


	var ctx =  c.getContext("2d");
	ctx.font = "20px Arial";



	//////////////////////////////////////////////////////////  Player values  ////////////////////////////////////////////////////////



	var tb=20;	//blocks
	var sb=20;
	var tamo=0;	//ammo
	var samo=0;
	var tcoin=0;	//coins
	var scoin=0;
	var tdun=0;	//damage level
	var sdun=0;
	var tsun=0;	//speed level
	var ssun=0;
	var wins=0;	//+1 for s, -1 for t
	var tx = 20; 	// t coordinates
	var ty = 20;	
	var sx = 450;	// s cordinates
	var sy = 450;
	var angle  = Math.PI/4;		// t orientation
	var angle2  = -3*Math.PI/4;	// s orientation
	var heltht = 50;	// t health
	var helths = 50;	// s health
	var sdamage=1;
	var tdamage=1;
	var tspeed=3;
	var sspeed=3;
	var tblock = [];	// stores blocks [[x1,y1,health1],[x2,y2,health2]...]
	var sblock = []; 
	var tshell = [];	// stores shells [[x1,y1,angle1],[x2,y2,angle2]...]
	var sshell = [];

	var keys = [];  	// stores all keys currently pressed
	var A = [];		// ammo locations
	var M = [];		// coin locations




	///////////////////////////////////////////////////////////// Time Keeping  ////////////////////////////////////////////////////

	var startsequence = true;
	var gameplay = true;
	var d = new Date();
	var n = d.getSeconds();
	var time = setInterval(act,30);	// sets frame rate for game
	var time2= setInterval(amon,5000); // sets rate of ammo/coin spawning
	var time3;
	var roundNo = 1;

	tune1.play();



	/////////////////////////////////////////////////////////// Functions //////////////////////////////////////////////////////////


	document.addEventListener("keyup",keyrelese,false);
	document.addEventListener("keydown",keypressed,false);

	function keypressed(e){
		keys[e.keyCode]=true;
		
		
		if(gameplay){


			if((e.keyCode==87)  && (sb>0)){		//add sblocks
				sblock.push([sx-40*Math.cos(angle2),sy-40*Math.sin(angle2),6]);
				sb--;
			}
			if((e.keyCode==80) && (tb>0)){		//add tblocks
				tblock.push([tx-40*Math.cos(angle),ty-40*Math.sin(angle),6]);
				tb--;
			}
		
			if ((e.keyCode==79)&&(tamo>0)){							//t shoots
				tamo--;
				tshell.push([tx + 10,ty + 10,angle]);
				pew2.play();
			}	
			if ((e.keyCode==81)&&(samo>0)){
			samo--;											//s shoots
				sshell.push([sx + 10,sy + 10,angle2]);
				pew2.play();
			}
			if (((e.keyCode==192)||(e.keyCode==83))&&((heltht>0)||(helths>0))) {			//"engine sound"
		
				morm2.play();
			
			}

		}

		else{

			if ((e.keyCode==79)&&(tcoin>5*tsun-1)) {
				tcoin-=tsun*5;
				tspeed*=1.2;
				tsun++;
			}
			if ((e.keyCode==65)&&(scoin>5*ssun-1)) {
				scoin-=ssun*5;
				sspeed*=1.2;
				ssun++;
			}
			if ((e.keyCode==80)&&(tcoin>8*tdun-1)) {
				tcoin-=tdun*8;
				tdamage*=1.2;
				tdun++;
			}
			if ((e.keyCode==83)&&(scoin>8*sdun-1)) {
				scoin-=sdun*8;
				sdamage*=1.2;
				sdun++;
			}

		}

	}  
	function keyrelese(e){
		keys[e.keyCode]=false; 
	}

	function act() { // central function, is carried out at frame rate frequency
		
		//document.getElementById("pasta1").innerHTML = keys;
		if (keys[186]){
			angle=angle-0.1;
		}
		if(keys[222]){
			angle=angle+0.1;
		}
		if(keys[192]){
			T1move();
		}
		if (keys[65]){
			angle2=angle2-0.1;
		}
		if(keys[68]){
			angle2=angle2+0.1;
		}
		if(keys[83]){
			
			T2move();
		} 
		
		shellmove();
		
		
		
		
		var d1 = new Date();
		

		
		print();
		
		
		if(startsequence){	
			var b = new Date();
			var n2 = b.getSeconds();
			ctx.beginPath();
			ctx.moveTo(0,500);
			ctx.lineTo(500,0);
			ctx.stroke();
			if(n2<n){n2+=60;
			}
			if(n2-n>20){
				startsequence = false;
			}
		}
		
		//document.getElementById("p2").innerHTML=d1.toLocaleTimeString();
		if (heltht<=0){
		
			tune1.pause();
			tune2.pause();
			tune3.pause();
			tune4.pause();
			tune5.pause();
			tune6.pause();
			tune7.pause();		
			
			gameplay = false;
			clearTimeout(time);
			wins--;
			Evil1.play();
			if (roundNo==7) {
				winscreen(); 			
			}
			else {
				ctx.drawImage(greenwins,0,0,500,500); 
				scoin+=15;
				time3 = setInterval(upgrades,30);
				
			}
			
		}	
		if (helths<=0){
		
			tune1.pause();
			tune2.pause();
			tune3.pause();
			tune4.pause();
			tune5.pause();
			tune6.pause();
			tune7.pause();
			
			gameplay = false;
			clearTimeout(time);
			wins++;
			Evil2.play();
			if (roundNo==7) {
				winscreen(); 		
			}
			else {
			ctx.drawImage(redwins,0,0,500,500);
			tcoin+=15;
			time3 = setInterval(upgrades,30);
			}

		}
	}	
	function T1move() { // dictates the motion of t
		var blocked = false; // evaluates wheather t is blocked, by default it is set to false
		// are blocks in the way?
		for(var k=0;k<sblock.length;k++){
			if ((Math.abs(tx + tspeed*Math.cos(angle)-sblock[k][0])<30)&&(Math.abs(ty + tspeed*Math.sin(angle)-sblock[k][1])<30)){
				blocked=true; 
			}
		}
		for(var k=0;k<tblock.length;k++){
			if ((Math.abs(tx + tspeed*Math.cos(angle)-tblock[k][0])<30)&&(Math.abs(ty + tspeed*Math.sin(angle)-tblock[k][1])<30)){
				blocked=true; 
			}
		}
		// edge of board?
		if(((tx + tspeed*Math.cos(angle) > 470)||(tx + tspeed*Math.cos(angle) < 0))||((ty + tspeed*Math.sin(angle) > 470)||(ty + tspeed*Math.sin(angle) < 0))){
			blocked = true;
		}
		
		// diagonal line?
		if ((startsequence)&&(ty + tspeed*Math.sin(angle)+tx + tspeed*Math.cos(angle)-447 > 0)){
			blocked = true;
		}
		// moves normally if not blocked
		if (blocked==false){
			tx += tspeed*Math.cos(angle);
			ty += tspeed*Math.sin(angle);
		}
		var spliced=[];
		// Ammo
		for(var k=0;k<A.length;k++){
			if ((Math.abs(tx-5-A[k][0])<35)&&(Math.abs(-5+ty-A[k][1])<35)){
				tamo+=5; 
				reload.play();
				spliced.push(k);
			}
		}
		for (var i=spliced.length-1; i>-1;i--){
			A.splice(spliced[i],1);
				
		}
		var spliced=[];
		//Money
		for(var k=0;k<M.length;k++){
			if ((Math.abs(tx-5-M[k][0])<35)&&(Math.abs(-5+ty-M[k][1])<35)){
				tcoin+=2; 
				coin2.play();
				spliced.push(k);
			}
		}
		for (var i=spliced.length-1; i>-1;i--){
			M.splice(spliced[i],1);
				
		}
	}
	function T2move() {	// dictates the motion of s
		var blocked = false; // see T1move comments
		for(var k=0;k<tblock.length;k++){
			if ((Math.abs(sx + sspeed*Math.cos(angle2)-tblock[k][0])<30)&&(Math.abs(sy + sspeed*Math.sin(angle2)-tblock[k][1])<30)){
				blocked=true;
			}
		}
		for(var k=0;k<sblock.length;k++){
			if ((Math.abs(sx + sspeed*Math.cos(angle2)-sblock[k][0])<30)&&(Math.abs(sy + sspeed*Math.sin(angle2)-sblock[k][1])<30)){
				blocked=true;
			}
		}
		
		if(((sx + sspeed*Math.cos(angle2) > 470)||(sx + sspeed*Math.cos(angle2) < 0))||((sy + sspeed*Math.sin(angle2) > 470)||(sy + sspeed*Math.sin(angle2) < 0))){
			blocked = true;
		}
		
		if ((startsequence)&&(sy + sspeed*Math.sin(angle2)+sx + sspeed*Math.cos(angle2)-493 < 0)){
			blocked = true;
		}
		
		if (blocked==false){
			sx += sspeed*Math.cos(angle2);
			sy += sspeed*Math.sin(angle2);
			
		}
		var spliced=[];
		
		for(var k=0;k<A.length;k++){
			if ((Math.abs(sx-5-A[k][0])<35)&&(Math.abs(-5+sy-A[k][1])<35)){
				samo+=5; 
				reload.play();
				spliced.push(k);
			}
		}
		for (var i=spliced.length-1; i>-1;i--){
			A.splice(spliced[i],1);
				
		}
		var spliced=[];
		
		for(var k=0;k<M.length;k++){
			if ((Math.abs(sx-5-M[k][0])<35)&&(Math.abs(-5+sy-M[k][1])<35)){
				scoin+=2; 
				coin2.play();
				spliced.push(k);
			}
		}
		for (var i=spliced.length-1; i>-1;i--){
			M.splice(spliced[i],1);
				
		}
	}	
	function shellmove() {	// dictates the motion of all shells
		
		//this function deleats any shells that are blocked or
		//out of play, it then moves all remaining shells forward.
		
		if(startsequence){ // diagonal line
			var spliced = [];
			for(var i1=0; i1<tshell.length;i1++) {
				if(tshell[i1][1] +tshell[i1][0] -470 > 0){
					spliced.push(i1);
				}
			}
			for (var i=spliced.length-1; i>-1;i--){
				tshell.splice(spliced[i],1);
				
			}
			var spliced = [];
			for(var i1=0; i1<sshell.length;i1++) {
				if(sshell[i1][1] +sshell[i1][0] -508 < 0){
					spliced.push(i1);
				}
			}
			for (var i=spliced.length-1; i>-1;i--){
				sshell.splice(spliced[i],1);
				
			}
		}
		
		
		// checks obstruction of t shells by s blocks.
		var spliced=[]; // stores all shells to be removed
		for(var i1=0; i1<tshell.length;i1++) {
			//near block
			for(var k=0;k<sblock.length;k++){
				if ((Math.abs(tshell[i1][0]-sblock[k][0]-10)<20)&&(Math.abs(tshell[i1][1]-sblock[k][1]-10)<20)){
					if(i1!=spliced[spliced.length-1]){
						spliced.push(i1);
						sblock[k][2]-= tdamage;
					}
				}			
			} 
			//near enemy
			if ((Math.abs(tshell[i1][0]-sx-10)<20)&&(Math.abs(tshell[i1][1]-sy-10)<20)){
				if(i1!=spliced[spliced.length-1]){
					spliced.push(i1);
					helths-=tdamage;
				}
			}
			//out of play
			if (((tshell[i1][0] > 500)||(tshell[i1][0] < - 10))||((tshell[i1][1] > 500)||(tshell[i1][1]< -10))){
				if(i1!=spliced[spliced.length-1]){
					spliced.push(i1);
				}
			}
		}
		for (var i=spliced.length-1; i>-1;i--){ //removing
			tshell.splice(spliced[i],1);
			
		}
		
		
		// checking obstruction of s shells by t blocks.
		var spliced=[];
		for(var i1=0; i1<sshell.length;i1++) {
			//near block
			for(var k=0;k<tblock.length;k++){
				if ((Math.abs(sshell[i1][0]-tblock[k][0]-10)<20)&&(Math.abs(sshell[i1][1]-tblock[k][1]-10)<20)){
					if(i1!=spliced[spliced.length-1]){
						spliced.push(i1);
						tblock[k][2]-=sdamage;
					}
				}			
			} 
			//near enemy
			if ((Math.abs(sshell[i1][0]-tx-10)<20)&&(Math.abs(sshell[i1][1]-ty-10)<20)){
				if(i1!=spliced[spliced.length-1]){
					spliced.push(i1);
					heltht-=sdamage;
				}
			}
			//out of play
			if (((sshell[i1][0] > 500)||(sshell[i1][0] < - 10))||((sshell[i1][1] > 500)||(sshell[i1][1]< -10))){
				if(i1!=spliced[spliced.length-1]){
					spliced.push(i1);
				}
			}
		}  		
		for (var i=spliced.length-1; i>-1;i--){ //removing
			sshell.splice(spliced[i],1);
		}	
		
		
		
		// removing destroyed blocks
		var spliced=[];
		for(var i=0; i<sblock.length;i++){
			if (sblock[i][2]<1) {
				
				spliced.push(i);
				
			}	
		}
		for (var i=spliced.length-1; i>-1;i--){
			sblock.splice(spliced[i],1);
		}
		var spliced=[];
		for(var i=0; i<tblock.length;i++){
			if (tblock[i][2]<1) {
				spliced.push(i);
			}	
		}
		for (var i=spliced.length-1; i>-1;i--){
			tblock.splice(spliced[i],1);
		}

		
		
		//moving all remaining shells
		for(var i2=0; i2<tshell.length;i2++) {
			tshell[i2][0]+=10*Math.cos(tshell[i2][2]);
			tshell[i2][1]+=10*Math.sin(tshell[i2][2]);
		}
		for(var i2=0; i2<sshell.length;i2++) {
			sshell[i2][0]+=10*Math.cos(sshell[i2][2]);
			sshell[i2][1]+=10*Math.sin(sshell[i2][2]);	
		}
	}
	function print(){ 	// prints all objects (tanks, blocks, shells...) to canvas
		ctx.fillStyle= "#3399ff";
		ctx.fillRect(0,0,500,500); // background
		for(var j=0;j<tshell.length;j++){ //shells
			ctx.drawImage(S2,tshell[j][0],tshell[j][1],10,10);
		}
		for(var j=0;j<sshell.length;j++){
			ctx.drawImage(S1,sshell[j][0],sshell[j][1],10,10);
		}
		ctx.fillStyle="#000000";
		ctx.fillRect(500,0,100,500);
		ctx.fillStyle="#cc0000";
		ctx.fillRect(510,500,40,-10*heltht);
		ctx.fillStyle="#33cc33";
		ctx.fillRect(555,500,40,-10*helths);
		ctx.fillStyle="#ffffff";
		ctx.fillText(tamo,525,30);
		ctx.fillText(samo,570,30);
		ctx.fillText(tcoin,525,50);
		ctx.fillText(scoin,570,50);
		
		
		
		ctx.drawImage(T1,tx,ty,30,30); // tank bodies
		ctx.drawImage(T2,sx,sy,30,30); 
		// tank guns
		ctx.drawImage(G1,tx+8+22.5*Math.cos(angle),ty+8+22.5*Math.sin(angle),15,15);
		ctx.drawImage(G2,sx+8+22.5*Math.cos(angle2),sy+8+22.5*Math.sin(angle2),15,15);
		
		for(var i=0;i<tblock.length;i++){ // blocks
			ctx.drawImage(B1,tblock[i][0],tblock[i][1],30,30);
		}
		for(var j=0;j<sblock.length;j++){
			ctx.drawImage(B2,sblock[j][0],sblock[j][1],30,30);
		}
		for(var i=0;i<A.length;i++){ //amo
			ctx.drawImage(amo,A[i][0],A[i][1],40,40);
		}
		for(var i=0;i<M.length;i++){ //money
			ctx.drawImage(coin,M[i][0],M[i][1],40,40);
		}
	} 

	function amon() { // central function, is carried out at frame rate frequency
		M.push([Math.random()*460,Math.random()*460]);
		A.push([Math.random()*460,Math.random()*460]);
		tamo+=2;
		samo+=2;
	}	

	function upgrades() { // Active between rounds, this function manages graphics and resets values

		ctx.fillStyle="#000000"; // displaying upgrade options
		ctx.fillRect(500,0,100,500);
		ctx.fillStyle="#ffffff";
		ctx.fillText("RED",505,30);
		ctx.fillText(tcoin,505,60);
		ctx.fillText("Green",505,110);
		ctx.fillText(scoin,505,140);
		
		ctx.fillText("speed",505,180);
		ctx.fillText("O/A",505,210);
		ctx.fillText("Damage",505,240);
		ctx.fillText("P/S",505,270);
		ctx.fillText("Press",505,330);
		ctx.fillText("space for",505,360);
		ctx.fillText("Round "+(roundNo+1),505,390);

		
		if (keys[32]) {

			roundNo++;
			clearTimeout(time3);
			
			gameplay = true;
			
			if(roundNo == 2){
			tune2.play();
			}else
			if(roundNo == 3){
			tune3.play();
			}else
			if(roundNo == 4){
			tune4.play();
			}else
			if(roundNo == 5){
			tune5.play();
			}else
			if(roundNo == 6){
			tune6.play();
			}else
			if(roundNo == 7){
			tune7.play();
			}
			
			
			heltht=50;
			helths=50;
			startsequence=true;
			tx = 20;
			ty = 20;	
			sx = 450;
			sy = 450;
			tb=20;
			sb=20;
			tamo=0;
			samo=0;
			tshell=[];
			sshell=[];
			
			d = new Date();
			n = d.getSeconds();
			
			A = [];
			M=[];
			tblock = [];	
			sblock = [];

			time = setInterval(act, 30);
			
					
		}
		
	}

	function winscreen() { // called after 7th round
		if (wins>0) {
			ctx.drawImage(rwin,0,0,600,500);
		}
		if (wins<0) {
			ctx.drawImage(gwin,0,0,600,500);
		}
	}

}
