import {
    View, Text, StyleSheet, TouchableOpacity,
    Image, SafeAreaView, ScrollView, FlatList, Button
} from 'react-native'
import React, { useState } from 'react'

const Wishlist_1 = () => {
    // dữ liệu mẫu testing
    const USERS = [{
        "id": 1,
        "name": "Sonsing",
        "email": "csturte0@barnesandnoble.com",
        "photo": "http://dummyimage.com/189x100.png/ff4444/ffffff",
        "postion": "Research Associate",
        "rice": "$7.30"
    }, {
        "id": 2,
        "name": "Ronstring",
        "email": "lfeatherstone1@com.com",
        "photo": "http://dummyimage.com/189x100.png/ff4444/ffffff",
        "postion": "Administrative Assistant III",
        "rice": "$9.17"
    }, {
        "id": 3,
        "name": "Tempsoft",
        "email": "qpenright2@samsung.com",
        "photo": "http://dummyimage.com/238x100.png/5fa2dd/ffffff",
        "postion": "Senior Sales Associate",
        "rice": "$5.74"
    }, {
        "id": 4,
        "name": "Zontrax",
        "email": "astirman3@ox.ac.uk",
        "photo": "http://dummyimage.com/250x100.png/ff4444/ffffff",
        "postion": "Librarian",
        "rice": "$0.34"
    }, {
        "id": 5,
        "name": "Span",
        "email": "dsterley4@wp.com",
        "photo": "http://dummyimage.com/199x100.png/5fa2dd/ffffff",
        "postion": "Product Engineer",
        "rice": "$8.99"
    }, {
        "id": 6,
        "name": "Fix San",
        "email": "nablott5@creativecommons.org",
        "photo": "http://dummyimage.com/240x100.png/dddddd/000000",
        "postion": "Associate Professor",
        "rice": "$2.46"
    }, {
        "id": 7,
        "name": "Alpha",
        "email": "ppaeckmeyer6@ehow.com",
        "photo": "http://dummyimage.com/240x100.png/ff4444/ffffff",
        "postion": "Social Worker",
        "rice": "$7.22"
    }, {
        "id": 8,
        "name": "Tres-Zap",
        "email": "bdoddemeade7@usa.gov",
        "photo": "http://dummyimage.com/153x100.png/5fa2dd/ffffff",
        "postion": "Biostatistician II",
        "rice": "$3.04"
    }, {
        "id": 9,
        "name": "Subin",
        "email": "cducket8@ameblo.jp",
        "photo": "http://dummyimage.com/176x100.png/dddddd/000000",
        "postion": "Research Nurse",
        "rice": "$7.73"
    }, {
        "id": 10,
        "name": "Sonsing",
        "email": "gmalster9@macromedia.com",
        "photo": "http://dummyimage.com/230x100.png/cc0000/ffffff",
        "postion": "Tax Accountant",
        "rice": "$3.27"
    }, {
        "id": 11,
        "name": "Tres-Zap",
        "email": "sandressa@qq.com",
        "photo": "http://dummyimage.com/246x100.png/5fa2dd/ffffff",
        "postion": "Human Resources Manager",
        "rice": "$2.12"
    }, {
        "id": 12,
        "name": "Prodder",
        "email": "tcamoisb@scientificamerican.com",
        "photo": "http://dummyimage.com/226x100.png/cc0000/ffffff",
        "postion": "Human Resources Assistant II",
        "rice": "$7.07"
    }, {
        "id": 13,
        "name": "Daltfresh",
        "email": "jtrowlerc@msu.edu",
        "photo": "http://dummyimage.com/216x100.png/cc0000/ffffff",
        "postion": "Dental Hygienist",
        "rice": "$0.71"
    }, {
        "id": 14,
        "name": "Stim",
        "email": "deasund@guardian.co.uk",
        "photo": "http://dummyimage.com/136x100.png/dddddd/000000",
        "postion": "VP Sales",
        "rice": "$2.81"
    }, {
        "id": 15,
        "name": "Redhold",
        "email": "tleape@washington.edu",
        "photo": "http://dummyimage.com/233x100.png/ff4444/ffffff",
        "postion": "Compensation Analyst",
        "rice": "$9.50"
    }]
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <View style={styles.avt_container}>
                <Image source={{ uri: item.photo }} />
                <TouchableOpacity style={styles.btn_delete_wish}>
                    <Image source={require('../../assets/image/ic_delete_wish.png')} />
                </TouchableOpacity>
            </View>

            <View style={styles.txt_container_item}>
                <Text style={styles.txt_item}>{item.postion}</Text>
                <Text style={styles.txt_itemM}>{item.rice}</Text>
                <View style={styles.horizontal}>
                    <View>
                        <TouchableOpacity style={styles.btn_or}>
                            <Text style={styles.btn_text_or}>Pink</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btn_or}>
                            <Text style={styles.btn_text_or}>M</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, marginHorizontal: '30%' }}>
                        <TouchableOpacity>
                            <Image source={require('../../assets/image/ic_Add_wish.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
    return (
        <View style={styles.container}>
            <Text style={styles.txt_tilte}>Wishlist</Text>
            <View style={[styles.horizontal_seeall]}>
                <Text style={[styles.txt_newItems, styles.flex]}>Recently viewed</Text>
                <TouchableOpacity style={{ marginStart: 10, marginEnd: 5, shadowOpacity: 40, width: '10%' }}>
                    <Image source={require('../../assets/image/ic_seemess.png')}></Image>
                </TouchableOpacity>
            </View>
            <SafeAreaView style={styles.scrollView}>
                <ScrollView
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <TouchableOpacity style={[styles.scv_btn, styles.scv_imgContainer]}><Image style={styles.scv_img} source={require('../../assets/image/img_Rv5.png')} /></TouchableOpacity>
                    <TouchableOpacity style={[styles.scv_btn, styles.scv_imgContainer]}><Image style={styles.scv_img} source={require('../../assets/image/img_Rv1.png')} /></TouchableOpacity>
                    <TouchableOpacity style={[styles.scv_btn, styles.scv_imgContainer]}><Image style={styles.scv_img} source={require('../../assets/image/img_Rv2.png')} /></TouchableOpacity>
                    <TouchableOpacity style={[styles.scv_btn, styles.scv_imgContainer]}><Image style={styles.scv_img} source={require('../../assets/image/img_Rv3.png')} /></TouchableOpacity>
                    <TouchableOpacity style={[styles.scv_btn, styles.scv_imgContainer]}><Image style={styles.scv_img} source={require('../../assets/image/img_Rv4.png')} /></TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
            <View>
                <FlatList
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={USERS}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}

export default Wishlist_1
const styles = StyleSheet.create({
    // container
    container: {
        paddingStart: '4%',
        paddingEnd: '3%',
    },
    // custom tilte
    txt_tilte: {
        fontSize: 28,
        lineHeight: 60,
        fontFamily: 'Raleway-BoldItalic',
        color: 'black',
    },
    // cloumn, row
    vertical: {
        flexDirection: 'column',
    },
    horizontal: {
        flexDirection: 'row',
    },
    // flex
    flex: {
        flex: 1,
    },
    // custom see all
    txt_seeall: {
        fontStyle: 'italic',
        fontWeight: '500',
        fontSize: 16,
        paddingTop: '1%',
        color: 'black'
    },
    horizontal_seeall: {
        flexDirection: 'row',
    },
    txt_newItems: {
        fontSize: 21,
        color: 'black',
        fontFamily:'Raleway-Bold',
    },
    // custom scrollView
    scrollView: {
        paddingEnd: '3%',
        marginTop: '4%',
        paddingBottom:'2%'
    },
    text: {
        fontSize: 42,
    },
    scv_btn: {
        marginEnd: 13,
    },
    scv_img: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    scv_imgContainer: {
        backgroundColor: 'F8F8F8',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        paddingStart: '1%',
        shadowOpacity: 0.2,
        shadowOffset: 10,
    },
    // custom New Items
    avt_container: {
        borderRadius: 5,
        backgroundColor: 'gray',
        width: 121.18,
        height: 101.64,
        marginEnd: 10,
    },
    item: {
        flexDirection: 'row',
        paddingBottom: 10,
        paddingTop: 10,
    },
    txt_item: {
        fontSize: 10,
        width: 100,
        height: 30,
        marginBottom: 10,
        color: 'black',
    },
    txt_itemM: {
        color: 'black',
        fontWeight: 'bold'
    },
    txt_container_item: {
        width: '80%',
        height: 50,

    },
    // custom whishlist
    btn_or: {
        backgroundColor: '#E5EBFC',
        height: 25,
        width: 50,
        borderRadius: 5,
        justifyContent: 'center',
        marginTop: 10,
        marginEnd: 5,
    },
    btn_text_or: {
        color: 'black',
        textAlign: 'center',
    },
    btn_delete_wish:{
        marginVertical:'48%', 
        marginHorizontal:'8%',
    }

})