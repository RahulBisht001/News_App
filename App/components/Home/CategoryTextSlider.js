import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native'
import color from '../../Shared/color'


const CategoryTextSlider = ({ selectCategory }) => {

    const [active, setActive] = useState(1)

    const onCategoryClick = (id) => {
        setActive(id)
    }

    const categoryList = [
        {
            id: 1,
            name: 'Latest'
        },
        {
            id: 2,
            name: 'World'
        },
        {
            id: 3,
            name: 'Business'
        },
        {
            id: 7,
            name: 'technology'
        },
        {
            id: 8,
            name: 'entertainment'
        },
        {
            id: 4,
            name: 'Sports'
        },
        {
            id: 5,
            name: 'Movie'
        },
        {
            id: 6,
            name: 'Life'
        },
    ]


    return (

        <FlatList
            data={categoryList}
            horizontal={true}
            style={{
                marginVertical: 2
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <TouchableOpacity
                    key={item.id}
                    onPress={() => {
                        onCategoryClick(item.id)
                        selectCategory(item.name)
                    }}
                >
                    <Text
                        style={
                            item.id === active ? styles.selectText : styles.unselectText
                        }
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )}
        />
    )
}

const styles = StyleSheet.create({

    unselectText: {
        marginRight: 10,
        fontSize: 18,
        fontWeight: 800,
        color: color.gray
    },
    selectText: {
        marginRight: 10,
        fontSize: 18,
        fontWeight: 600,
        color: color.primary
    }
})


export default CategoryTextSlider