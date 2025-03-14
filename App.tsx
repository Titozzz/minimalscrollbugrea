import { View, Pressable, Text, ScrollView } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const CustomPressable = ({ id }: { id: string }) => {
  return (
    <Pressable
      onPress={() => {
        console.log(id);
      }}
      style={{ width: 100, height: 100, backgroundColor: 'red' }}
    >
      <Text>{id}</Text>
    </Pressable>
  );
};

const Scroll = () => {
  const animatedOpacity = useAnimatedStyle(() => {
    return {
      opacity: withTiming(1),
    };
  });

  return (
    <View style={{ flex: 1, gap: 10 }}>
      <Animated.Text
        style={[
          { width: 100, height: 100, backgroundColor: 'red' },
          animatedOpacity,
        ]}
      >
        Hello from animated text
      </Animated.Text>
      <ScrollView>
        <CustomPressable id="1" />
        <CustomPressable id="2" />
        <CustomPressable id="3" />
        <CustomPressable id="4" />
        <CustomPressable id="5" />
        <CustomPressable id="6" />
        <CustomPressable id="7" />
        <CustomPressable id="8" />
        <CustomPressable id="9" />
        <CustomPressable id="10" />
        <CustomPressable id="11" />
        <CustomPressable id="12" />
      </ScrollView>
    </View>
  );
};

export default Scroll;
