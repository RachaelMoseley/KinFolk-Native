import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableHighlight, } from 'react-native';



export default function ProfileScreen() {
    
  return (
    <View style={styles.container}>
      {/* top header */}
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
            underlayColor="#186882"
            style={styles.iconButton}>
            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/107/107799.png' }}
                style={{ 
                    width: 24, 
                    height: 24,
                     }}
                        />
                         </TouchableHighlight>

        <TouchableHighlight onPress={()=>{}}
            underlayColor="#186882"
            style={styles.iconButton}>
            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/494/494568.png' }}
                style={{ 
                        width: 24, 
                        height: 24,
                         }}
                            />
                         </TouchableHighlight>

        <TouchableHighlight onPress={()=>{}} 
            underlayColor="#186882"
            style={styles.iconButton}
             >
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

    {/* blue/grey on profile screen */}
        <View
        style={[
            
            {
                flexDirection: 'row',
                height: 145
            }
        ]}>
            <View style={{flex: 1, backgroundColor: '#e3e1e1'}} />
            <View style={{flex: 1, backgroundColor: '#e3e1e1'}} />
        </View>

        <View
        style={[
            styles.flex,
            {
                flexDirection: 'row',
                height: 679
            }
        ]}>
            <View style={{flex: 1, backgroundColor: '#1da3cf'}} />
            <View style={{flex: 1, backgroundColor: '#1da3cf'}} />
        </View>
        {/* prof icon */}
        <Image
        source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small_2x/user-icon-on-transparent-background-free-png.png' }}
        style={[styles.overlayImage, { 
            bottom: 590, 
            left: 152 }]}
      />
      {/* text on prof */}
      <Text style={[styles.text, { 
        position: 'absolute', 
        bottom: 545, 
        left: 124, 
        zIndex: 20 }]}>
                Tanya Calzada
            </Text>
            <Image
        source={{ uri: 'https://images.vexels.com/media/users/3/223514/isolated/preview/8b0d32a8e49f37f63515c8903294b7c0-writing-pencil-icon-flat.png' }}
        style={[styles.pencilIcon, { 
            bottom: 550, 
            left: 325 }]}
      />

   
        {/* bio box */}
        <View style={[styles.cardsContainer, { 
            position: 'absolute',
            top: 300, 
            left: 22, 
            right: 0, 
            zIndex: 30 }]}>
         <View style={styles.card}>
        <View style={styles.cardImagesRow}>
          <Image
            source={{ uri: 'https://www.psdstack.com/wp-content/uploads/2019/08/copyright-free-images-750x420.jpg' }}
            style={styles.cardImage}
          />

          {/* bio */}
           <Text style={styles.cardTitle}>e.g. “Gaffer with 5+ years’ experience. 
           </Text>

           <View style={styles.divider} />

           <Text style={styles.cardTitle}>Detroit, MI 
            </Text>

            <View style={styles.divider} />

            <Text style={styles.cardTitle}>Available for commercials and documentaries.  
            </Text>

            <View style={styles.divider} />

            <Text style={styles.cardTitle}>Day rate starts at $350.
            </Text>
           
        </View>
       
      </View>
      <View style={styles.bigDivider} />
      
            </View>
            <Text style={[styles.projectText, { 
        position: 'absolute', 
        bottom: 280, 
        left: 20, 
        zIndex: 20 }]}>
                Projects
            </Text>

        <View style={styles.projectCard}>
        <View style={styles.projectCardImagesRow}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQipj343b-L5FUJnFpNTeiLyhZ6QuQwEBjL4Q&s' }}
            style={styles.projectCardImage}
          />
        </View>
        
        
        </View>
            </View>
        
        
  );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      position: 'relative',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#0a7ea4',
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    iconButton: {
      borderRadius: 15,
      backgroundColor: '#0a7ea4',
      padding: 4,
      marginLeft: 8,
    },
    overlayImage: {
        width: 140,
        height: 140,
        position: 'absolute', // position image in exact space 
        zIndex: 10,           // makes sure image shows above flex boxes
      },
      text: {
        fontSize: 30,
      },
      bioText: {
        fontSize: 20,
        color: '#f0f0f0'
      },
      projectText: {
        fontSize: 20,
      },
      card: {
        backgroundColor: '#0a7ea4', // teal bg
        borderRadius: 16,           // round corners
        padding: 8,                 //  inner space
        margin: 22,                 // space around card
        alignItems: 'center',       // align text in center
        width: 350,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,        
        zIndex: 31,          
        position: 'relative',
      },
      cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        zIndex: 30,          
        position: 'relative' 
      },
      cardTitle: {
        fontSize: 17,
        marginTop: 3,
        color: '#222222',
        textAlign: 'center', // align text in center
      },
      divider: {
        height: 1,           
        backgroundColor: '#096482', // darker teal color
        marginVertical: 8,   // spacing above and below the line
      },
      pencilIcon: {
        width: 25,
        height: 25,
        position: 'absolute', // position image in exact space 
        zIndex: 10,          
      },
      bigDivider: {
        height: 1,
        backgroundColor: '#096482',
        marginVertical: 3,
        right: '25',
        width: '150%',         // make divider span the full card width
        alignSelf: 'stretch',  // ensures it stretches ontop flex
      },
      projectCard: {
        backgroundColor: '#0a7ea4', // teal bg
        borderRadius: 16,           // round corners
        padding: 4,                 //  inner space
        margin: 16,                 // space around card
        alignItems: 'center',       // align text in center
        width: 160,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,         
        zIndex: 31,          
        position: 'relative',
        bottom: 320, 
      },
      projectCardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start', // or 'space-between' or 'space-around'
      },
      projectCardImagesRow: {
        flexDirection: 'row',
        marginBottom: 8,
      },
      projectCardImage: {
        width: 130,
        height: 115,
        margin: 12,
        borderRadius: 8,
        backgroundColor: '#cccccc',   
      }

  });