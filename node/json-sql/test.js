var jsonSql = require('json-sql')()
var sq1 = jsonSql.build({
  type:'insert',
  table:'mfw_index_strategy',
  values:[
    {
      text1: '柬埔寨 | 带着汉服去吴哥窟，徜徉在这曼妙的光影世界',
      text2: '飞机降落暹粒机场时正是日落时分。太阳斜斜的挂在天边散发着余温，整个天空都被染作橙色。我一瞬间有种说不清道不明的感动，只觉心上分外雀跃，当下便道：我爱上这里了。也许因为正好的天气与正好的时机，也许不单单源于这些。那感觉，是一种磁场的共...',
      text3: '7820浏览',
      author: '筱莲',
      img_url1: 'https://p1-q.mafengwo.net/s15/M00/DF/BE/CoUBGV5WY3aAfkf4ABAxR9T2u94492.png?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
      img_url2: 'https://p1-q.mafengwo.net/s13/M00/E3/48/wKgEaVzGriqACk9_AACTObgkT_o76.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90',
      id: 1
    },
    {
      text1: '【逛吃のDEMO】以户外的名义，来一场阳朔会友',
      text2: '久违了的出行 再次飞上来高空，离开 北京 的喧嚣。 自从加入体制内上班数月过去， 本心放下旅行，回归正常的生活。 时间愈久，心里总觉缺点什么。 19年12月忙完月初的大活动，老板特批了几天的假期。这时候少了很多计划旅行的冲动，不知道去哪里，但又不想浪费得之不易的假期。 一位在 拉萨 认识的朋友，在 阳朔 待了很久。跟她聊完之后，也被邀请到 阳朔 玩几天。最省事的是完全不用计划去哪里，她就完全给安排了，这是从来没有过的旅行体验。 阳朔 在15年骑行 中国 的时候去过， 这里有绵延的喀斯特地貌， 有天天嗦粉的迷人“酸臭”味',
      text3: '1933浏览',
      author: 'demo在路上(BJ)',
      img_url1: 'https://p1-q.mafengwo.net/s15/M00/95/42/CoUBGV5Pi02ASaJZABGchziaOqs816.jpg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
      img_url2: 'https://b1-q.mafengwo.net/s9/M00/B5/A8/wKgBs1hiYkqAMd3KAC6XtD3hwwY60.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90',
      id: 2
    },
    {
      text1: '没有热气球的土耳其～也可以很浪漫：棉花堡、伊兹密尔、伊斯坦布尔Ⅱ',
      text2: '你好！ 土耳其 ，我又回来了 难产时隔1年的游记，因为疫情重新开启 久违的记忆… 是 棉花堡 的温情在召唤陨泣 还是君士坦丁堡的深沉在低吟哭泣 舍不得的是照片，还是回忆？ 想想只是简单的“美”而已 美在心口、美在眼间想传递 白月光般的 代尼兹利 只属于 伊兹密尔 海边垂钓的那份惬意 还有、还有 伊斯坦布尔 的浓情蜜意 都是不可磨灭的记忆 （煽情Ending） 土耳其的小TIP 再次提笔写游记， 土耳其 却经历了 里拉 大跌、客机冲出跑道等大片才有的情节，似乎2020的世界末日即将来临。 境内交通： 说到 土耳其 的交通，如果不是自驾的小伙',
      text3: '5005浏览',
      author: 'h__i_g 顧',
      img_url1: 'https://b1-q.mafengwo.net/s15/M00/73/8D/CoUBGV5SQ52AS_mkAAdFrgQmTWc240.jpg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
      img_url2: 'https://n1-q.mafengwo.net/s12/M00/BE/C9/wKgED1vtcw2AZTKpAACbeLbgLZ489.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90',
      id: 3
    },
    {
      text1: '缅甸 | 不同于你所知道的其他任何地方（含蒲甘小众机位）',
      text2: '想着去哪里跨年， 缅甸 拜佛是临时起意。可来了之后发现，佛龛太多，不知道该跟哪一尊倾诉。反而看了很多次日出日落，很多不同的光。看到光，就觉得一切都会好。 缅甸 回来后也画了插图，最近时间都变得多了一些，索性做成了小的动图（如上）。 一段视频记录时光：关于 缅甸 风光丨市井烟火气丨可爱和心动的瞬间。 三分钟的视频不足以说完整个旅程，朋友说看着 缅甸 的小朋友想起了她去 贵州 的旅行。比起观光，民生百态给人更多的感触吧。 在 缅甸 ，白天赤脚的时间远远多于穿着鞋子，吃着涩口的生叶槟榔，抽一根 缅甸 雪茄，看当地村民',
      text3: '1227浏览',
      author: '欢儿欢－Queenio',
      img_url1: 'https://b1-q.mafengwo.net/s15/M00/28/6E/CoUBGV5KW0SALawTAAiPO2fYsak840.jpg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
      img_url2: 'https://n1-q.mafengwo.net/s10/M00/73/17/wKgBZ1ncMA2ABdkgAACtuWFaj1g88.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90',
      id: 4
    },
    {
      text1: '班芙印象 - Into the Wild',
      text2: '前言 去年七月底从班芙回来，便打算写篇略微详细点的游记。谁成想，断断续续的竟然拖了大半年才写完。 去班芙的行程，大概提前半年就开始筹划和预订了。即便如此，还是晚了些，很多热门的旅店都已经订光了。相对以往，这次旅行的计划颇有难度，一来时时间跨度比较长，来回12天。二来从Calgary到Jasper差不多三百公里，中间可以露宿的地方不多且相距较远，于是计划每一天做什么，住在哪里就格外重要。前前后后读了上百篇的文章，对几个国家公园的day hiking都进行了比较深入的研究，才最后定下了最终行程和每天的备选方案。当然计划永远没',
      text3: '3910浏览',
      author: 'PQ',
      img_url1: 'https://p1-q.mafengwo.net/s14/M00/27/65/wKgE2l1kO4-AG-DjAApSGczRXww297.jpg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
      img_url2: 'https://n1-q.mafengwo.net/s14/M00/F5/BD/wKgE2l1kGeiAKk2tAAATSWg59i056.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90',
      id: 5
    },
    {
      text1: '陆路穿越非洲12国自由行--（1）埃及',
      text2: '穿越 非洲 12国之--（1） 埃及 埃及 、 苏丹 、 埃塞俄比亚 、 肯尼亚 、 乌干达 、 卢旺达 、 布隆迪 、 坦桑尼亚 、 赞比亚 、 津巴布韦 、 博茨瓦纳 、 纳米比亚 。 9天，费用2300元（含签证费175元） 机票12国平均分摊550元。 共2850元人民币。 陆路穿越 非洲 ，是不是很好听。 但如果你选择了从 埃及 陆路穿越 非洲 ，那你就要做好心理准备，有可能常常要坐30~40小时的大巴，遇到坏车爆胎，路上被偷被抢，还可能会睡到传说中的牛棚。 所有陆路穿越 非洲 的过来人都告诉我这段路苦不堪言。 但我做好了准备，其它都不是问题，但我不能',
      text3: '1064浏览',
      author: '采桑子',
      img_url1: 'https://p1-q.mafengwo.net/s15/M00/A7/02/CoUBGV3X3pOACBvOAAx3oPhlCyo80.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
      img_url2: 'https://p1-q.mafengwo.net/s5/M00/15/99/wKgB3FIReAGABNwyAAAQIjEW8WQ03.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90',
      id: 6
    },
    {
      text1: '古巴的流金岁月（附巴拿马）',
      text2: '前言 文章接着上一篇游记《tu color. 墨西哥 的彩色》 http://www.mafengwo.cn/i/11864458.html 开头想说说为什么推荐你们来 古巴 ： 可能很多人说， 古巴 是社会主义， 古巴 被 美国 制裁， 古巴 的老爷车等等等吸引他们来的，但是我想说，我为什么推荐你们来 古巴 最重要的原因是-- 古巴 是美洲最安全的国家，没有之一。你完全可以像 缅甸 一样，带着相机去任何没有人的街道，不必担心遭到抢劫。而 墨西哥 ， 巴拿马 ， 哥伦比亚 ， 厄瓜多尔 ， 秘鲁 的治安让人堪忧。 古巴 的热情好客让你感受拉丁人的活力，你可以拍摄当地人，而不用',
      text3: '4612浏览',
      author: '陈小皓皓',
      img_url1: 'https://b1-q.mafengwo.net/s15/M00/38/D7/CoUBGV5RDw2AJfwRAAcrdQZ9GUc36.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
      img_url2: 'https://n1-q.mafengwo.net/s9/M00/D3/74/wKgBs1ao8iGAXsKlAAknC7qoXB449.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90',
      id: 7
    },
    {
      text1: '心灵的净化 身体的修行 | 记我在尼泊尔支教和徒步的三周',
      text2: '写在最前面的一些话 今天是2020年2月20日，而今年整个世界开场可谓是多灾多难，很多人都希望今年可以重启。 我从2019年12月20日早上离开 上海 后，直到今年的除夕夜顺利回沪并赶上年夜饭。这次出行的主要目的是在 加德满都 做国际志愿者进行支援教育，而支教项目结束后的计划去 博卡拉 走一次徒步登山，然后再去 奇特旺 来一场“丛林safari”。最后的计划是从 尼泊尔 穿过喜马拉雅山脉通过陆路入境 西藏 然后去 拉萨 ，开始漫漫的春运回家路... 虽然和以往旅行一样，在出发前我做了攻略准备和行程计划，但是因为这次的旅行存在太多不确定',
      text3: '1015浏览',
      author: '法兰黄',
      img_url1: 'https://p1-q.mafengwo.net/s15/M00/9A/8F/CoUBGV5M1LGAEmMLAAWQaLFSyGE717.jpg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
      img_url2: 'https://n1-q.mafengwo.net/s13/M00/B7/C5/wKgEaVxwUOmANyr1AADEGaTEmUc56.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90',
      id: 8
    },
    {
      text1: '斑斓色彩狂野梦幻的摩洛哥',
      text2: '这里，一半海水，一半沙漠， 一半古老，一半神秘； 这里，诞生了奇妙的《一千零一夜》； 这里，一首歌曲，一部电影，一个城市 Casablanca ； 这里，弥漫着三毛和荷西唯美的爱情故 事…… 摩洛哥 被称为“ 欧洲 和 非洲 的后花园”， 《孤独星球》推荐的全球十佳旅游目的地之一，异域风情与人文色彩交织在一起的神秘国度。 这里每一个城市都有自己独特的色彩。 她既有 地中海 的浪漫，又有阿拉伯的风情，既有 欧洲 的烙迹，更有 非洲 的狂野。她不在 欧洲 却近似 欧洲 ；身处 非洲 却不像 非洲 。 她是阿拉伯国家，又有别于其他阿拉伯国家',
      text3: '1578浏览',
      author: '紫huang🌟',
      img_url1: 'https://n1-q.mafengwo.net/s15/M00/70/79/CoUBGV5U1RCAFMi0AA5rD8V7isM017.jpg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
      img_url2: 'https://p1-q.mafengwo.net/s10/M00/F6/64/wKgBZ1mbsHGAI3UIAACa7PrSpuI99.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90',
      id: 9
    },
    {
      text1: '此去经年，我站在世界的十字路口',
      text2: '篇头 十几年前我在中学学习世界历史和地理的时候，老师告诉我有这样一座城市，在战略位置上扼守着黑海通往 爱琴海 的航线要道，在地理上横亘 亚洲 和 欧洲 且又连接 中东 ，在宗教上基督徒和穆斯 林同 样对其痴迷，在命运上也在拜占庭、古 罗马 、奥斯曼之间几经易主，在名称上，最初他叫君士坦丁堡，后来改为 康斯坦丁 堡，如今他叫 伊斯坦布尔 。 纵观 伊斯坦布尔 的历史，从建成起的2700多年以来，这里战火不熄，即使是现在也依然会听闻偶尔有恐怖袭击在这里滋生事端。大概这里的地理位置太过重要，且宗教的碰撞在这里也从未停止。拿',
      text3: '4510浏览',
      author: 'money3277',
      img_url1: 'https://n1-q.mafengwo.net/s15/M00/90/16/CoUBGV5G2LKAObOjAAygV-Tpxd462.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
      img_url2: 'https://n1-q.mafengwo.net/s15/M00/C8/67/CoUBGV5Uq_GAXCkpAAC5mv8Tx0835.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90',
      id: 10
    },
    {
      text1: '墨西哥是我不可逃脱的命运',
      text2: '前言 丛林与荒漠，喧嚣都市和只有一条小街的印第安村庄，节日的烟花和弗里达的焦虑—— 墨西哥 让人联想到如此众多的生动形象，而现实也不负所望。我用了15天，244868步，记录下了在 墨西哥 的喜·喜·喜·乐…… 墨西哥 乱吗？ 墨西哥 是不是毒品泛滥？ 墨西哥 治安好吗？ 像大家一样，出发之前我也有很多的顾虑。很多朋友劝我换一个目的地， 墨西哥 不安全。但是我生来倔强，想好的事就不会再改变！ 经历过你才会知道， 墨西哥 真的很安全。民风淳朴，旅游环境也特别好。如果你不会西语，遇到了困难不必慌张，他们会非常乐意帮忙。 欧',
      text3: '8105浏览',
      author: 'Leon',
      img_url1: 'https://n1-q.mafengwo.net/s15/M00/B5/F3/CoUBGV5PoNCAaA5WAChsnJuujBs676.jpg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
      img_url2: 'https://n1-q.mafengwo.net/s11/M00/5E/CA/wKgBEFq4n6qAfPqLAAQ7924njXY75.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90',
      id: 11
    },
    {
      text1: '【欧亚大陆“火药桶”下的宁静，黑海和里海间的坚韧】—游走在外高加索三国的十日（阿塞拜疆篇）',
      text2: '【前言】 不知什么时候开始，我开始憧憬夏末的来临，这个季节，在我心中除了即将褪去的炎热，更有一层特殊的色彩。 每年的这个时候，我将决定来年旅行的行程，而从策划旅行的整个过程，到等待着它的到来，是我最享受的时光，你可以称其为别样的“鸡血”吧。 而今年的这趟行程定的确实晚了一些，到了19年国庆都过了，依然还没有决定，倒也不是因为别的什么，就是想去的地方太多，而假期却只有那么几天。僧多粥少，我想很多人能理解这种状态吧。在世界地图日常画烂后，最终决定去这个其实早就想去的地方—外 高加索 。 是的，当我再这打下',
      text3: '1508浏览',
      author: '四分卫',
      img_url1: 'https://n1-q.mafengwo.net/s15/M00/05/5B/CoUBGV45eDCAH3VYAAykv1cpPZQ40.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
      img_url2: 'https://p1-q.mafengwo.net/s15/M00/DB/42/CoUBGV5IC6iAJX04AA1ignxdy5w31.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90',
      id: 12
    },
    {
      text1: '心不在焉却心之所往——记2020东非之旅',
      text2: '最初计划2020年寒假去 新西兰 自驾，后来忙忙碌碌等有时间看机票的时候，已经快上万了。重新筛选目的地，直奔 非洲 了， 摩洛哥 ？ 肯尼亚 ？研究了一番以后，决定来一段 坦桑尼亚 为主的 东非 之旅，然后一切都决定的格外神速，2019年11月敲定一切，等待出发。大致安排了行程， 肯尼亚 1天， 坦桑尼亚 safari9天、海岛4天，用TripAdvisor筛选了十家左右的safari旅行社，发邮件咨询，大部分回复都很快，最终选定了Gosheni公司，还是自己人交流起来方便，而且事实证明Cindy确实太贴心了。 是的，没想到新冠出现，我无数次觉得今年是无缘 东',
      text3: '5201浏览',
      author: 'CMOS',
      img_url1: 'https://b1-q.mafengwo.net/s15/M00/C6/C0/CoUBGV5TjOiAFud1AA8c6FEaNsM067.JPG?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
      img_url2: 'https://b1-q.mafengwo.net/s7/M00/9B/AC/wKgB6lRRncqAKOaPAABtLoFe0JY64.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90',
      id: 13
    },
    {
      text1: '走过童话的梦想，撞进音乐的殿堂',
      text2: '这是一场蓄谋已久却又始料未及的旅程 蓄谋已久的是作为我们的毕业旅行，算是早早就开始计划的了 始料未及的是我们从来没有将此行的目的地列在毕业旅行的计划之中，选择这三个国家纯属一场意外，同时也美的让人意外、不忍离开 此次匆匆走过的三个国家， 瑞士 遍地牛羊、宁静村庄的梦幻， 奥地利 音乐王国、湖光山色的震撼， 捷克 小城广场的浪漫，它们从不同的角度向世人展现着各自的风情和魅力，虽然时间短暂、但却印象深刻。 下面，各位看官，且听我细细分说~ 闪亮瞬间 瑞士篇 瑞士 ，听到这个名字就不由与“人间仙境”四字关联起来，当',
      text3: '1032浏览',
      author: 'westlife',
      img_url1: 'https://p1-q.mafengwo.net/s15/M00/EF/41/CoUBGV5SlV-ABS8VAAjUzNsdfIo651.jpg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
      img_url2: 'https://b1-q.mafengwo.net/s11/M00/AA/94/wKgBEFpourSAJ9J1AABcJlKgcMI63.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90',
      id: 14
    },
    {
      text1: '【欧亚大陆“火药桶”下的宁静，黑海和里海间的坚韧】—游走在外高加索三国的十日（格鲁吉亚篇）',
      text2: '本篇为本次游记第二篇，上接游记 阿塞拜疆 篇 https://imfw.cn/l/143304460 【从差点被关小黑屋的开始】 上文说到我正在 巴库 开往 第比利斯 的列车上感慨万千，那时的我当然不知道一小时后我会面临一个险些被关小黑屋的难题。 我办理完出关手续后回车厢继续躺着，约摸开出去40分钟后，列车又一次停下了，掀开帘子一看，应该是到了 格鲁吉亚 边境。 十分钟后，上来一群边境官，面无表情的收走了护照和电子签。又大约过了二十分钟，来了一批新的官员，对着车厢里的行李箱一顿猛指，意思就是开箱检查。 乖乖打开箱子，一切正常，就再准备关',
      text3: '1704浏览',
      author: '四分卫',
      img_url1: 'https://p1-q.mafengwo.net/s15/M00/F5/78/CoUBGV5L_aWAKGtEAB3jx2m3Bk041.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
      img_url2: 'https://p1-q.mafengwo.net/s15/M00/DB/42/CoUBGV5IC6iAJX04AA1ignxdy5w31.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90',
      id: 15
    },
    {
      text1: '夏天 我们带姑娘一起去“品三国”',
      text2: '每年夏天带着小孩去旅游已经是我们家多年来既定俗成的惯例，姑娘在未上大学之前应该可以继续这个习惯，近日来都围着小孩的课业，考虑着我们的年休假时间，这不2019年暑假过半，我们的工作格外忙一时脱不开身；好不容易逮着这次单位安排去 绵阳 办事的机会，顺便请了一周的年休假于8月7日开车出发，想着直接办完事就可以休假了，于是临时决定就去 绵阳 广元 一带欣赏一路三国人文景观，品一品三国故事，领略一番三国历史遗迹和蜀国田园风光。尤其有位 成都 的好朋友曾多次给我推荐走一走蜀道，他自己每年夏天都会来，开车从 绵阳 下高速后',
      text3: '1037浏览',
      author: '兰天',
      img_url1: 'https://p1-q.mafengwo.net/s15/M00/9B/F5/CoUBGV5U3Z-AERYkAAl_bzseqDU205.jpg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
      img_url2: 'https://b1-q.mafengwo.net/s15/M00/B5/F3/CoUBGV5V56-AKPxJAAwe-_i24Hw70.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90',
      id: 16
    }
  ]
})
sq1.query
sq1.values

console.log(sq1)

