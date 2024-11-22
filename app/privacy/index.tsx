import React from 'react';
import { ScrollView, StyleSheet, StatusBar, View, SafeAreaView } from 'react-native';

import { Header } from '~/components/Header';
import { Text } from '~/components/ui/text';

const App = () => (
  <SafeAreaView className="native:pt-8 relative flex flex-1 dark:bg-gray-900">
    <Header />
    <ScrollView className="p-4 font-sans ">
      <View className="mx-auto max-w-4xl p-6">
        <Text className="mb-4 text-center text-2xl font-bold">Privacy Policy for Exam Prep</Text>
        <Text className="mb-6 text-center ">
          <span className="font-semibold">Effective Date:</span> Friday, November 22nd, 2024
        </Text>

        <View className="mb-8">
          <Text className="mb-2 text-lg font-semibold">Information We Do Not Collect</Text>
          <Text className="">
            Exam Prep does not collect, store, or process any personal or sensitive information
            about you. Our app is designed to provide a secure and private experience, focusing
            solely on delivering study materials and resources.
          </Text>
        </View>

        <View className="mb-8">
          <Text className="mb-2 text-lg font-semibold">Third-Party Services</Text>
          <Text className="mb-4 ">
            While Exam Prep does not collect data directly, it incorporates third-party services,
            such as
            <span className="font-medium"> Google AdMob</span>, to display banner advertisements.
            These services may collect data including:
          </Text>
          <View className="list-inside list-disc pl-4 ">
            <Text>Device information (e.g., IP address, device ID)</Text>
            <Text>Usage data (e.g., ad interactions)</Text>
          </View>
          <Text className="mt-4 ">
            This data collection is governed by Google’s privacy policies, not Exam Prep. Learn more
            at{' '}
            <a href="https://policies.google.com/privacy" className="text-blue-500 hover:underline">
              Google Privacy Policy
            </a>
            .
          </Text>
        </View>

        <View className="mb-8">
          <Text className="mb-2 text-lg font-semibold">Children’s Privacy</Text>
          <Text className="">
            Exam Prep is designed for a general audience and does not knowingly target children
            under 13. Google AdMob may display ads compliant with regulations such as the
            <span className="font-medium"> Children’s Online Privacy Protection Act (COPPA)</span>.
            If you are a parent or guardian and believe your child has been exposed to inappropriate
            ads, please contact us at the email below.
          </Text>
        </View>

        <View className="mb-8">
          <Text className="mb-2 text-lg font-semibold">Ad Personalization</Text>
          <Text className="mb-4 ">
            AdMob may serve <span className="font-medium">personalized ads</span> based on your
            preferences and browsing behavior. You can opt out of personalized advertising via your
            device settings:
          </Text>
          <View className="list-inside list-disc pl-4 ">
            <Text>
              On Android:{' '}
              <Text className="font-medium">
                Settings &gt; Privacy &gt; Ads &gt; Reset Advertising ID
              </Text>
              .
            </Text>
            <Text>
              On iOS:{' '}
              <Text className="font-medium">
                Settings &gt; Privacy &gt; Tracking &gt; Disable "Allow Apps to Request to Track"
              </Text>
              .
            </Text>
          </View>
          <Text className="mt-4 ">
            Learn more at{' '}
            <a
              href="https://policies.google.com/technologies/ads"
              className="text-blue-500 hover:underline">
              Google Ads Privacy & Terms
            </a>
            .
          </Text>
        </View>

        <View className="mb-8">
          <Text className="mb-2 text-lg font-semibold">Data Security</Text>
          <Text className="">
            While Exam Prep does not collect or store user data, we encourage you to review the
            security practices of third-party services used in the app.
          </Text>
        </View>

        <View className="mb-8">
          <Text className="mb-2 text-lg font-semibold">Changes to This Privacy Policy</Text>
          <Text className="">
            We may update this Privacy Policy from time to time to reflect changes in our app or
            applicable laws. Updates will be effective immediately upon posting. We encourage you to
            review this policy periodically.
          </Text>
        </View>

        <View>
          <Text className="mb-2 text-lg font-semibold">Contact Us</Text>
          <Text className="">
            If you have any questions or concerns about this Privacy Policy, please contact us:
          </Text>
          <View className="mt-4">
            <Text className="">
              <span className="font-semibold">Email:</span> support@safyah.com
            </Text>
            <Text className="">
              <span className="font-semibold">App Name:</span> Exam Prep
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
