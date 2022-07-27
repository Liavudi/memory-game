import { SafeAreaView, StatusBar } from 'react-native';
import androidSafeArea from '../components/android-safe-area';
import MemoryCircle from '../components/game/memory-circle';
import { Audio } from 'expo-av';

async function gameSound() {
  try {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/sound/game-sound.wav')
    );
    sound.setOnPlaybackStatusUpdate((status) => {
      if (!status.didJustFinish) return;
      sound.unloadAsync();
    });
    sound.setVolumeAsync(0.2);
    await sound.playAsync();
    sound.replayAsync();


  } catch (err) {
    console.log(err);
  }
};

export default function Game() {
  gameSound();
  return (
    <SafeAreaView style={androidSafeArea.AndroidSafeArea}>
      <StatusBar hidden={true} />
      <MemoryCircle />
    </SafeAreaView>
  );
};