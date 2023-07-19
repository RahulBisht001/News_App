import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import {
    Image, Share, Text,
    TouchableOpacity, ScrollView, View
} from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

import * as Linking from 'expo-linking'
// import * as WebBrowser from 'expo-web-browser'

import color from '../Shared/color'

const ReadNews = () => {

    const news = useRoute().params.news
    const navigation = useNavigation()

    const shareNews = () => {
        Share.share({
            message: news.title + '\n Read More'
        })
    }

    const openUrlInApp = async (url) => {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        } else {
            console.log("Cannot open URL: " + url);
        }
    }

    useEffect(() => {
        // console.log(news)
    }, [])

    return (
        <ScrollView
            style={{
                backgroundColor: '#fff',
                flex: 1
            }}
            showsVerticalScrollIndicator={false}
        >
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginVertical: 10
                }}
            >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => shareNews()}>
                    <FontAwesome name="share" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <Image
                source={{ uri: news.urlToImage }}
                style={{
                    width: '100%',
                    height: 250,
                    borderRadius: 10
                }}
            />
            <Text
                style={{
                    marginTop: 10,
                    fontWeight: 800,
                    fontSize: 20
                }}
            >
                {news.title}
            </Text>
            <Text
                style={{
                    marginTop: 10,
                    color: color.primary,
                    fontSize: 16
                }}
            >
                {news.source.name}
            </Text>
            <Text
                style={{
                    marginTop: 10,
                    fontSize: 18,
                    color: color.gray,
                    lineHeight: 25
                }}
            >
                {news.description}
            </Text>

            <TouchableOpacity onPress={() => openUrlInApp(news.url)}>
                <Text
                    style={{
                        marginTop: 10,
                        color: color.primary,
                        fontSize: 16,
                        fontWeight: 'bold'
                    }}
                >
                    Read More
                </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default ReadNews