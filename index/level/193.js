﻿oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oCactus, oPlantern, oSplitPea, oStarfruit, oPumpkinHead, oFlowerPot, oCoffeeBean, oGarlic, oSeaShroom, oOxygen, ostar, oTTS, oSeaAnemone, oGatlingPea, oGloomShroom, oTwinSunflower, oSpikerock, oTenManNut, oSnowRepeater, oLing, oLotusRoot, oMagneticmuShroom, oLaserBean, oBigChomper], 
    ZName: [oZombie, oZombie2, oZombie3, oConeheadZombie, oBucketheadZombie, oCXZombie, oJackinTheBoxZombie, oFootballZombie, oCConeheadZombie, oPoleVaultingZombie, oHeiFootballZombie, oXBZombie, oCZombie, oDuckyTubeZombie2, oDuckyTubeZombie3, oDuckyTubeZombie4, oDuckyTubeZombie1, oDolphinRiderZombie, oCBucketheadZombie, oMustacheZombie, oTrashZombie, oSubZombie],
    PicArr: function() {
        return ["images/interface/backgroundX1.jpg"]
    } (),
    backgroundImage: "images/interface/backgroundX1.jpg",
    CanSelectCard: 1,
    LevelName: "常青之塔 43层",
    LvlEName: 193,
    SunNum: 9900,
    LF: [0, 2, 3, 3, 2, 2, 0], 
    StartGameMusic: "The Great Wall",  
    LargeWaveFlag: {
        5 : $("imgFlag3"),
        10 : $("imgFlag2"),
        15 : $("imgFlag1")
    },
    InitLawnMower: function() {
        CustomSpecial(oPoolCleaner, 1, -1)
        CustomSpecial(oLawnCleaner, 2, -1)
        CustomSpecial(oLawnCleaner, 3, -1)
        CustomSpecial(oPoolCleaner, 4, -1)
        CustomSpecial(oPoolCleaner, 5, -1)
    }
},
{
    AZ: [[oZombie, 1, 1], [oZombie2, 1, 1], [oZombie3, 1, 1], [oConeheadZombie, 1, 1], [oBucketheadZombie, 1, 1], [oCXZombie, 1, 1], [oJackinTheBoxZombie, 1, 1], [oFootballZombie, 1, 1], [oDolphinRiderZombie, 1, 1], [oCConeheadZombie, 1, 1], [oPoleVaultingZombie, 1, 1], [oHeiFootballZombie, 1, 1], [oDuckyTubeZombie2, 1, 1], [oDuckyTubeZombie3, 1, 1], [oDuckyTubeZombie1, 1, 1], [oDuckyTubeZombie4, 1, 1], [oCZombie, 1, 1], [oXBZombie, 1, 1], [oCBucketheadZombie, 1, 1], [oMustacheZombie, 1, 1], [oTrashZombie, 1, 1], [oSubZombie, 1, 1]],
    FlagNum: 15,
    FlagToSumNum: {
        a1: [75, 92, 116, 145, 160, 188, 188],
        a2: [75, 92, 116, 145, 160, 188, 207]
    },
    FlagToMonitor: {
        4 : [ShowLargeWave, 0],
        9 : [ShowLargeWave, 0],
        14 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
 NewImg("imgSF", "images/interface/trophy.png", "left:260px;top:233px", EDAll, {
            onclick: function() {
                SelectModal(194)
            }
        });
        NewImg("PointerUD", "images/interface/PointerDown.gif", "top:185px;left:676px", EDAll)
    }
});