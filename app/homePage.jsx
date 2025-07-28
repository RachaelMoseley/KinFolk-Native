import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableHighlight, TextInput } from 'react-native';




export default function App() {

    const [search, setSearch] = React.useState('');

    return (

        // top headr
    <View style={styles.container}>
        <SafeAreaView style={styles.header}>
            <Image
                source={{ uri: '/Users/student/Downloads/KINFOLK_LOGO_SYSTEM_FINAL-05.png' }}
                style={{ 
                    width: 140, 
                    height: 50 }}
            />
            {/* buttons on header */}
    <View style={{ 
        flexDirection: 'row', 
        alignItems: 'center' }}>
            <TouchableHighlight onPress={()=>{}}
            underlayColor="#0a7ea4"
            >
            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/107/107799.png' }}
                style={{ 
                    width: 24, 
                    height: 24,
                     }}
                             />
                         </TouchableHighlight>

        <TouchableHighlight onPress={()=>{}}
            underlayColor="#0a7ea4"
             >
            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/494/494568.png' }}
                style={{ 
                        width: 24, 
                        height: 24,
                         }}
                             />
                         </TouchableHighlight>

        <TouchableHighlight onPress={()=>{}}
            underlayColor="#0a7ea4"
            style={styles.iconButton}>
                <Image
                     source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6522/6522516.png' }}
                     style={{ 
                        width: 24, 
                        height: 24,
                        
                         }}
                             />
                         </TouchableHighlight>
            </View>
         
        </SafeAreaView>
        {/* search bar */}
        <TextInput
                style={styles.input}
                onChangeText={setSearch}
                value={search}
                placeholder="Search..."
                placeholderTextColor="#888"
            />

        {/* bottom header */}
        <SafeAreaView style={styles.bottomHeader}>
        <TouchableHighlight onPress={()=>{}}
            underlayColor="#0a7ea4"
            style={styles.iconButton}>
                <Image
                     source={{ uri: 'https://cdn-icons-png.flaticon.com/512/16/16057.png' }}
                     style={{ 
                        width: 24, 
                        height: 24,
                        
                         }}
                             />
                         </TouchableHighlight>
                    
         </SafeAreaView>
         {/* photo layout */}
         <View style={styles.cardsContainer}>
         <View style={styles.card}>
        <View style={styles.cardImagesRow}>
          <Image
            source={{ uri: 'https://www.psdstack.com/wp-content/uploads/2019/08/copyright-free-images-750x420.jpg' }}
            style={styles.cardImage}
          />
        </View>

        <Text style={styles.cardTitle}>Project title</Text>
        <Text style={styles.cardName}>Molly Martinez</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardImagesRow}>
          <Image
            source={{ uri: 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2016/10/camera-photo-lens-stock-images.jpg' }}
            style={styles.cardImage}
          />
        </View>

        <Text style={styles.cardTitle}>Project title</Text>
        <Text style={styles.cardName}>John Doe</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardImagesRow}>
          <Image
            source={{ uri: 'https://images.ctfassets.net/hrltx12pl8hq/7JnR6tVVwDyUM8Cbci3GtJ/bf74366cff2ba271471725d0b0ef418c/shutterstock_376532611-og.jpg' }}
            style={styles.cardImage}
          />
        </View>

        <Text style={styles.cardTitle}>Project title</Text>
        <Text style={styles.cardName}>Sarah Nicole</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.cardImagesRow}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh8d2XHLervUK6s8eac_-yVlFv700-KBK67g&s' }}
            style={styles.cardImage}
          />
        </View>

        <Text style={styles.cardTitle}>Project title</Text>
        <Text style={styles.cardName}>Sarah Nicole</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.cardImagesRow}>
          <Image
            source={{ uri: 'https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg?size=626&ext=jpg' }}
            style={styles.cardImage}
          />
        </View>

        <Text style={styles.cardTitle}>Project title</Text>
        <Text style={styles.cardName}>Mary Kate</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardImagesRow}>
          <Image
            source={{ uri: 'https://wordtracker-swoop-uploads.s3.amazonaws.com/uploads/ckeditor/pictures/2090/content_beach.jpg' }}
            style={styles.cardImage}
          />
        </View>

        <Text style={styles.cardTitle}>Project title</Text>
        <Text style={styles.cardName}>Lizzy Banks</Text>
      </View>

        </View> 
        </View>
        
        );
    }
    

    
 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        flexDirection: 'row',       
        justifyContent: 'space-between', // space between logo and button
        alignItems: 'center',       
        backgroundColor: '#0a7ea4',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    bottomHeader: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        backgroundColor: '#0a7ea4',
        justifyContent: 'space-around',
        paddingVertical: 12,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        zIndex: 100,
      },
    body: {
        flex: 1,
        justifyContent: 'center',
    },
    iconButton: {
        borderRadius: 11,
        backgroundColor: '#0a7ea4',
        padding: 4,
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 16,
      },
      card: {
        backgroundColor: '#f0f0f0',  // light grey bg
        borderRadius: 16,            // round corners
        padding: 10,                //  inner space
        margin: 15,                  // space around card
        alignItems: 'center',       // align pics in center
        width: 170,               
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,                      
      },
      cardImagesRow: {
        flexDirection: 'row',
        marginBottom: 8,
      },
      cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start', // or 'space-between' or 'space-around'
      },
      
      
     
      cardImage: {
        width: 70,
        height: 70,
        margin: 9,
        borderRadius: 8,
        backgroundColor: '#ccc',           
      },
      cardTitle: {
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 8,
        color: '#222',
      },
      cardName: {
        color: '#444',
        fontSize: 14,
        marginTop: 2,
        marginBottom: 4,
      },
      
});
