import { api } from 'loopback-next/packages/loopback';
import { def } from './AccountController.api';
import { AccountRepository } from '../repositories/account';

@api(def)
export class AccountController {
  repository: AccountRepository;

  constructor() {
    this.repository = new AccountRepository();
  }

  async getAccount(accountNumber) {
    return await this.repository.find(accountNumber);
  }
}
