import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Account } from '../../model/Account.model';
import { LogService } from '../../services/opac.service.log';
import { AccountService } from '../../services/opac.service.account';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LogService ,AccountService] 
})
export class NewAccountComponent implements OnInit {

  constructor(private l : LogService , private acctSrv : AccountService) { }

  @Output() newAcct  = new EventEmitter<Account>();

  ngOnInit() {  }

  onCreateAccount(accountnu : string , accountabbr : string , accountName : string , status : boolean){
    //1. passind data by service.
    this.acctSrv.createNewAccount(new Account(accountnu , accountabbr , accountName , status ));

    //2. passing data by event/property binding.
   // this.l.logInfo("1. Emit newAcct event ")  ;
   // this.newAcct.emit(new Account(accountabbr,accountnu,accountName,status));
  }
}
