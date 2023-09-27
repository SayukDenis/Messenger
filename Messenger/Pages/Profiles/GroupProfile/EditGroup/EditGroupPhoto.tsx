import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./ProfileGroupStyles";

export const EditGroupPhoto = () => {
  const [GroupImage, setGroupImage] = useState(
    "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/289178626_2948624415436487_8628462265740965676_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=RMw17--nQjQAX9egPN5&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDaufPWuIPO25xdfBIUT358e8RoESXI19tmBjL8sx68hA&oe=650A6332&_nc_sid=ee9879"
  );
  return (
    <View>
      <Image style={styles.GroupPhoto} source={{ uri: GroupImage }} />

      <TouchableOpacity>
        <Text style={styles.EditPhoto}>Edit photo</Text>
      </TouchableOpacity>
      <View style={styles.EditPhotoLine} />
    </View>
  );
};
