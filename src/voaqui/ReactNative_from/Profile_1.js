import {
    View, Text,
    StyleSheet, Image,
    TouchableOpacity, ScrollView,
    SafeAreaView, FlatList
} from 'react-native'
import React from 'react'
const Profile_1 = () => {
    // dữ liệu mẫu testing
    const USERS = [{
        "id": 1,
        "name": "Sonsing",
        "email": "csturte0@barnesandnoble.com",
        "photo": "https://www.figma.com/file/O4xnaTyzmAPJPPvmDjxs39/Ecommerce-Mobile-App-UI-kit-(Community)?type=design&node-id=465-18192&mode=design&t=5snV8tQe8munG4Rv-4",
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
            <View >
                <Image
                    style={styles.avt_container}
                    source={{ uri: item.photo }}/>
            </View>
            <View style={styles.txt_container_item}>
                <Text style={styles.txt_itemM} >{item.name}</Text>
                <Text style={styles.txt_item}>{item.postion}</Text>
            </View>

            <Text style={styles.txt_itemM}>{item.rice}</Text>


        </View>
    );
    return (
        <View style={styles.container}>
            <View style={styles.vertical}>
                <View style={[styles.horizontal]}>
                    <TouchableOpacity style={[styles.img_avt, styles.btn_avt]}>
                        <Image style={styles.img_avt} source={require('../../assets/image/img_avt.png')}></Image>
                    </TouchableOpacity>
                    <View style={styles.flex}>
                        <TouchableOpacity style={styles.btn_container}>
                            <Text style={styles.txt_myActivity}>My Activity</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.horizontal]}>
                        <View>
                            <TouchableOpacity style={styles.btn_icon}>
                                <Image style={styles.cs_icon} source={require('../../assets/image/ic_vouchers.png')}></Image>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.btn_icon}>
                                <Image style={styles.cs_icon_mess} source={require('../../assets/image/ic_mess.png')}></Image>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.btn_icon}>
                                <Image style={styles.cs_icon_setting} source={require('../../assets/image/ic_setting.png')}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.txt_tilte}>Hello, Romina!</Text>
                    <TouchableOpacity style={styles.btn_container_thongbao}>
                        <Text style={styles.txt_thongbao}>Announcement</Text>
                        <View style={styles.horizontal}>
                            <Text style={[styles.txt_thongbaoS, styles.flex]}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit luctus libero ac vulputate.</Text>
                            <TouchableOpacity style={{ marginEnd: '3%' }}>
                                <Image source={require('../../assets/image/ic_seemess.png')}></Image>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.txt_tilte_rv}>Recently viewed</Text>
                </View>

                <SafeAreaView style={styles.container}>
                    <ScrollView
                        horizontal={true}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        style={styles.scrollView}>
                        <TouchableOpacity style={[styles.scv_btn, styles.scv_imgContainer]}><Image style={styles.scv_img} source={require('../../assets/image/img_Rv5.png')} /></TouchableOpacity>
                        <TouchableOpacity style={[styles.scv_btn, styles.scv_imgContainer]}><Image style={styles.scv_img} source={require('../../assets/image/img_Rv1.png')} /></TouchableOpacity>
                        <TouchableOpacity style={[styles.scv_btn, styles.scv_imgContainer]}><Image style={styles.scv_img} source={require('../../assets/image/img_Rv2.png')} /></TouchableOpacity>
                        <TouchableOpacity style={[styles.scv_btn, styles.scv_imgContainer]}><Image style={styles.scv_img} source={require('../../assets/image/img_Rv3.png')} /></TouchableOpacity>
                        <TouchableOpacity style={[styles.scv_btn, styles.scv_imgContainer]}><Image style={styles.scv_img} source={require('../../assets/image/img_Rv4.png')} /></TouchableOpacity>
                    </ScrollView>
                </SafeAreaView>
                <Text style={styles.txt_or}>My Orders</Text>
                <View style={[styles.horizontal]}>
                    <View style={{ width: '25%' }}>
                        <TouchableOpacity style={styles.btn_or}>
                            <Text style={styles.btn_text_or}>To Pay</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.flex}>
                        <TouchableOpacity style={styles.btn_or}>
                            <Text style={styles.btn_text_or}>To Recieve</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.flex}>
                        <TouchableOpacity style={styles.btn_or}>
                            <Text style={styles.btn_text_or}>To Review</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.horizontal_seeall]}>
                    <Text style={[styles.txt_newItems, styles.flex]}>New Items</Text>
                    <Text style={styles.txt_seeall}>See All</Text>
                    <TouchableOpacity style={{ marginStart: 10, marginEnd:5, shadowOpacity:40, width:'10%'}}>
                        <Image source={require('../../assets/image/ic_seemess.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View>
                    <FlatList
                        horizontal={true}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={USERS}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderItem}
                    />
                </View>

            </View>

        </View>
    )
}

export default Profile_1
const styles = StyleSheet.create({
    // container
    container: {
        paddingStart: '3%',
        paddingEnd: '3%',
        marginTop:'5%'
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
    // custom avt
    img_avt: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginEnd: '3%',
        paddingStart: '1.4%',
        shadowOpacity: 20,
        shadowRadius:10,
    },
    btn_avt: {
        backgroundColor: 'white',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
    },
    // custom button
    btn_container: {
        backgroundColor: '#004CFF',
        width: '65%',
        height: 33,
        borderRadius: 20,
        justifyContent: 'center',
        marginVertical: '6%',
    },
    txt_myActivity: {
        color: 'white',
        textAlign: 'center',
    },
    // custom icon
    btn_icon: {
        backgroundColor: '#F4F4F4',
        width: 38,
        height: 38,
        borderRadius: 20,
        marginStart: 10,
        justifyContent: 'center',
        marginVertical: '16%',
        shadowOpacity: 10,
        shadowRadius: 10,
    },
    cs_icon: {
        width: 18,
        height: 18,
        marginStart: '25%'

    },
    cs_icon_mess: {
        width: 15,
        height: 10,
        marginStart: '25%'
    },
    cs_icon_setting: {
        width: 35,
        height: 35,
        marginStart: '10%'
    },
    // custom tilte
    txt_tilte: {
        fontSize: 32,
        lineHeight: 80,
        fontWeight: '700',
        fontFamily: 'raleway',
        color:'#202020',
    },
    // custom thongBao
    btn_container_thongbao: {
        width: '100%',
        height: 70,
        backgroundColor: '#F4F4F4',
        borderRadius: 10,
        paddingStart: 14,
        paddingTop: 10,
        shadowOpacity:5,
    },
    txt_thongbao: {
        fontWeight: 'bold',
        fontSize: 14,
        color:'black',
    },
    txt_thongbaoS: {
        fontSize: 10,
        paddingEnd: '10%',
        paddingTop: '1%',
        color:'black',
    },
    // custom Recently viewed
    txt_tilte_rv: {
        fontSize: 21,
        lineHeight: 60,
        fontWeight: '700',
        fontFamily: 'raleway',
        color:'black',
    },
    // custom scrollView
    scrollView: {

    },
    text: {
        fontSize: 42,
    },
    scv_btn: {
        marginEnd: 10,
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
    // custom MyOrder
    txt_or: {
        fontWeight: 'bold',
        fontSize: 20, marginTop: '5%',
        color:'black',
    },
    btn_or: {
        backgroundColor: '#E5EBFC',
        height: 35,
        borderRadius: 20,
        justifyContent: 'center',
        marginVertical: '4%',
        marginEnd: 15,
        marginTop: 10,
    },
    btn_text_or: {
        color: '#0042E0',
        textAlign: 'center',
    },
    // custom see all
    txt_seeall: {
        fontStyle: 'italic',
        fontWeight: '500',
        fontSize: 16,
        paddingTop: '1%',
        color:'black'
    },
    horizontal_seeall: {
        flexDirection: 'row',
        marginTop: 20,
    },
    txt_newItems: {
        fontWeight: '700',
        fontSize: 20,
        color:'black'
    },
    // custom New Items
    avt_container: {
        borderRadius: 5,
        backgroundColor: 'gray',
        width: 100,
        height: 100,
    },
    item: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    txt_item:{
        fontSize: 10, 
        width: 100, 
        textAlign: 'center', 
        color:'black',
    },
    txt_itemM:{
        color:'black', 
    },
    txt_container_item:{
        width: '80%', 
        alignItems: 'center', 
        height: 50,
    }


});

