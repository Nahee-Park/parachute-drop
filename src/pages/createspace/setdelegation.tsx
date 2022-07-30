import React from 'react';
import styled from '@emotion/styled';
import Title from '@src/components/CreateSpace/Title';
import Subscription from '@src/components/CreateSpace/Subscription';
import UploadCsv from '@src/components/common/UploadCsv';
import CreateSpaceNav from '@src/components/common/CreateSpaceNav';
import { HEADER_NAME } from '@src/constants';

function setdelegation() {
  return (
    <StyleMain>
      <CreateSpaceNav routingAddress="/">{HEADER_NAME.START_NEW_AIRDROP}</CreateSpaceNav>
      <Title>Set Delegation</Title>
      <Subscription>Check if you want to make user to delegate</Subscription>
      <UploadCsv />
    </StyleMain>
  );
}

export default setdelegation;

const StyleMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & > header {
    margin-bottom: 181px;
  }
`;
