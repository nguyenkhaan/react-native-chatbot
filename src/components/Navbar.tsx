import {View, Text, Image, TouchableOpacity} from "react-native";
import {Ionicons, Entypo} from "@expo/vector-icons";
function Navbar() {
    return (
        <View className="flex flex-row items-center justify-between w-full">
            <View className="flex flex-row gap-4 items-center justify-between">
                <TouchableOpacity className="w-10 h-10 border flex items-center justify-center rounded-full border-gray-300">
                    <Ionicons name="arrow-back" size={24} color={"gray"} />
                </TouchableOpacity>
                <View className="flex flex-row gap-2 items-center">
                    <Image
                        className="w-10 object-contain rounded-full h-10"
                        source={{
                            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd4q4agOPthyd-v6KvFHcqF_Xf8ilxoHP5A&s",
                        }}
                    />
                    <View>
                        <Text className="text-base font-semibold">
                            Cloud Chatbot
                        </Text>
                        <Text className="text-sm text-green-600 font-medium">
                            Always active
                        </Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity className="w-10 h-10 border flex items-center justify-center rounded-full border-gray-300">
                <Entypo size={20} color={"gray"} name="dots-three-horizontal" />
            </TouchableOpacity>
        </View>
    );
}
export default Navbar;
