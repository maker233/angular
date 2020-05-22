import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    /*{
        title: 'E-commerce',
        icon: 'shopping-cart-outline',
        link: '/pages/dashboard',
        home: true,
    },
    {
        title: 'IoT Dashboard',
        icon: 'home-outline',
        link: '/pages/iot-dashboard',
    },
    {
        title: 'FEATURES',
        group: true,
    },*/
    {
        title: 'Examenes',
        icon: 'layout-outline',
        children: [
            {
                title: 'Listado examenes',
                link: '/dashboard/exams/list',
            },
            {
                title: 'Nuevo examen',
                link: '/dashboard/exams/new',
            },
        ],
    },
];
