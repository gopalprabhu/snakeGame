import {StyleSheet, View} from 'react-native';
import {Coordinate} from '../types/type';
import {Fragment} from 'react';
import {Colors} from '../styles/colors';

interface SnakeProps {
  snake: Coordinate[];
}
export default function Snake({snake}: SnakeProps): JSX.Element {
  return (
    <Fragment>
      {snake.map((segment, index: number) => {
        const segmentStyle = {
          left: segment.x * 10, // adjust for the size of each segment
          top: segment.y * 10,
        };
        return <View key={index} style={[styles.snake, segmentStyle]} />;
      })}
    </Fragment>
  );
}

const styles = StyleSheet.create({
  snake: {
    width: 15,
    height: 15,
    borderRadius: 7,
    backgroundColor: Colors.primary,
    position: 'absolute',
  },
});