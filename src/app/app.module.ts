import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { Routes, RouterModule} from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListItemComponent } from './recipe/recipe-list/recipe-list-item/recipe-list-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FooterComponent } from './footer/footer.component';
import { Basic1Directive } from './directives/basic-1.directive';
import { Dropdown1Directive } from './directives/dropdown1.directive';
import { AssetComponent } from './opac/lookup/asset/asset.component';
import { AccountComponent } from './opac/lookup/account/account.component';
import { OpacComponent } from './opac/opac.component';
import { NewAccountComponent } from './opac/lookup/account/new-account/new-account.component';
import { OpacHeaderComponent } from './opac/header/header.component';
import { LogService } from './opac/services/opac.service.log';
import { AccountService } from './opac/services/opac.service.account';
import { InactiveUsersComponent } from './opac/admin/inactive-users/inactive-users.component';
import { ActiveUsersComponent } from './opac/admin/active-users/active-users.component';
import { OpacAdminComponent } from './opac/admin/admin.component';
import { OpComponent } from './opac/op/op.component';
import { AssetInfoComponent } from './opac/asset-info/asset-info.component';
import { AoeComponent } from './opac/op/aoe/aoe.component';
import { GoeComponent } from './opac/op/goe/goe.component';
import { MockupComponent } from './opac/op/mockup/mockup.component';
import { AuthMaintncComponent } from './opac/op/auth-maintnc/auth-maintnc.component';
import { FiExportComponent } from './opac/op/fi-export/fi-export.component';
import { AcctTransferComponent } from './opac/transfer/acct-transfer/acct-transfer.component';
import { TransferListComponent } from './opac/transfer/transfer-list/transfer-list.component';
import { GrpComponent } from './opac/lookup/grp/grp.component';
import { TransferComponent } from './opac/transfer/transfer.component';
import { AccountListComponent } from './opac/lookup/account/account-list/account-list.component';
import { OpacHeaderComponentTwo } from './opac/opac-header/opac-header.component';

//1. Add Path and components. Dont put / in path
const approutes : Routes = [
{path:'', component:TransferListComponent}, //default component when no link initially clicked.

{path:'recipe',component:RecipeComponent},
{path:'shopping',component:ShoppingListComponent},
{path:'servers', component:ServersComponent},

//{path:'eop-transfer', component:TransferComponent},
{path:'eop-transfer/acct-transfer', component:AcctTransferComponent},
{path:'eop-transfer/transfer-list', component:TransferListComponent},
{path:'eop-transfer/transfer-list/:id', component:TransferListComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    RecipeComponent,
    RecipeListComponent,
    HeaderComponent,
    RecipeListItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    FooterComponent,
    Basic1Directive,
    Dropdown1Directive,
    AssetComponent,
    AccountComponent,
    OpacComponent,
    NewAccountComponent,
    OpacHeaderComponent,OpacHeaderComponentTwo,
    ActiveUsersComponent,
    InactiveUsersComponent,
    OpacAdminComponent,
    OpComponent,
    AssetInfoComponent,
    AoeComponent,
    GoeComponent,
    MockupComponent,
    AuthMaintncComponent,
    FiExportComponent,
    AcctTransferComponent,
    TransferListComponent,
    GrpComponent,
    TransferComponent,
    AccountListComponent
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    HttpModule,
    RouterModule.forRoot(approutes) //2. Add routerModule Register path at RouterModule //3. Add respective import
  ],
  providers: [AccountService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
