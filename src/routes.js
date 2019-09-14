import {GalleryPage, HomePage, TodoPage} from "./pages";

export default [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/gallery',
        exact: true,
        component: GalleryPage
    },
    {
        path: '/todo',
        exact: true,
        component: TodoPage
    }
]