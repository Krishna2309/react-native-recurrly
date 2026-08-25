import PostHog from "posthog-react-native";
import Constants from "expo-constants";

// Configuration loaded from app.config.js extras via expo-constants
const projectToken = Constants.expoConfig?.extra?.posthogProjectToken as
  | string
  | undefined;
const host = Constants.expoConfig?.extra?.posthogHost as string | undefined;
const isPostHogConfigured =
  projectToken && projectToken !== "phc_your_project_token_here";

if (__DEV__) {
  if (!isPostHogConfigured) {
    throw new Error(
      "POSTHOG_PROJECT_TOKEN variable required by PostHog is missing or un-configured, " +
        "this causes events to be silently missed. This error stops appearing once " +
        "POSTHOG_PROJECT_TOKEN is configured",
    );
  }
}

export const posthog = new PostHog(projectToken || "placeholder_key", {
  host,
  disabled: !isPostHogConfigured,
  captureAppLifecycleEvents: true,
  debug: __DEV__,
  flushAt: 20,
  flushInterval: 10000,
  maxBatchSize: 100,
  maxQueueSize: 1000,
  preloadFeatureFlags: true,
  sendFeatureFlagEvent: true,
  featureFlagsRequestTimeoutMs: 10000,
  requestTimeout: 10000,
  fetchRetryCount: 3,
  fetchRetryDelay: 3000,
});
