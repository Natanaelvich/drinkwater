import React, { useState } from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";

import { Fontisto } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../styles/theme";
import { Header } from "../components/Header";
import Svg, { Circle, Path } from "react-native-svg";
import Animated, {
  Easing,
  interpolate,
  useAnimatedProps,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const { width } = Dimensions.get("screen");

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

export function Home() {
  const heighAnimated = useSharedValue(100);
  const waveAnimated = useSharedValue(5);
  const buttonStrokeAnimated = useSharedValue(0);

  const [percentage, setPercentage] = useState(0)
  
  const buttonProps = useAnimatedProps(() => {
    return {
      cx: 60,
      cy: 60,
      r: 40,
      fill: theme.colors.blue100,
      strokeWidth: interpolate(
        buttonStrokeAnimated.value,
        [0, 0.5, 1],
        [17, 40, 17]
      ),
      stroke: theme.colors.blue90,
      strokeOpacity: 0.5,
    };
  });

  const firstWaveProps = useAnimatedProps(() => {
    return {
      d: `
        M 0 0
        Q 35 ${waveAnimated.value} 70 0
        T 140 0
        T 210 0
        T 280 0
        T 350 0
        T 420 0
        V ${heighAnimated.value}
        H 0
        Z
    `,
    };
  });

  const secondWaveProps = useAnimatedProps(() => {
    return {
      d: `
        M 0 0
        Q 45 ${waveAnimated.value + 5} 90 0
        T 180 0
        T 270 0
        T 360 0
        T 900 0
        T 540 0
        V ${heighAnimated.value}
        H 0
        Z
    `,
    };
  });

  const SVGProps = useAnimatedProps(() => {
    return {
      height: heighAnimated.value,
      viewBox: `0 0 ${width} ${heighAnimated.value}`,
    };
  });

  function handleDrink() {
    buttonStrokeAnimated.value = 0;
    waveAnimated.value = 5;

    buttonStrokeAnimated.value = withTiming(1, {
      duration: 500,
      easing: Easing.ease,
    });
    waveAnimated.value = withRepeat(
      withTiming(17, {
        duration: 500,
        easing: Easing.ease,
      }),
      2,
      true
    );

    heighAnimated.value = withTiming(heighAnimated.value + 100, {
      duration: 1000,
      easing: Easing.ease,
    });

    setPercentage(Math.trunc(heighAnimated.value * 0.1))
  }

  return (
    <View style={styles.container}>
      <Header ml={percentage > 0 ? heighAnimated.value : 0} percent={percentage} />

      <AnimatedSvg width={width} animatedProps={SVGProps}>
        <AnimatedPath
          animatedProps={firstWaveProps}
          fill={theme.colors.blue100}
          transform="translate(0,10)"
        />

        <AnimatedPath
          animatedProps={secondWaveProps}
          fill={theme.colors.blue70}
          transform="translate(0,15)"
        />
      </AnimatedSvg>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleDrink}
          activeOpacity={0.7}
        >
          <Svg width="120" height="120">
            <AnimatedCircle animatedProps={buttonProps} />
          </Svg>
          <Fontisto
            name="blood-drop"
            size={32}
            color={theme.colors.blue90}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
