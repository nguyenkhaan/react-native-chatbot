//https://oblador.github.io/react-native-vector-icons/
import MessageBox from "@/components/MessageBox";
import Navbar from "@/components/Navbar";
import ScreenChat from "@/components/ScreenChat";
import {View} from "react-native";
export default function ChatBot() {
    return (
        <View className="flex-1">
            <Navbar />
            <ScreenChat />
            <MessageBox />
        </View>
    );
}
