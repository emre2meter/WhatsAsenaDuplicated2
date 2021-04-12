const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'thanos', fromMe: true}, (async (message, match) => {

    var r_text = new Array ();
r_text[0] = "*İşim bittiğinde, insanlığın yarısı hala var olacak. Her şeyin olması gerektiği gibi mükemmel dengelenmiş. Umarım seni hatırlarlar.*";
r_text[1] = "*Tüm fetih, şiddet, katliam yıllarımda bunlar asla kişisel değildi. Ama şimdi size anlatacağım! İnatçı, sinir bozucu küçük gezegeninize ne yapmak üzereyim.. Bundan zevk alacağım. Çok, çok fazla.*";
r_text[2] = "*Küçük olan, basit bir hesap. Bu evren sonludur, kaynakları sınırlıdır. Hayat kontrolsüz bırakılırsa, yaşam sona erecektir. Düzeltilmeye Muhtaç!*";
r_text[3] = "*Sonunda dinleniyorum ve güneşin doğuşunu minnettar bir evrende izliyorum. En zor seçimler en güçlü iradeleri gerektirir.*";
r_text[4] = "*Kelimelerini akıllıca seçmelisin.*";
r_text[5] = "*Bu evreni son atomuna kadar parçalayacağım ve sonra benim için topladığın taşlarla yeni bir tane yaratacağım. Kaybedilen şey değil, sadece ona minnettar bir evren verildiği şeydir.*";
r_text[6] = "*İş bitti. Kazandım. Ne yapmak üzereyim? Bundan keyif alacağım. Çok, çok fazla!*";
r_text[7] = "*Kalbimde, hala umursadığını biliyordum. Ama kimse kesin olarak bilmiyor. Gerçeklik genellikle hayal kırıklığı yaratır.*";
r_text[8] = "*Güçlüsün. Ben.. Sen cömertsin. Ben.. Ama sana asla yalan söylemeyi öğretmedim. Bu yüzden bu konuda çok kötüsün. Ruh Taşı nerede?*";
r_text[9] = "*Güçlüsünüz. Ama parmaklarımı çektimdiğimde hepiniz var olmaktan vazgeçersiniz!*";
r_text[10] = "*Kaybetmenin nasıl bir şey olduğunu biliyorum. Haklı olduğunuzu ümitsiz hissetmek, yine de başarısız olmaktır.*";
r_text[11] = "*Bugün, bildiğinden daha fazlasını kaybettim. Ama şimdi yas tutmanın vakti yok. Şimdi hiç zaman yok.*";
r_text[12] = "*Korkun. Ondan kaç. Kader hâlâ geliyor. Yoksa söylemem gerekir mi?*";
r_text[13] = "*Hapse mahkum olurum! Gurur: benim tek ölümcül kusurum.*";
r_text[14] = "*Ben... kaçınılmazım.*";
r_text[15] = "*Rastgele. Tam ve adil. Zengin ve fakir aynı. Bana deli dediler. Ve tahmin ettiğim gibi, önümde diz çökmeye geldiler.*";
r_text[16] = "*Aç yatacaktın, hurdaya fırlamıştın. Gezegeniniz çöküşün eşiğindeydi. Bunu durduran benim. O zamandan beri ne oldu biliyor musun? Doğan çocuklar tam karın ve berrak gökyüzü dışında hiçbir şey bilmiyorlar. Bu bir cennet.*";
r_text[17] = "*Hiçbir şey yapmamak; sıkışıp kalarak, açlık çekerek, günah içinde yuvarlanarak Dantenin cehennemine kucak açmaktır. Ve ben de cesaretle eyleme geçtim. Kimileri dehşetle bakacaktır; ama kurtuluşun bir bedeli vardır. Dünya bir gün fedakârlığımın güzelliğine kavrayacaktır. Çünkü ben sizin kurtuluşunuzum. Ben Gölgeyim. Ben insanlık sonrası çağının kapısıyım.*";
r_text[18] = "*Yaratılıştaki bütün varlıkların kendilerine ait dökülebilecek kanları vardır. Ve kimsenin onlara başkalarınınkini dökebileceklerini öğretmesi gerekmez. Hepsi bunu doğuştan bilir. Nefes almayı bildikleri gibi!*";
r_text[19] = "*Tüm savaşlar daha ilk darbe vurulmadan kazanılır ya da kaybedilir. Uygulama kısmı ise yalnızca formalitedir.*";
r_text[20] = "*Kaderimi bir kere reddettim, bir daha olmasına izin veremem!*";
r_text[21] = "*Ben senin güvenini istemedim. Sadece itaatini istiyorum.*";
var i = Math.floor(22*Math.random())

await message.sendMessage(r_text[i]);

}));

Asena.addCommand({pattern: 'enthanos', fromMe: true}, (async (message, match) => {

    var r_text = new Array ();
r_text[0] = "*Little one, it’s a simple calculus. This universe is finite, its resources, finite. If life is left unchecked, life will cease to exist. It needs correcting.*";
r_text[1] = "*When I’m done, half of humanity will still exist. Perfectly balanced, as all things should be. I hope they remember you.*";
r_text[2] = "*You should choose your words wisely.*";
r_text[3] = "*I finally rest, and watch the sun rise on a grateful universe. The hardest choices require the strongest wills.*";
r_text[4] = "*I will shred this universe down to it’s last atom and then, with the stones you’ve collected for me, create a new one. It is not what is lost but only what it is been given… a grateful universe.*";
r_text[5] = "*In my heart, I knew you still cared. But one ever knows for sure. Reality is often disappointing.*";
r_text[6] = "*In all my years of conquest, violence, slaughter, it was never personal. But I’ll tell you now, what I’m about to do to your stubborn, annoying little planet… I’m gonna enjoy it. Very, very much.*";
r_text[7] = "*You’re strong. But I could snap my fingers, and you’d all cease to exist.*";
r_text[8] = "*You’re strong. Me… You’re generous. Me… But I never taught you to lie. That’s why you’re so bad at it. Where is the Soul Stone?*";
r_text[9] = "*Today, I lost more than you can know. But now is no time to mourn. Now is no time at all.*";
r_text[10] = "*I know what it’s like to lose. To feel so desperately that you’re right, yet to fail nonetheless.*";
r_text[11] = "*I would death to imprisonment! Pride: my one fatal flaw.*";
r_text[12] = "*Dread it. Run from it. Destiny still arrives. Or should I say, I have.*";
r_text[13] = "*Your politics bore me. Your demeanor is that of a pouty child. Return me again empty-handed… And I will bathe the stairways in your blood.*";
r_text[14] = "*I ignored my destiny once, I can not do that again. Even for you. I’m sorry Little one.*";
r_text[15] = "*Look. Pretty, isn’t it? Perfectly balanced. As all things should be.*";
r_text[16] = "*Fun isn’t something one considers when balancing the universe. But this... does put a smile on my face.*";
r_text[17] = "*You’re a great fighter, Gamora. Come. Let me help you.*";
r_text[18] = "*Destiny waits for no man. Not even one who shall bring the universe to its knees.*";
r_text[19] = "*At random. Dispassionate, fair. The rich and poor alike. And they called me a madman. And what I predicted, came to pass.*";
r_text[20] = "*I did not ask for your trust. I demand only your obedience.*";
r_text[21] = "*I am.. inevitable!*";
var i = Math.floor(22*Math.random())

await message.sendMessage(r_text[i]);

}));

Asena.addCommand({pattern: 'infothanos', fromMe: true}, (async (message, match) => {

    await message.sendMessage("*Codded by @phaticusthiccy*\n💻Usage: *.thanos*\nℹ️Desc: 🇹🇷 Thanos'un en iyi repliklerinden rastgele seçer.\n\n💻Usage: *.enthanos*\nℹ️Desc: 🇬🇧 Choose randomly from Thanos's best quotes.")

}));
