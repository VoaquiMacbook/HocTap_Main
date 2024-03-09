import {
    View, Text, StyleSheet, TouchableOpacity,
    Image, SafeAreaView, ScrollView, FlatList, Button
} from 'react-native'
import React, { useState } from 'react'

const Cart_1 = () => {
    // dữ liệu mẫu testing
    const USERS = [{
        "id": 1,
        "name": "Sonsing",
        "email": "csturte0@barnesandnoble.com",
        "photo": "https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/428282041_1635981393809410_2758062445062834597_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=yQur5_SYAgUAX9Q28WV&_nc_oc=AQm5U5wTsjP4A9KcJJnEDWIkvtH8rJ8yBIdM9O4Mfc2YrkD43zaKRLjXn3pHaKjnFRQ&_nc_ht=scontent.fsgn2-10.fna&oh=00_AfASLC16HndgoXZGdPTE95CEedRtuWIrIiMhSCY79oD_CQ&oe=65D6CD4E",
        "postion": "Research Associate",
        "rice": "$7.30"
    }, {
        "id": 2,  
        "name": "Ronstring",
        "email": "lfeatherstone1@com.com",
        "photo": "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/428457185_1635981313809418_3026649841359181726_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=pqMSR6HmjOcAX8xgUre&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfB6pSp5AXVICQLO7rp24UZseuqvL4zfrX7fXfZGd-_gqg&oe=65D6C2E5",
        "postion": "Administrative Assistant III",
        "rice": "$9.17"
    }, {
        "id": 3,
        "name": "Tempsoft",
        "email": "qpenright2@samsung.com",
        "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/423538209_1622755318465351_1230407908410425052_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=aQit8qaysnsAX_o9W6T&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAoIKG07gguymuZeQaXvteGTrls7eKO8g9GGr1Yg7ZC_w&oe=65BB9AC8",
        "postion": "Senior Sales Associate",
        "rice": "$5.74"
    }]
    // dữ liệu mẫu testing
    const USERSWish = [{
        "id": 1,
        "name": "Sonsing",
        "email": "csturte0@barnesandnoble.com",
        "photo":"https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/423480138_1622771141797102_8678712648772560882_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=B7-TEvqJLDoAX8uqEXU&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfC1YpvPxJk90zvBYmL8TnxCxoYzNLZGVMt43oW0Am_tMQ&oe=65BB1C20",
        "postion": "Research Associate",
        "rice": "$7.30"
    }, {
        "id": 2,
        "name": "Ronstring",
        "email": "lfeatherstone1@com.com",
        "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/423557520_1622755321798684_1431897259310686444_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=LFO9cS_grUMAX-dvb7-&_nc_oc=AQkoKT9RyDjMnbUhlSrx55dWYheWUq7pFOVHvQqovGI_tIPHtZ7L17CQYPHE5Xs8QM8&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDKLwm5xZWFfJ4TTIAbrL3MC2pChCz592SGAS6iRQgWHQ&oe=65BB2995",
        "postion": "Administrative Assistant III",
        "rice": "$9.17"
    },{
        "id": 3,
        "name": "Zontrax",
        "email": "astirman3@ox.ac.uk",
        "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/423515722_1622755395132010_8741546126443131823_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=FgWHg8ohtjEAX_PAVWK&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDXmSqpIQbMm1rqfkhiP1O8f11HIeHLyoK1F8fxjCi9aw&oe=65BA491B",
        "postion": "Librarian",
        "rice": "$0.34"
    }, {
        "id": 4,
        "name": "Span",
        "email": "dsterley4@wp.com",
        "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/423584529_1622755408465342_7305113225419697574_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=EbgGg47ouDEAX9ojl2Y&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfC6_pRObxWAwp_MFCd0XdhepgGVBxi_bCoYAKECubwGuQ&oe=65BB58C5",
        "postion": "Product Engineer",
        "rice": "$8.99"
    }]
    const renderItemWish = ({ item }) => (
        <View style={styles.item}>
            <View >
                <Image
                    style={styles.avt_container}
                    source={{ uri: item.photo }} />
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
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <View >
                <Image
                    style={styles.avt_container}
                    source={{ uri: item.photo }} />
                <TouchableOpacity style={styles.btn_delete_wish}>
                    <Image source={require('../../assets/image/ic_delete_wish.png')} />
                </TouchableOpacity>
            </View>

            <View style={styles.txt_container_item}>
                <Text style={styles.txt_item}>{item.postion}</Text>
                <View style={styles.horizontal}>
                    <View>
                        <Text style={styles.btn_text_or}>Pink, </Text>
                    </View>
                    <View>
                        <Text style={styles.btn_text_or}>Size M</Text>
                    </View>
                </View>

                <View style={styles.horizontal}>
                    <Text style={styles.txt_itemM}>{item.rice}</Text>
                    <View style={{ marginHorizontal: '28%' }}>
                        <View style={styles.horizontal}>
                            <TouchableOpacity>
                                <Image source={require('../../assets/image/ic_down.png')} />
                            </TouchableOpacity>
                            <Image style={{ width: 37, height: 30, marginEnd: 5, marginStart: 5 }} source={require('../../assets/image/img_number1.png')} />
                            <TouchableOpacity>
                                <Image source={require('../../assets/image/ic_up.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );

    return (
        <View>
        <View style={styles.container}>
            <View style={[styles.txt_tilte_container]}>
                <Text style={styles.txt_tilte}>Cart</Text>
                <TouchableOpacity style={styles.btn_number}>
                    <Image source={require('../../assets/image/img_number.png')}></Image>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.btn_container_thongbao}>
                <Text style={styles.txt_thongbao}>Shipping Address</Text>
                <View style={styles.horizontal}>
                    <Text style={[styles.txt_thongbaoS, styles.flex]}>
                    26, Duong So 2, Thao Dien Ward, An Phu, District 2, Ho Chi Minh city</Text>
                    <TouchableOpacity style={styles.btn_seeall}>
                        <Image style={styles.imgSeeall} source={require('../../assets/image/ic_edit.png')}></Image>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
            <ScrollView>


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
                <Text style={styles.txt_tilte}>From Your Wishlist</Text>
                <View>
                    <FlatList
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={USERSWish}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderItemWish}
                    />
                </View>
            </ScrollView>
           
        </View>
        <View style={[styles.horizontal_Total]}>
                <Text style={[styles.txt_Total, styles.flex]}>Total $34.00</Text>
                <TouchableOpacity style={styles.btn_Total}>
                    <Text style={{ color: 'white', marginHorizontal: '25%' }}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Cart_1
const styles = StyleSheet.create({
    btn_seeall:{
       alignSelf:'center',
       marginEnd:'4%',
    },
    imgSeeall:{
       borderRadius:50,
       width:24,
       height:24,
    },
    // custom Total
    horizontal_Total: {
        flexDirection: 'row',
        backgroundColor:'black',
        height: '20%',
        backgroundColor: '#F5F5F5',
        padding: 10,
        position: 'absolute',
        width: '100%',
        marginVertical:'170%'
    },
    txt_Total: {
        fontSize: 18,
        color: 'black',
        fontFamily: 'Raleway-Bold',
    },
    btn_Total: {
        marginStart: 10,
        marginEnd: 5,
        shadowOpacity: 40,
        width: 127,
        height: 40,
        backgroundColor: '#004CFF',
        borderRadius: 11,
        justifyContent: 'center',
    },
    // container
    container: {
        paddingStart: '4%',
        paddingEnd: '3%',
        width: '100%',
        height: '100%',
    },
    // custom tilte
    txt_tilte: {
        fontSize: 26,
        fontWeight: '700',
        color: 'black',
        marginEnd: '2%',
    },
    txt_tilte_container: {
        marginTop: '5%',
        flexDirection: 'row',
        marginBottom: '3%',
        height: 30,
    },
    btn_number: {
        marginTop: 3,
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
        fontFamily: 'Raleway-Bold',
    },
    // custom scrollView
    scrollView: {
        paddingEnd: '3%',
        marginTop: '4%',
        paddingBottom: '2%'
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
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        paddingStart: '1%',
        shadowColor: 'green',  // Màu xanh lá của đổ bóng
        shadowOpacity: 10,
        shadowRadius: 10,
        elevation: 10,
    },
    // custom New Items
    avt_container: {
        borderRadius: 5,
        backgroundColor: 'gray',
        width: 120,
        height: 110,
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
        height: 33,
        color: 'black',
    },
    txt_itemM: {
        color: 'black',
        fontFamily: 'Raleway-Bold',
        fontSize: 16,

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
        marginTop: 10,
        marginEnd: 5,
    },

    btn_or_cart: {
        height: 25,
        width: 50,
        borderRadius: 5,
        justifyContent: 'center',
        marginTop: 10,

    },

    btn_text_or: {
        color: 'black',
        textAlign: 'center',
        height: 40,
    },
    btn_delete_wish: {
        position: 'absolute',
        marginVertical: '48%',
        marginHorizontal: '8%',
    },
    // custom thongBao
    btn_container_thongbao: {
        width: '100%',
        height: 70,
        backgroundColor: '#F4F4F4',
        borderRadius: 10,
        paddingStart: 14,
        paddingTop: 10,
        marginBottom:10,
        shadowOpacity: 5,
    },
    txt_thongbao: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'black',
    },
    txt_thongbaoS: {
        fontSize: 10,
        paddingEnd: '20%',
        paddingTop: '1%',
        color: 'black',
         
    },

})