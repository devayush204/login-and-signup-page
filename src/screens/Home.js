import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'


const Home = () => {
    const img = require("../assets/img.png")
    const logo = require("../assets/logo.png")
    return (
        <View className="flex ">
            <View>
                <View className="flex items-center  z-1">
                    <Image className="scale-110  absolute" source={img} />
                </View>

                <View className=" flex items-center mt-[440px]">
                    <View className="flex items-center flex-row gap-3">
                        <Image className="w-[80px] h-[80px] rounded-full" source={logo} />
                        <View className='flex '>
                            <Text className="text-black text-[24px] font-semibold">
                                codewithhim_
                            </Text>
                            <Text className="text-black text-[18px] font-semibold">
                                (follow for more)
                            </Text>
                        </View>
                    </View>

                    <View className="flex w-full px-10 gap-6 mt-4">
                        <TouchableOpacity className='bg-black w-full py-3 rounded-3xl'>
                            <Text className="text-white text-[23px] text-center font-semibold">Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='bg-white w-full py-3 rounded-3xl border-[2px] border-black'>
                            <Text className="text-black text-[23px] text-center font-semibold">Register</Text>
                        </TouchableOpacity>
                    </View>

                    <View className=" ml-6 mt-3">
                        <Text className="text-center text-[17px]">
                            Continue as guest
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Home