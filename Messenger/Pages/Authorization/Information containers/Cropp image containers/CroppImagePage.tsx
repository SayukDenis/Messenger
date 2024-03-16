import React from "react";
import CroppImageVertiacalPage from "./CroppImageVertiacalPage";
import CroppImageHorizontalPage from "./CroppImageHorizontalPage";
interface CroppImagePageProps {
  navigation: any;
  route: any;
}

const CroppImagePage: React.FC<CroppImagePageProps> = ({
  navigation,
  route,
}) => {
  const picture: { width: number; height: number; uri: string } =
    route.params.picture;
  if (picture.width > picture.height) {
    return <CroppImageHorizontalPage navigation={navigation} route={route} />;
  }
  return <CroppImageVertiacalPage navigation={navigation} route={route} />;
};

export default CroppImagePage;
