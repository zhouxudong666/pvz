﻿oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oCactus, oPlantern, oSplitPea, oStarfruit, oPumpkinHead, oCFlowerPot, oCoffeeBean, oGarlic, oSeaShroom, oOxygen, ostar, oTTS, oSeaAnemone, oGatlingPea, oGloomShroom, oTwinSunflower, oSpikerock, oTenManNut, oSnowRepeater, oLing, oLotusRoot, oMagneticmuShroom, oLaserBean, oBigChomper, oFlamesMushroom], 
    ZName: [oCZombie, oCZombie2, oCZombie3, oCConeheadZombie, oCBucketheadZombie, oEunZombie],
    PicArr: ["images/interface/backgroundwall.jpg"], 
    LF: [0, 3, 3, 3, 3, 3, 3], 
    backgroundImage: "images/interface/backgroundwall.jpg",
    CanSelectCard: 1, 
    LevelName: "初入中国",  
    LvlEName: 9,  
    SunNum: 500,  
    AudioArr: ["crazydaveshort1", "crazydavelong1", "crazydavelong2", "crazydavelong3"],
    LargeWaveFlag: {
        10 : $("imgFlag3"),
        20 : $("imgFlag1") 
     },
    InitLawnMower: function() {
        CustomSpecial(oCleaner, 1, -1)
        CustomSpecial(oCleaner, 2, -1)
        CustomSpecial(oCleaner, 3, -1)
        CustomSpecial(oCleaner, 4, -1)
        CustomSpecial(oCleaner, 5, -1)
    },
    LoadMusic: "Faster",
    StartGameMusic: "The Great Wall",  
    LoadAccess: function(a) {
        NewImg("dDave", "images/interface/Dave.gif", "left:0;top:81px", EDAll);
        NewEle("DivTeach", "div", 0, 0, EDAll); (function(d) {
            var b = arguments.callee,
            c = $("DivTeach");
            switch (d) {
            case 0:
                PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                c.onclick = null;
                $("dDave").src = "images/interface/Dave3.gif";
                oSym.addTask(2,
                function() {
                    $("dDave").src = "images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [1])
                    }
                },
                []);
                c.innerHTML = '<span style="font-size:22px">哈哈，终于到中国了，伙计。(点击继续)</span>';
                break;
            case 1:
                PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                c.onclick = null;
                $("dDave").src = "images/interface/Dave3.gif";
                oSym.addTask(2,
                function() {
                    $("dDave").src = "images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [2])
                    }
                },
                []);
                   c.innerHTML = '<span style="font-size:22px">瞧那气势蓬勃的长城，还有那些该死的僵尸！</span>';
                break;
            case 2:
                PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                c.onclick = null;
                $("dDave").src = "images/interface/Dave3.gif";
                oSym.addTask(2,
                function() {
                    $("dDave").src = "images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [3])
                    }
                },
                []);
                   c.innerHTML = '<span style="font-size:22px">这次作战地点在长城上，因此是瓷砖地(点击继续)</span>';
                break;
            case 3:
                PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                c.onclick = null;
                $("dDave").src = "images/interface/Dave3.gif";
                oSym.addTask(2,
                function() {
                    $("dDave").src = "images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [4])
                    }
                },
                []);
                   c.innerHTML = '<span style="font-size:22px">你可以运用花盆来应付这寸草难生的地形。(点击继续)</span>';
                break;
            case 4:
                PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                c.onclick = null;
                $("dDave").src = "images/interface/Dave3.gif";
                oSym.addTask(2,
                function() {
                    $("dDave").src = "images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [5])
                    }
                },
                []);
                c.innerHTML = '<span style="font-size:22px">记得我说的话，你会挺过去的。(点击继续)</span>';
                break;
            case 5:
                $("dDave").src = "images/interface/Dave2.gif";
                ClearChild($("DivTeach"));
                oSym.addTask(5,
                function() {
                    ClearChild($("dDave"));
                    a(0)
                    StopMusic();
                    PlayMusic(oS.LoadMusic = "Look up at the Sky")
                },
                [])
            }
        })(0)
    }
},
{
    AZ: [[oCZombie, 2, 1],  [oCZombie2, 1, 5], [oCZombie3, 2, 20], [oCConeheadZombie, 2, 5],  [oCBucketheadZombie, 2, 9],  [oEunZombie, 2, 9]], 
    FlagNum: 20, 
    FlagToSumNum: {
        a1: [3, 5, 7, 10, 13, 15, 19, 20, 23, 25, 29],
        a2: [1, 2, 3, 8, 4, 5, 6, 15, 7, 8, 9, 25] 
    },
    FlagToMonitor: {
        9 : [ShowLargeWave, 0],
        19 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
 NewImg("imgSF", "images/interface/trophy.png", "left:260px;top:233px", EDAll, {
            onclick: function() {
                SelectModal(101)
            }
        });
        NewImg("PointerUD", "images/interface/PointerDown.gif", "top:185px;left:676px", EDAll)
    }
});