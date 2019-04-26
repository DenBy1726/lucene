(await Promise.all(new Array(50).fill(0).map(async x=>{
    let randomTopics = await fetch("https://ru.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&generator=random&grnlimit=20&grnnamespace=0").then(x => x.json());
    let page = Object.entries(randomTopics.query.pages).map(x=>x[1]).filter(x => x.extract !== undefined).map(x=> {
        const randomDate = (start, end) =>  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const date  = randomDate(new Date(2012, 0, 1), new Date()).toLocaleDateString();
    const time  = randomDate(new Date(2012, 0, 1), new Date()).toLocaleTimeString();
    const title = x.title;
    const text = x.extract;
    return `INSERT INTO public.document(title, text, date, time) VALUES ('${title}','${text}','${date}','${time}');`
});
    return [...page]
}))).flat().join('\n');