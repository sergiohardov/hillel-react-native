import { useEffect, useRef, useState } from "react";
import { FlatList, ImageBackground, Pressable, View } from "react-native";

import styles from "./styles";
import sliderList from "../../mock/sliderList";
import colors from "../../constants/colors";

const AUTOPLAY_INTERVAL = 2000;
const SLIDE_GUTTER = 20;

export default function Slider() {
  const [sliderWidth, setSliderWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplayInterval, setAutoplayInterval] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const flatlistRef = useRef(null);

  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent;
    const index = Math.round(
      contentOffset.x / event.nativeEvent.layoutMeasurement.width
    );
    setCurrentIndex(index);
  };

  const handlePressDot = (index) => {
    setCurrentIndex(index);
    flatlistRef.current.scrollToIndex({ index, animated: true });
  };

  useEffect(() => {
    clearInterval(autoplayInterval);

    if (!isDragging) {
      setAutoplayInterval(
        setInterval(() => {
          const nextIndex = (currentIndex + 1) % sliderList.length;
          setCurrentIndex(nextIndex);
          flatlistRef.current.scrollToIndex({
            index: nextIndex,
            animated: true,
          });
        }, AUTOPLAY_INTERVAL)
      );
    }

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [currentIndex, isDragging]);

  return (
    <View
      style={styles.container}
      onLayout={(e) => {
        const { width } = e.nativeEvent.layout;
        setSliderWidth(width);
      }}
    >
      <FlatList
        pagingEnabled
        horizontal
        ref={flatlistRef}
        data={sliderList}
        decelerationRate={0}
        snapToAlignment={"center"}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        onScrollBeginDrag={() => setIsDragging(true)}
        onScrollEndDrag={() => setIsDragging(false)}
        keyExtractor={(_, idx) => idx}
        renderItem={({ item }) => (
          <View
            style={[
              styles.slide,
              {
                width: sliderWidth - SLIDE_GUTTER,
                marginHorizontal: SLIDE_GUTTER / 2,
              },
            ]}
          >
            <ImageBackground
              style={styles.slideImage}
              source={item.image}
              resizeMethod="resize"
            />
          </View>
        )}
      />

      <View style={styles.pagination}>
        {sliderList.map((_, idx) => (
          <Pressable
            key={idx}
            onPress={() => handlePressDot(idx)}
            style={[
              styles.paginationDot,
              {
                backgroundColor:
                  idx === currentIndex ? colors.gray_dark : colors.gray_light,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
}
