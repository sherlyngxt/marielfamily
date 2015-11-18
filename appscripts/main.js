require(
   // Use this library to "fix" some annoying things about Raphel paper and graphical elements:
    //     a) paper.put(relement) - to put an Element created by paper back on a paper after it has been removed
    //     b) call element.addEventListener(...) instead of element.node.addEventListner(...)
    [],  // include a custom-built library
    function () {

        console.log("yo, I'm alive!");

//CREATE PAPER LAYERS
        var paper = Raphael("mySVGCanvas", 1200,2150);
        var paper2 = Raphael("paper2", '100%', '100%');
        var paper5 = Raphael("paper5", '100%', '100%');
        var paper6 = Raphael("paper6", '100%', '100%');
        var paper7 = Raphael("paper7", '100%', '100%');
        var paper8 = Raphael("paper8", '100%', '100%');
        var paper3 = Raphael("paper3", '100%', '100%');
        var paper4 = Raphael("paper4", '100%', '100%');
        var paper9 = Raphael("paper9", '100%', '100%');


        var canvas = document.getElementById("mySVGCanvas");
        var bridget = document.getElementById("paper2");
        var black = document.getElementById("paper3");
        var header = document.getElementById("paper4"); 
        var theresa = document.getElementById("paper6");
        var anthony = document.getElementById("paper5");
        var closesign = document.getElementById("paper7");
        var ethno = document.getElementById("paper8");
        var skipbutton = document.getElementById("paper9");

        var pWidth = paper.canvas.offsetWidth;
        var pHeight = paper.canvas.offsetHeight;
        console.log(pWidth);
        console.log(pHeight);

//CREATE IMAGES AND OBJECTS
        
        var skip = paper7.image("css/resources/skip.png", 0,0,100,54);

        var button1 = paper4.image("css/resources/button1.png", 0, 35, 55, 55);
        var button2 = paper4.image("css/resources/button2.png", 50, 35, 55, 55);
        var button3 = paper4.image("css/resources/button3.png", 103, 35, 55, 55);
        var button4 = paper4.image("css/resources/button4.png", 150, 35, 55, 55);

        var song = new Audio('css/resources/song.mp3');
        song.volume = 1;

        var spooky = new Audio('css/resources/spooky.mp3');
        spooky.volume = 0;

        var sea = new Audio('css/resources/sea.mp3');
        sea.volume = 0;

        var ai = new Audio('css/resources/ai.mp3');
        ai.volume = 0;

        var bei = new Audio('css/resources/bei.mp3');
        bei.volume = 0;

        var kit = new Audio('css/resources/kitchen.mp3');
        kit.volume = 0;

        var flip = new Audio ('css/resources/flip.mp3');
        flip.volume = 0.65;

        var ant = new Audio('css/resources/ant.mp3');
        ant.volume = 0;

        var menu = new Audio ('css/resources/menu.mp3');
        menu.volume = 0.9;

        var title = paper4.image("css/resources/title.png", 251, 0, 698, 171);

        var play = document.getElementById("play");
        play.addEventListener('mousemove', function(ev){
            play.style.cursor="pointer";
        })  

        var video = document.getElementById("video");
        var video3 = document.getElementById("video3");

        var pic1 = paper.image('css/resources/pic1.png', 680,100,228,287);
        var pic2 = paper.image('css/resources/pic2.png', 370,742,205,250);
        var pic3 = paper.image('css/resources/pic3.png', 593,742,212,245);
        var pic4 = paper.image('css/resources/pic4.png', 265,100,251,402);
        var family = paper.image('css/resources/familyportrait.png', 284.5, 1190, 631, 458);
        
        var greyr1 = paper.image('css/resources/grey.png', 820, 460, 125, 167);
        var greyr2 = paper.image('css/resources/grey.png', 985, 460, 125, 167);
        var greyr3 = paper.image('css/resources/grey.png', 800, 790, 125, 167);
        var greyr4 = paper.image('css/resources/grey.png', 935, 790, 125, 167);
        var greyr5 = paper.image('css/resources/grey.png', 1070, 790, 125, 167);
        var greyl1 = paper.image('css/resources/grey.png', 230, 790, 125, 167);
        var greyl2 = paper.image('css/resources/grey.png', 80, 790, 125, 167);
        
        var anna = paper.image('css/resources/annota.png', 67, 962, 1122, 47);
        var annb = paper.image('css/resources/annb.png', 330, 1622, 392, 66);
        var annc = paper.image('css/resources/annc.png', 818, 625, 295, 58);
        var annd = paper.image('css/resources/annd.png', 280, 421, 336, 117);
        var anne = paper.image('css/resources/anne.png', 715, 367, 129, 49);

        var linel1 = paper.path("M328,536 L328,571.5");
        var linel2 = paper.path("M450,536 L450,571.5");
        var linel3 = paper.path("M328,570 L450,570");
        var linel4 = paper.path("M389,570 L389,685");
        var linel5 = paper.path("M142.5,686.5 L472.5,686.5");
        var linel6 = paper.path("M142.5,685 L142.5,792");
        var linel7 = paper.path("M292.5,685 L292.5,792");
        var linel8 = paper.path("M472.5,685 L472.5,768");

        var liner1 = paper.path("M881,710 L1056.5,710");
        var liner2 = paper.path("M882.5,669 L882.5,710");
        var liner3 = paper.path("M1055,669 L1055,710");
        var liner4 = paper.path("M968.75,710 L968.75,745");
        var liner5 = paper.path("M699,745 L1132.5,745");
        var liner6 = paper.path("M699,743.5 L699,768");
        var liner7 = paper.path("M862.5,743.5 L862.5,792");
        var liner8 = paper.path("M997.5,743.5 L997.5,792");
        var liner9 = paper.path("M1132.5,743.5 L1132.5,792");

        var lineb1 = paper.path("M472.5,1012 L472.5,1065");
        var lineb2 = paper.path("M699,1012 L699,1065");
        var lineb3 = paper.path("M472.5,1063.5 L699,1063.5");
        var lineb4 = paper.path("M585.75,1063.5 L585.75,1215");
        var lineb5 = paper.path("M465,1110 L750,1110");
        var lineb6 = paper.path("M465,1108.5 L465,1215");
        var lineb7 = paper.path("M520,1108.5 L520,1215");
        var lineb8 = paper.path("M700,1108.5 L700,1215");
        var lineb9 = paper.path("M750,1108.5 L750,1215");

        var writej1 = paper.image('css/resources/writea.png', 140, 180, 132, 67);
        var writej2 = paper.image('css/resources/writeb.png', 100, 300, 165, 67);
        var writej3 = paper.image('css/resources/writec.png', 190, 50, 122, 53);
        
        var writeb1 = paper.image('css/resources/write2.png', 500, 195, 144, 59);
        var writeb2 = paper.image('css/resources/write3.png', 510, 270, 99, 37);
        var writeb3 = paper.image('css/resources/write4.png', 510, 330, 113, 44);

        var writet1 = paper.image('css/resources/write5.png', 895, 170, 190, 59);
        var writet2 = paper.image('css/resources/write6.png', 895, 250, 178, 70);

        var writec1 = paper.image('css/resources/write7.png', 385, 45, 433, 72);
        var writec2 = paper.image('css/resources/write12.png', 70, 520, 177, 103);
        var writec3 = paper.image('css/resources/write11.png', 680, 500, 138, 100);
        var writec4 = paper.image('css/resources/write8.png', 520, 680, 138, 90);
        var writec5 = paper.image('css/resources/write10.png', 800, 1010, 144, 53);
        var writec6 = paper.image('css/resources/write9.png', 120, 1080, 304, 174);

        var div = document.getElementById("text");

//CREATE FUNCTIONS
        var nudgeboth = function (a){
            var originalForm = a.transform();
            hoverFunc = function() {
                a.animate({transform:  originalForm.toString() + "s1.05,1.05"}, 600, 'bounce');
            };
            hideFunc = function() {
                a.animate({transform: originalForm.toString()}, 600, 'bounce');       
            };
            a.hover(hoverFunc, hideFunc);           
            return nudgeboth;
        }


       var tilt = function (a){
            hoverFunc = function() {
                a.animate({transform: "r" + 10}, 100);
            };
            hideFunc = function() {
                a.animate({transform: "r" + 0}, 100);    
            };
            a.hover(hoverFunc, hideFunc);           
            return tilt;
        }

       var pointerMove = function (a){
            a.node.addEventListener('mousemove', function(ev){
                a.node.style.cursor="pointer";
            });          
            return pointerMove;
        }

        var bsound = function (a){
            a.node.addEventListener('mouseover', function(ev){
                menu.play();
            })
            return bsound;
        }

        var pointerOver = function (a){
            a.node.addEventListener('mouseover', function(ev){
                a.node.style.cursor="pointer";
            });             
            return pointerOver;
        }

        var scribble = function (a){
            a.animate({
                'opacity': 1
            }, 600);
            return scribble;
        }

        var photo = function (a){
            a.animate({
                'opacity': 1
            }, 1000);
            return photo;
        }

        var trans = function (a){
            a.attr({
                'opacity': 0
            }); 
            return trans;
        }

        var lines = function (a){
            a.attr({
                'opacity': 0,
                'stroke-width': 3
            }); 
            return lines;
        }

        function main (){
            console.log("main page");
            title.show();
            video.style.visibility = "hidden"; 
            video3.style.visibility = "hidden"; 
        }


        function hide (){
            console.log("hide all");
            title.hide();
            video.style.visibility = "hidden"; 
            video3.style.visibility = "hidden"; 
        }


        function effect (){

            pic1.node.addEventListener('mouseover', function(ev){
                pic1.node.style.cursor = "pointer";
                flip.play();
            });   

            pic3.node.addEventListener('mouseover', function(ev){
                pic3.node.style.cursor = "pointer";
                flip.play();
            }); 

            pic4.node.addEventListener('mouseover', function(ev){
                pic4.node.style.cursor = "pointer";
                flip.play();
            });      



            nudgeboth(pic1);
            nudgeboth(pic3);
            nudgeboth(pic4);
        }
      

        function unfade() {
            canvas.style.overflow = "hidden";
            main();
            play.style.visibility = "hidden";
            video.style.visibility = "hidden"; 
            
            audiofade();            
            songplay();

            black.style.opacity = "0";
            black.style.transition = "opacity 4s";

            skipbutton.style.visibility = "hidden";
            
            skip.hide();

            button1.show();
            button2.show();
            button3.show();
            button4.show();

            title.animate({
                'opacity': 1
            },1000)    

            setTimeout(function(){
                photo(pic4);
                scribble(annd);
            },1500);

            setTimeout(function(){
                scribble(writej1);
            },2500);

            setTimeout(function(){
                scribble(writej2);
            },3500);

            setTimeout(function(){
                scribble(writej3);
            },4500);

            setTimeout(function(){
                scribble(writeb1);
            },5500);

            setTimeout(function(){
                scribble(writeb2);
            },6500);

            setTimeout(function(){
                scribble(writeb3);
            },7500);

            setTimeout(function(){
                photo(pic1);
                photo(anne);
            },8750);

            setTimeout(function(){
                scribble(writet1);
            },9750);

            setTimeout(function(){
                scribble(writet2);
            },10750);

            setTimeout(function(){
                scribble(writec1);
            },11750);

            setTimeout(function(){
                scribble(linel1);
                scribble(linel2);
                scribble(linel3);
                scribble(linel4);
                scribble(linel5);
                scribble(linel6);
                scribble(linel7);
                scribble(linel8);
                scribble(writec2);
            },13750);

            setTimeout(function(){
                photo(pic2);
                photo(greyl1);
                photo(greyl2);
            },14750);
    
            setTimeout(function(){
                photo(greyr1);
                photo(greyr2);
                photo(annc);
            },16750);

            setTimeout(function(){
                scribble(writec3);
            },17750);

            setTimeout(function(){
                scribble(liner1);
                scribble(liner2);
                scribble(liner3);
                scribble(liner4);
                scribble(liner5);
                scribble(liner6);
                scribble(liner7);
                scribble(liner8);
                scribble(liner9);
            },18750);

            setTimeout(function(){
                photo(greyr3);
                photo(greyr4);
                photo(greyr5);   
                photo(pic3);               
            },19750);

            setTimeout(function(){
                photo(anna);           
            },20750);

            setTimeout(function(){
                scribble(writec4);
                scribble(writec5);             
            },21750);
 
            setTimeout(function(){
                scribble(lineb1);
                scribble(lineb2);
                scribble(lineb3);
                scribble(lineb4);
                scribble(lineb5);
                scribble(lineb6);
                scribble(lineb7);
                scribble(lineb8);
                scribble(lineb9);
            },22750);

            setTimeout(function(){
                photo(family); 
                photo(annb);             
            },23750);

            setTimeout(function(){
                scribble(writec6);              
            },24750);

            setTimeout(function(){
                canvas.style.overflow = "auto";
                effect();
            },100);              
        }


        function bgfade() {
            canvas.style.opacity = "0";
            canvas.style.transition = "opacity 1.5s";  
            header.style.opacity = "0";
            header.style.transition = "opacity 1.5s";
            canvas.style.zIndex = "-1"; 
            header.style.zIndex = "-1"; 
            songfade();                  
        }


        function exit() {
            canvas.style.opacity = "1";
            canvas.style.transition = "opacity 1.5s"; 
            canvas.style.zIndex = "0";  
            header.style.zIndex = "0";  
            header.style.opacity = "1";
            header.style.transition = "opacity 1.5s";
            canvas.style.overflow = "auto"; 
            console.log("click on exit");                                          
            div.style.visibility = "hidden"; 
            songplay();
        }

        var mainon;

        function audiofade() {
            var fadeAudio = setInterval(function () {          
                if (document.getElementById("video").currentTime >= 0) {
                    document.getElementById("video").volume -= 0.2;
                }
            }, 200);            
            setTimeout(function(){
                clearInterval(fadeAudio); 
                document.getElementById("video").pause();
            }, 1000);             
        }

        function songfade() {
            var fadeAudio = setInterval(function () {          
                if (song.currentTime >= 0) {
                    song.volume -= 0.2;
                }
            }, 200);           
            setTimeout(function(){
                clearInterval(fadeAudio); 
                song.pause();
            }, 1000);                      
        }

        function songplay() {
            song.load();
            song.volume = 1;
            song.play();
            console.log("songplay" + song.volume);                       
        }




        var spookyon; 

        function spookyfade() {
            if (spookyon === "on") { 
                var fadeAudio = setInterval(function () {          
                    if (spooky.currentTime >= 0) {
                        spooky.volume -= 0.07;
                        console.log("spookyplay" + spooky.volume); 
                    }
                }, 200);           
                setTimeout(function(){
                    clearInterval(fadeAudio); 
                    spookyon = "off";
                    spooky.pause();
                }, 1600);   
            }                   
        }

        function spookyplay() {
            spookyon = "on";
            spooky.load();
            spooky.volume = 0;
            spooky.play();
            var fadeAudio = setInterval(function () {          
                    spooky.volume += 0.07;
                    console.log("spookyplay" + spooky.volume); 
            }, 200);           
            setTimeout(function(){
                clearInterval(fadeAudio); 
            }, 1800);   
            spooky.loop = true;                    
        }

        var seaon; 

        function seaplay() {
            seaon = "on";
            sea.load();
            sea.volume = 0;
            sea.play();
            var fadeAudio = setInterval(function () {          
                sea.volume += 0.07;
                console.log("seaplay" + sea.volume);
            }, 200);           
            setTimeout(function(){
                clearInterval(fadeAudio); 
            }, 1000);
            sea.loop = true;                             
        }


        function seafade() {
            if (seaon === "on") {
                var fadeAudio = setInterval(function () {          
                    if (sea.currentTime >= 0) {
                        sea.volume -= 0.07;
                        console.log("seafade" + sea.volume); 
                    }
                }, 200);           
                setTimeout(function(){
                    clearInterval(fadeAudio); 
                    sea.pause();
                    seaon = "off";
                }, 800);
            }                      
        }


        var aion;

        function aiplay() {
            aion = "on";
            ai.load();
            ai.volume = 0;
            ai.play();
            var fadeAudio = setInterval(function () {          
                ai.volume += 0.07;
                console.log("aiplay" + ai.volume);
            }, 200);           
            setTimeout(function(){
                clearInterval(fadeAudio); 
            }, 1200); 
            ai.loop = true;                            
        }

        function aifade() {
            if (aion === "on") { 
                var fadeAudio = setInterval(function () {          
                    if (ai.currentTime >= 0) {
                        ai.volume -= 0.07;
                        console.log("aifade" + ai.volume); 
                    }
                }, 200);           
                setTimeout(function(){
                    clearInterval(fadeAudio); 
                    ai.pause();
                    aion = "off";
                }, 1000);
            }                  
        }


        var beion;

        function beiplay() {
            beion = "on";
            bei.load();
            bei.volume = 0;
            bei.play();
            var fadeAudio = setInterval(function () {          
                bei.volume += 0.1;
                console.log("beiplay" + bei.volume);
            }, 200);           
            setTimeout(function(){
                clearInterval(fadeAudio); 
            }, 1200);    
            bei.loop = true;         
        }

        function beifade() {
            if (beion === "on") { 
                var fadeAudio = setInterval(function () {          
                    if (bei.currentTime >= 0) {
                        bei.volume -= 0.1;
                        console.log("beifade" + bei.volume); 
                    }
                }, 200);           
                setTimeout(function(){
                    clearInterval(fadeAudio); 
                    bei.pause();
                    beion = "off";
                }, 1000);
            }                  
        }

        var kiton;

        function kitplay() {
            kiton = "on";
            kit.load();
            kit.volume = 0;
            kit.play();
            var fadeAudio = setInterval(function () {          
                kit.volume += 0.1;
                console.log("kitplay" + kit.volume);
            }, 200);           
            setTimeout(function(){
                clearInterval(fadeAudio); 
            }, 1400);
            kit.loop = true;                             
        }

        function kitfade() {
            if (kiton === "on") { 
                var fadeAudio = setInterval(function () {          
                    if (kit.currentTime >= 0) {
                        kit.volume -= 0.1;
                        console.log("kitfade" + kit.volume); 
                    }
                }, 200);           
                setTimeout(function(){
                    clearInterval(fadeAudio); 
                    kit.pause();
                    kiton = "off";
                }, 1200);
            }                  
        }

        var anton;

        function antplay() {
            anton = "on";
            ant.load();
            ant.volume = 0;
            ant.play();
            var fadeAudio = setInterval(function () {          
                ant.volume += 0.1;
                console.log("antplay" + ant.volume);
            }, 200);           
            setTimeout(function(){
                clearInterval(fadeAudio); 
            }, 1400);
            ant.loop = true;                             
        }

        function antfade() {
            if (anton === "on") { 
                var fadeAudio = setInterval(function () {          
                    if (ant.currentTime >= 0) {
                        ant.volume -= 0.1;
                        console.log("antfade" + ant.volume); 
                    }
                }, 200);           
                setTimeout(function(){
                    clearInterval(fadeAudio); 
                    ant.pause();
                    anton = "off";
                }, 1200);
            }                  
        }

        //BEGIN FRONT PAGE FUNCTIONALITY
        trans(title);
        button1.hide();
        button2.hide();
        button3.hide();
        button4.hide();       
        canvas.style.overflow = "hidden";
        canvas.style.visibility = "hidden";
        bridget.style.visibility = "hidden";
        theresa.style.visibility = "hidden";
        anthony.style.visibility = "hidden";
        closesign.style.visibility = "hidden";
        ethno.style.visibility = "hidden";
        video.style.visibility = "hidden";
        video3.style.visibility = "hidden"; 
        black.style.opacity = "1";

        tilt(button1);
        tilt(button2);
        tilt(button3);
        tilt(button4);

        pointerMove(button1);
        pointerMove(button2);
        pointerMove(button3);
        pointerMove(button4);
        pointerMove(skip);

        bsound(button1);
        bsound(button2);
        bsound(button3);
        bsound(button4);
        bsound(skip);
    
        trans(writej1);
        trans(writej2);
        trans(writej3);
        trans(writeb1);
        trans(writeb2);
        trans(writeb3);
        trans(writet1);
        trans(writet2);
        trans(writec1);
        trans(writec2);
        trans(writec3);
        trans(writec4);
        trans(writec5);
        trans(writec6);
        trans(pic1);
        trans(pic2);
        trans(pic3);
        trans(pic4);
        trans(family);
        trans(greyr1);
        trans(greyr2);
        trans(greyr3);
        trans(greyr4);
        trans(greyr5);
        trans(greyl1);
        trans(greyl2);
        trans(anna);
        trans(annb);
        trans(annc);
        trans(annd);
        trans(anne);

        lines(linel1);
        lines(linel2);
        lines(linel3);
        lines(linel4);
        lines(linel5);
        lines(linel6);
        lines(linel7);
        lines(linel8);
        lines(liner1);
        lines(liner2);
        lines(liner3);
        lines(liner4);
        lines(liner5);
        lines(liner6);
        lines(liner7);
        lines(liner8);
        lines(liner9);
        lines(lineb1);
        lines(lineb2);
        lines(lineb3);
        lines(lineb4);
        lines(lineb5);
        lines(lineb6);
        lines(lineb7);
        lines(lineb8);
        lines(lineb9);

        
    
        //CLICK SKIP BUTTON
        skip.node.addEventListener('click', function(ev){  
            canvas.style.visibility = "visible";
            unfade();
            console.log("skip");
        });


       //CLICK PLAY BUTTON 
        play.addEventListener('click', function(ev){
            video.style.visibility = "visible";
            play.style.visibility = "hidden";
            document.getElementById("video").play();
            document.getElementById("video").volume = 1; 

                //CLICK ENTER BUTTON
                var enter = setTimeout(function(){
                    console.log("timer works");
                    video.addEventListener('mousemove', function(ev){
                        video.style.cursor="pointer";
                        menu.play();
                    }) 
                    video.addEventListener('click', function(ev){
                        unfade();     
                        console.log("enter");
                        canvas.style.visibility = "visible";
                    })
                }, 67500);  
        });


            //CLICK VIDEO BUTTON
            button3.node.addEventListener('click', function(ev){   
                canvas.style.overflow = "hidden";
                video.style.visibility = "visible";
                document.getElementById("video").load();
                document.getElementById("video").play(); 
                document.getElementById("video").controls = true;
                document.getElementById("video").volume = 1;
                bgfade();
                closesign.style.visibility = "visible";
                closesign.style.zIndex = "1";
                var tie = paper7.image("css/resources/exit.png", 0, 0, 55, 55);
                tie.node.addEventListener('mousemove', function(ev){
                    tie.node.style.cursor = "pointer";
                });            
                tie.node.addEventListener('click', function(ev){
                    exit();
                    document.getElementById("video").controls = false;
                    video.style.visibility = "hidden"; 
                    audiofade();
                    tie.hide();
                    closesign.style.visibility = "hidden";                      
                });  
            });

            button2.node.addEventListener('click', function(ev){   
                canvas.style.overflow = "hidden";
                ethno.style.visibility = "visible";
                canvas.style.opacity = "0";
                canvas.style.transition = "opacity 1.5s";  
                header.style.opacity = "0";
                header.style.transition = "opacity 1.5s";
                canvas.style.zIndex = "-1"; 

                var script1 = paper8.image("css/resources/ethn0.png", 242.5, 50, 515, 700);
                var script2 = paper8.image("css/resources/ethn1.png", 242.5, 50, 515, 700);
                var script3 = paper8.image("css/resources/ethn2.png", 242.5, 50, 515, 700);
                var script4 = paper8.image("css/resources/gen1.png", 100, 106, 800, 588);
                var script5 = paper8.image("css/resources/gen2.png", 242.5, 50, 515, 700);
                var script6 = paper8.image("css/resources/gen3.png", 242.5, 50, 515, 700);
                var script7 = paper8.image("css/resources/gen4.png", 242.5, 50, 515, 700);

                var right = paper8.image("css/resources/right.png", 778, 350, 63, 49);
                
                var right2 = paper8.image("css/resources/right.png", 778, 350, 63, 49);
                var left2 = paper8.image("css/resources/left.png", 130, 350, 72, 44);

                var right3 = paper8.image("css/resources/right.png", 778, 350, 63, 49);
                var left3 = paper8.image("css/resources/left.png", 130, 350, 72, 44);

                var right4 = paper8.image("css/resources/right.png", 900, 350, 63, 49);
                var left4 = paper8.image("css/resources/left.png", 15, 350, 72, 44);

                var right5 = paper8.image("css/resources/right.png", 778, 350, 63, 49);
                var left5 = paper8.image("css/resources/left.png", 130, 350, 72, 44);

                var right6 = paper8.image("css/resources/right.png", 778, 350, 63, 49);
                var left6 = paper8.image("css/resources/left.png", 130, 350, 72, 44);

                var left7 = paper8.image("css/resources/left.png", 130, 350, 72, 44);


                function clickr1() {
                    script1.hide();
                    script2.show();
                    right.hide();
                    right2.show();
                    left2.show();
                    pointerMove(right2);
                    pointerMove(left2);
                }

                function clickr2() {
                    script2.hide();
                    script3.show();
                    right2.hide();
                    right3.show()
                    left2.hide();
                    left3.show();
                    pointerMove(right3);
                    pointerMove(left3);
                }

                function clickr3() {
                    script3.hide();
                    script4.show();
                    right3.hide();
                    right4.show();
                    left3.hide();
                    left4.show();
                    pointerMove(right4);
                    pointerMove(left4);
                }

                function clickr4() {
                    script4.hide();
                    script5.show();
                    right4.hide();
                    right5.show();
                    left4.hide();
                    left5.show();
                    pointerMove(left5);
                    pointerMove(right5);
                }

                function clickr5() {
                    script5.hide();
                    script6.show();
                    right5.hide();
                    left5.hide();
                    left6.show();
                    right6.show();
                    pointerMove(left6);
                    pointerMove(right6);
                }

                function clickr6() {
                    script6.hide();
                    script7.show();
                    right6.hide();
                    left6.hide();
                    left7.show();
                    pointerMove(left7);
                }

                function clickl7() {
                    script7.hide();
                    script6.show();
                    right6.show();
                    left6.show();
                    left7.hide();
                    pointerMove(left6);
                    pointerMove(right6);
                }

                function clickl6() {
                    script6.hide();
                    script5.show();
                    right5.show();
                    left5.show();
                    left6.hide();
                    right6.hide();
                    pointerMove(left5);
                    pointerMove(right5);
                }

                function clickl5() {
                    script5.hide();
                    script4.show();
                    right4.show();
                    left4.show();
                    left5.hide();
                    right5.hide();
                    pointerMove(left4);
                    pointerMove(right4);
                }

                function clickl4() {
                    script4.hide();
                    script3.show();
                    right4.hide();
                    right3.show();
                    left3.show();
                    left4.hide();
                    pointerMove(left3);
                    pointerMove(right3);
                }


                function clickl3() {
                    script3.hide();
                    script2.show();
                    right3.hide();
                    right2.show();
                    left2.show();
                    left3.hide();
                    pointerMove(left2);
                    pointerMove(right2);
                }

                function clickl2() {
                    script2.hide();
                    script1.show();
                    right2.hide();
                    right.show();
                    left2.hide();
                    pointerMove(right);
                }


                function scripts() {
                    script1.show();
                    script2.hide();
                    script3.hide();
                    script4.hide();
                    script5.hide();
                    script6.hide();
                    script7.hide();
                    right.show();
                    left2.hide();
                    right2.hide();
                    left3.hide();
                    right3.hide();
                    left4.hide();
                    right4.hide();
                    left5.hide();
                    right5.hide();
                    left6.hide();
                    right6.hide();
                    left7.hide();
                    pointerMove(right);
                    
                    right.node.addEventListener('click', function(ev){
                        clickr1();
                        menu.play();
                    });

                    right2.node.addEventListener('click', function(ev){
                        clickr2();
                        menu.play();
                    });

                    right3.node.addEventListener('click', function(ev){
                        clickr3();
                        menu.play();
                    });

                    right4.node.addEventListener('click', function(ev){
                        clickr4();
                        menu.play();
                    });

                    right5.node.addEventListener('click', function(ev){
                        clickr5();
                        menu.play();
                    });

                    right6.node.addEventListener('click', function(ev){
                        clickr6();
                        menu.play();
                    });

                    left2.node.addEventListener('click', function(ev){
                        clickl2();
                        menu.play();
                    });

                    left3.node.addEventListener('click', function(ev){
                        clickl3();
                        menu.play();
                    });

                    left4.node.addEventListener('click', function(ev){
                        clickl4();
                        menu.play();
                    });

                    left5.node.addEventListener('click', function(ev){
                        clickl5();
                        menu.play();
                    });

                    left6.node.addEventListener('click', function(ev){
                        clickl6();
                        menu.play();
                    });

                    left7.node.addEventListener('click', function(ev){
                        clickl7();
                        menu.play();
                    });
                }


                function scriptshide() {
                    script1.hide();
                    script2.hide();
                    script3.hide();
                    script4.hide();
                    script5.hide();
                    script6.hide();
                    script7.hide();
                    right.hide();
                    left2.hide();
                    right2.hide();
                    left3.hide()
                    right3.hide();
                    left4.hide();
                    right4.hide();
                    left5.hide();
                    right5.hide();
                    left6.hide();
                    right6.hide();
                    left7.hide();
                }

                scripts();

                closesign.style.visibility = "visible";
                closesign.style.zIndex = "1";
                var tie = paper7.image("css/resources/exit.png", 0, 0, 55, 55);
                tie.node.addEventListener('mousemove', function(ev){
                    tie.node.style.cursor = "pointer";
                });


                tie.node.addEventListener('click', function(ev){
                    tie.hide();
                    scriptshide();
                    canvas.style.opacity = "1";
                    canvas.style.transition = "opacity 1.5s"; 
                    canvas.style.zIndex = "0";  
                    header.style.opacity = "1";
                    header.style.transition = "opacity 1.5s";
                    canvas.style.overflow = "auto"; 
                    console.log("click on exit");      
                    closesign.style.visibility = "hidden"; 
                    ethno.style.visibility = "hidden";
                });  
            });


            //CLICK FACEBOOK BUTTON
            button4.node.addEventListener('click', function(ev){
                window.open("https://www.facebook.com/sharer/sharer.php?u=http%3A//sherlyngxt.github.io/family/");
            });

    button1.node.addEventListener('click', function(ev){ 
        console.log("click files");
        ethno.style.zIndex = "1";   
        
                ethno.style.visibility = "visible";
                canvas.style.overflow = "hidden"; 
                div.style.visibility = "hidden";

                canvas.style.opacity = "0";
                canvas.style.transition = "opacity 1.5s";  
                header.style.opacity = "0";
                header.style.transition = "opacity 1.5s";
                canvas.style.zIndex = "-1"; 
            

                var script1 = paper8.image("css/resources/about1.png", 170, 50, 700, 700); 
                var script2 = paper8.image("css/resources/about2.png", 170, 50, 700, 700);
                var script3 = paper8.image("css/resources/about3.png", 170, 50, 700, 700);

                var beginsb = paper8.rect(205, 230, 150, 40);
                var methodsb = paper8.rect(440, 170, 150, 40);
                var creditsb = paper8.rect(695, 120, 150, 40);
                    
                pointerMove(beginsb);
                pointerMove(methodsb);
                pointerMove(creditsb);


                    beginsb.attr({
                        "fill": "white",
                        "opacity": "0"
                    });

                    methodsb.attr({
                        "fill": "white",
                        "opacity": "0"
                    });

                    creditsb.attr({
                        "fill": "white",
                        "opacity": "0"
                    });

                    beginsb.node.addEventListener('click', function(ev){
                        script1.show();
                        script2.hide();
                        script3.hide();
                        menu.play();
                    });

                    methodsb.node.addEventListener('click', function(ev){
                        script1.hide();
                        script2.show();
                        script3.hide();
                        menu.play();
                    });

                    creditsb.node.addEventListener('click', function(ev){
                        script1.hide();
                        script2.hide();
                        script3.show();
                        menu.play();
                    });


                var scriptshide = function() {
                    script1.hide();
                    script2.hide();
                    script3.hide();
                    beginsb.hide();
                    methodsb.hide();
                    creditsb.hide();
                }

                script1.show();
                script2.hide();
                script3.hide();

                var tie = paper8.image("css/resources/exit.png", 880, 100, 55, 55);
                tie.node.addEventListener('mousemove', function(ev){
                    tie.node.style.cursor = "pointer";
                });            
                tie.node.addEventListener('click', function(ev){
                    tie.hide();
                    scriptshide();
                    canvas.style.opacity = "1";
                    canvas.style.transition = "opacity 1.5s"; 
                    canvas.style.zIndex = "0";  
                    header.style.opacity = "1";
                    header.style.transition = "opacity 1.5s";
                    canvas.style.overflow = "auto"; 
                    console.log("click on exit");      
                    ethno.style.visibility = "hidden";
                }); 
       
        });

        //CLICK THERESA PICTURE
        pic1.node.addEventListener('click', function(ev){ 
            console.log("click files");
            theresa.style.zIndex = "1";   
            
            setTimeout(function(){
                bgfade();
                theresa.style.visibility = "visible";
                canvas.style.overflow = "hidden"; 
                div.style.visibility = "visible";
                
                var buttonstory = paper6.image("css/resources/buttonstory.png", 910, 30, 50, 50);
                var buttonphoto = paper6.image("css/resources/buttonphoto.png", 910, 90, 50, 50);
                //var buttonvideo = paper6.image("css/resources/button3.png", 910, 150, 50, 50);
                var buttonscript = paper6.image("css/resources/button2.png", 910, 150, 50, 50);

                pointerMove(buttonstory);
                pointerMove(buttonphoto);
                //pointerMove(buttonvideo);
                pointerMove(buttonscript);

                bsound(buttonstory);
                bsound(buttonphoto);
                //bsound(buttonvideo);
                bsound(buttonscript);

                tilt(buttonstory);
                tilt(buttonphoto);  
                tilt(buttonscript);
                //tilt(buttonvideo);  

                var theresa1 = paper6.image("css/resources/theresa1.png", 100, 0, 800, 600); 
                    var next = paper6.rect(280,440,430,30);
                    next.attr({
                        "fill": "white",
                        "opacity": "0"
                    });
                    

                var theresa2 = paper6.image("css/resources/theresa2.png", 100, 0, 800, 600);
                    var next2 = paper6.rect(280,440,430,30);
                    next2.attr({
                        "fill": "white",
                        "opacity": "0"
                    });

                var theresa3 = paper6.image("css/resources/theresa3.png", 100, 0, 800, 600);
                    var next3 = paper6.rect(280,440,430,30);
                    next3.attr({
                        "fill": "white",
                        "opacity": "0"
                    });    

                var theresa4 = paper6.image("css/resources/theresa4.png", 100, 0, 800, 600);
                    var next4 = paper6.rect(280,440,430,30);
                    next4.attr({
                        "fill": "white",
                        "opacity": "0"
                    });

                var photo1 = paper6.image("css/resources/lauma1.png", 288.5, 0, 423, 600);
                var photo2 = paper6.image("css/resources/lauma2.png", 100, 27.5, 800, 545);
                var photo3 = paper6.image("css/resources/lauma3.png", 100, 35, 800, 530);
                var photo4 = paper6.image("css/resources/lauma4.png", 100, 25.5, 800, 549);
                var photo5 = paper6.image("css/resources/lauma5.png", 100, 25.5, 800, 549);

                var script1 = paper6.image("css/resources/script0.png", 267.5, 0, 465, 600);
                var script2 = paper6.image("css/resources/script1.png", 267.5, 0, 465, 600);
                var script3 = paper6.image("css/resources/script2.png", 267.5, 0, 465, 600);
                var script4 = paper6.image("css/resources/script3.png", 267.5, 0, 465, 600);
                var script5 = paper6.image("css/resources/script4.png", 267.5, 0, 465, 600);
                
                var right = paper6.image("css/resources/right.png", 740, 275, 63, 49);
                
                var right2 = paper6.image("css/resources/right.png", 740, 275, 63, 49);
                var left2 = paper6.image("css/resources/left.png", 194, 275, 72, 44);

                var right3 = paper6.image("css/resources/right.png", 740, 275, 63, 49);
                var left3 = paper6.image("css/resources/left.png", 194, 275, 72, 44);

                var right4 = paper6.image("css/resources/right.png", 740, 275, 63, 49);
                var left4 = paper6.image("css/resources/left.png", 194, 275, 72, 44);

                var left5 = paper6.image("css/resources/left.png", 194, 275, 72, 44);

                var rightp = paper6.image("css/resources/right.png", 730, 275, 63, 49);
                
                var right2p = paper6.image("css/resources/right.png", 905, 275, 63, 49);
                var left2p = paper6.image("css/resources/left.png", 30, 275, 72, 44);

                var right3p = paper6.image("css/resources/right.png", 905, 275, 63, 49);
                var left3p = paper6.image("css/resources/left.png", 30, 275, 72, 44);

                var right4p = paper6.image("css/resources/right.png", 905, 275, 63, 49);
                var left4p = paper6.image("css/resources/left.png", 30, 275, 72, 44);

                var left5p = paper6.image("css/resources/left.png", 30, 275, 72, 44);

                function clickr1p() {
                    photo1.hide();
                    photo2.show();
                    rightp.hide();
                    right2p.show();
                    left2p.show();
                    pointerMove(right2p);
                    pointerMove(left2p);
                    div.innerHTML = " ";
                }

                function clickr2p() {
                    photo2.hide();
                    photo3.show();
                    right2p.hide();
                    right3p.show()
                    left2p.hide();
                    left3p.show();
                    pointerMove(right3p);
                    pointerMove(left3p);
                    div.innerHTML = " ";
                }

                function clickr3p() {
                    photo3.hide();
                    photo4.show();
                    right3p.hide();
                    right4p.show()
                    left3p.hide();
                    left4p.show();
                    pointerMove(right4p);
                    pointerMove(left4p);
                    div.innerHTML = " ";
                }

                function clickr4p() {
                    photo4.hide();
                    photo5.show();
                    right4p.hide();
                    left4p.hide();
                    left5p.show();
                    pointerMove(left5p);
                    div.innerHTML = "Theresa and lau sim, her sister-in-law, in Perth.";
                    div.style.width = "350px";
                    div.style.marginLeft = "-155px";
                    div.style.marginTop = "283px";
                }

                function clickl5p() {
                    photo5.hide();
                    photo4.show();
                    right4p.show();
                    left4p.show();
                    left5p.hide();
                    pointerMove(left4p);
                    pointerMove(right4p);
                    div.innerHTML = " ";
                }

                function clickl4p() {
                    photo4.hide();
                    photo3.show();
                    right4p.hide();
                    right3p.show();
                    left3p.show();
                    left4p.hide();
                    pointerMove(left3p);
                    pointerMove(right3p);
                    div.innerHTML = " ";
                }

                function clickl3p() {
                    photo3.hide();
                    photo2.show();
                    right3p.hide();
                    right2p.show();
                    left2p.show();
                    left3p.hide();
                    pointerMove(left2p);
                    pointerMove(right2p);
                    div.innerHTML = " ";
                }

                function clickl2p() {
                    photo2.hide();
                    photo1.show();
                    right2p.hide();
                    rightp.show();
                    left2p.hide();
                    pointerMove(rightp);
                    div.innerHTML = " ";
                }
                
                function photos(){

                    photo1.show();
                    left2.hide();
                    rightp.show();
                    pointerMove(rightp);
                    div.innerHTML = " ";
                    
                    rightp.node.addEventListener('click', function(ev){
                        clickr1p();
                        menu.play();
                    });

                    right2p.node.addEventListener('click', function(ev){
                        clickr2p();
                        menu.play();
                    });

                    right3p.node.addEventListener('click', function(ev){
                        clickr3p();
                        menu.play();
                    });

                    right4p.node.addEventListener('click', function(ev){
                        clickr4p();
                        menu.play();
                    });

                    left2p.node.addEventListener('click', function(ev){
                        clickl2p();
                        menu.play();
                    });

                    left3p.node.addEventListener('click', function(ev){
                        clickl3p();
                        menu.play();
                    });

                    left4p.node.addEventListener('click', function(ev){
                        clickl4p();
                        menu.play();
                    });

                    left5p.node.addEventListener('click', function(ev){
                        clickl5p();
                        menu.play();
                    });
                }

                var photoshide = function(){
                    photo1.hide();
                    photo2.hide();
                    photo3.hide();
                    photo4.hide();
                    photo5.hide();
                    rightp.hide();
                    left2p.hide();
                    right2p.hide();
                    left3p.hide()
                    right3p.hide();
                    left4p.hide();
                    right4p.hide();
                    left5p.hide();
                }

                function clickr1() {
                    script1.hide();
                    script2.show();
                    right.hide();
                    right2.show();
                    left2.show();
                    pointerMove(right2);
                    pointerMove(left2);
                }

                function clickr2() {
                    script2.hide();
                    script3.show();
                    right2.hide();
                    right3.show()
                    left2.hide();
                    left3.show();
                    pointerMove(right3);
                    pointerMove(left3);
                }

                function clickr3() {
                    script3.hide();
                    script4.show();
                    right3.hide();
                    right4.show()
                    left3.hide();
                    left4.show();
                    pointerMove(right4);
                    pointerMove(left4);
                }

                function clickr4() {
                    script4.hide();
                    script5.show();
                    right4.hide();
                    left4.hide();
                    left5.show();
                    pointerMove(left5);
                }

                function clickl5() {
                    script5.hide();
                    script4.show();
                    right4.show();
                    left4.show();
                    left5.hide();
                    pointerMove(left4);
                    pointerMove(right4);
                }

                function clickl4() {
                    script4.hide();
                    script3.show();
                    right4.hide();
                    right3.show();
                    left3.show();
                    left4.hide();
                    pointerMove(left3);
                    pointerMove(right3);
                }

                function clickl3() {
                    script3.hide();
                    script2.show();
                    right3.hide();
                    right2.show();
                    left2.show();
                    left3.hide();
                    pointerMove(left2);
                    pointerMove(right2);
                }

                function clickl2() {
                    script2.hide();
                    script1.show();
                    right2.hide();
                    right.show();
                    left2.hide();
                    pointerMove(right);
                }

                function scripts() {
                    script1.show();
                    
                    div.innerHTML = " ";

                    left2.hide();
                    right.show();
                    pointerMove(right);
                    
                    right.node.addEventListener('click', function(ev){
                        clickr1();
                        menu.play();
                    });

                    right2.node.addEventListener('click', function(ev){
                        clickr2();
                        menu.play();
                    });

                    right3.node.addEventListener('click', function(ev){
                        clickr3();
                        menu.play();
                    });

                    right4.node.addEventListener('click', function(ev){
                        clickr4();
                        menu.play();
                    });

                    left2.node.addEventListener('click', function(ev){
                        clickl2();
                        menu.play();
                    });

                    left3.node.addEventListener('click', function(ev){
                        clickl3();
                        menu.play();
                    });

                    left4.node.addEventListener('click', function(ev){
                        clickl4();
                        menu.play();
                    });

                    left5.node.addEventListener('click', function(ev){
                        clickl5();
                        menu.play();
                    });
                }


                var scriptshide = function() {
                    script1.hide();
                    script2.hide();
                    script3.hide();
                    script4.hide();
                    script5.hide();
                    right.hide();
                    left2.hide();
                    right2.hide();
                    left3.hide()
                    right3.hide();
                    left4.hide();
                    right4.hide();
                    left5.hide();
                    div.innerHTML = " ";
                }

                var story = function() {
                    theresa1.show();
                    theresa2.hide();
                    theresa3.hide();
                    theresa4.hide();
                    next.show();
                    next2.hide();
                    next3.hide();
                    next4.hide();
                    pointerMove(next);
                    div.innerHTML = " ";
                    seaplay();

                    next.node.addEventListener('click', function(ev){
                        theresa1.hide();
                        theresa2.show();
                        next.hide();
                        next2.show();
                        pointerMove(next2); 
                        menu.play();
                        seafade();
                        aiplay();

                        next2.node.addEventListener('click', function(ev){
                            theresa2.hide();
                            theresa3.show();
                            next2.hide();
                            next3.show();
                            pointerMove(next3);
                            menu.play();
                            aifade();
                            kitplay();

                            next3.node.addEventListener('click', function(ev){
                                theresa3.hide();
                                theresa4.show();
                                next3.hide();
                                next4.show();
                                pointerMove(next4); 
                                menu.play();
                                kitfade();
                                beiplay();

                                next4.node.addEventListener('click', function(ev){
                                    theresa4.hide();
                                    console.log("hide");
                                    scripts();
                                    next4.hide();
                                    menu.play();
                                    beifade();   
                                    }); 
                                });   
                            });   
                        });                                 
                    }  
                
                function storyhide() {
                    theresa1.hide();
                    theresa2.hide();
                    theresa3.hide();
                    theresa4.hide();
                    next.hide();
                    next2.hide();
                    next3.hide();
                    next4.hide();
                }

                photoshide();
                story();
                scriptshide();

                buttonstory.node.addEventListener('click', function(ev){
                    storyhide();
                    story();
                    photoshide();
                    scriptshide();
                    seafade();
                    aifade();
                    beifade();
                    kitfade();
                });

                buttonphoto.node.addEventListener('click', function(ev){
                    photoshide();
                    photos();
                    storyhide();
                    scriptshide();
                    seafade();
                    aifade();
                    beifade();
                    kitfade();   
                })

                buttonscript.node.addEventListener('click', function(ev){
                    scriptshide();
                    scripts();
                    photoshide();
                    storyhide();
                    seafade();
                    aifade();
                    beifade();
                    kitfade();   
                });

                var tie = paper6.image("css/resources/exit.png", 40, 15, 55, 55);
                tie.node.addEventListener('mousemove', function(ev){
                    tie.node.style.cursor = "pointer";
                });            
                tie.node.addEventListener('click', function(ev){
                    exit();           
                    scriptshide();
                    photoshide();
                    storyhide();  
                    buttonscript.hide();
                    buttonstory.hide();
                    buttonphoto.hide();                               
                    theresa.style.visibility = "hidden";
                    div.style.visibility = "hidden";
                    seafade();
                    aifade();
                    beifade();
                    kitfade();
                }); 

            },600);
       
        });




        //CLICK ANTHONY PICTURE
        pic3.node.addEventListener('click', function(ev){ 
            console.log("click files");
            anthony.style.zIndex = "1";   
            
                antplay();
                bgfade();
                anthony.style.visibility = "visible";
                canvas.style.overflow = "hidden";
                div.style.visibility = "visible";  
                
                var buttonscript = paper5.image("css/resources/button2.png", 910, 60, 55, 55);
                var buttonphoto = paper5.image("css/resources/buttonphoto.png", 910, 120, 50, 50);
                //var buttonvideo = paper5.image("css/resources/button3.png", 910, 180, 50, 50);

                pointerMove(buttonphoto);
                //pointerMove(buttonvideo);
                pointerMove(buttonscript);

                bsound(buttonphoto);
                //bsound(buttonvideo);
                bsound(buttonscript);

                tilt(buttonphoto);  
                tilt(buttonscript);
                //tilt(buttonvideo);  

                var photo1 = paper5.image("css/resources/anthonyphotos.png", 100, 46.5, 800, 507);
                var photo2 = paper5.image("css/resources/anthonyphoto2.png", 100, 46, 800, 508);
               
                var rightp = paper5.image("css/resources/right.png", 900, 275, 63, 49);
                var left2p = paper5.image("css/resources/left.png", 29, 275, 72, 44);

                var script1 = paper5.image("css/resources/letter1.png", 100, 55, 800, 490);
                var script2 = paper5.image("css/resources/letter2.png", 288.5, 0, 423, 600);
                var script3 = paper5.image("css/resources/letter3.png", 288.5, 0, 423, 600);
                var script4 = paper5.image("css/resources/letter4.png", 100, 58, 800, 484);
                var script5 = paper5.image("css/resources/letter5.png", 294.5, 0, 411, 600);
                var script6 = paper5.image("css/resources/letter6.png", 100, 48, 800, 506);
                
                var right = paper5.image("css/resources/right.png", 900, 275, 63, 49);
                
                var right2 = paper5.image("css/resources/right.png", 715, 275, 63, 49);
                var left2 = paper5.image("css/resources/left.png", 231, 275, 72, 44);

                var right3 = paper5.image("css/resources/right.png", 715, 275, 63, 49);
                var left3 = paper5.image("css/resources/left.png", 231, 275, 72, 44);

                var right4 = paper5.image("css/resources/right.png", 890, 275, 63, 49);
                var left4 = paper5.image("css/resources/left.png", 29, 275, 72, 44);

                var left5 = paper5.image("css/resources/left.png", 245, 275, 72, 44);
                var right5 = paper5.image("css/resources/right.png", 720, 275, 63, 49);

                var left6 = paper5.image("css/resources/left.png", 20, 275, 72, 44);

                function clickr1p() {
                    photo1.hide();
                    photo2.show();
                    rightp.hide();
                    left2p.show();
                    pointerMove(left2p); 
                }

                function clickl2p() {
                    photo2.hide();
                    photo1.show();
                    rightp.show();
                    left2p.hide();
                    pointerMove(rightp);
                }
                
                function photos(){
                    div.innerHTML = " ";
                    photo1.show();
                    left2.hide();
                    rightp.show();
                    pointerMove(rightp);
                    
                    rightp.node.addEventListener('click', function(ev){
                        clickr1p();
                        menu.play();
                    });

                    left2p.node.addEventListener('click', function(ev){
                        clickl2p();
                        menu.play();
                    });
                }

                var photoshide = function(){
                    photo1.hide();
                    photo2.hide();
                    rightp.hide();
                    left2p.hide();
                }

                function clickr1() {
                    script1.hide();
                    script2.show();
                    right.hide();
                    right2.show();
                    left2.show();
                    pointerMove(right2);
                    pointerMove(left2);
                    div.innerHTML = "Letter sent to Anthony in 1962, found in one of his earlier photo albums";
                    div.style.width = "500px";
                    div.style.marginLeft = "-224px";
                    div.style.marginTop = "275px";
                }

                function clickr2() {
                    script2.hide();
                    script3.show();
                    right2.hide();
                    right3.show()
                    left2.hide();
                    left3.show();
                    pointerMove(right3);
                    pointerMove(left3);
                    div.innerHTML = "Letter sent to Anthony in 1962, found in one of his earlier photo albums";
                    div.style.width = "500px";
                    div.style.marginLeft = "-224px";
                    div.style.marginTop = "275px";
                }

                function clickr3() {
                    script3.hide();
                    script4.show();
                    right3.hide();
                    right4.show()
                    left3.hide();
                    left4.show();
                    pointerMove(right4);
                    pointerMove(left4);
                    div.innerHTML = "Letter sent to Anthony in 1962, found in one of his earlier photo albums";
                    div.style.width = "500px";
                    div.style.marginLeft = "-224px";
                    div.style.marginTop = "275px";
                }

                function clickr4() {
                    script4.hide();
                    script5.show();
                    right4.hide();
                    right5.show();
                    left4.hide();
                    left5.show();
                    pointerMove(left5);
                    pointerMove(right5);
                    div.innerHTML = "Something Anthony left behind for his sons";
                    div.style.width = "500px";
                    div.style.marginLeft = "-155px";
                    div.style.marginTop = "293px";
                }

                function clickr5() {
                    script5.hide();
                    script6.show();
                    right5.hide();
                    left5.hide();
                    left6.show();
                    pointerMove(left6);
                    div.innerHTML = "‘Mothman’ was a poem written by Anthony’s granddaughter, Mariel. It captures her conversations with her younger cousin, Olivia, at their gong gong’s wake. Mariel regrets not knowing more about her grandfather at that point. She tries to reimagine her gong gong’s earlier days."
                    div.style.width = "750px";
                    div.style.marginLeft = "-370px";
                    div.style.marginTop = "253px";
                    div.style.textAlign = "justify";
                }

                function clickl6() {
                    script6.hide();
                    script5.show();
                    right5.show();
                    left5.show();
                    left6.hide();
                    pointerMove(left5);
                    pointerMove(right5);
                    div.innerHTML = "Something Anthony left behind for his sons";
                    div.style.width = "500px";
                    div.style.marginLeft = "-155px";
                    div.style.marginTop = "293px";
                }

                function clickl5() {
                    script5.hide();
                    script4.show();
                    right4.show();
                    left4.show();
                    left5.hide();
                    right5.hide();
                    pointerMove(left4);
                    pointerMove(right4);
                    div.innerHTML = "Letter sent to Anthony in 1962, found in one of his earlier photo albums";
                    div.style.width = "500px";
                    div.style.marginLeft = "-224px";
                    div.style.marginTop = "275px";
                }

                function clickl4() {
                    script4.hide();
                    script3.show();
                    right4.hide();
                    right3.show();
                    left3.show();
                    left4.hide();
                    pointerMove(left3);
                    pointerMove(right3);
                    div.innerHTML = "Letter sent to Anthony in 1962, found in one of his earlier photo albums";
                    div.style.width = "500px";
                    div.style.marginLeft = "-224px";
                    div.style.marginTop = "275px";
                }


                function clickl3() {
                    script3.hide();
                    script2.show();
                    right3.hide();
                    right2.show();
                    left2.show();
                    left3.hide();
                    pointerMove(left2);
                    pointerMove(right2);
                    div.innerHTML = "Letter sent to Anthony in 1962, found in one of his earlier photo albums";
                    div.style.width = "500px";
                    div.style.marginLeft = "-224px";
                    div.style.marginTop = "275px";
                }

                function clickl2() {
                    script2.hide();
                    script1.show();
                    right2.hide();
                    right.show();
                    left2.hide();
                    pointerMove(right);
                    div.innerHTML = "Letter sent to Anthony in 1962, found in one of his earlier photo albums";
                    div.style.width = "500px";
                    div.style.marginLeft = "-224px";
                    div.style.marginTop = "275px";

                }

                function scripts() {
                    div.innerHTML = "Letter sent to Anthony in 1962, found in one of his earlier photo albums";
                    div.style.width = "500px";
                    div.style.marginLeft = "-224px";
                    div.style.marginTop = "275px";

                    script1.show();
                    script2.hide();
                    script3.hide();
                    script4.hide();
                    script5.hide();
                    script6.hide();
                    right.show();
                    left2.hide();
                    right2.hide();
                    left3.hide();
                    right3.hide();
                    left4.hide();
                    right4.hide();
                    left5.hide();
                    right5.hide();
                    left6.hide();
                    pointerMove(right);
                    
                    right.node.addEventListener('click', function(ev){
                        clickr1();
                        menu.play();
                    });

                    right2.node.addEventListener('click', function(ev){
                        clickr2();
                        menu.play();
                    });

                    right3.node.addEventListener('click', function(ev){
                        clickr3();
                        menu.play();
                    });

                    right4.node.addEventListener('click', function(ev){
                        clickr4();
                        menu.play();
                    });

                    right5.node.addEventListener('click', function(ev){
                        clickr5();
                        menu.play();
                    });

                    left2.node.addEventListener('click', function(ev){
                        clickl2();
                        menu.play();
                    });

                    left3.node.addEventListener('click', function(ev){
                        clickl3();
                        menu.play();
                    });

                    left4.node.addEventListener('click', function(ev){
                        clickl4();
                        menu.play();
                    });

                    left5.node.addEventListener('click', function(ev){
                        clickl5();
                        menu.play();
                    });

                    left6.node.addEventListener('click', function(ev){
                        clickl6();
                        menu.play();
                    });
                }


                var scriptshide = function() {
                    script1.hide();
                    script2.hide();
                    script3.hide();
                    script4.hide();
                    script5.hide();
                    script6.hide();
                    right.hide();
                    left2.hide();
                    right2.hide();
                    left3.hide()
                    right3.hide();
                    left4.hide();
                    right4.hide();
                    left5.hide();
                    right5.hide();
                    left6.hide();
                }

                photoshide();
                scripts();

                buttonphoto.node.addEventListener('click', function(ev){
                    photoshide();
                    photos();         
                    scriptshide();
                })

                buttonscript.node.addEventListener('click', function(ev){
                    scriptshide();
                    scripts();
                    photoshide();    
                });

                var tie = paper5.image("css/resources/exit.png", 40, 15, 55, 55);
                tie.node.addEventListener('mousemove', function(ev){
                    tie.node.style.cursor = "pointer";
                });            
                tie.node.addEventListener('click', function(ev){
                    photoshide();
                    scriptshide();
                    exit();   
                    antfade();  
                    buttonscript.hide();
                    buttonphoto.hide();                                         
                    anthony.style.visibility = "hidden";
                }); 
       
        });


        //CLICK BRIDGET & JACOB PICTURE
       pic4.node.addEventListener('click', function(ev){ 
            console.log("click files");
            bridget.style.zIndex = "1";   
            
                bgfade();
                bridget.style.visibility = "visible";
                canvas.style.overflow = "hidden"; 
                div.innerHTML = "";
                //spookyplay(); 
                
                var buttonstory = paper2.image("css/resources/buttonstory.png", 910, 30, 50, 50);
                var buttonvideo = paper2.image("css/resources/button3.png", 910, 90, 55, 55);

                pointerMove(buttonstory);
                pointerMove(buttonvideo);

                bsound(buttonstory);
                bsound(buttonvideo);

                tilt(buttonstory);  
                tilt(buttonvideo);  

                var story1 = paper2.image("css/resources/story0.png", 100, 0, 800, 600);
                var storym2 = paper2.image("css/resources/storym1.png", 100, 0, 800, 600);
                var storym3 = paper2.image("css/resources/storym2.png", 100, 0, 800, 600);
                var storym4 = paper2.image("css/resources/storym3.png", 100, 0, 800, 600);
                var storym5 = paper2.image("css/resources/storym4.png", 100, 0, 800, 600);
                var storym6 = paper2.image("css/resources/storym5.png", 100, 0, 800, 600);
                var storym7 = paper2.image("css/resources/storym6.png", 100, 0, 800, 600);
                var storym8 = paper2.image("css/resources/storym7.png", 100, 0, 800, 600);
                var storym9 = paper2.image("css/resources/storym8.png", 100, 0, 800, 600);
                var storym10 = paper2.image("css/resources/storym9.png", 100, 0, 800, 600);
                var storym11 = paper2.image("css/resources/storym10.png", 100, 0, 800, 600);

                var opaq = function (a) {
                    a.attr({
                        "fill": "white",
                        "opacity": "0"
                    });
                    return opaq;
                }

                var t2 = paper2.rect(270,500,207,34);
                    opaq(t2);
                    
                var t1 = paper2.rect(525,500,207,34);
                    opaq(t1);

                var leftm2 = paper2.circle(202, 502, 14);
                var rightm2 = paper2.circle(800, 502, 14);
                opaq(leftm2);
                opaq(rightm2);

                var leftm3 = paper2.circle(202, 502, 14);
                var rightm3 = paper2.circle(800, 502, 14);
                opaq(leftm3);
                opaq(rightm3);

                var leftm4 = paper2.circle(202, 502, 14);
                var rightm4 = paper2.circle(800, 502, 14);
                opaq(leftm4);
                opaq(rightm4);

                var leftm5 = paper2.circle(202, 502, 14);
                var rightm5 = paper2.circle(800, 502, 14);
                opaq(leftm5);
                opaq(rightm5);

                var leftm6 = paper2.circle(202, 502, 14);
                var rightm6 = paper2.circle(800, 502, 14);
                opaq(leftm6);
                opaq(rightm6);

                var leftm7 = paper2.circle(202, 502, 14);
                var rightm7 = paper2.circle(800, 502, 14);
                opaq(leftm7);
                opaq(rightm7);

                var leftm8 = paper2.circle(202, 502, 14);
                var rightm8 = paper2.circle(800, 502, 14);
                opaq(leftm8);
                opaq(rightm8);

                var leftm9 = paper2.circle(202, 502, 14);
                var rightm9 = paper2.circle(800, 502, 14);
                opaq(leftm9);
                opaq(rightm9);

                var leftm10 = paper2.circle(202, 502, 14);
                var rightm10 = paper2.circle(800, 502, 14);
                opaq(leftm10);
                opaq(rightm10);

                var leftm11 = paper2.circle(202, 502, 14);
                opaq(leftm11);


                var video3on;

                function video3play() {
                    video3on = "on";
                    //div.innerHTML = " ";
                    video3.style.visibility = "visible";
                    video3.style.zIndex = "1";
                    document.getElementById("video3").load();
                    document.getElementById("video3").volume = 0;
                    document.getElementById("video3").play(); 
                    document.getElementById("video3").controls = true;
                    var fadeAudio = setInterval(function () {          
                        video3.volume += 0.1;
                        console.log("video3play" + video3.volume);
                    }, 200);
                    setTimeout(function(){
                        clearInterval(fadeAudio); 
                        console.log(video3.volume);
                    }, 1400);
                }

                function video3stop() {
                    if (video3on === "on") {
                        video3.style.zIndex = "-3";
                        document.getElementById("video3").controls = false;
                        video3.style.visibility = "hidden";    
                        var fadeAudio3 = setInterval(function () {          
                            document.getElementById("video3").volume -= 0.1;
                            console.log(document.getElementById("video3").volume);
                        }, 200);   
                        setTimeout(function(){
                            clearInterval(fadeAudio3);
                            console.log(document.getElementById("video3").volume);
                            document.getElementById("video3").pause();
                            video3on = "off";
                        }, 1200); 
                    }            
                }

                function clickm1() {
                    story1.hide();
                    storym2.show();
                    t1.hide();
                    t2.hide();
                    rightm2.show();
                    leftm2.show();
                    pointerMove(rightm2);
                    pointerMove(leftm2);
                    console.log("mary2");
                }

                function clickm2() {
                    storym2.hide();
                    storym3.show();
                    rightm2.hide();
                    leftm2.hide();
                    rightm3.show()
                    leftm3.show();
                    pointerMove(rightm3);
                    pointerMove(leftm3);
                    console.log("mary3");
                }

                function clickm3() {
                    storym3.hide();
                    storym4.show();
                    rightm3.hide();
                    leftm3.hide();
                    rightm4.show()
                    leftm4.show();
                    pointerMove(rightm4);
                    pointerMove(leftm4);
                    console.log("mary4");
                }

                function clickm4() {
                    storym4.hide();
                    storym5.show();
                    rightm4.hide();
                    leftm4.hide();
                    rightm5.show()
                    leftm5.show();
                    pointerMove(rightm5);
                    pointerMove(leftm5);
                    console.log("mary5");
                }


                function clickm5() {
                    storym5.hide();
                    storym6.show();
                    rightm5.hide();
                    leftm5.hide();
                    rightm6.show()
                    leftm6.show();
                    pointerMove(rightm6);
                    pointerMove(leftm6);
                    console.log("mary6");
                }

                function clickm6() {
                    storym6.hide();
                    storym7.show();
                    rightm6.hide();
                    leftm6.hide();
                    rightm7.show()
                    leftm7.show();
                    pointerMove(rightm7);
                    pointerMove(leftm7);
                    console.log("mary7");
                }

                function clickm7() {
                    storym7.hide();
                    storym8.show();
                    rightm7.hide();
                    leftm7.hide();
                    rightm8.show()
                    leftm8.show();
                    pointerMove(rightm8);
                    pointerMove(leftm8);
                    console.log("mary8");
                }

                function clickm8() {
                    storym8.hide();
                    storym9.show();
                    rightm8.hide();
                    leftm8.hide();
                    rightm9.show()
                    leftm9.show();
                    pointerMove(rightm9);
                    pointerMove(leftm9);
                    console.log("mary9");
                }

                function clickm9() {
                    storym9.hide();
                    storym10.show();
                    rightm9.hide();
                    leftm9.hide();
                    leftm10.show();
                    rightm10.show();
                    pointerMove(leftm10);
                    pointerMove(rightm10);
                    console.log("mary10");
                }

                function clickm10() {
                    storym10.hide();
                    storym11.show();
                    rightm10.hide();
                    leftm10.hide();
                    leftm11.show();
                    pointerMove(leftm11);
                    console.log("mary11");
                }

                function clickml11() {
                    storym11.hide();
                    storym10.show();
                    leftm11.hide();
                    leftm10.show();
                    rightm10.show();
                    pointerMove(leftm10);
                    pointerMove(rightm10);
                    console.log("mary10");
                }

                function clickml10() {
                    storym10.hide();
                    storym9.show();
                    leftm10.hide();
                    rightm10.hide();
                    leftm9.show();
                    rightm9.show();
                    pointerMove(rightm9);
                    pointerMove(leftm9);
                    console.log("mary9");
                }
  
                function clickml9() {
                    storym9.hide();
                    storym8.show();
                    leftm9.hide();
                    rightm9.hide();
                    leftm8.show();
                    rightm8.show();
                    pointerMove(rightm8);
                    pointerMove(leftm8);
                }

                function clickml8() {
                    storym8.hide();
                    storym7.show();
                    leftm8.hide();
                    rightm8.hide();
                    leftm7.show();
                    rightm7.show();
                    pointerMove(rightm7);
                    pointerMove(leftm7);
                }

                function clickml7() {
                    storym7.hide();
                    storym6.show();
                    leftm7.hide();
                    rightm7.hide();
                    leftm6.show();
                    rightm6.show();
                    pointerMove(rightm6);
                    pointerMove(leftm6);
                }

                function clickml6() {
                    storym6.hide();
                    storym5.show();
                    leftm6.hide();
                    rightm6.hide();
                    leftm5.show();
                    rightm5.show();
                    pointerMove(rightm5);
                    pointerMove(leftm5);
                }

                function clickml5() {
                    storym5.hide();
                    storym4.show();
                    leftm5.hide();
                    rightm5.hide();
                    leftm4.show();
                    rightm4.show();
                    pointerMove(rightm4);
                    pointerMove(leftm4);
                }

                function clickml4() {
                    storym4.hide();
                    storym3.show();
                    leftm4.hide();
                    rightm4.hide();
                    leftm3.show();
                    rightm3.show();
                    pointerMove(rightm3);
                    pointerMove(leftm3);
                }

                function clickml3() {
                    storym3.hide();
                    storym2.show();
                    leftm3.hide();
                    rightm3.hide();
                    leftm2.show();
                    rightm2.show();
                    pointerMove(rightm2);
                    pointerMove(leftm2);
                }

                function clickml2() {
                    storym2.hide();
                    story1.show();
                    leftm2.hide();
                    rightm2.hide();
                    t1.show();
                    t2.show();
                    pointerMove(t1);
                    pointerMove(t2);
                }

                var storyt2 = paper2.image("css/resources/storyt1.png", 100, 0, 800, 600);
                var storyt3 = paper2.image("css/resources/storyt2.png", 100, 0, 800, 600);
                var storyt4 = paper2.image("css/resources/storyt3.png", 100, 0, 800, 600);
                var storyt5 = paper2.image("css/resources/storyt4.png", 100, 0, 800, 600);
                var storyt6 = paper2.image("css/resources/storyt5.png", 100, 0, 800, 600);
                var storyt7 = paper2.image("css/resources/storyt6.png", 100, 0, 800, 600);
                var storyt8 = paper2.image("css/resources/storyt7.png", 100, 0, 800, 600);
                var storyt9 = paper2.image("css/resources/storyt8.png", 100, 0, 800, 600);
                var storyt10 = paper2.image("css/resources/storyt9.png", 100, 0, 800, 600);
                var storyt11 = paper2.image("css/resources/storyt10.png", 100, 0, 800, 600);
                var storyt12 = paper2.image("css/resources/storyt11.png", 100, 0, 800, 600);


                var leftt2 = paper2.circle(202, 502, 14);
                var rightt2 = paper2.circle(800, 502, 14);
                opaq(leftt2);
                opaq(rightt2);

                var leftt3 = paper2.circle(202, 502, 14);
                var rightt3 = paper2.circle(800, 502, 14);
                opaq(leftt3);
                opaq(rightt3);

                var leftt4 = paper2.circle(202, 502, 14);
                var rightt4 = paper2.circle(800, 502, 14);
                opaq(leftt4);
                opaq(rightt4);

                var leftt5 = paper2.circle(202, 502, 14);
                var rightt5 = paper2.circle(800, 502, 14);
                opaq(leftt5);
                opaq(rightt5);

                var leftt6 = paper2.circle(202, 502, 14);
                var rightt6 = paper2.circle(800, 502, 14);
                opaq(leftt6);
                opaq(rightt6);

                var leftt7 = paper2.circle(202, 502, 14);
                var rightt7 = paper2.circle(800, 502, 14);
                opaq(leftt7);
                opaq(rightt7);

                var leftt8 = paper2.circle(202, 502, 14);
                var rightt8 = paper2.circle(800, 502, 14);
                opaq(leftt8);
                opaq(rightt8);

                var leftt9 = paper2.circle(202, 502, 14);
                var rightt9 = paper2.circle(800, 502, 14);
                opaq(leftt9);
                opaq(rightt9);

                var leftt10 = paper2.circle(202, 502, 14);
                var rightt10 = paper2.circle(800, 502, 14);
                opaq(leftt10);
                opaq(rightt10);

                var leftt11 = paper2.circle(202, 502, 14);
                var rightt11 = paper2.circle(800, 502, 14);
                opaq(rightt11);
                opaq(leftt11);

                var leftt12 = paper2.circle(202, 502, 14);
                opaq(leftt12);

                function clickt1() {
                    story1.hide();
                    storyt2.show();
                    t1.hide();
                    t2.hide();
                    rightt2.show();
                    leftt2.show();
                    pointerMove(rightt2);
                    pointerMove(leftt2);
                    console.log("theresa2");
                }

                function clickt2() {
                    storyt2.hide();
                    storyt3.show();
                    rightt2.hide();
                    leftt2.hide();
                    rightt3.show()
                    leftt3.show();
                    pointerMove(rightt3);
                    pointerMove(leftt3);
                    console.log("theresa3");
                }

                function clickt3() {
                    storyt3.hide();
                    storyt4.show();
                    rightt3.hide();
                    leftt3.hide();
                    rightt4.show()
                    leftt4.show();
                    pointerMove(rightt4);
                    pointerMove(leftt4);
                    console.log("theresa4");
                }

                function clickt4() {
                    storyt4.hide();
                    storyt5.show();
                    rightt4.hide();
                    leftt4.hide();
                    rightt5.show()
                    leftt5.show();
                    pointerMove(rightt5);
                    pointerMove(leftt5);
                    console.log("theresa5");
                }


                function clickt5() {
                    storyt5.hide();
                    storyt6.show();
                    rightt5.hide();
                    leftt5.hide();
                    rightt6.show()
                    leftt6.show();
                    pointerMove(rightt6);
                    pointerMove(leftt6);
                    console.log("theresa6");
                }

                function clickt6() {
                    storyt6.hide();
                    storyt7.show();
                    rightt6.hide();
                    leftt6.hide();
                    rightt7.show()
                    leftt7.show();
                    pointerMove(rightt7);
                    pointerMove(leftt7);
                    console.log("theresa7");
                }

                function clickt7() {
                    storyt7.hide();
                    storyt8.show();
                    rightt7.hide();
                    leftt7.hide();
                    rightt8.show()
                    leftt8.show();
                    pointerMove(rightt8);
                    pointerMove(leftt8);
                    console.log("theresa8");
                }

                function clickt8() {
                    storyt8.hide();
                    storyt9.show();
                    rightt8.hide();
                    leftt8.hide();
                    rightt9.show()
                    leftt9.show();
                    pointerMove(rightt9);
                    pointerMove(leftt9);
                    console.log("theresa9");
                }

                function clickt9() {
                    storyt9.hide();
                    storyt10.show();
                    rightt9.hide();
                    leftt9.hide();
                    leftt10.show();
                    rightt10.show();
                    pointerMove(leftt10);
                    pointerMove(rightt10);
                    console.log("theresa10");
                }

                function clickt10() {
                    storyt10.hide();
                    storyt11.show();
                    rightt10.hide();
                    leftt10.hide();
                    leftt11.show();
                    rightt11.show();    
                    pointerMove(leftt11);
                    pointerMove(rightt11);
                    console.log("theresa11");
                }

                function clickt11() {
                    storyt11.hide();
                    storyt12.show();
                    rightt11.hide();
                    leftt11.hide();
                    leftt12.show();
                    pointerMove(leftt12);
                    console.log("theresa12");
                }

                function clicktl12() {
                    storyt12.hide();
                    storyt11.show();
                    leftt12.hide();
                    leftt11.show();
                    rightt11.show();
                    pointerMove(leftt11);
                    pointerMove(rightt11);
                    console.log("theresa11");
                }

                function clicktl11() {
                    storyt11.hide();
                    storyt10.show();
                    leftt11.hide();
                    rightt11.hide();
                    leftt10.show();
                    rightt10.show();
                    pointerMove(leftt10);
                    pointerMove(rightt10);
                    console.log("theresa10");
                }


                function clicktl10() {
                    storyt10.hide();
                    storyt9.show();
                    leftt10.hide();
                    rightt10.hide();
                    leftt9.show();
                    rightt9.show();
                    pointerMove(rightt9);
                    pointerMove(leftt9);
                    console.log("theresa9");
                }
  
                function clicktl9() {
                    storyt9.hide();
                    storyt8.show();
                    leftt9.hide();
                    rightt9.hide();
                    leftt8.show();
                    rightt8.show();
                    pointerMove(rightt8);
                    pointerMove(leftt8);
                }

                function clicktl8() {
                    storyt8.hide();
                    storyt7.show();
                    leftt8.hide();
                    rightt8.hide();
                    leftt7.show();
                    rightt7.show();
                    pointerMove(rightt7);
                    pointerMove(leftt7);
                }

                function clicktl7() {
                    storyt7.hide();
                    storyt6.show();
                    leftt7.hide();
                    rightt7.hide();
                    leftt6.show();
                    rightt6.show();
                    pointerMove(rightt6);
                    pointerMove(leftt6);
                }

                function clicktl6() {
                    storyt6.hide();
                    storyt5.show();
                    leftt6.hide();
                    rightt6.hide();
                    leftt5.show();
                    rightt5.show();
                    pointerMove(rightt5);
                    pointerMove(leftt5);
                }

                function clicktl5() {
                    storyt5.hide();
                    storyt4.show();
                    leftt5.hide();
                    rightt5.hide();
                    leftt4.show();
                    rightt4.show();
                    pointerMove(rightt4);
                    pointerMove(leftt4);
                }

                function clicktl4() {
                    storyt4.hide();
                    storyt3.show();
                    leftt4.hide();
                    rightt4.hide();
                    leftt3.show();
                    rightt3.show();
                    pointerMove(rightt3);
                    pointerMove(leftt3);
                }

                function clicktl3() {
                    storyt3.hide();
                    storyt2.show();
                    leftt3.hide();
                    rightt3.hide();
                    leftt2.show();
                    rightt2.show();
                    pointerMove(rightt2);
                    pointerMove(leftt2);
                }

                function clicktl2() {
                    storyt2.hide();
                    story1.show();
                    leftt2.hide();
                    rightt2.hide();
                    t1.show();
                    t2.show();
                    pointerMove(t1);
                    pointerMove(t2);
                }



                function scripts() {

                    story1.show();
                    storym2.hide();
                    storym3.hide();
                    storym4.hide();
                    storym5.hide();
                    storym6.hide();
                    storym7.hide();
                    storym8.hide();
                    storym9.hide();
                    storym10.hide();
                    storym11.hide();

                    t1.show();
                    t2.show();
                    leftm2.hide();
                    rightm2.hide();
                    leftm3.hide();
                    rightm3.hide();
                    leftm4.hide();
                    rightm4.hide();
                    leftm5.hide();
                    rightm5.hide();
                    leftm6.hide();
                    rightm6.hide();
                    leftm7.hide();
                    rightm7.hide();
                    leftm8.hide();
                    rightm8.hide();
                    leftm9.hide();
                    rightm9.hide();
                    leftm10.hide();
                    rightm10.hide();
                    leftm11.hide();

                    pointerMove(t1);
                    pointerMove(t2);
                

                    t1.node.addEventListener('click', function(ev){
                        clickm1();
                        menu.play();
                    });

                    rightm2.node.addEventListener('click', function(ev){
                        clickm2();
                        menu.play();
                    });

                    rightm3.node.addEventListener('click', function(ev){
                        clickm3();
                        menu.play();
                    });

                    rightm4.node.addEventListener('click', function(ev){
                        clickm4();
                        menu.play();
                    });

                    rightm5.node.addEventListener('click', function(ev){
                        clickm5();
                        menu.play();
                    });

                    rightm6.node.addEventListener('click', function(ev){
                        clickm6();
                        menu.play();
                    });

                    rightm7.node.addEventListener('click', function(ev){
                        clickm7();
                        menu.play();
                    });

                    rightm8.node.addEventListener('click', function(ev){
                        clickm8();
                        menu.play();
                    });

                    rightm9.node.addEventListener('click', function(ev){
                        clickm9();
                        menu.play();
                    });

                    rightm10.node.addEventListener('click', function(ev){
                        clickm10();
                        menu.play();
                    });       

                    leftm2.node.addEventListener('click', function(ev){
                        clickml2();
                        menu.play();
                    });

                    leftm3.node.addEventListener('click', function(ev){
                        clickml3();
                        menu.play();
                    });

                    leftm4.node.addEventListener('click', function(ev){
                        clickml4();
                        menu.play();
                    });

                    leftm5.node.addEventListener('click', function(ev){
                        clickml5();
                        menu.play();
                    });

                    leftm6.node.addEventListener('click', function(ev){
                        clickml6();
                        menu.play();
                    });

                    leftm7.node.addEventListener('click', function(ev){
                        clickml7();
                        menu.play();
                    });

                    leftm8.node.addEventListener('click', function(ev){
                        clickml8();
                        menu.play();
                    });

                    leftm9.node.addEventListener('click', function(ev){
                        clickml9();
                        menu.play();
                    });

                    leftm10.node.addEventListener('click', function(ev){
                        clickml10();
                        menu.play();
                    });

                    leftm11.node.addEventListener('click', function(ev){
                        clickml11();
                        menu.play();
                    });


                    storyt2.hide();
                    storyt3.hide();
                    storyt4.hide();
                    storyt5.hide();
                    storyt6.hide();
                    storyt7.hide();
                    storyt8.hide();
                    storyt9.hide();
                    storyt10.hide();
                    storyt11.hide();
                    storyt12.hide();

                    leftt2.hide();
                    rightt2.hide();
                    leftt3.hide();
                    rightt3.hide();
                    leftt4.hide();
                    rightt4.hide();
                    leftt5.hide();
                    rightt5.hide();
                    leftt6.hide();
                    rightt6.hide();
                    leftt7.hide();
                    rightt7.hide();
                    leftt8.hide();
                    rightt8.hide();
                    leftt9.hide();
                    rightt9.hide();
                    leftt10.hide();
                    rightt10.hide();
                    leftt11.hide();
                    rightt11.hide();
                    leftt12.hide();
                

                    t2.node.addEventListener('click', function(ev){
                        clickt1();
                        menu.play();
                    });

                    rightt2.node.addEventListener('click', function(ev){
                        clickt2();
                        menu.play();
                    });

                    rightt3.node.addEventListener('click', function(ev){
                        clickt3();
                        menu.play();
                    });

                    rightt4.node.addEventListener('click', function(ev){
                        clickt4();
                        menu.play();
                    });

                    rightt5.node.addEventListener('click', function(ev){
                        clickt5();
                        menu.play();
                    });

                    rightt6.node.addEventListener('click', function(ev){
                        clickt6();
                        menu.play();
                    });

                    rightt7.node.addEventListener('click', function(ev){
                        clickt7();
                        menu.play();
                    });

                    rightt8.node.addEventListener('click', function(ev){
                        clickt8();
                        menu.play();
                    });

                    rightt9.node.addEventListener('click', function(ev){
                        clickt9();
                        menu.play();
                    });

                    rightt10.node.addEventListener('click', function(ev){
                        clickt10();
                        menu.play();
                    });       

                    rightt11.node.addEventListener('click', function(ev){
                        clickt11();
                        menu.play();
                    });   

                    leftt2.node.addEventListener('click', function(ev){
                        clicktl2();
                        menu.play();
                    });

                    leftt3.node.addEventListener('click', function(ev){
                        clicktl3();
                        menu.play();
                    });

                    leftt4.node.addEventListener('click', function(ev){
                        clicktl4();
                        menu.play();
                    });

                    leftt5.node.addEventListener('click', function(ev){
                        clicktl5();
                        menu.play();
                    });

                    leftt6.node.addEventListener('click', function(ev){
                        clicktl6();
                        menu.play();
                    });

                    leftt7.node.addEventListener('click', function(ev){
                        clicktl7();
                        menu.play();
                    });

                    leftt8.node.addEventListener('click', function(ev){
                        clicktl8();
                        menu.play();
                    });

                    leftt9.node.addEventListener('click', function(ev){
                        clicktl9();
                        menu.play();
                    });

                    leftt10.node.addEventListener('click', function(ev){
                        clicktl10();
                        menu.play();
                    });

                    leftt11.node.addEventListener('click', function(ev){
                        clicktl11();
                        menu.play();
                    });

                    leftt12.node.addEventListener('click', function(ev){
                        clicktl12();
                        menu.play();
                    });                    
                }


                var scriptshide = function() {
                    story1.hide();
                    storym2.hide();
                    storym3.hide();
                    storym4.hide();
                    storym5.hide();
                    storym6.hide();
                    storym7.hide();
                    storym8.hide();
                    storym9.hide();
                    storym10.hide();
                    storym11.hide();

                    t1.hide();
                    t2.hide();
                    leftm2.hide();
                    rightm2.hide();
                    leftm3.hide();
                    rightm3.hide();
                    leftm4.hide();
                    rightm4.hide();
                    leftm5.hide();
                    rightm5.hide();
                    leftm6.hide();
                    rightm6.hide();
                    leftm7.hide();
                    rightm7.hide();
                    leftm8.hide();
                    rightm8.hide();
                    leftm9.hide();
                    rightm9.hide();
                    leftm10.hide();
                    rightm10.hide();
                    leftm11.hide();

                    storyt2.hide();
                    storyt3.hide();
                    storyt4.hide();
                    storyt5.hide();
                    storyt6.hide();
                    storyt7.hide();
                    storyt8.hide();
                    storyt9.hide();
                    storyt10.hide();
                    storyt11.hide();
                    storyt12.hide();

                    leftt2.hide();
                    rightt2.hide();
                    leftt3.hide();
                    rightt3.hide();
                    leftt4.hide();
                    rightt4.hide();
                    leftt5.hide();
                    rightt5.hide();
                    leftt6.hide();
                    rightt6.hide();
                    leftt7.hide();
                    rightt7.hide();
                    leftt8.hide();
                    rightt8.hide();
                    leftt9.hide();
                    rightt9.hide();
                    leftt10.hide();
                    rightt10.hide();
                    leftt11.hide();
                    rightt11.hide();
                    leftt12.hide();

                }

                video3play();
                scriptshide();

                buttonvideo.node.addEventListener('click', function(ev){
                    video3play();                 
                    scriptshide();
                    spookyfade();
                });

                buttonstory.node.addEventListener('click', function(ev){
                    scriptshide();
                    scripts();                  
                    video3stop();
                    spookyplay();
                });


                var tie = paper2.image("css/resources/exit.png", 40, 15, 55, 55);
                tie.node.addEventListener('mousemove', function(ev){
                    tie.node.style.cursor = "pointer";
                });            
                tie.node.addEventListener('click', function(ev){
                    scriptshide();
                    exit();   
                    spookyfade();    
                    buttonstory.hide();
                    buttonvideo.hide();                                
                    bridget.style.visibility = "hidden";
                    video3stop();
                });     
        });

    }
);


