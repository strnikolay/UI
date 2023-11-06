export const listItems = [
  {
    title: 'Главная',
    url: '/',
  },
  {
    title: 'Страница 2',
    url: 'page2',
    submenu: [
      {
        title: 'Страница 2_1',
        url: 'page2_1',
      },
      {
        title: 'Страница 2_2',
        url: 'page2_2',
      },
      {
        title: 'Страница 2-3',
        url: 'page2_3',
        submenu: [
          {
            title: 'Страница 2-3-1',
            url: 'page2_3_1',
          },
          {
            title: 'Страница 2-3-2',
            url: 'page2_3_2',
            submenu: [
              {
                title: 'Страница 2-3-2-1',
                url: 'page2_3_2_1',
              },
              {
                title: 'Страница 2-3-2-2',
                url: 'page2_3_2_2',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Страница 3',
    url: 'page3',
    submenu: [
      {
        title: 'Страница 3-1',
        url: 'page3_1',
      },
      {
        title: 'Страница 3-2',
        url: 'page3_2',
      },
    ],
  },
];
