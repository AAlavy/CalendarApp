import { useState } from "react";
import { ColorSchemeName, TextInput, View } from "react-native";

interface EventProps{
    eventInvite : string;
    setEventInvite: (text : string) => void;
    colorScheme: ColorSchemeName;
}

export default function EventInput(event : EventProps) {

    return (
        <View style={{
            top: '40%',
            margin: 12,
            borderRadius: 20,
            backgroundColor: event.colorScheme === 'dark' ? '#5A5A5A' : '#E0E0E0'
        }}>
            <TextInput
                editable
                multiline
                numberOfLines={10}
                onChangeText={text => event.setEventInvite(text)}
                value={event.eventInvite}
                placeholder="Paste invite"
                style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 20
                }}
            />
        </View>
    );
}