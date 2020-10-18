/*
 * Project: ZilPay-wallet
 * Author: Rinat(lich666dead)
 * -----
 * Modified By: the developer formerly known as Rinat(lich666dead) at <lich666black@gmail.com>
 * -----
 * Copyright (c) 2020 ZilPay
 */
import { ZILLIQA, AddressFormats } from 'src/config/app-constants';

export interface Settings {
  netwrok: string;
  config: ZILLIQA;
  blockNumber: number;
  addressFormat: AddressFormats;
  rate: number;
}
