import React from 'react';
import { Text, TextInput, View } from 'react-native';

interface ChildrenRightProps {
    inputBio: string;
    setInputBio: (inputBio: string) => void;
    screenWidth: number;
    textInputRef: React.RefObject<TextInput>;
}

const ChildrenRightComponent: React.FC<ChildrenRightProps> = ({ inputBio, setInputBio, screenWidth, textInputRef }) => 
   (
    <View style={{ flexDirection: "row", justifyContent: "space-between", flex: 1 }}>
        <View style={{ alignSelf: "center", marginLeft: 10 }}>
            <TextInput
                placeholder="Enter your bio"
                placeholderTextColor="white"
                ref={textInputRef}
                value={inputBio}
                onChangeText={setInputBio}
                style={{ fontSize: 18, color: "white", width: screenWidth * 0.55 }}
                maxLength={70}
            />
        </View>
        <View style={{ alignSelf: "center", marginRight: 4, width: screenWidth * 0.08, justifyContent: "center" }}>
            <Text style={{ fontSize: 12, marginTop: 2, color: "white", alignSelf: "center" }}>
                {`${inputBio.length}/70`}
            </Text>
        </View>
    </View>
);

export default ChildrenRightComponent;
