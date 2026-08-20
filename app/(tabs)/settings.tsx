import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreView);

const Settings = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text>settings</Text>
    </SafeAreaView>
  );
};

export default Settings;
