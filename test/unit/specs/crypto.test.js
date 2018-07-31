import crypto from '@/util/crypto.js';

describe('crypto', () => {
  it('should have stable padding', () => {
    let str = '';
    for (let i = 0; i <= 129; i++) {
      const padded = crypto.addPaddingAndEncode(str);
      expect(crypto.decode64(padded).length % 16).toEqual(0);
      str += 'x';
    }
  });
  it('should have correct results', () => {
    expect(crypto.validateMnemonic('a food aware intact hill spirit aerobic topple anxiety submit dilemma ripple palm skill sell frequent okay lounge anchor carry sport jump lab client')).toEqual(false);
    expect(crypto.validateMnemonic('close food aware intact hill spirit aerobic topple anxiety submit dilemma ripple palm skill sell frequent okay lounge anchor carry sport jump lab client')).toEqual(true);
    expect(crypto.derivePassword('qwer1234QWER', 'uySjRkmbzLctBOBtuImQ0dtdi1Cn7S9zKvsqVpKEoDY=')).toEqual('xDyXApxedDC5okpHgU+hBN25N8xMz9WJWXkfkLkwS50=');
    expect(crypto.generateWordlist()).not.toEqual(crypto.generateWordlist());
    expect(crypto.generateMnemonic()).not.toEqual(crypto.generateMnemonic());
    expect(crypto.generateIV()).not.toEqual(crypto.generateIV());
    expect(crypto.generateMasterKey()).not.toEqual(crypto.generateMasterKey());
    expect(crypto.generateSalt()).not.toEqual(crypto.generateSalt());
    expect(crypto.getPublicKey('close food aware intact hill spirit aerobic topple anxiety submit dilemma ripple palm skill sell frequent okay lounge anchor carry sport jump lab client', 0)).toEqual('GCUBYMP4IRZH7RMILQJHK6YFERAVPGBE7NT4E3EDNOLWCHALJ2HA4PTD');
    expect(crypto.getPublicKey('close food aware intact hill spirit aerobic topple anxiety submit dilemma ripple palm skill sell frequent okay lounge anchor carry sport jump lab client', 188)).toEqual('GBQ5QKDKQUTGKZHVID562K4Q4MS2IB6TOGWI5A2OJ563OBJYL64A2A32');

    const derivedPass = 'OzeW4ddXdGewf8HnqRsJpr20bDSmT/7VqW7pLUm8Sn4=';

    const wordlist = 'warrior,ginger,trigger,velvet,dismiss,bar,hood,dynamic,roast,member,cloth,city,news,party,slush,exclude,error,version,suspect,joy,knife,exact,rather,pitch,space,library,exercise,future,project,latin,juice,base,evidence,focus,goddess,soon,sauce,practice,company,duty,birth,embark,ribbon,until,soap,never,hover,spread,welcome,special,hurt,vehicle,stick,name,friend,stone,fiber,lab,cricket,copy,note,crouch,sleep,fiction,banner,afraid,wedding,lawn,unique,spend,citizen,please,decade,gather,ten,foil,attack,patient,squeeze,duck,output,miracle,easy,laptop,index,click,student,dutch,expire,flee,chest,start,beauty,drum,exit,swallow,deal,expose,bicycle,involve,fly,accident,faint,camera,judge,alert,shield,switch,vote,deliver,universe,canyon,census,assist,ripple,motion,uphold,deputy,suggest,lawsuit,route,course,mystery,cactus,wonder,raise,blue,upgrade,can,word,faith,prepare,fluid,begin,stove,garbage,solar,scan,blush,multiply,way,elegant,fuel,pipe,pretty,year,hen,wreck,pigeon,peanut,onion,disagree,pony,digital,hello,clean,bonus,survey,brisk,brother,midnight,promote,advice,shoe,baby,rude,great,reduce,brand,solution,private,tide,arrow,limit,cinnamon,leg,demise,crawl,disorder,reflect,small,very,toward,pen,flash,entire,section,season,control,quote,enough,analyst,couple,odor,false,zebra,gym,budget,same,chuckle,lesson,soccer,steel,prevent,guard,drastic,memory,regular,joke,allow,door,during,gossip,melody,wrap,jealous,favorite,museum,type,element,credit,cruel,donate,comic,scare,success,swarm,nation,toast,poem,layer,lion,dove,smile,ahead,random,defense,bright,excuse,there,jar,response,destroy,glide,hurdle,custom,teach,letter,lunch,struggle,divert,script,oil,join,rose,broccoli,drip,flock,poet,asset,mad,animal,brown,bag,orbit,wish,essence,unfold,inherit,age,six,surface,music,right,material,audit,burst,pumpkin,slide,ball,truly,rare,purse,cattle,derive,harvest,sword,figure,power,decide,regret,myself,tuition,dog,physical,run,patrol,major,one,fix,humble,sand,puppy,carry,enlist,clutch,clock,region,volcano,illegal,price,tilt,thing,dizzy,sail,dish,eyebrow,giggle,purpose,unusual,master,sponsor,normal,color,deny,receive,deposit,sick,sunny,chair,mosquito,donor,use,ozone,flip,coast,maximum,common,brush,escape,together,fine,metal,still,manual,evolve,sadness,urge,between,what,tip,income,business,vital,vendor,tent,post,bubble,matrix,captain,walnut,scatter,drill,hotel,clown,fruit,desk,ladder,belt,humor,dry,lecture,aspect,action,mimic,casino,summer,fault,dune,usual,bunker,margin,push,throw,anchor,salon,heavy,soup,hat,eternal,first,coil,cram,neck,hire,marine,cement,include,lens,vast,end,extend,book,track,cream,beyond,plunge,put,depart,rail,swing,goat,green,seed,long,rural,stay,cube,detail,want,cute,palm,puzzle,dream,acoustic,treat,usage,melt,over,casual,link,gun,hint,thunder,umbrella,castle,guide,jelly,slow,fee,own,harbor,erode,fancy,advance,water,chronic,congress,pond,initial,wolf,perfect,similar,combine,echo,hundred,twenty,slot,lobster,mushroom,jump,salt,satoshi,chunk,enrich,radio,crunch,sibling,wheat,victory,village,climb,skill,kid,style,trash,various,oppose,island,approve,narrow,brass,true,pass,aunt,series,before,shadow,oyster,relax,salmon,day,tuna,foot,awesome,pledge,label,also,spike,learn,boss,travel,length,equip,march,west,scrap,clever,best,above,whale,muscle,title,acquire,gasp,tragic,toy,cancel,penalty,few,sound,cry,doctor,federal,mom,fan,pistol,ability,arrange,divorce,dinosaur,devote,noodle,behind,spatial,life,slogan,gown,boring,trend,heart,short,chimney,main,junk,jewel,shuffle,task,recall,picture,mouse,average,when,below,ocean,genuine,zoo,brain,cupboard,possible,fragile,opera,among,pepper,present,grain,speed,diamond,property,outer,high,spare,car,inquiry,leader,unveil,motor,moon,mind,cheese,soul,genius,million,web,floor,inside,equal,ecology,clump,reform,salad,mutual,sunset,orchard,aim,weasel,govern,saddle,grape,pattern,staff,cover,bean,pact,omit,spirit,tiger,luggage,swim,snow,embody,abuse,hungry,crisp,valid,laundry,stem,conduct,charge,mammal,across,shy,twice,void,easily,account,arch,three,mango,wave,elite,evil,proud,offer,fit,mobile,carpet,prison,setup,siege,point,net,local,walk,rib,van,famous,churn,seminar,dignity,alien,owner,option,antenna,path,list,orient,slender,reveal,file,repair,world,flight,author,always,absent,nasty,curve,toilet,impulse,rigid,expect,all,round,early,vibrant,suit,whip,young,host,disease,entry,camp,grocery,into,mean,almost,parrot,canal,head,decline,bulk,pluck,artist,forest,atom,brick,kiwi,actual,mixture,stool,sing,rice,vocal,polar,inmate,lift,absurd,absorb,theory,evoke,proof,fatigue,indoor,sense,impact,hard,popular,quantum,fire,tower,hair,fox,mandate,home,athlete,civil,stable,time,real,current,choice,need,kite,prosper,waste,lamp,circle,supply,make,model,basic,legal,pudding,shock,foam,film,junior,sea,more,skin,clip,twelve,coconut,october,flat,infant,outdoor,knee,trial,loan,train,laugh,resemble,carbon,rhythm,palace,orange,undo,shoulder,town,rival,injury,hero,renew,fold,surge,jaguar,gravity,print,sad,cushion,slight,finish,wage,ivory,festival,dwarf,catch,capable,tattoo,frog,help,eight,warm,valley,tank,solve,now,board,someone,ticket,drink,frost,neutral,essay,catalog,release,artwork,spoon,engage,ridge,repeat,inform,predict,nerve,choose,nut,tooth,service,stock,collect,shallow,trap,blast,rack,guilt,position,seat,cart,army,whisper,cross,abandon,apple,found,they,give,slice,network,clerk,utility,upon,wife,shop,bomb,bridge,two,paddle,any,dolphin,horror,youth,nothing,armed,cliff,oak,used,system,witness,view,immune,shell,planet,eager,talent,amazing,bracket,beef,scrub,lock,logic,chapter,corn,stairs,crucial,become,canoe,enact,street,review,stomach,forum,story,orphan,cake,record,sudden,capital,oval,idle,must,pet,rent,knock,industry,distance,empty,trip,rocket,enforce,typical,mechanic,large,visit,quarter,swift,adult,cigar,increase,question,discover,blossom,submit,pill,grit,leaf,page,hammer,crowd,bike,clay,cannon,mixed,sort,supreme,toddler,state,crew,define,payment,borrow,balance,erupt,chat,elephant,culture,cost,night,return,sock,gospel,reject,enjoy,sniff,spy,icon,middle,hidden,eye,shed,brave,theme,box,message,hole,recipe,crash,galaxy,blouse,ask,wood,edit,fiscal,gallery,plastic,vanish,produce,hurry,noise,pelican,horse,emotion,neglect,second,target,aerobic,silly,field,crush,gap,bottom,unfair,stumble,scout,endless,coyote,neither,pause,curtain,save,photo,gift,enroll,tag,lake,ritual,vault,sweet,auction,breeze,accuse,permit,noble,remind,gauge,near,access,priority,like,clog,zero,dentist,girl,move,wisdom,loyal,invest,grass,vague,example,gloom,people,tree,surprise,giant,spring,panda,topic,thought,creek,alcohol,chaos,wear,steak,fantasy,upper,pull,cheap,lottery,crime,exchange,vacuum,coin,sentence,kangaroo,body,such,kingdom,unlock,pioneer,furnace,obtain,diagram,twin,bind,sorry,top,hockey,acid,portion,merge,keen,under,ancient,better,elevator,mercy,hazard,often,torch,cable,art,thrive,labor,crumble,client,lucky,group,meadow,speak,argue,liberty,trophy,lemon,rate,online,august,alpha,sign,black,area,off,away,wrist,hedgehog,dirt,resist,monster,test,hospital,harsh,unable,yellow,lend,runway,praise,silk,you,wink,card,spice,tennis,marble,farm,fatal,verify,ice,fortune,arena,lumber,erosion,pear,have,innocent,design,input,occur,venue,feature,trumpet,minimum,agent,notable,differ,moment,axis,jungle,scorpion,century,chief,parade,dress,attitude,refuse,gorilla,ship,cruise,connect,cash,slim,gate,rug,pupil,episode,afford,elbow,consider,exile,device,female,fossil,voice,expand,foster,trim,senior,dose,benefit,faculty,south,sheriff,process,medal,report,buyer,segment,solid,obscure,spawn,attend,legend,blanket,display,problem,mask,spoil,close,seven,child,toe,reason,guitar,actor,purchase,will,burden,border,hawk,merit,era,say,cabin,history,huge,silent,month,machine,awkward,tiny,exist,clarify,truth,school,surround,window,text,winter,arm,enable,tube,pottery,celery,annual,split,panther,bacon,romance,situate,barrel,job,husband,resource,fork,misery,execute,wealth,column,gas,yard,width,sister,glove,weird,wool,menu,frozen,actress,pair,chef,trick,myth,blind,worry,size,fat,nurse,know,play,intact,useless,asthma,craft,journey,drift,moral,improve,wing,ignore,battle,roof,country,arrive,hamster,order,punch,love,match,firm,measure,where,affair,appear,gadget,defy,immense,prize,desert,tongue,gesture,naive,barely,original,kidney,valve,document,public,cook,scissors,bundle,olympic,tomorrow,health,tell,turtle,domain,razor,diesel,win,flame,veteran,settle,thank,left,tonight,glance,giraffe,blur,much,family,february,depth,obvious,magic,ketchup,vivid,grid,dice,poverty,tribe,math,helmet,race,december,dial,table,uncle,turn,employ,pulse,add,liquid,talk,inch,bone,build,cup,rabbit,boy,fabric,nuclear,convince,turkey,seek,novel,cluster,draw,bitter,minute,language,ankle,quick,piece,wine,sport,boost,blood,endorse,earth,session,social,illness,since,nephew,fury,concert,anxiety,lizard,cradle,doll,market,tape,plate,olive,deer,ride,because,address,sting,attract,enhance,call,hunt,blade,anger,hobby,check,image,good,prefer,code,smoke,weapon,purity,cloud,salute,soda,jeans,dumb,habit,scale,useful,nice,bench,brief,april,inject,river,open,mail,inflict,leave,vicious,ghost,beach,lunar,woman,smooth,elder,pole,keep,ready,divide,old,volume,develop,cargo,voyage,retire,busy,side,balcony,extra,describe,glad,grunt,earn,arrest,taxi,amused,pizza,gold,bread,answer,shrug,remember,father,pulp,cotton,notice,banana,luxury,light,key,wild,loud,kitchen,assume,airport,road,trade,visa,paper,rule,again,negative,siren,bachelor,frequent,hollow,bamboo,soldier,category,iron,electric,gaze,fog,this,damage,powder,sample,embrace,bus,bring,pig,topple,toss,mention,little,denial,tobacco,excess,bid,live,ceiling,achieve,render,follow,morning,violin,media,sun,bounce,hill,copper,raw,simple,rough,law,replace,search,limb,fringe,about,lounge,maze,chicken,manage,tired,monkey,angry,engine,unhappy,crane,office,antique,mistake,mix,venture,glue,pink,admit,install,glory,spot,basket,genre,license,kitten,dragon,air,slab,lyrics,hope,weather,bird,sugar,apart,dawn,apology,bulb,parent,broken,video,general,police,daughter,mule,movie,biology,snake,wheel,uniform,modify,envelope,panel,sphere,cage,grab,meat,armor,crop,invite,tornado,flag,observe,empower,boat,filter,imitate,nature,oxygen,shine,behave,reunion,quality,subject,thumb,recycle,direct,write,wash,then,tunnel,hold,wet,rich,tumble,identify,shrimp,debate,insane,adapt,item,guess,result,damp,cycle,avocado,aware,agree,spell,artefact,either,buzz,core,spin,quiz,drop,addict,explain,pyramid,raven,daring,rotate,rain,satisfy,mountain,edge,snap,skirt,grant,wrestle,pave,glass,enemy,east,frown,maid,act,amount,rely,bullet,clap,decrease,butter,reward,interest,game,plug,human,claw,twist,leopard,hybrid,calm,north,awake,mass,demand,half,lady,shaft,food,ill,magnet,alarm,stereo,once,egg,announce,badge,ring,dust,garden,globe,retreat,opinion,idea,update,slam,coffee,remain,lava,avoid,fitness,tortoise,number,program,canvas,crystal,dance,work,energy,tenant,height,stamp,believe,pencil,spider,impose,boil,diet,piano,symptom,rapid,step,science,stand,timber,assault,broom,dash,coach,cause,drama,force,uncover,lonely,gentle,final,claim,picnic,hand,peace,oven,trouble,crazy,comfort,raccoon,primary,cherry,oblige,miss,glow,inhale,rebuild,radar,range,diary,hub,strong,sustain,wire,tool,mesh,vessel,insect,today,unknown,decorate,float,vintage,issue,exhaust,object,swear,club,strike,silver,garage,tail,tone,next,ostrich,smart,swamp,kit,honey,rebel,ugly,garlic,debris,pool,rescue,double,betray,fever,donkey,shoot,forget,robot,correct,provide,sight,cereal,mirror,grief,change,shift,dinner,token,traffic,crater,spray,screen,excite,express,mansion,kiss,find,finger,kind,obey,leisure,certain,glare,safe,effort,bless,angle,cat,snack,tissue,select,worth,merry,confirm,flush,fade,already,delay,upset,wide,bleak,coral,crack,taste,term,truck,despair,rookie,wasp,room,ranch,isolate,milk,royal,autumn,auto,load,nest,monitor,wall,pride,urban,panic,share,funny,cool,face,winner,method,song,super,mother,total,scene,scheme,wait,fashion,loop,dilemma,viable,suffer,fun,remove,skate,jazz,caution,shiver,critic,tourist,symbol,subway,happy,protect,liar,zone,depend,bronze,transfer,risk,clinic,fish,peasant,matter,riot,level,buddy,wrong,degree,pilot,quit,eagle,emerge,visual,cave,forward,syrup,weekend,source,that,ordinary,stage,stadium,jacket,man,glimpse,kick,estate,alley,maple,chalk,curious,sell,champion,fetch,ethics,blame,outside,vacant,garment,trust,exhibit,muffin,burger,tray,nose,couch,candy,only,unit,person,secret,fence,square,come,napkin,phone,reopen,draft,tomato,grow,park,educate,horn,hour,cousin,tackle,buffalo,goose,dad,alter,profit,ski,chase,adjust,robust,unaware,later,case,around,require,nominee,alone,sure,abstract,grace,squirrel,rifle,marriage,phrase,vapor,exotic,ramp,shove,able,economy,feed,warfare,album,try,arctic,skull,fall,bargain,fresh,potato,virus,minor,fame,cabbage,stuff,hip,rally,soft,lazy,holiday,relief,wagon,organ,gain,security,rubber,sketch,flower,okay,wise,just,detect,indicate,inner,erase,team,inspire,flavor,front,verb,swap,sausage,danger,place,amateur,frame,ensure,strategy,enter,aisle,drive,other,else,feel,patch,virtual,awful,caught,another';
    const encryptedWordlist = 'NmFW7R8oNKQ46GPajmDfw0szxgWk3bWcYBg3UTyd/JzVU6p+fP+RILKQnnFH/DuEO3xUK92LrneoNjIC4vyi185OWyyBVT/sVl9M6gV8YR3U+NeT8Ha+z0OKshMvhYaa7DrMm14nORd+n56K14vxiFC+UQkZOfTcJGXEZP57rRpcmOMAo3/jLVJw3ooo8IME+FOX2IggA3TZZsLJUBm7Fz31fsGOGKMTIYdYcGrnqxpdambaV97Zj6LpvlP8geD/Cayvz53tehdiDZCQOAtxWCwvZ3jWZol3TbggWlXt3XFabATnK9vXX5Z7TZGYw8H720GPfcNU37vyztTmPANbjS7wKMSc33sHaK4zjdEjPdYyU2eQawjjRqwHmcJ+CBjT+Df8ChH8DS6n5xGeBMHF1r5ySw81uSKHkxqkf2wvqk/F2/oPkrdFu0UP+ABMKihHvI+JWlgrquFFO4F6Td/K8RODtCgmvxVpztvdjxKrD1XlVlbhF80xhfYzDmBaIDQOdB691dk5tq1RUUi51fy2NFdg6q3nhN8yIaBMybasc1UP7ztjhzJJpmPqcY6UBNzxn5YmNttWCZX3SZZE8Pd3Y0h513P/ekaVTdQJBESIjc4QW9moTq7tdp/Cixi5IUCo5mXX0p8xOcJrdnVg1+AnxHVE7ZqWlWjhZoAhu778hhFfJ2DMzz8MM4AYs8l/3KQ864gd1XdOUQUsuXDRvQxkEb1Mycbp8Wj3UFveMdB68xFAH0M3fKv4aiXyg1xHJyb/QBrR7n/1zDo143UdNecFzCefr/jUQslKOUqh/GvE5rSslRtfzBArB8olABdNCKRq3MacS99TvB2m+WGBSe7AC12vllzCBbF3A4BtsCuekowkkuAUZJRDn3HcDdxsPP1TOkykeF7m+c3reQMd/lEqBpUQI+Pjqa7bH+kKXtOBiPGsnvgNxIbVCviK5tNhQd6zryrnfyL5iSsKygivI7sJspYuew+CYbdgnyWKO4mOYhlhcZI84r3YgRnnHYPA0WXfMzS6hdvmUsJag+zaoT+dIBXDZKuPFva6Yy3y7qbLQw8V4TtDa8aXZfvSmudwKoYT+QUAYrP30soZRO7necdY1+SZTd6TxLer1WBXXaVzJx60JDNztvj3tQ9mSICtXRW9+E3+yapNtQWVEYJoluUlxMUsdMGlb5Whr0LqOkJLoAC3o51lE0T++umySoYsuce98M2/Xn1Jxgz1PirU57rBBR3U7KnofB5U8y+HX7IDxAkEmTXYCo1lIVcJZCe+Vgp0cJTFi5w2ICOulRk0j00h7rNCQMI0ZE5Da7m3pVsRHHOdoIrZlenJ5GxGJcVBzUMtcTiOqeJ7gokepeLcS2ewFDNtis8F5ICCcQ3o27Ofjlk9QkHiSl/UHiqc5ROp3YD7EilRFaYUCfX8RmJ1YbB7oqUVp9WbR8cCAZGSev2Rhfz7UK13XcHORfguXxhEFAIQriP7QaSTg2jggPcLnf6PPjPU1XjTrcOZwy2cjrb3wCHYwxX/G24gdQBQINjBkciHdyh9XnzOKAKW+UOQlQ+euT9U1S7Amy1KZO8QpdVmXHF4KcLm51W+Dr6z+seZqA1okdVSVUBRTptTYjVJC2/fV0zCC7qPtpiJts/xdKEgFGsR/+DmRK23f5B3Uudhl9BmCd4ZLfQRsgCJN95JQDUPab46MJcHk4q1CKGtRhX2GSLuNsVYjC3+BbBuWnypgKUAzP+mAlxICJ/5lKNLqoHuum2SE+cwJ2iBhJBZz4SoltOoRPCy1fP3EKoAHqDj8paD8ch1bKARuuBSbcbOlqndf0g+7bHLQo4tO2+BpuDgcKmWcWWXweEsLf0KJp9t4+N2Cp/8NczoD7Lgky43uuLPp1MEGextTJMCK5xEkQPismAmuw1NIKSE9DkBQ5W42XoSWHBcm4WQNu4+rlF0vKrucO7AkvQnu9LqItZ1jOYuFUT1qK9pZW2E5D+eZDFWlpwYSWLBcAOttVdyfJ0pth4NmLSbHvtLYxMFusBQ7GnhKyROPKbNDssnyEW4UY4c5EBlBf8UK0C1sVEha3p6sou8ycVEzUus0KKpSJAdTLFhg0xocjWKLh6FNOyagxc8XtjQ+rIz3xs/XoRRAbPdlSy32BrkUnNC8dV7d3OJY9Og9nHS/FnQ2yDxyusmozH7SjtrpNNFpnzmTbgNnkXmkDa7jeafLupmJTcgyde9+veuBBh84lRkF4mhX7jScVd2vlfk3Bm/Jgj4wdhzHPJn358y5N2ph1J9RCHKao/vw2eW4sqaHvpU0m9C6/oQJzaykCx78vTdOTNFW759sjxn2FMEMXmettZnnM+ztWkj21eAQJtq7Ea+jP+gb7Jol/1TzxG5+vQPc1NTZWSNZnszSXQU2ssU186O0BvA+PpEprl0fQtsOI+h+S4YqvCj8NUD071yME+rdMqj/22ZL7fHgonwkCsKMS3fKtA7NHaZp3opnq2dGU8vqPu8DtsPb6mwj5Ua4OonJv8dLMzcx9Xl9BCEQrxaqJm/LB07lADDkFrsWC0zoNVeKxE/9Lq3XC7DRjf4pcf88Lo/ee7H9D3+y9KoEmGFlFnu3ELf5Fv08S6UuM/QtsW7tM+b3RLPy1f51P0rP7xNdOLAkEvYix9Vf4EoESo4rnJuzSbJPWwF8nWpxCBO9xMijyw/7eKAgcpM8LRnNw4N2SwYmlmeqiELjHCiauiFx+T+KaFfEiXiFeyz3GG1otv0DO8g00pP6KnuPN2DaRV2FDTjcL0wgxfs6JliAhhR2mMMaRbD+xNJ+TizLed5v6ORoPlFEIowLQ1uow8MND1RuXl02bJk60HiaDQqaBaB8Cw2T/q5LtRc+ogWA6pOpIjzzd4CGorIsf3bRzQ49qAlggdTcE3uYNR+Cn3zsce8U7t9cT+PEMKUWtNDE9YLLf0rdkAS/QY6hog4ujNts4d8dSmb6KewIybxQoPXz2C3SPVk7h9qg1Lpzf9ozb2Q4u9/hgKsMNjp5G+BVOdP56wqLTECtfx/VqQFKSm0z0QHzWWigdElbf6+1uaBvilfD60gw58XOZSN/Rv4DTHhWEPl0/Xa68IMfQQnSEWAWmmC9bsPwr+Yzowz3KiQviBNsFMkkeupkKRJ/PGMX/PlXuT2CVV37SqMr96ypE+8y5rTqe7CYxF0nhyq4nAntuaPAFA+94WtjxDqS1z4RX+yrmQEhm8ClAYGg41oqVyJuRyLJc95ZICICRVSVfbMIARQSVZR/dFHgBvI/mvPiJwnr8ay5TGqH65ixFu65RsD4skz1rWnu5A4SUgStqff/SyEuMA7GNVE+ErPFqs0pt7+RdmA9rA7aJ9sbcAn6qvLF4W2Xv+SQWpUJDx5f8QXSGHRJuwdueQVoCv7dyq8Mu/XIlzip49A0g5n+IqU3ecCFa5QqlzH40ifyu6L8So6GHnYvqQgpy3IHuM4xyntWDQA7XYPS08jadG8yLnAMS+IUjbQVWKycxtVnp5XfRp3pPe/18w3GosIv0f49+XJDYsWo8Nfj9Pmz8gR0qFvFaFd5ineB/bPAOthDbUu12ka09nGDgLVBjx7KvTOgIdManqiGAHI84rwxykXpT5gwHMvsQffO9cGh1pJ8vqhHywckvfHbUkOiumdmlwzLIvw65l0TOATe/2Gr3SePN5/BKLUe1hvuTwTQzAgIqkpNUQ+n5N2XXb/fbUCNfl3VBs9PjBnecmh/PElAD3LSuh8ZlqhC6CX+xgX/fmJz2IUQtswpS9RGezupSvocg4t/EjV7BUUd//S77tE1Ohrd9V8BhigfVLwnJL8JUBbQtPN+XOxE8hbRuMLvWZWAicvd/Mc9PaxW5hX2Qq2ht3DjOteWbDBW+eSKB1cG3D+e60Ej1I1VgoixvZU7sK78Kk3rCj6L1UfzMTqr6dfAZVKglccfUwbmi/jY9E6IEAKPZsgyx/QrzQRtUbWGNw2S4eh6j+uhexmLZtWa2kmLSdRNFO9fvjMRVIWvCoSKFrDUZtIGlCCML8waxmo/nuif/5uUakJ1rEaUp4QZbHZn0BFgwv4BSsWwsZD8XNlGEkYLnUmi8ARG1A02II7Kv3okfSpyeQ1rei1UT59ydV1OzrrjVkFZX8+2EkwSNSSr369nQlmogcfzWBHyqfnuqhGT6OeXRMqlHjSne4hAQUnadeJeeB2XeOPt8RZJHwm80AX1A6X3d3sHzIL3GKqyCS6bjcasEFtjcOobdJ6xJxqddnzccliJDOq+V/XmlcsEeM7TEW4YnXhZuRmQ6fMInU8sCjfLvQoccoEKuwGKXOmFmFBAhfkeJ/EZbNgAvs4FgniSFhzPGDp84Pmpv6OdE1KlT1ZgKjPBN1jbHLy9RQqgvAJlvLuBhrHb2zgq5DSa42OYKvid6X1AXXL1t3uWzFRzflGrV2b5aIeQH3XoKm60Rk8/AgoSTkdKMpuukqJ3sG6KE7mg6pYETbjXWNd7HeTH6d7O09mEUn8g2eYShgmndWQmsjQUC1TeeNbeaqcF1p15rqDagcq5+SYwXsSufXiU4XFGDO6QPLVMqFd0aYK/JAkaSE3hqa+5GgGp/iqyMYDcrxXrrib0PHYL0j3L2UCcsXBh4uVCSrnJtHk7wj9CpONclFeasesHzPPj0TRouYl+lkwbFY7iqgj3mgJFbTy0l5aSbHjCTKiGXCvZ0vI0H2RrwDrJtvvS7rz0t7WFAumnnJHoNpkTLDbxIIdghGCDO6o4CEWYhnBbtGlK4fW6J9sVhkd63K1WA9TOQprjPeuuPud9amxylZeACUHi+2L/m/milVWer9E5xIwT8UY1+05miLKXC/sAHT//HFZBN8CZbGdtIhugGI/iiB8cJqIe+C9vuC/DxjZOd26xdRkewJ5sy0FiwX0EFy+gt+MEd7Ik1dx/+dU+3qBM/7DgfnXRhJrWR8STNl+PWLLSiQwD/PzwYo3ssmZjK2uxbXY9BBkn2BtlJsOZoZdqhf7QNR1NS+3BZSIWZFLQ0L9V/VHVYvLKAsao0bvKRqj0XWn1OAQZL9q560eWa9j+UjRgHZreWOMG/l3uqykrmWvg68dV+Px3caG9BGx1CB7MVkjuWbLTvfZCF+R/jE6AovIycXx81+uYF3DHg262TBwBGA9I+BK7mhMfZLePG57GL+8WRecTcAMck5K7r/sPdAD3eFrgL0OYvj4/beh2acEt4KN6804MSEMJ+E36KyZ/2cRfAVfzfZBi9O1GL29v86xEt20RAfF0VU5zr13FFatv7u/UkQ/DTR4VqFohXb3cOlGKDmDdyRekP/lEA36/7PAi0NDG63E1WzkacOlW8+OIOAcGR4yyBz1lBs9cQ+SIOrVmdRNYhBoqAyFp2G00uZLQH5BwIcYu0bSOK/wZ60dwTqG+YtnQcTOvhe1q1JO8jx9qb2WxIfjkCHuBZGeSx8VwWYgRS3ClTx/HgibBczCZMi7QxwjO+NMdLIHOKLkSht6X/Obi3UwyAxxROKukF0dB5qeNZJWaq1D3MNxlMP2Dg1GofROUgNFRST8Kb1d93wEDHX8/g/u9sNwpNCKNycM1tLRrjjzfp6gUd2M+cu0tcl01IhHExFXVAwf5YQdzTmLxt0ie1WO5exjY9mue6xJeoJDLePvKDRDz8djC32JsrU8JX0AYxaLORE+sIxyBFn5QADBDpo8R40aEiMxKT+VYF674BrGDPxPrQ3vIAfIaDewW7BUjOzdSlY5vj9tMHRwsv+PLoExFqOdqtj6A6Lp4vgVRA+FjtHnyngkvP9BJL8aaubuucBX/D6lQdcmGYcslZRk8f8Bk+vhdRr8OETr4r5RKZ6aqjf94M4/Mrih7QaieePERM9B2OWLCSQtRtvpYEmkeK3ngoMYBvoVbPQkiVlMioeh3W1mDA3r1JvnXr+Jqj4bPx5UqoCNVhUInscH0GuK8AdpcZFIbs84p9D5Sx62ilpmapqsRPMyRqwd4j2wMiRKkaWbm1g6Qq7caZ3MKP2qRSieKOpuNtCq9T6i82l2H7k2sInlpL96Ocn1Wt4MRB/2jKP/G6Mq4yBCg9e43mSHmsVj/pdlb7Mn51/V1XXChcgjnDBmlQj6MqR2kju4+IIKtxbjhpuSlZu6OT+HjpLm3RDjMAyqdDPyRO6kIQ1s7BeaN6iEwmCfS7EOnEBtyxeYBPEYEN0yiW4+vU1dsS5fof10vwOCjq7fYySBA0qSM4PqoFgspA5ZdyVUcAKSTliZnqOkOjQjoXleD1T0X8jlGUMV6zbXM9wWuyTPYZjLrPVMzV1S9QUIOuuZcSmDA4WIGksGMSOtuOXkGsGGs8mLUURjAr+L24xpwSWiefWYFDey8IXM+TMHnTU5wpQVNtqooMay5Rcol79oJNd2mqB9aR50cku8BLqFjH5A3dE42n8ok7aYO6oZk/PiBE3hNclFcnsSo4WrhIYAmS73i2uOmnbiCrJbTvpiPKjEK6rcwkH2Hob3KdO4ELLFa+xoWtx0SN36B0n69klpEZbG5/Auumo8bsLSwmLTiwDaGDPj24AFYH+9gPz1ujGxYMxVuuqFCvIADsQDsgH/2OaaM8AjpqCjoVr5Mq5jzLVfERLrW61R7E4hEZlHup7GJDvjvCDpmKYzYsuGkMzM2fUG7Ge7NmGvzFLdTG7kliQJWHWLeOZyS5I/fwlZpiX5m3cgkjhKzrUVUHfvSXAcfr0psBX8w5FrXepK70P+ngubVobn7ghwPQVnYhBnmz5+tIKL3Fn3jSdapvUruK/OhS7PMeNRrAEH37vX6yo8txzEHBPh7ONGa2aJK90uDUzfp+J+gV8xiiWkyVBAB1RL7YDMXokuT31T7erFGbONpnGaNd9qixSrCEl9jGwv1+XNOoBOuiWt2jpiPJpEozBC+JG20Sp7UEjDbDBb4LB9A649gmKZvgDTOPGe/gmiBpGTfx3ezeUbP5fzfbGZEASBtcMR1gLsWO2LaOU08/8AiUxS09FmxhDIpdU+aejjcr8tN9eXXh6+psYP/FPw6AhgIKKgp0dN3yGoNHqjmcuuDMCu3jFeyfYYTiyzBVLPfI+hwLcxQDzeXmB/TBXsrnslvcGTK3t1aIIzvK8yqjFQJTaFBaAWq0Ido31yGEY2LRKLpPDqUlCj2Bqv81UrBJQR9FBp8m3QQzFUuwew0ERUi3pmsPrMhglPF7szsc4xV6NUdiEmIgFx0yAcxainCJJ8cSixwdOsJC//Z5ARpPAN5JDkjurAZnB+4Wogu7WIpYtLedNdc052LYLfR5AS0oARUwR40ufKF1nzdVAjD1xaT9R5n20NzgW493dNdYkGLU8TMZUnvCj3HMcAznEcH/ZBYQoD2YN30crxPKH+k3gFIdxCFEYgEyPKfDjxS3pAzTt3xkoz7kr1+xuj+LU4HSHzrQ9bKD+LPUHG/R8cHPvpj4Naa1omrQ5ZQ09erhk+VWNJZ6RC1iw+TOHmv/gBcK/6aw4IkmTsiPRVV8CYd285fXSh9b2rbn96+6hVTpSnZ8Cqg8AtlNyeYsaoHVsfTeBDRb4KuSx/CF33WTzwbxO1aRxrbSuDOccbmgxvVVaXbpKdEcssHENKE9ydIaxsRH+/NKcOicEEAyWFRicwrRzVELj65PoGhoLikxATfycM66tGEQ+SIQZZ/jrVUzDA9eO7xZK08yJLRX0DlBqMAYCJZBPhhsvz3lTtJrR9dSrAukO6fSt18lreHpRGNsJCFvNdDxpprZ0rDOpGN9LLeiYSgt6hBz3ZpkokkM2mIkupjxp4EktdocT/EX99GrXCAO/JEa2eEfkfj08bchXkdrWYs7i7aOYAIMIutOobPbfAPXhhftB5BHgoaxsYH5lNKDlszd6wMAo2srFoZJ71VxYnWqjE0gJaEFv4e4bBQItxdYHezg5yhjyXxXwn244rxqipgZCzQhrcDVQGjo0vGzkapNqb/foeANTCZz6CzXsB7lSmgYdT3SIh/zK/hqHw4wc9wn4mvtiGBUVid0fFZ48j7ojwy99xfIAiMoZf7zDQCZdwqamyCTyy2x1EL7i8MjvB5UJsnGj0y/eiDgZlTUajh+lCNRkoTAP+TzWRceV0Vb71Le5inW//JBUTExd/fbNrYNSxx5AIO+gH4YQlwq4LfFcA3FoBE+7cNL5IvBL8jTXDSBCo/9yDbwtOAyeLJmGRKSJcYDED0IZBFSnzA1hue/+KsLXq1sxKsagF5iUFqwx88/MT9S9y6kTIgmGTuUOxVgpZC3cFla77YcuHYKHzAPVEDK6l1fOw50W9CjMk8JUUyCJ8AYJf8xjdgcyuichOJHwpHrUVJnFRd706yvXpQ5XJBq2a30+Dcrm5ekZheIW9g6siI33/hHyjkcEyAPnca8px/0AM9DtRXiNDhka4ElbayRUjJiPHWnuubyszpNHD20IWfb1fAwgzeZFVRhObGogkF7SsySr8o7AJJs9i9zFGzeTKKzTiJkpIx//Pynonv/qXoPcsPPwimPx2ekmh/Zrb/mTKS/ZS4BCr0OKPMjWJjmCT5oJmgzoJOzDjvtibN/uXhthxKYgQS91HLDIlEW3NfXEUhPnDLqXrSJPUxfuxsfok6WjAsxS8x7UyAnWK+ll0Q4XnH7vJGYNlPJ1vScth7JMPwpoLe2wrs1UN9yUAu1zNJB3IEvW2EN9d00OogtN2T4Papqa4QXuo2GAZRd2xYKPssXWd/ZhymK4Arwoc+H3YQx2H2YZhlFRCaT35b+v6ytpdmFM9p23wcch3WZ6ZQdSN1adA/awzcO7RXr3igc8zUf+fMnBQYsheYjSIAEMMKHedm7RneLxarE+zxXGQdkhj8RL2HKNuJJR9qOlxExPpAkG6GVJa6BHl3Dg/rfJq2hD3NAu//GvaVh+UP0jLnUvwMLyDrcBLIcWFV4LkXVnNn40oZi+ug2oQESalrWSjMfSBujMnFLEQbXfuo64QZhRv5l/TzJsJ9kOPo63Q0X3AZF/72GgTEq0h/n0LTbBMJM3fPzLvcktw02t363sBNzKmvmSK6ajWoXDDTuzbm7JG4P9PkwuZhALmoripJkGHpQBa/3Ctc+TKYhbRBMHikPQQgJKnuToDR2MvzKE5w95RkrKtziXh3g3SzEBW4nirRpweBsHtUjsgCDqPSoELcXrGGPSZeD2Eg0/5yzwo5QdKem3X1iuCXn6WJjC5xdzNikk4lQw7VoGute4DFZrI+EKaAZUf2pjrBw5y/ellbnRb3/8/bkPP5CF8NjrkSRUBAj4naHz26hm96m9ZcodPjHmuZWqdHKFz8FOvqQKGI07GfN34NXE0PGz9+hTtnEiT6MTTw/PIWrU4tZXfAmgJv/TUoiEFNk2xbprwLsqx8K2AKkFQx3DlOjGmXqXTpYttX+kdCooOJ2HlVpIObuq6iAZVO+/hC9F/mSDHSAd5e0b2PImb8SxazZr8GuKEC+1PbO37VunmDb7tPjaucwBZ0yEkf0gbkMb33xJqzjJAxEg6KLpNUsojf5DBD9Po/uNekcYypAIxx0rQews1yfuFWG+DggFKqRfLTr6XLyMydEnmdGundZxlki9zZBAHAAntPrD3PPJF1y+lHcTv4Be/vs47QiA9FAQ9LicdbutYzt0Z8vREupX/Kvqr0ZAoAjSAOds9fmB6RErBE0Rl2MamWhp7u3zHKT2YbbJLeAM4+KjzlwIaHeOh6K6yyum3tcLY8j9khIJ9UGxRRAst412Rf4kwZe1K8WZOoes07n0eN2V3XEi2hgi6jgL2W7yp/Eke5dzUgVpU0RKawW2hnijz1KE2TmyeMBk6I2cKbIneG8B5IzuF7LbtPL+lo7QJdJs96geFuWfhC/ofrQN0TmCMznGVPWUpRzDSEdyytSqQYCzGndjnU9cGKRHVEYJoKWs+d5rNH1qDtu/YI2BjvtcPWu+RnavE8uDfJj+nYO2yKjjUE8NslXgK2/kWoyycr/QKA62w2/LBTCSCleiS4CbRbTqlWA4kowco0CgymLI5Dwrtg1JTKEfcRzEYvpgdErxi78neWCcwTgbZn+MYqzc0VQSrSTs0KfaP12CUJopyNUmjBECkCE26FZXTvzQlnV3vB1NhXgLRWQPjIG/BXd+Z1eZal38ObidkOjoE9IwBU78BFqDqVBlhHDWwfRxA4x9Z+/UxouSwdKmilhw6xgYv8/Z17hFv/M+01xJ4pWdd8ecMmbtn4p8AczJ/0Een6eu0GsUZEJwF4IoztW+sa05JddmYBQv6wpZf9jw6iCjtcPMGzPkbboctKgE25PgtA0pEOtnfcL+pdbzWp9lF188WBkFte1LplDKJOhbPbzVp1cZl2/yAiRRoTez7s/iKC/kEhkU7u12Rb5JTIJ+V2xBUqj4ISMh3zYHHwhGkQC1ICF4TTNZ/5aXDaqwAuzgAu5zQ6ECpI6peSICjBXZHP/PSAncyaNnrH9plXUs0x0yW+kdgkKF9hehJ3Sr50n8HfS+5n/CiOJFU2Zk5BHIt/n/0e30+fS/Du1cZoSMSGXlfZ4N4Hx/TAn8ORiPmN1/nzMHX+b/14z3rF+Gf116wyW/ugY/CNvW9Twe9I5nLu4P5T2TPFTZdg4TGPE8lhXuiJ1jc33k+XdUk1Wrn1r7LAVLh/HGcI2o+85+LrBbY/78pyvAifklv4R94AiLSqBTvkjtdebJ6yVCFNrpvQiXGT16LI+dC3pRqG2Qrm8xUOqr1KnWoxRrgBl3qtl+Vc7bOtHmIopTSOXXMmDTZ7V90cDyzTkUA7GQP3pn1cOsdHDWhVDtB1EknQCu7oVk9P2SmJbVqKqtqIRCLEN2v2Wv5/c408APamCYZgdf149sbBPkf31LcQg8O5AsudCaQFDj8ObB9cthGrvjC1Sz1LIXHLKLmlUayRXYPsv3mPW1JU6qbj5pXuZS9dq0mFJE0BpqyW6pZcEW3WW/c9C6TkO+oZwl4I5mpHG5a7nT7YtjMEwjhhXex2NBtm27Te2sDGVaGmy+vN15ZN+dRVLHmIJ6gj1kAIE5+0CaCeNS+HciYMED8kp2pK7OlyqchcS0U3o90mwTb5hSdvHR6OqEx3UK4LnETNuKdPM53b3z+RaLw6VJL5Wove4w5khADsg56FHw33ucbWCJdUCZ2h/Cf/A7qewH3nMP35JI2M72c2nEAaN/PdGRL5tva/7MkWrzOukIz7ul3EjH+AbNW94d3opkJJ80FfICFD3/zlky/P5mnDATop7WSnnsxAdxDzbB7CNAUKEhKhkRNXwiBTjo7+b2d59B29bzmltteTN4ueM35vy1K02aQefr90Qi4F8T64wbj51+gC1Q09z9JYmgf6PS5kw1JQy59YVZNImAUX083OifASga4EFfYUa8z5fqIO+Hei3SaT0OT/9mMyfRSRDDrvr36VKVeR1J1cqECOJlWSAcX2qh2ONsy1sAGGtGqUQAjPxS+Pi/mY3gAzEylb/UK7Oj11UcrO71n2U/NYJhI34ADqPmfSgmJGcSXTUeqYCg9lBqbYS+lp0WFY/Y7F3wuAMjJANPhqCWj2MAiZrgkjTqCWyavOFXh3mrJGq4bz88DKiyq4/TnZvYJKYB3KW8qLWPJrxxkh5dGrqu0KyjgGgvOwTVsGXtcB78TFyFNvwQ6Fklsyv3/kngogFLkGfCq9YPksUxHblPQaHWPoif5rwCYgwrQvF7o/TIknIraM7rMCXq+L4a9GSvMwG16lgrqPEcXAGsiAak3/n9vXLkBVH1Kdl/E97b2GRedahi+3jiGcdKnieq6Pp/AP3eBTI6TB+EPFV+S/nEeukkOC8j9EeB3C+7nVgppVcz3MZUqay5xG1cTcRhCT+qde/meHf9kJ6a0Q09hUBdfEtAvnisqby7XLAJ4psc+8vCQc+W5H26Ba62+FteIFK3GvbwJI2vodsrLaqt1itdcXpXXS9ku8RcUVgIFLzFeWB+YQODclbozghVma3IxOcEzqw/9DGttQBG/E2CZ+hujQYzS+3Wzs7tiO7KwFIFXB4LVTM8KWPP0WJSLP5mCctOXfGAkD+2FIiMq6Nn0tMPAUp7Jwk9nfhXUbyU5eQV0WP9UW+xS6gVrVMI8D4h4P6FRsfX0XmSEcv57IDQ6mC36jpeISBNC7p+v6MnmWLsuLLESvHoNKktJRP57j2TeLk2xWs33w6k/eaWOY3o8FbguMlTp3smbsO4a6Qy6sTzexlep39k+D5IXxPLsXHes4QhTHD4FeObu1e2F3lcoEBHs9A3S+qHe6DQFOFNGRAEvK7DtB653WM0DUAxAugyTgkmL7VXQCeAu9F8ZTIQMwz8dQ/CZUR5h1K9LRWaFnXEsqizKbYvfnGXFZWKpBfxPN99NViUmz/DwNaFJ/GBIYjvC6L2G3urZtwI1W93AtEst1c/jVQyDgCQZsnXTmuFBE5hlI2S9oCi3MHA0SMgtt3sLVqE6gNAuDwrLqWm6hwnx8YXhZ++1dqqernP0llFWOF+yP/RVQ63cnaCIC7JHOykwwladQqRvGsHYunhzSSXWNXaQi0bbUvHTTZXw6KCwGdil/9RP5QsYHoiZJdWH87+IRSOnLUjn4p+owC0Nu3aLlJPvmT3GcV3G75dtpPX5wOvFWgXD+bZnGBRUCnXcbwzmBaj1PcWZ0QjP5ZLJpnbONyc4Ns9fELMgC1Yuj3JCYZF+o5Anb0JajH0xgp1dTTqK8L+M0shA7vk3IXgSlilSVBvEfrwbSAmKfTetZQWv2edMdSm0nToUIXJbtYteh/HhUJl73znTuxxeOduphP0DCWeOfGuj29Ae1nyxPQ/RL+1XYgsLtWJGAeYBbBoeRC4Yfao9OkyVJVgnyaJNkQwHWHWIPmFBcv7Qkzul8DSwzcugKVm5cM93GDg3ceSDYCywivknqeVPbt2+8Wbiz5/EcLGNnMnSfkkh4swt6bsP3BNrxI8Sk3AaMCkm8anyl2QIISuD2NBpv9ieZ/XrPgAnDlNZoxRfEkHgQZp7pPnMHKC4kEZf9NOCrf7bXBmObdaCmQaqIuq1C+t8y8wxTYjaWbVeCVLXdYaWMaMECemVJRBbQC1M+v4ctpBo41wI9X8xXgtaBI+Al8PLaHLqgyumgGKi96SieT09Xug1mzS2AibmBTX5kkG+f5OAIhbZaxa18vTVXBTuxl/P6CAiTPar6Dd1EiU/1n+1aL7PXjpeLGD67uPToMwIhGyh7qNR7c01WRlmHLaPrRQ5EmNUSemI8m9DVTST3xVuQH9bDBaQtCT0HW7quAqsEX71F0nPpZu0atpD4XWrt3I7mpK/PG/aG5jczh7vNtGnE34+uPraAwGeQ0TUCQg8LEpbrRvDnblr5r7waYZF6TzLv/sMWmh+GdGRTaf0VUfu3MuVjXgBNT2GYzEqHt11jWWBoJYw7tdmWzQ7cgPRlHnz7i7MkJBCp/Kh4qpI4c07GZ9k3cH0ecM3oIvnSr9xJ0I9D7gUxGtEwR4Adxz1ORBl3ZKkIfH1EoDmXuFpCr09UJTRoygMbLne+6UB/zWbc8z90qz1+Xw0O+CMF50SxMCCMPSyFKKg2PwaghScNz5PAiK5AbbGfSBPQqDBmv6ivfjYlfD4xMiwyt3jXkTikysAolB09NWOEYkohFn8p6h7uRjnSOAnQG0r/htzt4zaHcVm/wCNflU9y4atXdjP961EYdOCyd5N7960xBRMKaEJdANHVMSB3nsFw2ONAvUmua8mSYyu8bdxmPY16cx32X4KOPDtCO0i1Adzj7LWsXq8saSN1naSM0CG2Nyauw9DS8rMZB9pTlY9MPKIYxy+zDgMZxDv/ZbJPiwoHbANKiFJ5XVhtmMQWbE3cM/hanMAwR2zd0oca8EuAao9XVdgfCNit/M09i5aT0a9Ry4k4tOiE0jcrrhNMloumbRBTd0WudbbX/mgkWrtZOhkYIj63WDOr5q5gOlsNKMeGavrZAnvtxH/qjL98fijw7snwICLvPM56QX6AoeFQ9ev/3oAHJktTXj/9o2fzM/iEJa6Hsj1secUKppOx8ULHznvlKZxXLWpq1XneBRJHF3c6Xzg13cihDDA2if3PaTmZhC24eMXJznYc4CcMrAb86+qB8K/T82JIQTQ3ADDip5yfwDxvUCWSed6VQKnuCgR3TOJE7yIRSPobRwrWu3f3swWSJw+ik8Db1WThs1b5sAMP8boZKYMh41SNqntkzhHcki+/3snI+PMje6WzoUknr6Xj8Vk6JxOciZtn5GsuU+Xv+7wasIY6CsCMpPAEI0rad2apULBHjeDdNI1VNo43LK6NDNceONqVW43BOJhqvl/SC12Gki1AxHN0RoGImuUl6ot9d8rihkqh7HbqDIW7SgW/Hh5KPUk+43L4F5oMAsUxNxONt/0sh44E10V3/WvnzsBbKbNXVPbz/bqk4gqcnGkIkRWEYVYwg4QAtBILvRVKpjlHjs17Nj0dZqvgmXXrLXshn8Qy2lnbr/dVmLf/xbDlXODzXTxv4BGpEoDBIuN1lfcbrddwRx9ZnGLG8VN9yPSWEvgW47fsaONZMESQ+I3wGKV3UUW3Z/dSYpnBGRuF8/9z8qkD30v5CkNbIIu3dPZFZTnm+Xj6ksgMrCf17jAePd0geW5maps3ASrFVRyR51Fftf2sA1ugJBC4MmFam1oIUKkvEjkVrupzqQeljAfX5iOJYTPjBhvyvFzZ9sD0BXUBJGtjM2U9P9E1RYLfZdXvMQwMjgrCdFKxC/Ma+fotSr3QMuDa24eHHtKnFGTtos99rY6uf1uqxOQ05V2yQYAobvWNKge1LawuaMC50aDfzq6fjD/I01zvZ7L9OivAtxz51Hq6gzvM5DoBukvfe89dhyrquOti8MzIBwsJ4pR5jRKun6ik4PpBYWNjMTi3lQEOpZYxU7aag7+CPqq8xfa1/sy3spNOwjG3rqEp/iXEHnfSDUtRZb3owO94TTBvotNImAyLAZr5OYIv5JSWAqfZg5rljR5RA7T1xFXMvIizxu0C1ksfTCtqEO7xtA4Vv73DG8jqcsKHh9kZmcaDC9nx0+JI15ghWcVUl6VOq1fp2uhrbsNY1/EAf3J2X/oEqDHVlVFieYm8vYGqk+fJHSz8tXuWcNUTP8Dgu6HOWgp7UfJoGgZeh80s7K/eZ6+yma8oQnP4dud4IS/AmRBN0lOHMDIsCTlsQnSE6ZH2tbt9dZYd8SaRHnmM+juljceO3RR+4aZFUKf9PL8ZKbXm56UY30I/i1g40IXMmKFsmDuf7OM5k6Y1TPrxwJ5dDKTxSGK8ALaPsheF8Qg9LM0VZ1c6wdXVa0WCSSq+sa1o0/92hEsgOyO9Z03OadNLrU8vWVZE048jm1eu5CaVbfRlwRhWI2rLtu85Qyb+1ObBp8j/mSk8FRz3Nt/msUPesygf+fP0WzU2BumWFvFlpHkluTtC1LUHmxqy5jIer2QQLUrCCIEJC++OT9biaqG/CRFwACO2M/ocP2ZvcIXy7SCxcFjQ6csXr4QzE+CpSNWlIvEZ9WPz4j3H+vAg/TPQXGw/Z8AVzfOXT7XrN2bTz3hYBPu2od5F0Mxvle/djOXBr/lwD+PSprNCCGasjQrHelXslsJeRJnHaB8+xtuLHeYKDEPPQCgZFXq2V6rJcqxlkfYmSVyCGQx1fbAY83sLo7t7F3W0ah/zixoNGmKwZEyLSrn0SeV7aulHSEL0+XP4zsFUnz5P15bBxMIQwR5phWrT8CVZh1OP2LAJl9sxyicKaIcky4KsV4rebpyEQGcLWIhnoXDlGup94YpLcoD/svq1mkZR6eR6JomurfIATrsDElHrfDbrZhWn0ELi9rdSfwdchuzZIBuZkhZvc/OmHgqdEjiPW8vJPR94ZIG0QiqlfRM8q172Vu5Q2QazvpKD94O7MnB7xFi58T7afEOOI3vCECXYKoWBL5+DdAZ6x18KUQ0bvDDTP3YsvXeOYJ8C/2SHL3NH6MxXxoYu1/W/GpKeqqX7O7tnG0f872vgj3Wp1hf/NlfMlQ22p2iA3k94p1mVvW0RrKY3QwdlcKh/Q0muy6ieu45srrZ+Q9OutZWB8SwWCePuoyiBThI5oKrNfQNNvivA2+gfAN41daUF9SiZJkjRNRz/ut91NV+WjXnYkG0nqRf5f7y1l2fnp+Es/ZUiIBJ30I9OSTx49m3tVjtzab0c+RTWzhhmVH6J5LPVmEBpfz52/fF8bXYuejoXfr5pVb6jNcEbW3vyfE6kiCpifFfyN7tK074r7hu7s0LwgJz3mRs5MnEPFtxbZobu1Hl8Iqf7uSqcqjDeu11ZfsVWJePN21yAYCPNYoEon4ZLmTUdQSDm57qwiIH/gN/W/pSUtlDaXHnXidZ7bHh7xP3PRV7HDfGyUe1iQbjEKi5P0WhUTBRfqKMcdxQ6sQy2xw1GVB4IGuBV2n1+DI2f6fK9Rz7g7nh/o8/F+Te6O138r93UoJoqRBRLcUg9k4d/G0ZmZ2elHda3R2LenoGCOehK8chutTh/kCJ7Pz0ErXHOITNEaO55l6LyEb3AjtuAWPwVlwZ/ZOlowMCBaV4o6t5O2GhWZWmf1Wmx0a+FcyNpQjh7sXQSEF0ZaFg+7dn88Q6MO1UKOmTKn5ra7Ttq7ldxt1uewmL2rtNd9Z0WiZfX4DEqERHKWsLBRHrmstDi6hbJKwxA5t78iWnkAlmd1TVIMN98P9u9Vr+ZxEexD4akB7YYBanGJ7thTmD0ewnpEFH6FftMCzpGFI5CwALtccDRJiNA6/uCpRZCcHleYwCuK5TpzvJQAj+epjSypaHGFso6+yZuWXh4d74puDoB/b8HxY09SBStCJov8oA0iJi3vdjCPu2lmQTAWrIFyJOAx5qRC9cRNOfZKKfUXtQRtd9fIzVJ0VYtIZ0t1Rl6wHRmTFN4/zcg4kRaXJLcv2CfIkOp9L5cII8oWENH6Kc6EzaktHx+KaRglYsyKMqv0SVqKJ4oe5pEc1iT0tTF+rTe2mutKZbNj08H5oft0++jqEE1gjyjqYchCjMkKhR/5mwePpM0mnQfhA/jzXxilgMuMVh4Lwv2Km6Q0/WfIy2u8G0+WhmWtdjppOPHHnLQ4HvmRUcGGUP/wFVnyWJxxZzRYocAoigl+oyVk8S7DjmBGpniBYkPRv9/B6rzaKDv5Lyh7v6nZtv6BX4wQR/V/jbeLAMnzHkofVb+D+KWXJhEmO4w46zU3qqoXQ4TXEC9iPebqMfH+xaBF4z7bfFN+yjQ8egbam2+zZOoJUf4xDMAmnRKZw3byRvNrafcfcMHOoOlyRw1j9cQm6C8N9l9BrfOz858jEBofP2MIdw7+2fOn3IcV7MpD4mmonu2PwET1570+LfzHjAn1xV0agDFQ6brsO0QdD7PgvtKYaNMj5rNotiVISzHcgAJ9ZjvOg9k3GueOEqsYUAe2KqicFP36zzvpWRaLUhwFXAGi2RawaKrRtB+cl/rltnoG+piD3LZbhXHUBW6oaoaXS0wLTg1awboxqZqkOoNa9vr3yzWQ4/4ZiP7liA+PD1KzgZLyAu1YFPjAU59Df8M8XJEn9WiBivOS6Ibw==';

    const wordlistMasterKey = 'KJQNkiHnKbCi9PnTG9NrOTx6bVU6++7ODLXbVFi5L3I=';
    const wordlistMasterKeyIV = '5RnFHrh3vQeZOaA4ZKKOdg==';
    const encryptedWordlistMasterKey = '6URs+BSmQpwJ9CQCA9lU2VQcIaAvahaeNFJWURpFRmo=';
    expect(crypto.cryptMasterKey(derivedPass, wordlistMasterKeyIV, wordlistMasterKey)).toEqual(encryptedWordlistMasterKey);
    expect(crypto.decryptMasterKey(derivedPass, wordlistMasterKeyIV, encryptedWordlistMasterKey)).toEqual(wordlistMasterKey);

    const wordlistIV = 'upjc/EStPb6aoKaSZmZbEg==';
    expect(crypto.cryptWordlist(wordlistMasterKey, wordlistIV, wordlist)).toEqual(encryptedWordlist);
    expect(crypto.decryptWordlist(wordlistMasterKey, wordlistIV, encryptedWordlist)).toEqual(wordlist);

    const mnemonicMasterKey = '1lGts67cYQ9I4f23qvEG20PlRRvfr3lqPTUCuRkJwAY=';
    const mnemonicMasterKeyIV = '1234Hrh3vQeZOaA4ZKKOdg==';
    expect(crypto.cryptMasterKey(derivedPass, mnemonicMasterKeyIV, mnemonicMasterKey)).toEqual('DrQ6VjFoxbafsoyWMEiHuXCGOQM+s3YswIOL9sUNQMM=');
    expect(crypto.decryptMasterKey(derivedPass, mnemonicMasterKeyIV, 'DrQ6VjFoxbafsoyWMEiHuXCGOQM+s3YswIOL9sUNQMM=')).toEqual(mnemonicMasterKey);

    const mnemonic = 'close food aware intact hill spirit aerobic topple anxiety submit dilemma ripple palm skill sell frequent okay lounge anchor carry sport jump lab client';
    const mnemonicIndices = crypto.mnemonicToIndices(mnemonic, wordlist);
    const mnemonicIV = 'RweB351POc5jU6rgCAubMQ==';
    expect(crypto.cryptMnemonic(mnemonicMasterKey, mnemonicIV, mnemonicIndices)).toEqual('uwF3/1+tpqE6Xx8FYTRywn29058RRsRG7bHvyWAQbewXg+9KUA2iNuQEvPTnmvIg');
    expect(crypto.decryptMnemonic(mnemonicMasterKey, mnemonicIV, 'uwF3/1+tpqE6Xx8FYTRywn29058RRsRG7bHvyWAQbewXg+9KUA2iNuQEvPTnmvIg')).toEqual(mnemonicIndices);

    expect(crypto.indicesToMnemonic(mnemonicIndices, wordlist)).toEqual(mnemonic);
  });
});
