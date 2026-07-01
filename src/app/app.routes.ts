import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { Products } from './products/products';
import { Directivas } from './directivas/directivas';
import { Signal } from './signal/signal';
import { Cardproduct } from './cardproduct/cardproduct';
import { Carrito } from './carrito/carrito';
import { Admindashboard } from './admindashboard/admindashboard';


export const routes: Routes = [
    {
        path: '',
        component: Homepage
    },
    {
        path: 'homepage',
        component: Homepage
    },
    {
        path: 'products',
        component: Products
    },
    {
        path: 'directivas',
        component: Directivas
    },
    {
        path: 'signal',
        component: Signal
    },
    {
        path: 'card',
        component: Cardproduct
    },
    {
        path: 'carrito',
        component: Carrito
    },
    {
        path: 'admin/dashboard',
        component: Admindashboard,
    }
];
