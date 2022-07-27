import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState, } from 'react';
import circleStyle from '../circle-style';
import { Audio } from 'expo-av';
import * as Updates from 'expo-updates';
import Heart from './heart';

let array = [];
let count = 1;
let posx = [];
let posy = [];
let quantity = 2;
let score = 0;
let health = [<Heart />, <Heart />, <Heart />];

const wrongGuess = (x, sound) => {
    health.pop()
    x([...health])
    if (health.length === 0) {
        sound(require('../../assets/sound/game-over.mp3'))
        return setTimeout(() => Updates.reloadAsync(), 500)
    }
};

const gameOptions = (quantity) => {
    for (let i = 1; i <= quantity; i++) {
        let randomX = Math.floor(Math.random() * 150) * 2;
        let randomY = Math.floor(Math.random() * 250) * 2;
        array.push(i);
        posx.push(randomX);
        posy.push(randomY);
    }
};

export default function MemoryCircle() {
    const [memoryCirclesQuantity, setMemoryCirclesQuantity] = useState(array);

    const [life, setLife] = useState(health);

    useEffect(() => { memoryCircleRender }, [`${memoryCirclesQuantity}`]);

    const memoryCircleArray = [];

    const handlePressEvent = () => {
        ++count;
        let reverseCircles = [];
        let reverseX = [];
        let reverseY = [];
        while (memoryCirclesQuantity.length != 0) {
            reverseCircles.push(memoryCirclesQuantity.pop());
            reverseX.push(posx.pop());
            reverseY.push(posy.pop());
        }
        reverseCircles.pop();
        reverseX.pop();
        reverseY.pop();
        while (reverseCircles.length != 0) {
            memoryCirclesQuantity.push(reverseCircles.pop());
            posx.push(reverseX.pop());
            posy.push(reverseY.pop());
        }
        setMemoryCirclesQuantity([...memoryCirclesQuantity]);
    }

    const [text, setText] = useState(true);

    const memoryCircleRender = memoryCirclesQuantity.map((data, index) => {
        memoryCircleArray.push(
            <Memory
                disabled={text}
                key={index}
                text={text ? data : ''}
                number={data}
                onPress={handlePressEvent}
                x={posx[index]}
                y={posy[index]}
                index={index}
                life={setLife}

            />
        )
    });

    if (memoryCirclesQuantity.length == 0) {
        score++;
        gameOptions(quantity++);
        count = 1;
        setMemoryCirclesQuantity(array);
        setText(true);
        setTimeout(() => setText(false), 2500);

    };

    return (<>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5 }}>
            <Text
                style={{
                    color: 'white',
                    fontSize: 25,
                    fontWeight: 'bold'
                }}>Level: {score}</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                {life.map((data, index) => {
                    return <View
                        key={index}>{data}</View>
                })}
            </View>
        </View>{memoryCircleArray.map((data) => { return data })}</>)
};

function Memory(props) {
    const [sound, setSound] = useState();
    const soundEffects = {
        pressSound: {
            uri: require('../../assets/sound/click-sound.mp3')
        },
        wrongPressSound: {
            uri: require('../../assets/sound/fail.wav')
        }
    };

    async function SoundEffect(effect) {
        const { sound } = await Audio.Sound.createAsync(
            effect
        );
        sound.setVolumeAsync(1);
        setSound(sound);
        await sound.playAsync();

    }
    useEffect(() => {
        return sound
            ? () => {
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return (
        <TouchableOpacity disabled={props.text}
            style={[circleStyle.container, { left: props.x, top: props.y }]} activeOpacity={1}
            onPress={
                () => {

                    if (count === props.number) { SoundEffect(soundEffects.pressSound.uri), props.onPress(), array.pop() } else { SoundEffect(soundEffects.wrongPressSound.uri), wrongGuess(props.life, SoundEffect) }
                }}>
            <View>
                <Text style={circleStyle.text}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    );

};


