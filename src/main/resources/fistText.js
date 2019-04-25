//script to generation fish text and convert it to sql script
//just execute it in chrome
let result = await Promise.all(new Array(100).fill(0).map(async x=> {
    const randomDate = (start, end) =>  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const date  = randomDate(new Date(2012, 0, 1), new Date()).toLocaleDateString();
    const time  = randomDate(new Date(2012, 0, 1), new Date()).toLocaleTimeString();
    const hTitle = await fetch("https://fish-text.ru/get?format=html&type=title&self=true").then(x => x.text().then(x=>x))
    const hText  = await fetch("https://fish-text.ru/get?format=html&type=sentence&number=6.00&self=true").then(x => x.text().then(x=>x))
    const title = hTitle.split('>')[1].split('<')[0]
    const text = hText.split('>')[1].split('<')[0]
    return `INSERT INTO public.document(title, text, date, time) VALUES ('${title}','${text}','${date}','${time}');`
}));
result.join('\n')