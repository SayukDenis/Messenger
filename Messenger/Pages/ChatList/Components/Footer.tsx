import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import MySelfUser from '../1HelpFullFolder/MySelfUser';
import { footerstyles } from '../Styles/FooterStyle';
import Folder from './Footer containers/Folder';
import { StatusBar } from 'expo-status-bar';

interface FooterProps {
  user: MySelfUser;
}

const Footer: React.FC<FooterProps> = ({ user }) => {
  const [selectedFolder, setSelectedFolder] = useState<number | null>(0);

  const handleFolderPress = (index: number) => {
    if (selectedFolder === index) {
    } else {
      setSelectedFolder(index); 
    }
  };

  return (
    
    <View style={footerstyles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={footerstyles.scrollView}>
        {user.folders.map((folder, index) => (
          <Folder
            key={index}
            text={folder.name}
            containerStyle={footerstyles.folderContainer}
            textStyle={footerstyles.folder}
            isSelected={selectedFolder === index}
            onPress={() => handleFolderPress(index)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Footer;
