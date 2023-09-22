import { View } from "react-native"
import { Text,StyleSheet,Dimensions} from "react-native"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { mySelfUser } from "./1HelpFullFolder/Initialization";
 export default function ChatList(){
    return(
     <View style={styles.mainContainer}>
        <Header mySelfUser={mySelfUser}/>
        <Footer user={mySelfUser}/>
    </View>);
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      flexDirection: 'column',
    }})