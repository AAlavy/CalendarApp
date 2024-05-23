import { NativeModules } from 'react-native';

const { IntentModule } = NativeModules;

export interface JavaIntentInterface {
  getIntent(): Promise<string>;
}

export const IntentInstance: JavaIntentInterface = IntentModule as JavaIntentInterface;
