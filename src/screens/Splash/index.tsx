import React, {useEffect, useState} from 'react';
import {Dimensions, LayoutChangeEvent, StyleSheet, View} from 'react-native';
import {use} from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import {SplashProps} from '../../navigation/typeScreen';
import img from '../../assets/img';

const {height, width} = Dimensions.get('window');
const initialPosition: number = -height / 2;
const backgroundWidth: number = width * 4;

const SplashScreen = (props: SplashProps) => {
  const {navigation} = props;

  const [logoPosition, setLogoPosition] = useState<number>(0);

  const ballTranslateY = useSharedValue<number>(initialPosition);
  const ballScale = useSharedValue<number>(1);
  const logoOpacity = useSharedValue<number>(0);
  const topTitleOpacity = useSharedValue<number>(0);
  const topTitleTranslateY = useSharedValue<number>(-(width / 4));
  const botTitleOpacity = useSharedValue<number>(0);
  const botTitleTranslateY = useSharedValue<number>(width / 4);
  const bgOpacity = useSharedValue<number>(0);
  const bgTranslateX = useSharedValue<number>(backgroundWidth / 2);

  useEffect(() => {
    ballTranslateY.value = withTiming(0, {
      duration: 700,
    });
    ballScale.value = withDelay(
      700,
      withTiming(2, {
        duration: 200,
      }),
    );
    logoOpacity.value = withDelay(750, withSpring(1));
    topTitleOpacity.value = withDelay(
      1250,
      withTiming(1, {
        duration: 250,
      }),
    );
    topTitleTranslateY.value = withDelay(
      1250,
      withTiming(1, {
        duration: 250,
      }),
    );
    botTitleOpacity.value = withDelay(
      1500,
      withTiming(1, {
        duration: 250,
      }),
    );
    botTitleTranslateY.value = withDelay(
      1500,
      withTiming(0, {
        duration: 250,
      }),
    );
    bgOpacity.value = withDelay(
      1750,
      withTiming(1, {
        duration: 250,
      }),
    );
    bgTranslateX.value = withDelay(
      1750,
      withTiming(-backgroundWidth / 2, {
        duration: 15000,
      }),
    );
  }, [
    ballTranslateY,
    ballScale,
    logoOpacity,
    topTitleOpacity,
    topTitleTranslateY,
    botTitleOpacity,
    botTitleTranslateY,
    bgOpacity,
    bgTranslateX,
  ]);

  const ballStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateY: ballTranslateY.value}, {scale: ballScale.value}],
    };
  });

  const logoStyles = useAnimatedStyle(() => {
    return {
      opacity: logoOpacity.value,
    };
  });

  const topTitleStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateY: topTitleTranslateY.value}],
      opacity: topTitleOpacity.value,
    };
  });

  const botTitleStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateY: botTitleTranslateY.value}],
      opacity: botTitleOpacity.value,
    };
  });

  const backgroundStyles = useAnimatedStyle(() => {
    return {
      opacity: bgOpacity.value,
      transform: [{translateX: bgTranslateX.value}],
    };
  });

  const onLayoutLogo = (event: LayoutChangeEvent) => {
    setLogoPosition(event.nativeEvent.layout.y);
  };

  return (
    <View style={styles.root}>
      <Animated.Image
        style={[styles.background, backgroundStyles]}
        source={img.background}
        resizeMode="cover"
      />
      <Animated.Image
        resizeMode="contain"
        style={[
          styles.topTitle,
          {
            top: logoPosition - width / 2.5,
          },
          topTitleStyles,
        ]}
        source={img.topTitle}
      />
      <Animated.View style={[styles.box, ballStyles]} />
      <Animated.Image
        onLayout={onLayoutLogo}
        style={[styles.logo, logoStyles]}
        source={img.logo}
      />
      <Animated.Text
        // eslint-disable-next-line no-sparse-arrays
        style={[
          styles.botTitle,
          {
            top: logoPosition + width / 3,
          },
          botTitleStyles,
          ,
        ]}>
        Create, Play, Trade, and Support Animals.
      </Animated.Text>
    </View>
  );
};

export default SplashScreen;

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 32,
    height: 32,
    backgroundColor: 'red',
    borderRadius: 100,
  },
  logo: {
    width: width / 4,
    height: width / 4,
    position: 'absolute',
  },
  topTitle: {
    width: width / 2,
    height: width / 2,
    position: 'absolute',
  },
  botTitle: {
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 24.2,
    color: 'white',
    position: 'absolute',
    textAlign: 'center',
    width: width / 2,
  },
  background: {
    height: height,
    width: backgroundWidth * 1.5,
    position: 'absolute',
  },
});
