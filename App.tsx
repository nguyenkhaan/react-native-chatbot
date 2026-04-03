import ChatBot from "@/screens/chat/page";
import "./global.css";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {KeyboardAvoidingView, Platform} from "react-native";
export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView className="px-4 flex-1 pt-2">
                <KeyboardAvoidingView
                    enabled
                    className="flex-1"
                    behavior={Platform.OS === "ios" ? "height" : "padding"}
                    keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
                >
                    <ChatBot />
                </KeyboardAvoidingView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
