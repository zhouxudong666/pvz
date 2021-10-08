﻿oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oCactus, oPlantern, oSplitPea, oStarfruit, oPumpkinHead, oFlowerPot, oCoffeeBean, oGarlic, oSeaShroom, oOxygen, ostar, oTTS, oSeaAnemone, oGatlingPea, oGloomShroom, oTwinSunflower, oSpikerock, oTenManNut, oSnowRepeater, oLing, oLotusRoot, oMagneticmuShroom], 
    ZName: [oZombie, oZombie2, oZombie3, oConeheadZombie, oBucketheadZombie, oNewspaperZombie, oJackinTheBoxZombie, oFootballZombie, oDancingZombie, oScreenDoorZombie, oBackupDancer, oZomboni, oPoleVaultingZombie, oEmperor],
    PicArr: function() {
        return ["images/interface/background2.jpg"]
    } (),
    backgroundImage: "images/interface/background2.jpg",
    CanSelectCard: 1,
    LevelName: "常青之塔 10层",
    LvlEName: 158,
    SunNum: 4000,
    DKind: 0,
    StartGameMusic: "Ultimate battle",
    LargeWaveFlag: {
        10 : $("imgFlag2")
    }
},
{
    AZ: [[oZombie, 1, 1], [oZombie2, 1, 1], [oZombie3, 1, 1], [oConeheadZombie, 1, 1], [oBucketheadZombie, 1, 1], [oNewspaperZombie, 1, 1], [oJackinTheBoxZombie, 1, 1], [oFootballZombie, 1, 1], [oDancingZombie, 1, 1], [oScreenDoorZombie, 1, 1], [oZomboni, 1, 1], [oPoleVaultingZombie, 1, 1], [oEmperor, 1, 10, [10]]],
    FlagNum: 10,
    FlagToSumNum: {
        a1: [17, 35],
        a2: [17, 55]
    },
    FlagToMonitor: {
        9 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
        NewImg("imgSF", "images/Card/Plants/LaserBean.png", "left:827px;top:525px;clip:rect(auto,auto,60px,auto)", EDAll, {
            onclick: function() {
                GetNewCard(this, oLaserBean, 161)
            }
        });
        NewImg("PointerUD", "images/interface/PointerDown.gif", "top:490px;left:836px", EDAll)
    }
});