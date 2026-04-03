import ChatBot from "@/screens/chat/page";
import "./global.css";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView className="px-4 pt-2">
                <ChatBot />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
