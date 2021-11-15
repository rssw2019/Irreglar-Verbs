let questions =
    [
{"question":"arise","answer":"arisen","choices":["arise","arisen","ariseed","ariset","ariseought"]},
{"question":"awake","answer":"awoken","choices":["awake","awoken","awakeed","awaket","awakeought"]},
{"question":"bear","answer":"born(e)","choices":["bear","born(e)","beared","beart","bearought"]},
{"question":"beat","answer":"beaten","choices":["beat","beaten","beated","beatt","beatought"]},
{"question":"become","answer":"become","choices":["become","become","becomeed","becomet","becomeought"]},
{"question":"begin","answer":"begun","choices":["begin","begun","begined","begint","beginought"]},
{"question":"bend","answer":"bent","choices":["bend","bent","bended","bendt","bendought"]},
{"question":"bet","answer":"bet","choices":["bet","bet","beted","bett","betought"]},
{"question":"bind","answer":"bound","choices":["bind","bound","binded","bindt","bindought"]},
{"question":"bite","answer":"bitten","choices":["bite","bitten","biteed","bitet","biteought"]},
{"question":"bleed","answer":"bled","choices":["bleed","bled","bleeded","bleedt","bleedought"]},
{"question":"blow","answer":"blown","choices":["blow","blown","blowed","blowt","blowought"]},
{"question":"break","answer":"broken","choices":["break","broken","breaked","breakt","breakought"]},
{"question":"breed","answer":"bred","choices":["breed","bred","breeded","breedt","breedought"]},
{"question":"bring","answer":"brought","choices":["bring","brought","bringed","bringt","bringought"]},
{"question":"broadcast","answer":"broadcast","choices":["broadcast","broadcast","broadcasted","broadcastt","broadcastought"]},
{"question":"build","answer":"built","choices":["build","built","builded","buildt","buildought"]},
{"question":"burn","answer":"burnt/burned","choices":["burn","burnt/burned","burned","burnt","burnought"]},
{"question":"burst","answer":"burst","choices":["burst","burst","bursted","burstt","burstought"]},
{"question":"buy","answer":"bought","choices":["buy","bought","buyed","buyt","buyought"]},
{"question":"catch","answer":"caught","choices":["catch","caught","catched","catcht","catchought"]},
{"question":"choose","answer":"chosen","choices":["choose","chosen","chooseed","chooset","chooseought"]},
{"question":"cling","answer":"clung","choices":["cling","clung","clinged","clingt","clingought"]},
{"question":"come","answer":"come","choices":["come","come","comeed","comet","comeought"]},
{"question":"cost","answer":"cost","choices":["cost","cost","costed","costt","costought"]},
{"question":"creep","answer":"crept","choices":["creep","crept","creeped","creept","creepought"]},
{"question":"cut","answer":"cut","choices":["cut","cut","cuted","cutt","cutought"]},
{"question":"deal","answer":"dealt","choices":["deal","dealt","dealed","dealt","dealought"]},
{"question":"dig","answer":"dug","choices":["dig","dug","diged","digt","digought"]},
{"question":"do","answer":"done","choices":["do","done","doed","dot","doought"]},
{"question":"draw","answer":"drawn","choices":["draw","drawn","drawed","drawt","drawought"]},
{"question":"dream","answer":"dreamt/dreamed","choices":["dream","dreamt/dreamed","dreamed","dreamt","dreamought"]},
{"question":"drink","answer":"drunk","choices":["drink","drunk","drinked","drinkt","drinkought"]},
{"question":"drive","answer":"driven","choices":["drive","driven","driveed","drivet","driveought"]},
{"question":"eat","answer":"eaten","choices":["eat","eaten","eated","eatt","eatought"]},
{"question":"fall","answer":"fallen","choices":["fall","fallen","falled","fallt","fallought"]},
{"question":"feed","answer":"fed","choices":["feed","fed","feeded","feedt","feedought"]},
{"question":"feel","answer":"felt","choices":["feel","felt","feeled","feelt","feelought"]},
{"question":"fight","answer":"fought","choices":["fight","fought","fighted","fightt","fightought"]},
{"question":"find","answer":"found","choices":["find","found","finded","findt","findought"]},
{"question":"fly","answer":"flown","choices":["fly","flown","flyed","flyt","flyought"]},
{"question":"forbid","answer":"forbidden","choices":["forbid","forbidden","forbided","forbidt","forbidought"]},
{"question":"forget","answer":"forgotten","choices":["forget","forgotten","forgeted","forgett","forgetought"]},
{"question":"forgive","answer":"forgiven","choices":["forgive","forgiven","forgiveed","forgivet","forgiveought"]},
{"question":"freeze","answer":"frozen","choices":["freeze","frozen","freezeed","freezet","freezeought"]},
{"question":"get","answer":"got","choices":["get","got","geted","gett","getought"]},
{"question":"give","answer":"given","choices":["give","given","giveed","givet","giveought"]},
{"question":"go","answer":"gone","choices":["go","gone","goed","got","goought"]},
{"question":"grind","answer":"ground","choices":["grind","ground","grinded","grindt","grindought"]},
{"question":"grow","answer":"grown","choices":["grow","grown","growed","growt","growought"]},
{"question":"hang","answer":"hung","choices":["hang","hung","hanged","hangt","hangought"]},
{"question":"have","answer":"had","choices":["have","had","haveed","havet","haveought"]},
{"question":"hear","answer":"heard","choices":["hear","heard","heared","heart","hearought"]},
{"question":"hide","answer":"hidden","choices":["hide","hidden","hideed","hidet","hideought"]},
{"question":"hit","answer":"hit","choices":["hit","hit","hited","hitt","hitought"]},
{"question":"hold","answer":"held","choices":["hold","held","holded","holdt","holdought"]},
{"question":"hurt","answer":"hurt","choices":["hurt","hurt","hurted","hurtt","hurtought"]},
{"question":"keep","answer":"kept","choices":["keep","kept","keeped","keept","keepought"]},
{"question":"kneel","answer":"knelt","choices":["kneel","knelt","kneeled","kneelt","kneelought"]},
{"question":"know","answer":"known","choices":["know","known","knowed","knowt","knowought"]},
{"question":"lay","answer":"laid","choices":["lay","laid","layed","layt","layought"]},
{"question":"lead","answer":"led","choices":["lead","led","leaded","leadt","leadought"]},
{"question":"lean","answer":"leant/leaned","choices":["lean","leant/leaned","leaned","leant","leanought"]},
{"question":"learn","answer":"learnt/learned","choices":["learn","learnt/learned","learned","learnt","learnought"]},
{"question":"leave","answer":"left","choices":["leave","left","leaveed","leavet","leaveought"]},
{"question":"lend","answer":"lent","choices":["lend","lent","lended","lendt","lendought"]},
{"question":"light","answer":"lit/lighted","choices":["light","lit/lighted","lighted","lightt","lightought"]},
{"question":"lose","answer":"lost","choices":["lose","lost","loseed","loset","loseought"]},
{"question":"make","answer":"made","choices":["make","made","makeed","maket","makeought"]},
{"question":"mean","answer":"meant","choices":["mean","meant","meaned","meant","meanought"]},
{"question":"meet","answer":"met","choices":["meet","met","meeted","meett","meetought"]},
{"question":"mow","answer":"mown/mowed","choices":["mow","mown/mowed","mowed","mowt","mowought"]},
{"question":"overtake","answer":"overtaken","choices":["overtake","overtaken","overtakeed","overtaket","overtakeought"]},
{"question":"pay","answer":"paid","choices":["pay","paid","payed","payt","payought"]},
{"question":"put","answer":"put","choices":["put","put","puted","putt","putought"]},
{"question":"read","answer":"read","choices":["read","read","readed","readt","readought"]},
{"question":"ride","answer":"ridden","choices":["ride","ridden","rideed","ridet","rideought"]},
{"question":"ring","answer":"rung","choices":["ring","rung","ringed","ringt","ringought"]},
{"question":"rise","answer":"risen","choices":["rise","risen","riseed","riset","riseought"]},
{"question":"run","answer":"run","choices":["run","run","runed","runt","runought"]},
{"question":"saw","answer":"sawn/sawed","choices":["saw","sawn/sawed","sawed","sawt","sawought"]},
{"question":"say","answer":"said","choices":["say","said","sayed","sayt","sayought"]},
{"question":"see","answer":"seen","choices":["see","seen","seeed","seet","seeought"]},
{"question":"sell","answer":"sold","choices":["sell","sold","selled","sellt","sellought"]},
{"question":"send","answer":"sent","choices":["send","sent","sended","sendt","sendought"]},
{"question":"set","answer":"set","choices":["set","set","seted","sett","setought"]},
{"question":"sew","answer":"sewn/sewed","choices":["sew","sewn/sewed","sewed","sewt","sewought"]},
{"question":"shake","answer":"shaken","choices":["shake","shaken","shakeed","shaket","shakeought"]},
{"question":"shed","answer":"shed","choices":["shed","shed","sheded","shedt","shedought"]},
{"question":"shine","answer":"shone","choices":["shine","shone","shineed","shinet","shineought"]},
{"question":"shoot","answer":"shot","choices":["shoot","shot","shooted","shoott","shootought"]},
{"question":"show","answer":"shown","choices":["show","shown","showed","showt","showought"]},
{"question":"shrink","answer":"shrunk","choices":["shrink","shrunk","shrinked","shrinkt","shrinkought"]},
{"question":"shut","answer":"shut","choices":["shut","shut","shuted","shutt","shutought"]},
{"question":"sing","answer":"sung","choices":["sing","sung","singed","singt","singought"]},
{"question":"sink","answer":"sunk","choices":["sink","sunk","sinked","sinkt","sinkought"]},
{"question":"sit","answer":"sat","choices":["sit","sat","sited","sitt","sitought"]},
{"question":"sleep","answer":"slept","choices":["sleep","slept","sleeped","sleept","sleepought"]},
{"question":"slide","answer":"slid","choices":["slide","slid","slideed","slidet","slideought"]},
{"question":"smell","answer":"smelt","choices":["smell","smelt","smelled","smellt","smellought"]},
{"question":"sow","answer":"sown/sowed","choices":["sow","sown/sowed","sowed","sowt","sowought"]},
{"question":"speak","answer":"spoken","choices":["speak","spoken","speaked","speakt","speakought"]},
{"question":"spell","answer":"spelt/spelled","choices":["spell","spelt/spelled","spelled","spellt","spellought"]},
{"question":"spend","answer":"spent","choices":["spend","spent","spended","spendt","spendought"]},
{"question":"spill","answer":"spilt/spilled","choices":["spill","spilt/spilled","spilled","spillt","spillought"]},
{"question":"spit","answer":"spat","choices":["spit","spat","spited","spitt","spitought"]},
{"question":"spread","answer":"spread","choices":["spread","spread","spreaded","spreadt","spreadought"]},
{"question":"stand","answer":"stood","choices":["stand","stood","standed","standt","standought"]},
{"question":"steal","answer":"stolen","choices":["steal","stolen","stealed","stealt","stealought"]},
{"question":"stick","answer":"stuck","choices":["stick","stuck","sticked","stickt","stickought"]},
{"question":"sting","answer":"stung","choices":["sting","stung","stinged","stingt","stingought"]},
{"question":"stink","answer":"stunk","choices":["stink","stunk","stinked","stinkt","stinkought"]},
{"question":"strike","answer":"struck","choices":["strike","struck","strikeed","striket","strikeought"]},
{"question":"swear","answer":"sworn","choices":["swear","sworn","sweared","sweart","swearought"]},
{"question":"sweep","answer":"swept","choices":["sweep","swept","sweeped","sweept","sweepought"]},
{"question":"swell","answer":"swollen/swelled","choices":["swell","swollen/swelled","swelled","swellt","swellought"]},
{"question":"swim","answer":"swum","choices":["swim","swum","swimed","swimt","swimought"]},
{"question":"swing","answer":"swung","choices":["swing","swung","swinged","swingt","swingought"]},
{"question":"take","answer":"taken","choices":["take","taken","takeed","taket","takeought"]},
{"question":"teach","answer":"taught","choices":["teach","taught","teached","teacht","teachought"]},
{"question":"tear","answer":"torn","choices":["tear","torn","teared","teart","tearought"]},
{"question":"tell","answer":"told","choices":["tell","told","telled","tellt","tellought"]},
{"question":"think","answer":"thought","choices":["think","thought","thinked","thinkt","thinkought"]},
{"question":"throw","answer":"thrown","choices":["throw","thrown","throwed","throwt","throwought"]},
{"question":"understand","answer":"understood","choices":["understand","understood","understanded","understandt","understandought"]},
{"question":"wake","answer":"woken","choices":["wake","woken","wakeed","waket","wakeought"]},
{"question":"wear","answer":"worn","choices":["wear","worn","weared","weart","wearought"]},
{"question":"weep","answer":"wept","choices":["weep","wept","weeped","weept","weepought"]},
{"question":"win","answer":"won","choices":["win","won","wined","wint","winought"]},
{"question":"wind","answer":"wound","choices":["wind","wound","winded","windt","windought"]},
{"question":"write","answer":"written","choices":["write","written","writed","writ","writought"]}
]