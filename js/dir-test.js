const items = [{
    Title: 'Title Here',
    Artist: 'Here',
    Url: '',
    Type: 'Text',
    Genre: '',
    Description: '',
    Icon: 'fas fa-book',
    Image: [{
        Url: '',
        Alt: ''
    }]
    
},
{
    Title: 'Title Here',
    Artist: 'Here',
    Url: '',
    Type: 'Music',
    Genre: '',
    Description: '',
    Icon: 'fas fa-music',
    Image: [{
        Url: '',
        Alt: ''
    }]
},
{
    Title: 'Title Here',
    Artist: 'Here ARTIST',
    Url: '',
    Type: 'Text',
    Genre: '',
    Description: ' ',
    Icon: 'fas fa-book',
    Image: [{
        Url: '',
        Alt: ''
    }]
},
{
    Title: 'How To',
    Artist: '',
    Url: '',
    Type: 'Video',
    Genre: '',
    Description: '',
    Icon: 'fas fa-video',
    Image: [{
        Url: '',
        Alt: ''
    }]
},
{    
    Title: 'Title Here',
    Artist: 'NA',
    Url: '',
    Type: 'Image',
    Genre: '',
    Description: '',
    Icon: 'fas fa-image',
    Image: [{
        Url: 'https://www.w3schools.com/html/img_chania.jpg',
        Alt: ''
    }]
}
];

// Loop that places article items to create the directory. 
const dirMarkup = `
${items.map(item => `<div class="col dir ${item.Type}"><img src="${item.Image}" alt="sdf"/><h2 class="title">${item.Title}</h2><h3>${item.Artist}</h3><a href=${item.Url} alt="${item.Type}"><i class="${item.Icon}"></i></a><p>${item.Type}</p></div>`).join(' ')}
`;
document.querySelector('.directory').innerHTML = dirMarkup;



// Loop that places article items to create the directory. 
const dirMark = `
${items.map(item => `<li>${item.Type}</li>`).join(' ')}
`;
document.querySelector('ul.types').innerHTML = dirMark;