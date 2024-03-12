import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import StyleBlockUserCenter from "./StyleBlockUsersCenter";
import BlockUserContainer from "./BlockUserContainer/BlockUserContainer";
import { useDispatch, useSelector } from "react-redux";
import { AddBlockedUserIdToList ,  RemoveBlockedUserIdToList} from "../../../../../ReducersAndActions/Actions/SettingsActions/SettingsActions";


interface BlockedUser{
  id:number,
  userName: string
}

const BlockUserCenter = ()=>{
    let dispatch = useDispatch();
    let counter=useSelector((state :any) => state.SettingsPagesReducers.RadioButtons.counter);
    let blokedUserList : BlockedUser[] =useSelector((state :any) => state.SettingsPagesReducers.RadioButtons.BlockedUsersList);
    const [booleanForBlockedUsers, setBooleanForBlockedUsers] = useState(
      Array(blokedUserList.length).fill(false)
    );
    const IsVisible = useSelector((state :any) => state.SettingsPagesReducers.RadioButtons.VisibleOfRadioButtons);
    const [switchStates, setSwitchStates] = useState (booleanForBlockedUsers);
  
    useEffect(() => {
      console.log("relog " +  counter);
      console.log("length" + blokedUserList.length )
      setBooleanForBlockedUsers(Array(blokedUserList.length).fill(false));
      console.log(JSON.stringify(booleanForBlockedUsers))
    }, [counter]);

    useEffect(() => {
      setSwitchStates(booleanForBlockedUsers);
    }, [booleanForBlockedUsers]);

    const SwitchStateFunck = (index: any) => {
      const newSwitchStates = [...switchStates];
      newSwitchStates[index] = !newSwitchStates[index];
      setSwitchStates(newSwitchStates);
      if(switchStates[index] == false){
        console.log(index + " witch dispatch to Add")
        dispatch(AddBlockedUserIdToList(blokedUserList[index].id))
      }else if (switchStates[index] == true){
        console.log(index + " witch dispatch to delate")
        dispatch(RemoveBlockedUserIdToList(blokedUserList[index].id))
      }
      console.log(JSON.stringify(booleanForBlockedUsers) + " ffff")
    };

    return(
      <View>
        <Text style ={StyleBlockUserCenter.styleText}>Users</Text>
        {IsVisible === true ? (
          blokedUserList.map((item, index) => (
          <TouchableOpacity onPress={() => SwitchStateFunck(index)} style={{ marginBottom: "0.8%" }} key={index}>
            <BlockUserContainer>
              <View style = {{flexDirection:"row", justifyContent:'center', alignItems:'center'}}>
                  <Image style={StyleBlockUserCenter.styleImage} source={{ uri: 'data:image/jpeg;base64,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' }}></Image>
                  <Text style={{ marginLeft: 5, fontSize: 15 }}>{item.userName}</Text>
                </View>
              <View style={StyleBlockUserCenter.styleCheckBoxButt}>
                {switchStates[index] === true && <View style={StyleBlockUserCenter.styleCheckBoxInnerCircle}></View>}
              </View>         
            </BlockUserContainer>
          </TouchableOpacity>
        ))
          ) : (blokedUserList.map((item, index) => (
            <View style={{ marginBottom: "0.8%" }}>
              <BlockUserContainer>
                <View style = {{flexDirection:"row", justifyContent:'center', alignItems:'center'}}>
                  <Image style={StyleBlockUserCenter.styleImage} source={{ uri: 'data:image/jpeg;base64,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' }}></Image>
                  <Text style={{ marginLeft: 5, fontSize: 15 }}>{item.userName}</Text>
                </View>
                {IsVisible === false ? (
                  <View ></View>
                ) : (
                  <View style={StyleBlockUserCenter.styleCheckBoxButt}>
                    {switchStates[index] === true && <View style={StyleBlockUserCenter.styleCheckBoxInnerCircle}></View>}
                  </View>
                )}
             </BlockUserContainer>
            </View>
        )))}
    </View>
  )
}

export default BlockUserCenter;