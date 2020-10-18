/*
 * Project: ZilPay-wallet
 * Author: Rinat(lich666dead)
 * -----
 * Modified By: the developer formerly known as Rinat(lich666dead) at <lich666black@gmail.com>
 * -----
 * Copyright (c) 2020 ZilPay
 */

import { AccountTypes } from 'src/config/account-type';

export interface Account {
  name: string;
  index: string;
  type: AccountTypes;
}
