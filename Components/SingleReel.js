import React, { useRef, useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import Video from 'react-native-video';
import Ionic from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const SingleReel = ({ item, index, currentIndex }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const videoRef = useRef(null);

    const onBuffer = buffer => {
        console.log('buffring', buffer);
    };
    const onError = error => {
        console.log('error', error);
    };

    const [mute, setMute] = useState(false);

    const [like, setLike] = useState(item.isLike);
    const main = require("./pic.jpg");
    const likea = require("./like2.png");
    const comment = require("./comment2.png");
    const share = require("./share2.png");

    return (



        <View
            style={{
                width: windowWidth,
                height: windowHeight,
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => setMute(!mute)}
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                }}>
                <Video
                    videoRef={videoRef}
                    onBuffer={onBuffer}
                    onError={onError}
                    repeat={true}
                    resizeMode="cover"
                    paused={currentIndex == index ? false : true}
                    source={item.video}
                    muted={mute}
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                    }}
                />
            </TouchableOpacity>
            <Ionic
                name="volume-mute"
                style={{
                    fontSize: mute ? 20 : 0,
                    color: 'white',
                    position: 'absolute',
                    backgroundColor: 'rgba(52,52,52,0.6)',
                    borderRadius: 100,
                    padding: mute ? 20 : 0,
                }}
            />
            <View
                style={{
                    position: 'absolute',
                    width: windowWidth,
                    zIndex: 1,
                    bottom: 90, //edited
                    padding: 10,
                    // borderWidth: 5
                }}>
                <View style={{ height: 200, width: '100%', position: 'absolute', justifyContent: 'flex-end' }}>

                    <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
                        <View style={{ width: '40%', height: 50, justifyContent: 'space-evenly', flexDirection: 'row', alignContent: 'center', paddingTop: 9 }}>
                            <Image source={likea} style={{ height: 26, width: 30, }}></Image>
                            <Image source={comment} style={{ height: 30, width: 30, marginBottom: 15 }}></Image>
                            <Image source={share} style={{ height: 24, width: 30 }}></Image>

                        </View>
                        <View style={{ width: '20%', }}>
                            <Text style={{ fontSize: 30, alignItems: 'center' }}>...</Text>
                        </View>
                        <View style={{ width: '40%', height: 50, flexDirection: 'row', justifyContent: 'space-evenly', paddingLeft: 20, paddingTop: 10 }}>
                            <Image source={likea} style={{ height: 18, width: 20, }} /><Text style={{ fontSize: 13, textAlign: 'center', paddingTop: 4, color: 'white' }}>58.8K</Text>
                            <Image source={comment} style={{ height: 22, width: 20 }} /><Text style={{ fontSize: 13, textAlign: 'center', paddingTop: 4, color: 'white' }}>584</Text>
                        </View>
                    </View>
                </View>
                <View style={{}}>
                    <TouchableOpacity style={{ width: 150 }}>
                        <View
                            style={{ width: 100, flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: 100,
                                    backgroundColor: 'white',
                                    margin: 10,
                                }}>
                                <Image
                                    source={item.postProfile}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        resizeMode: 'cover',
                                        borderRadius: 100,
                                    }}
                                />
                            </View>
                            <Text style={{ color: 'white', fontSize: 16 }}>{item.title}</Text>
                        </View>




                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 14, marginHorizontal: 10 }}>
                        {item.description}
                    </Text>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <Ionic
                            name="ios-musical-note"
                            style={{ color: 'white', fontSize: 16 }}
                        />
                        {/* <Text style={{color: 'white'}}>Original Audio</Text> */}
                    </View>



                </View>

            </View>

        </View>

    );
};

export default SingleReel;
