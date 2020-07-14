import * as React from 'react';
import { View, Dimensions, StatusBar } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated, { Value, cond, set, eq, add } from 'react-native-reanimated';
import { onGestureEvent, diffClamp } from 'react-native-redash';

export type GestureProps = {
    /**
     * The tint color of the view itself.
     *
     * @default green
     */
    color?: string;

    /**
     * Height of the view.
     *
     * @default 100
     */
    height?: number;

    /**
     * Width of the view.
     *
     * @default 100
     */
    width?: number;

    /**
     * Width of the view.
     *
     * @default 50
     */
    borderRadius?: number;

  };

const withOffset = (value: Animated.Value<number>, state: Animated.Value<State>, offset: Animated.Value<number>) => {
	return cond(eq(state, State.END), [set(offset, add(offset, value)), offset], add(offset, value));
};

function Gesture({
    color = 'green',
    height = 100,
    width = 100,
    borderRadius = 50,
}: GestureProps){
    const state = new Value(State.UNDETERMINED);
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const STATUSBAR_HEIGHT = StatusBar.currentHeight!;
	const translationX = new Value(0);
    const translationY = new Value(0);
    const offsetX = new Value(20);
    const offsetY = new Value(0);
	const gestureHandler = onGestureEvent({
		state,
		translationX,
		translationY,
    });
	const translateX = diffClamp(withOffset(translationX, state, offsetX), 0, windowWidth - width);
    const translateY = diffClamp(withOffset(translationY, state, offsetY), STATUSBAR_HEIGHT, windowHeight - height + STATUSBAR_HEIGHT);

	return (
		<View>
			<PanGestureHandler {...gestureHandler}>
				<Animated.View style={{ transform: [{ translateX }, { translateY }] }}>
					<View style={{backgroundColor: color, height: height, width: width, borderRadius: borderRadius}}></View>
				</Animated.View>
			</PanGestureHandler>
		</View>
	);
}

export default Gesture;