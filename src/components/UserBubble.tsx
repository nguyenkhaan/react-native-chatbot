import {View, Text} from "react-native";

function UserBubble({content}: {content: string}) {
    return (
        <View className="w-full flex items-end p-1">
            <View className="self-end max-w-[80%] p-4 rounded-b-3xl rounded-tl-3xl bg-gray-200">
                <Text>{content}</Text>
            </View>
        </View>
    );
}

export default UserBubble;
