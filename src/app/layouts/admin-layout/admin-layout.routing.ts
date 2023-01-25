import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import {AddProviderComponent  } from '../../forms/addprovider.component';

export const AdminLayoutRoutes: Routes = [
    
    
    { path: 'provider-list',     component: TableListComponent },    
    { path: 'add-provider',        component: AddProviderComponent },
];
