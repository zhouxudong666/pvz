﻿oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oCactus, oPlantern, oSplitPea, oStarfruit, oPumpkinHead, oFlowerPot, oCoffeeBean, oGarlic, oSeaShroom, oOxygen, ostar, oTTS, oGun, oSeaAnemone, oGatlingPea, oGloomShroom, oTwinSunflower, oSpikerock, oTenManNut, oSnowRepeater, oLing, oLotusRoot, oMagneticmuShroom, oLaserBean], 
    ZName: [oZombie, oZombie2, oZombie3, oConeheadZombie, oBucketheadZombie, oMustacheZombie, oCZombie, oCZombie2, oCZombie3, oCConeheadZombie, oCBucketheadZombie, oFootballZombie, oXBZombie, oEmperor],
    PicArr: function() {
        return ["images/interface/backgroundLG.jpg"]
    } (),
    backgroundImage: "images/interface/backgroundLG.jpg",
    CanSelectCard: 1,
    LevelName: "常青之塔 25层",
    LvlEName: 175,
    SunNum: 6000,
    DKind: 0,
    LF: [0, 3, 3, 3, 3, 3, 3], 
    StartGameMusic: "Lg_pk",
    LargeWaveFlag: {
        5 : $("imgFlag3"),
        10 : $("imgFlag1")
    }
},
{
    AZ: [[oZombie, 1, 1], [oZombie2, 1, 1], [oZombie3, 1, 1], [oConeheadZombie, 1, 1], [oBucketheadZombie, 1, 1], [oFootballZombie, 1, 1], [oCConeheadZombie, 1, 1], [oCZombie, 1, 1], [oXBZombie, 1, 1], [oCBucketheadZombie, 1, 1], [oCZombie3, 1, 1], [oCZombie2, 1, 1], [oMustacheZombie, 1, 1], [oEmperor, 1, 10, [10]]],
    FlagNum: 10,
    FlagToSumNum: {
        a1: [35, 69, 71, 87],
        a2: [35, 69, 71, 107]
    },
    FlagToMonitor: {
        4 : [ShowLargeWave, 0],
        9 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
 NewImg("imgSF", "images/interface/trophy.png", "left:260px;top:233px", EDAll, {
            onclick: function() {
                SelectModal(176)
            }
        });
        NewImg("PointerUD", "images/interface/PointerDown.gif", "top:185px;left:676px", EDAll)
    }
});