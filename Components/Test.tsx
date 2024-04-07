import { } from 'react';
import {
    Text,
    View,
    StyleSheet,
    useColorScheme,
    Image,
    TouchableOpacity
} from 'react-native'

const main = require("./pic.jpg");
const like = require("./like2.png");
const comment = require("./comment2.png");
const share = require("./share2.png");


function Test(): JSX.Element {

    const isDarkMode = useColorScheme() === 'dark';
    return (


        <View style={{ backgroundColor: 'black', height: "100%", width: '100%', alignItems: 'flex-end', flexDirection: 'row' }}>
            
            <Image source={main} style={{ height: '100%', width: '100%', }} />

            <View style={{ height: 200, width: '100%', position: 'absolute', justifyContent: 'flex-end', paddingLeft: 15,marginBottom:10 }}>

                <View style={{ width: "100%", height: 100, }}>

                    <View style={{ width: '70%', height: 50, flexDirection: 'row' }}>
                        <View style={{ width: 50, height: "100%", padding: 5, }}>
                            <Image source={main} style={{ height: '100%', width: "100%", borderRadius: 40 }} />
                        </View>
                        <View style={{ width: '90%', flexDirection: 'column' }}>
                            <View style={{ height: '50%', width: '70%', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <Text style={{ color: 'white' }}>libbycrishtian</Text>
                                <Text style={{ color: 'white' }}>*Follow</Text>
                            </View>
                            <View style={{ height: "50%", paddingLeft: 10 }}>
                                <Text style={{ color: 'white' }}>Paid Partnership with Gymshark</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ width: "70%", marginTop: 5 }}>
                        <Text style={{ color: 'white' }}>Enjoying the fall weather and getting ready with the lates workout collection from...</Text>
                    </View>
                </View>


                <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
                    <View style={{ width: '40%', height: 50, justifyContent: 'space-evenly', flexDirection: 'row', alignContent: 'center', paddingTop: 9}}>
                        <Image source={like} style={{ height: 26, width: 30, }}></Image>
                        <Image source={comment} style={{ height: 30, width: 30, marginBottom: 15 }}></Image>
                        <Image source={share} style={{ height: 24, width: 30 }}></Image>

                    </View>
                    <View style={{ width: '20%',}}>
                        <Text style={{ fontSize: 30 ,alignItems:'center'}}>...</Text>
                    </View>
                    <View style={{ width: '40%', height: 50, flexDirection: 'row', justifyContent: 'space-evenly', paddingLeft: 20, paddingTop: 10 }}>
                        <Image source={like} style={{ height: 18, width: 20, }} /><Text style={{ fontSize: 13, textAlign: 'center', paddingTop: 4, color: 'white' }}>58.8K</Text>
                        <Image source={comment} style={{ height: 22, width: 20 }} /><Text style={{ fontSize: 13, textAlign: 'center', paddingTop: 4, color: 'white' }}>584</Text>
                    </View>
                </View>

            </View>



        </View >
    )
}


const stylesa = StyleSheet.create({


})


export default Test;