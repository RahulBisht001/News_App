import React, { useEffect, useState } from 'react'
import {
    ActivityIndicator,
    Dimensions,
    Image, ScrollView,
    StyleSheet, Text, View
} from 'react-native'
import CategoryTextSlider from '../components/Home/CategoryTextSlider'
import { Ionicons } from '@expo/vector-icons'

import color from '../Shared/color'

import inshort from '../../assets/inshort.png'
import TopHeadlineSlider from '../components/Home/TopHeadlineSlider'
import HeadlineList from '../components/Home/HeadlineList'


import globalApi from '../services/globalApi'

const Home = () => {

    const [headlines, setHeadlines] = useState([])
    const [newsList, setNewsList] = useState([])

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getTopHeadlinesData()
        getNewsByCategory('latest')
    }, [])

    const getNewsByCategory = async (category) => {
        setLoading(true)
        const res = await globalApi.getByCategory(category)
        setNewsList(res.articles)
        setLoading(false)
    }

    const getTopHeadlinesData = async () => {

        //? # Another Way
        // const result = (await globalApi.getTopHeadlines).data
        setLoading(true)
        const result = (await globalApi.getTopHeadlines())
        setHeadlines(result.articles)
        setLoading(false)
    }

    return (
        <ScrollView
            style={{
                backgroundColor: '#fff'
            }}
        >
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Image
                    source={inshort}
                    style={styles.logo}
                />
                <Ionicons name="notifications-outline" size={24} color="black" />
            </View>

            {/* //?____  Different News Category List  _____  */}
            <CategoryTextSlider selectCategory={(category) => getNewsByCategory(category)} />

            {/* <ScrollView
                showsVerticalScrollIndicator={false}
            > */}
            {loading
                ? <ActivityIndicator
                    size={'large'}
                    color={color.primary}
                    style={{
                        marginTop: Dimensions.get('screen').height * 0.35
                    }}
                />
                : (
                    <>
                        {/* //?________   Top Headline Slider  _________  */}
                        <TopHeadlineSlider headlines={headlines} />

                        {/* //?_____  Vertical News Headline List  ______  */}
                        <HeadlineList newsList={newsList} />
                    </>
                )
            }
            {/* </ScrollView> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    appName: {
        fontSize: 25,
        fontFamily: 'Roboto',
        fontWeight: 700,
        color: color.primary,
    },
    logo: {
        width: 145,
        height: 40,
        resizeMode: 'contain',
    },
})

export default Home