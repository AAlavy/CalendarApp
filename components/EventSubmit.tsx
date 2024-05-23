import axios from "axios";
import { Button, ColorSchemeName, Pressable, Text } from "react-native";


interface EventProps {
    eventInvite: string;
    colorScheme: ColorSchemeName;
}

export default function EventSubmit(event: EventProps) {

    const onSubmit = async () => {
        await axios.post('http://10.0.2.2:5000/event', JSON.stringify({
            eventInvite: event.eventInvite
        }))
            .then((res: any) => {
                console.log(res.data)
            })
            .catch((err: any) => {
                console.log(err.data)
            })
    }

    return (
        <Pressable
            onPress={onSubmit}
            style={{
                top: '40%',
                backgroundColor: '#4EB100',
                marginLeft: 70,
                marginRight: 70,
                padding: 20,
                borderRadius: 30
            }}>
            <Text style={{
                textAlign: 'center',
                fontSize: 20
            }}>Add</Text>
        </Pressable>
    );
};