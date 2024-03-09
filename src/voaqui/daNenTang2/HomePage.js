import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import ItemProduct from './item/ItemProduct';

const HomePage = (props) => {
    const { navigation } = props;
    const USERS = [{
        "id": 1,
        "name": "Sonsing",
        "email": "csturte0@barnesandnoble.com",
        "photo": "https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/431656584_122093320502246377_4751893776583022215_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=f4GNssFgm10AX9UpbX2&_nc_ht=scontent.fhan3-1.fna&oh=00_AfA9uH7Yza3iKCsOjHR7-iE9pwUeLFCW7B1zqR0qgIlJEw&oe=65EE7ED9",
        "postion": "Research Associate Research... ",
        "rice": "$7.30"
    }, {
        "id": 2,
        "name": "Ronstring",
        "email": "lfeatherstone1@com.com",
        "photo": "https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/431319374_122093322050246377_4876689933606835524_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=f0CxBDjAU2QAX_ZM6kI&_nc_ht=scontent.fhan4-3.fna&oh=00_AfDamEjctRz7IIWG9UyNIN3ueruyZbdN5NRtjbmM1ZvrkQ&oe=65EE70C2",
        "postion": "Administrative Assistant III...",
        "rice": "$9.17"
    }, {
        "id": 3,
        "name": "Tempsoft",
        "email": "qpenright2@samsung.com",
        "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/431013703_122093926196246377_3311542746171054226_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UAlse3HnF3EAX_E2WUV&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfD2ibTb4S1LG0zKWxJ-nG8Gxufb84F9Z82Rtta4N7Lyew&oe=65EF2365",
        "postion": "Senior Sales Associate ... ",
        "rice": "$5.74"
    }, {
        "id": 4,
        "name": "Zontrax",
        "email": "astirman3@ox.ac.uk",
        "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/431652144_122093926154246377_3469493913244371697_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kA768RKR8VMAX_kqID6&_nc_oc=AQkXQFCZokdH4zRDM93Rg_NTt02z3JpNyNx1or7v9UmM-Z4ImCj6qpYKLMdOe49CtlE&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAqhxWS9MULI2u0cgzFTsAPnQb4FU_PL6OQntTF25l3FQ&oe=65EF0979",
        "postion": "Librarian Administrative...",
        "rice": "$0.34"
    }, {
        "id": 5,
        "name": "Span",
        "email": "dsterley4@wp.com",
        "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/431632203_122093926172246377_3891440330074203602_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GRY7QIEIQU8AX_7KvjD&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfBeW5WDECFbG_xnoQiNqZbHOqIr9k-hvS_ibNdZ_rXO2w&oe=65F08054",
        "postion": "Product Engineer...",
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
        <ItemProduct
        navigation={navigation} 
        product={item} />
      </View>
    );
    
    return (
        <View style={styles.container}>
            <View style={styles.horizontal}>
                <View style={styles.flex}>
                    <Image style={styles.img_avt} source={require('../../voaqui/daNenTang2/assets/image/Logo2.png')}></Image>
                </View>
                <Image style={styles.align_center} source={require('../../voaqui/daNenTang2/assets/image/Setting.png')}></Image>
            </View>
            <View style={[styles.horizontal_seeall]}>
                    <Text style={[styles.txt_newItems, styles.flex]}>Categories</Text>
                    <Text style={styles.txt_seeall}>See more</Text>
                </View>
                <View>
                    <FlatList
                        horizontal={true}
                        // numColumns={2}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={USERS}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderItem}
                        // renderItem={({item}) => (
                        //     <ItemProduct
                        //     navigation = {navigation}
                        //     USERS={item}
                        //     />
                        // )}
                    />
                </View>
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        paddingStart: '3%',
        paddingEnd: '5%',
        marginTop: '5%'
    },
    // cloumn, row
    vertical: {
        flexDirection: 'column',
    },
    horizontal: {
        flexDirection: 'row',

    },
    // align Items
    align_center: {
        alignSelf: 'center',
    },
    img_avt: {
        width: 165,
        height: 40,
    },
    // flex
    flex: {
        flex: 1,
    },
    horizontal_seeall: {
        flexDirection: 'row',
        marginTop: 30,
    },
    txt_seeall: {
        fontWeight: '500',
        fontSize: 14,
        paddingTop: '1%',
        color:'#4838D1',
    },
    // custom New Items
    avt_container: {
        borderRadius: 5,
        backgroundColor: 'gray',
        width: 200,
        height: 300,
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
})