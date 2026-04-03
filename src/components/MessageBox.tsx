import {TextInput, Text, View, TouchableOpacity} from "react-native";
import {Entypo, AntDesign} from "@expo/vector-icons";
function MessageBox() {
    return (
        <View className="flex items-center flex-row justify-between gap-4">
            <View className="flex flex-1 flex-row items-center gap-2 rounded-3xl px-5 border border-gray-500">
                <TextInput
                    multiline
                    placeholder="Type a message..."
                    className="flex-1 py-2"
                />
                <TouchableOpacity>
                    <Entypo name="mic" size={20} color="gray" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <AntDesign name="send" size={20} color={"#2563EB"} />
            </TouchableOpacity>
        </View>
    );
}
export default MessageBox;
