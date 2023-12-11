import { View, Text } from 'react-native'
import FlashMessage from "react-native-flash-message";

import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaView>
      <Text>Hello this is our audio application
        I am going to develop this application
</Text>
      <FlashMessage preset='h1' position="top" floating={true} />
    </SafeAreaView>
  )
}