import React from 'react'
import {
    FlatList, TouchableOpacity, View,
    Image, Dimensions, Text
} from 'react-native'


import color from '../../Shared/color'
import { useNavigation } from '@react-navigation/native'



const TopHeadlineSlider = ({ headlines }) => {

    const navigation = useNavigation()

    return (
        <View style={{ marginTop: 18 }}>
            <FlatList
                data={headlines}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, idx }) => (
                    <TouchableOpacity
                        key={idx}
                        style={{
                            width: Dimensions.get('screen').width * 0.8,
                        }}
                        onPress={() => navigation.navigate('read-news', { news: item })}
                    >
                        <Image
                            source={{ uri: item.urlToImage }}
                            style={{
                                height: Dimensions.get('screen').width * 0.80,
                                marginBottom: 10,
                                borderRadius: 10,
                                marginRight: 10
                            }}
                        />
                        <Text
                            numberOfLines={2}
                            style={{
                                fontWeight: 600,
                                fontSize: 20,
                                paddingHorizontal: 4
                            }}
                        >
                            {item.title}
                        </Text>

                        <Text style={{
                            color: color.primary,
                            paddingHorizontal: 4
                        }}>
                            {item?.source.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default TopHeadlineSlider