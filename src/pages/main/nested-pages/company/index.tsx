import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

import { routing_tree } from 'shared/routing';

import UsersPage from './nested-pages/users';
import CompanyPage from './ui';

const MessagesPage = lazy(() => import('./nested-pages/messages'));
const InfoPage = lazy(() => import('./nested-pages/info'));
const FavoritesPage = lazy(() => import('./nested-pages/favorites'));
const TasksNestedPage = lazy(() => import('./nested-pages/tasks'));

const companyRouters = (
    <Route path={routing_tree.main.company.base} element={<CompanyPage />}>
        <Route index element={<UsersPage />} />

        {/* <Route path={routing_tree.main.company.messages} element={<MessagesPage />} /> */}
        {/* <Route path={routing_tree.main.company.favorites} element={<FavoritesPage />} /> */}
        {/* <Route path={routing_tree.main.company.tasks} element={<TasksNestedPage />} /> */}
        {/* <Route path={routing_tree.main.company.info} element={<InfoPage />} /> */}
        {/* <Route path={routing_tree.main.company.path} element={<Navigate to={routing_tree.main.company.messages} replace />} /> */}
    </Route>
);

export default companyRouters;
