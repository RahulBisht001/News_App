import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import color from '../../Shared/color'
import { useNavigation } from '@react-navigation/native'

const HeadlineList = ({ newsList }) => {

    const navigation = useNavigation()

    return (
        <View style={{
            marginTop: 20
        }}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={newsList}
                renderItem={({ item }) => (
                    <>
                        <View style={{
                            height: 1,
                            backgroundColor: color.lightGray,
                            marginTop: 10,
                        }}>
                        </View>
                        <TouchableOpacity
                            style={{
                                marginTop: 10,
                                display: 'flex',
                                flexDirection: 'row'
                            }}
                            onPress={() => navigation.navigate('read-news', { news: item })}
                        >
                            <Image
                                source={{ uri: item.urlToImage }}
                                style={{
                                    width: 120,
                                    height: 80,
                                    borderRadius: 5,
                                }}
                            />
                            <View
                                style={{
                                    marginLeft: 10,
                                }}
                            >
                                <Text
                                    numberOfLines={3}
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 500,
                                        flexWrap: 'wrap',
                                    }}
                                >
                                    {item.title}
                                </Text>
                                <Text
                                    style={{ color: color.primary }}
                                >
                                    {item?.source?.name}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </>
                )}
            />
        </View>
    )
}

export default HeadlineList