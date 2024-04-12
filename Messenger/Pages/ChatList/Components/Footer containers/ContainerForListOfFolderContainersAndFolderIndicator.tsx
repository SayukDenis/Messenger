import React from "react";
import { ScrollView, View, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { footerstyles } from "../../Styles/FooterStyle";

interface ContainerForListOfFolderContainersAndFolderIndicatorProps {
  scrollViewRef: any;
  children: React.ReactNode;
}

const ContainerForListOfFolderContainersAndFolderIndicator: React.FC<
  ContainerForListOfFolderContainersAndFolderIndicatorProps
> = ({
  scrollViewRef,

  children,
}) => {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      ref={scrollViewRef}
    >
      <View
        style={{
          justifyContent:
            Platform.OS === "ios" && insets.bottom !== 0
              ? "flex-end"
              : "center",
        }}
      >
        {children}
      </View>
    </ScrollView>
  );
};

export default ContainerForListOfFolderContainersAndFolderIndicator;
