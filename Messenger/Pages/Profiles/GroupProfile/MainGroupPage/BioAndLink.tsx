import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import * as Clipboard from "expo-clipboard";
import Modal from "react-native-modal";
import { group } from "../../SemiComponents/DatabaseSimulation/DBGroup";

export default function BioAndLink() {
  const [isModalVisible, setModalVisible] = useState(false);

  const copyToClipboard = () => {
    Clipboard.setString("Aboba");
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 2000);
  };

  return (
    <View
      style={{
        height: "10%",
        width: "90%",
        backgroundColor: "rgb(218, 182, 113)",
        left: "5%",
        top: "5%",
      }}
    >
      <View>
        <TouchableOpacity onPress={copyToClipboard}>
          <Text style={{ color: "rgb(17,150,179)", top: "30%", left: "2%" }}>
            Copy link group
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ color: "rgb(124, 79, 145)", top: "40%", left: "2%" }}>
          Bio: <Text style={{ color: "black" }}>{group.bio}</Text>
        </Text>
      </View>

      <Modal isVisible={isModalVisible} backdropOpacity={0}>
        <View
          style={{
            top: "45%",
            height: "5%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 50,
          }}
        >
          <Text>Link copied</Text>
        </View>
      </Modal>
    </View>
  );
}
