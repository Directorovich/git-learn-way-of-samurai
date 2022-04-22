let initialState = {
    linkNav: [
        {link: '/profile', linkName: 'Profile'},
        {link: '/dialogs', linkName: 'Messages'},
        {link: '/news', linkName: 'News'},
        {link: '/music', linkName: 'Music'},
        {link: '/setting', linkName: 'Settings'},
        {link: '/friends', linkName: 'Friends'}
    ],
    friends: [
        {
            id: 1,
            name: 'Dima',
            imgSrc: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'
        },
        {
            id: 2,
            name: 'Maksym',
            imgSrc: 'https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg'
        },
        {
            id: 3,
            name: 'Alexey',
            imgSrc: 'https://storage.streamdps.com/iblock/007/0076f2aea825b9fb2670c69557d1e09b.jpg'
        }
    ]
};


const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;