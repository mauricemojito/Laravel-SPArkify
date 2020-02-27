/**
 * Load components
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import NotFound from './views/errors/not-found'
import TeamSettings from './views/settings/teams/team-settings'
import Profile from './views/settings/profile'
import Teams from './views/settings/teams'
import Security from './views/settings/security'
import Api from './views/settings/api'

Vue.use(VueRouter);

/**
 * Define the application routes
 */
const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/spark/kiosk',
            name: 'kiosk',
            component: import('./views/kiosk')
        },
        {
            path: '/settings',
            name: 'settings',
            component: import('./views/settings'),
            children: [
                {
                    path: 'profile',
                    name: 'profile',
                    component: import('./views/settings/profile'),
                    alias: '/'
                },
                {
                    path: 'control/' + window.Spark.teamsPrefix,
                    name: window.Spark.teamsPrefix,
                    component: import('./views/settings/teams')
                },
                {
                    path: 'security',
                    name: 'security',
                    component: import('./views/settings/security')
                },
                {
                    path: 'api',
                    name: 'api',
                    component: import('./views/settings/api')
                },
                {
                    path: 'subscription',
                    name: 'subscription',
                    component: import('./views/settings/subscription')
                },
                {
                    path: 'payment-method',
                    name: 'payment-method',
                    component: import('./views/settings/payment-method')
                },
                {
                    path: 'invoices',
                    name: 'invoices',
                    component: import('./views/settings/invoices')
                }
            ]
        },
        {
            path: '/settings/'+ window.Spark.teamsPrefix +'/:id',
            name: 'teamSettings',
            component: TeamSettings,
            props: (route) => ({ teamId: parseInt(route.params.id) }),
            children: [
                {
                    path: 'owner',
                    name: 'owner',
                    component: Profile,
                    alias: '/'
                },
                {
                    path: 'control/'+window.Spark.teamsPrefix,
                    name: window.Spark.teamsPrefix,
                    component: Teams
                },
                {
                    path: 'security',
                    name: 'security',
                    component: Security
                },
                {
                    path: 'api',
                    name: 'api',
                    component: Api
                }
            ]
        },
        { path: '/404', component: NotFound },
        { path: '*',  component: NotFound },
    ],
});

export default router;