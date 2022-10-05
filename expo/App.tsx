import { NativeBaseProvider } from 'native-base';

import Main from './src/Main';

import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button } from 'react-native';
import { useEffect } from 'react';

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint:
    'https://github.com/settings/connections/applications/' +
    process.env.CLIENT_ID,
};

export default function App() {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: process.env.CLIENT_ID!,
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        scheme: 'exp',
      }),
    },
    discovery,
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
    }
  }, [response]);

  return (
    <NativeBaseProvider>
      <Main />
      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync();
        }}
      />
    </NativeBaseProvider>
  );
}
