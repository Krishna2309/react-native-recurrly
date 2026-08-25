import { posthog } from "@/lib/posthog";
import { Link, useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

const SubscriptionDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      posthog.capture("subscription_detail_viewed", { subscription_id: id });
    }
  }, [id]);

  return (
    <View>
      <Text> SubscriptionDetail: {id}</Text>
      <Link href="/">Go back</Link>
    </View>
  );
};

export default SubscriptionDetail;
