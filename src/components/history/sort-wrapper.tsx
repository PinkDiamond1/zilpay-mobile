/*
 * Project: ZilPay-wallet
 * Author: Rinat(lich666dead)
 * -----
 * Modified By: the developer formerly known as Rinat(lich666dead) at <lich666black@gmail.com>
 * -----
 * Copyright (c) 2020 ZilPay
 */

import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  ViewStyle
} from 'react-native';

import { DropDownItem } from 'app/components/drop-down-item';
import { HistoryStatus, TokensModal } from 'app/components/modals';

import i18n from 'app/lib/i18n';
import { keystore } from 'app/keystore';
import { Token, Account } from 'types';
import { theme } from 'app/styles';

type Prop = {
  style?: ViewStyle;
  tokens: Token[];
  account: Account;
  selectedToken: number;
  selectedStatus: number;
  isDate: boolean;
  onSelectStatus: (status: number) => void;
  onSelectToken: (index: number) => void;
  onSelectDate: (isDate: boolean) => void;
};

export const SortingWrapper: React.FC<Prop> = ({
  style,
  tokens,
  account,
  selectedToken,
  selectedStatus,
  isDate,
  onSelectStatus,
  onSelectDate,
  onSelectToken
}) => {
  const netwrokState = keystore.network.store.useValue();

  const [statusModal, setStatusModal] = React.useState(false);
  const [tokenModal, setTokenModal] = React.useState(false);

  const handleReset = React.useCallback(() => {
    onSelectDate(false);
    onSelectStatus(0);
    onSelectToken(0);
  }, [onSelectDate, onSelectStatus, onSelectToken]);

  return (
    <React.Fragment>
      <View style={[styles.container, style]}>
        <DropDownItem
          color="#666666"
          onPress={() => setStatusModal(true)}
        >
          {i18n.t('sorting_item0')}
        </DropDownItem>
        <DropDownItem
          color="#666666"
          onPress={() => setTokenModal(true)}
        >
          {i18n.t('sorting_item1')}
        </DropDownItem>
        <DropDownItem
          color="#666666"
          onPress={() => onSelectDate(!isDate)}
        >
          {i18n.t('sorting_item2')}
        </DropDownItem>
        <Button
          title={i18n.t('reset')}
          color={theme.colors.primary}
          onPress={handleReset}
        />
      </View>
      <HistoryStatus
        title={i18n.t('sort_status')}
        visible={statusModal}
        selected={selectedStatus}
        onTriggered={() => setStatusModal(false)}
        onSelect={onSelectStatus}
      />
      <TokensModal
        title={i18n.t('token')}
        visible={tokenModal}
        tokens={tokens}
        account={account}
        network={netwrokState.selected}
        selected={selectedToken}
        onTriggered={() => setTokenModal(false)}
        onSelect={onSelectToken}
      />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30
  }
});
