function shitLoadOfFrames(DOM,name,op)
{
	var docs = DOM.getElementsByTagName("frame");
	if(docs.length <= 0) docs = DOM.getElementsByTagName("iframe");
	
	for(var i=0; i<docs.length; i++)
	{
		var doc = (docs[i].contentWindow || docs[i].contentDocument);
		if(doc.document) doc = doc.document;
			
		if($(doc).find(name).length > 0)
		{
			if(op == 'frame')
				return doc;
			else
				return $(doc).find(name);
		}
			
		if(shitLoadOfFrames(doc,name))
			return shitLoadOfFrames(doc,name);
	}
	return null;
}
function randomText(text)
{
	var q = text.split(' ');
	var msg = '';
	for(var i=0; i<q.length; i++)
		msg += words[valorAleatorio(0,words.length)] + ' ';
		
	return msg;
}
valorAleatorio = function(base,variancia)
{
	return Math.floor(Math.random()*variancia + base); 
}






window.setInterval(function()
{	
	
	var div = shitLoadOfFrames(document,'.quadro1',0);
	
	if($(div).length > 0)
	{
		$(div).each(function()
		{
			if($(this).attr('class') != 'poni')
			{
				var n = valorAleatorio(0,ponies.length);
				$(this)	.find('b').html(ponies[n]);
				$(this)	.find('.branco img')
						.attr('src',srcs[n])
						.width(100)
						.height(100);
				$(this)	.find('p img')
						.attr('src',pics[valorAleatorio(0,pics.length)])
						.width('auto')
						.height('auto');
						
				$(this).find('p').each(function()
				{
					if($(this).find('img').length <=0)
						$(this).text(randomText($(this).text()));
				});
				
				$(this).find('li').each(function()
				{
					$(this).text(randomText($(this).text()));
				});
					
				
				$(this).attr('class','poni');
			}	
		});
		
		shitLoadOfFrames(document,'.menuBotao',0).each(function()
		{
			$(this).text('I REGET NOTHING');
		});
		
		var EaD = ((shitLoadOfFrames(document,'#layoutMigalhas',0).text()).search('EaD') >= 0);
		
		if(EaD)		
			shitLoadOfFrames(document,'#layoutMigalhas',0)
			.text('Abandon all hope, you who enter here.');
		
		shitLoadOfFrames(document,'#layoutLogo',0)
		.attr('src','http://i.neoseeker.com/mgv/574321-Liege/321/75/130613082708_display.gif')
		.width(100)
		.weight(100);
		
	}
	
},1000);






var ponies = [
'Pinkie Pie',
'Twilight Sparkle',
'Applejack',
'Rarity',
'Rainbow Dash',
'Fluttershy',
'Derpy Hooves',
'Doctor Hooves',
'Princess Celestia',
'Princess Luna',
'Vinyl Scratch',
'Octavia',
'Lyra',
'Bon Bon',
'Trixie',
'Spike'
];

var srcs = [
'http://pinkie.ponychan.net/chan/files/src/132634009799.png',			// 'Pinkie Pie',
'http://www.ponychan.net/chan/files/src/132622901481.jpg',				// 'Twilight Sparkle',
'http://pinkie.ponychan.net/chan/files/src/132617365058.png',			// 'Applejack',
'http://pinkie.ponychan.net/chan/files/src/132770923379.png',			// 'Rarity',
'http://pinkie.ponychan.net/chan/files/src/132630386792.png',			// 'Rainbow Dash',
'http://pinkie.ponychan.net/chan/files/src/132625868449.png',			// 'Fluttershy',
'http://www.ponychan.net/chan/files/src/132649581931.png',				// 'Derpy Hooves',
'http://twilight.ponychan.net/chan/pic/src/133423419546.png',			// 'Doctor Hooves',
'http://www.ponychan.net/chan/files/src/132691151306.png',				// 'Princess Celestia',
'http://pinkie.ponychan.net/chan/files/src/132623451843.png',			// 'Princess Luna',
'http://www.ponychan.net/chan/files/src/132629443115.png',				// 'Vinyl Scratch',
'http://pinkie.ponychan.net/chan/files/src/132626725610.png',			// 'Octavia',
'http://pinkie.ponychan.net/chan/files/src/132175572956.png',			// 'Lyra',
'http://www.ponychan.net/chan/files/src/132702540281.png',				// 'Bon Bon',
'http://twilight.ponychan.net/chan/pic/src/132626808348.png',			// 'Trixie',
'http://pinkie.ponychan.net/chan/files/src/133670041694.png'			// 'Spike'
];


var words = [
'herp',
'derp',
'lol',
'tnx',
'lawl',
'gawd',
'WTF',
'???',
'=)',
';.;',
'SWAG',
'hehe',
'yay',
'damm',
'dwang',
'yo',
'alpha',
'nutsbro',
'acid',
'war',
'man',
'hatgon',
'the',
'ripsnot',
'changes',
'Manatees',
'stand',
'ecoperv',
'contend',
'general',
'idaterm',
'ollafe',
'team',
'cultist',
'pony',
'almost',
'arsbung',
'34',
'dear',
'will',
'fail',
'you',
'if',
'obama',
'end',
'truly',
'yours',
'of',
'fucking',
'car',
'a',
'and',
'not',
'up',
'dropped',
'balls',
'hours',
'1',
'2',
'3',
'4',
'5',
'6',
'7',
'8',
'9',
'10',
'molested',
'I',
'software',
'listen',
'said',
'but',
'beer',
'soon',
'viagra',
'free',
'isnt',
'minutes',
'guys',
'words',
'spam',
'guns',
'grow',
'freedom',
'last',
'pleased',
'downloaded',
'"',
'.',
',',
';',
':',
'account',
'sister',
'money',
'cake',
'toast',
'regardless',
'depends',
'intend',
'to',
'mabye',
'certainly',
'purpose',
'not',
'yes',
'congratulations',
'just',
'silly',
'be',
'need',
'life',
'complete',
'friends',
'forever',
'fight',
'hopes',
'dreams',
'miss',
'it',
'seems',
'how',
'dare',
'brother',
'been',
'everything',
'together',
'by',
'or',
'but',
'next',
'depends',
'that',
'this',
'those',
'we',
'they',
'he',
'she',
'you',
'me',
'discovered',
'pills',
'gone',
'went',
'walked',
'tragedy',
'deseperate'
];

var pics = [
'http://info.abril.com.br/noticias/blogs/info-games/files/2011/08/diablo3screen.jpg',
'http://static.tumblr.com/jamcd70/HxVm3knsp/a-lhama.jpg',
'http://images.wikia.com/halloweenmovie/images/6/61/Weird_Al.jpg',
'http://www.123myspace.com/myspacebackground/freebg/2393.jpg',
'http://pictures.directnews.co.uk/liveimages/Laptop_898_19398797_0_0_7017014_300.jpg',
'http://www.meh.ro/wp-content/uploads/2011/01/meh.ro6341.jpg',
'http://carambolasazuis.files.wordpress.com/2011/03/le_love_broken.png',
'http://24.media.tumblr.com/tumblr_l9yspy5Ztl1qbhfeso1_400.jpg'
];
