/**
 * Initial component put all initial config here
 */
import React from 'react';
import {useGetHeartbeatQuery} from 'src/apis/heartbeat';

function Initial(): JSX.Element {
  useGetHeartbeatQuery();
  return <></>;
}

export default Initial;
