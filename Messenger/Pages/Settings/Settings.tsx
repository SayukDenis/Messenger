import { View } from "react-native";
import Header from "./Header/SetiingsHeader";
import Center from "./Center/CenterFile";
import './Settings.css'
const Settingspage =()=>{
    return <View>
       <div className="settings">
        <Header></Header>
        <Center></Center>
       </div>
    </View>
}

export default Settingspage;