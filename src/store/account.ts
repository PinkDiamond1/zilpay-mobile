/*
 * Project: ZilPay-wallet
 * Author: Rinat(lich666dead)
 * -----
 * Modified By: the developer formerly known as Rinat(lich666dead) at <lich666black@gmail.com>
 * -----
 * Copyright (c) 2020 ZilPay
 */
import { createDomain } from 'effector';
import { AccountState } from 'types';

const AccountDomain = createDomain();
const initalState: AccountState = {
  identities: [],
  selectedAddress: 0
};
const store = AccountDomain.store<AccountState>(initalState);

export default {
  store
};
