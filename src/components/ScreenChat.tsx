import {View, Text, ScrollView, FlatList} from "react-native";
import AIBubble from "./MessageBubble";
import UserBubble from "./UserBubble";
import {messages} from "@/bases/constants/messages";
function ScreenChat() {
    return (
        <View className="w-full flex-1 my-2 overflow-y-scroll px-2">
            {
                <FlatList
                    data={messages}
                    renderItem={({item}) => {
                        if (item.role == "bot")
                            return <AIBubble content={item.content} />;
                        return <UserBubble content={item.content} />;
                    }}
                    contentContainerClassName="gap-2 py-4"
                />
            }
        </View>
    );
}
export default ScreenChat;
