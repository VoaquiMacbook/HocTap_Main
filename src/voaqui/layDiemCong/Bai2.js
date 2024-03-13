import {
    View, Text,
    StyleSheet, Image,
    TouchableOpacity, ScrollView,
    SafeAreaView, FlatList
} from 'react-native'
import React from 'react'

const Bai2 = () => {
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

            <View style={styles.txt_container_item}>
                <Text style={styles.txt_title}>Địa điểm</Text>
                <Text style={styles.txt_item} >{item.name}</Text>

                <Text style={styles.txt_title}>Thời gian</Text>
                <Text style={styles.txt_item}>{item.postion}</Text>

                <Text style={styles.txt_title}>Phương tiện di chuyển</Text>
                <Text style={styles.txt_item}>{item.postion}</Text>

                <Text style={styles.txt_title}>Thời gian</Text>
                <Text style={styles.txt_item}>{item.postion}</Text>

            </View> 
            <View >
            <Text style={styles.txt_title}>Hình ảnh</Text>
                <Image
                    style={styles.avt_container}
                    source={{ uri: item.photo }} />
            </View>

        </View>
    );
    const renderItem2 = ({ item }) => (
        <View style={{marginEnd:10,}}>
        <View style={styles.item}>
            <View style={styles.txt_container_item}>
                <Text style={styles.txt_title}>Địa điểm</Text>
                <Text style={styles.txt_item} >{item.name}</Text>

                <Text style={styles.txt_title}>Thời gian</Text>
                <Text style={styles.txt_item}>{item.postion}</Text>

                <Text style={styles.txt_title}>Thời gian</Text>
                <Text style={styles.txt_item}>{item.postion}</Text>

            </View> 
            <View >
           <TouchableOpacity style={{width:360,height:40, backgroundColor:'#016CF7'}}>
           <Text style={{alignSelf:'center',marginTop:10,color:'white',fontWeight:'bold'}}>Địa điểm</Text>
           </TouchableOpacity>
            </View>

        </View>
        </View>
    );
    return (
        <View style={styles.container}>
            <Text style={styles.txt_itemXl}>Lịch trình</Text>
            <View >
                <FlatList
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={USERS}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                   
                />
            </View>
            <Text style={styles.txt_itemXl}>Khách sạn</Text>
            <View >
                <FlatList
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={USERS}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem2}
                />
            </View>
        </View>
    )
}

export default Bai2

const styles = StyleSheet.create({
    container_item:{
       
    },
    txt_title:{
        color:'gray',
        marginTop:10,
    },
    container: {
        padding: 10,
    },
    // custom New Items
    avt_container: {
        borderRadius: 5,
        backgroundColor: 'gray',
        width: 360,
        height: 200,
    },
    item: {
        flexDirection: 'column',
        padding: 16,
        // borderBottomWidth: 1,
        // borderBottomColor: '#ccc',
        borderRadius:20,
        elevation: 2,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowColor: '1px 2px 9px #F4AAB9',
        backgroundColor:'white',
        padding:10,
        margin:10,
        marginEnd:10
        
    },
    txt_item: {
        fontSize: 13,
        width: '100%',
        color: 'black',
        fontWeight:'bold'
    },
    txt_itemM: {
        color: 'black',
    },
    txt_itemXl: {
        color: 'black',
        fontWeight:'bold',
        fontSize:20,
    },
    txt_container_item: {
        width: '80%',
        marginBottom:10,
    }
})