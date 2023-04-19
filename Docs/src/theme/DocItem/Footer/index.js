import React from 'react';
import { YbugProvider } from "ybug-react";
import Footer from '@theme-original/DocItem/Footer';

export default function FooterWrapper(props) {
  return (
    <>
      <YbugProvider ybugId="pdk3c0vnc11xmfvn2b4x" settings={{widget_position: "right", launcher_position: "right-middle"}}>
        <Footer {...props} />
      </YbugProvider>
    </>
  );
}
