/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  NativeModules,
  Linking,
  DeviceEventEmitter,
  Text
} from 'react-native';
import EventInput from './components/EventInput';
import EventSubmit from './components/EventSubmit';



function App(): React.JSX.Element {
  const [eventInvite, setEventInvite] = useState<string>('');
  const colorScheme = useColorScheme();

  useEffect(() => {
    DeviceEventEmitter.addListener('result', message => {
      setEventInvite(message)
    });
    return () => {
      DeviceEventEmitter.removeAllListeners();
    }
  }, []);

  return (
    <SafeAreaView>
      <StatusBar />
      <EventInput eventInvite={eventInvite} setEventInvite={setEventInvite} colorScheme={colorScheme} />
      <EventSubmit eventInvite={eventInvite} colorScheme={colorScheme} />
    </SafeAreaView>
  );
}

export default App;
