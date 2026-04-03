import {View, Text, Image} from "react-native";
function AIBubble({content}: {content: string}) {
    return (
        <View className="w-full flex justify-items-end">
            <View className="flex flex-row items-start gap-2">
                <Image
                    className="w-8 h-8 rounded-full object-contain"
                    source={{
                        uri: "https://static.vecteezy.com/system/resources/previews/021/059/825/non_2x/chatgpt-logo-chat-gpt-icon-on-green-background-free-vector.jpg",
                    }}
                />
                <View className="self-start max-w-[80%] p-4 rounded-b-3xl rounded-tr-3xl bg-blue-200">
                    <Text className="w-fit inline">{content}</Text>
                </View>
            </View>
        </View>
    );
}

export default AIBubble;
