/*
 * Project: ZilPay-wallet
 * Author: Rinat(lich666dead)
 * -----
 * Modified By: the developer formerly known as Rinat(lich666dead) at <lich666black@gmail.com>
 * -----
 * Copyright (c) 2020 ZilPay
 */
import { MobileStorage, buildObject } from '../storage';
import { AuthControler, Auth } from './auth';
import { STORAGE_FIELDS } from '../../config';

export class WalletControler {
  private _storage = new MobileStorage();
  private _auth: Auth | null = null;

  public validateMnemonic(mnemonic: string) {
    return false;
  }

  public generateMnemonic() {
    return '';
  }

  public async initWallet(password: string, mnemonic: string) {
    this._auth = await AuthControler(password);

    await this._auth.encryptVault(mnemonic);
    await this._storage.set(
      buildObject(STORAGE_FIELDS.VAULT, this._auth.getEncrypted())
    );
  }
}
