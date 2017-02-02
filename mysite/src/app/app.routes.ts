import { MdnComponent } from './mdn/mdn.component';
import { CustomersComponent } from './customers/customers.component';
import { SiteComponent } from './site/site.component';
import { RouterModule,Routes } from '@angular/router';


export const APP_ROUTES:Routes=[
{path:'',component:SiteComponent},
{path:'customers',component:CustomersComponent},
{path:'mdn',component:MdnComponent}
];

export const appRouting=RouterModule.forRoot(APP_ROUTES);
