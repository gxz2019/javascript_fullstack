var jsonSql = require('json-sql')()
var sq1 = jsonSql.build({
  type:'insert',
  table:'Strategy',
  values: [
    {
      text1: '写在二月，一份丽江开往稻城的自驾摄影攻略。',
      text2: "一份旅行摄影攻略，走马观花，写在二月。关于旅行。我们还有很多地方没去，很多事情没做，很多人没见。我们以为总有一天我们能去，能做，能见，但事实上我们最后拥有的，往往是 ——去不成，做不了和见不得。从丽江自驾往稻城亚丁这一 段路，算是一...",
      text3: '22978浏览',
      text4: '山峰不会写游记',
      img1: 'https://p1-q.mafengwo.net/s15/M00/3F/8D/CoUBGV5T6dOAUiX0AAwSIkhKPdc001.png?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
      img2: 'https://p1-q.mafengwo.net/s10/M00/FC/75/wKgBZ1k0xpGAVtXIABDSK_WlQaM10.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90'
    },
    {
      text1: '吹着小风喝口快乐水｜一脚油门进深秋 —— 川西自驾行摄 ♥',
      text2: '前：陈词滥调 不落俗套 从 大理 开车到 川西 来回一共七天 整整七天，我们把整年的沉闷和压力留在了民宿大门 口，任凭这金秋的冷风带它远去。 不类似于一意孤行仗剑走天涯，也没有巴音布鲁克的豪迈。 我只愿简单点，头也不回地驶向自由，释放掉着积压已久的疲倦感！ 一整年，从去年 新疆 回来，装修 新民 宿，办婚礼，工作室开业种种琐事忙的焦头烂额。相 机也在一次次拍旅拍和人像的过程中失去斗志，这次终于可以迈开小短腿！我要出门拍山拍水啦。 而印象里， 川西 ，是在大四 的时候，看老魔的笔记，那篇 川西 牛背山 的笔记，彻彻底底在',
      text3: '147浏览',
      text4: '、大怪獸。',
      img1: 'https://n1-q.mafengwo.net/s15/M00/56/22/CoUBGV5VCH-APCwhAA3BSAvIQUs963.jpg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
      img2: 'https://n1-q.mafengwo.net/s12/M00/9F/36/wKgED1vDcvSAQJ55AADUuQISECg50.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90'
    },
  ]
})
sq1.query
sq1.values

console.log(sq1)

