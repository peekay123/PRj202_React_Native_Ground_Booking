import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { LinearGradient } from 'expo-linear-gradient';
export default class Imageslider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [ 
        'https://scontent-sin6-1.xx.fbcdn.net/v/t31.18172-8/18404155_1449395101750004_5186515548235924945_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=HzEcR7uCS_EAX_k2e1-&tn=iNmHU6JeaYrjEFrj&_nc_ht=scontent-sin6-1.xx&oh=00_AT9sHrq4DubkS8l7vNGlgTCrDugY2PWdwx5gqtZLlHjCIw&oe=62CFAE72',
        'https://scontent-sin6-1.xx.fbcdn.net/v/t31.18172-8/18403811_1449396108416570_8783636712915845662_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=sa5AWngj4s0AX8qt3i1&_nc_ht=scontent-sin6-1.xx&oh=00_AT_5QjXPk5ydlsBVL0Q2qR8AV2pOxbl1n-P5ALBhR9kXPQ&oe=62CF95D2',
        'https://s3sdghub.s3.eu-west-1.amazonaws.com/core-cms/public/styles/media_image_large/public/images/posts/_107320074_blooddonor976.jpg?itok=Th5aTK4https://scontent-sin6-4.xx.fbcdn.net/v/t31.18172-8/18402261_1449396088416572_4587274867434662662_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=j8Q31f_QvScAX-7VEI0&_nc_ht=scontent-sin6-4.xx&oh=00_AT-HgOIRu9geZZ-vrAfvYCB0lIWkbh14RnaULFuzPcDrYg&oe=62CE8EB39',
        'https://scontent-sin6-4.xx.fbcdn.net/v/t31.18172-8/18358557_1449399595082888_101049475042789695_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=cJrlasMIwskAX-LSeIa&_nc_oc=AQlXY8zOc0FcxSoDye5yawsPnMLuh1x9FkC_H946FDxrnc_y9ESdZnrsaZeTWWAxDhs2sNSTglURQPN5UtVSJpno&_nc_ht=scontent-sin6-4.xx&oh=00_AT8dK0esiO5VJiO6YbWxvJ6zHRkXXXudbmOafYLWZyHUzw&oe=62CDB914',
        'https://scontent-sin6-1.xx.fbcdn.net/v/t31.18172-8/18449310_1449398478416333_3285142372556831789_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=aI9l_0GiGH4AX-uSqmr&_nc_ht=scontent-sin6-1.xx&oh=00_AT9a-fzF7N_coC513JH4jWWU4txuUjIu3YOT13KCAM6xcw&oe=62CF18E1',
        'https://scontent-sin6-2.xx.fbcdn.net/v/t31.18172-8/18358820_1449399881749526_2249716551193563830_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=xbvfG2_Y2qEAX-VUE50&_nc_ht=scontent-sin6-2.xx&oh=00_AT834qCW6TecY_3h7B1svXw5tFhBxWyhiy8gGZ8m9HxDTQ&oe=62CE9B49',
        'https://scontent-sin6-4.xx.fbcdn.net/v/t31.18172-8/18359479_1449395118416669_4323671623229807897_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=6ZaLRn-cRMwAX_TfEUt&tn=iNmHU6JeaYrjEFrj&_nc_ht=scontent-sin6-4.xx&oh=00_AT8w1nPOi0Un2v1zob299YOe0H68hP3cFopXBz77kGR78g&oe=62CEE03B',
        'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/271597702_4878459848843495_5221030456554554314_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=qB-dKD_0jwIAX_2f0II&tn=iNmHU6JeaYrjEFrj&_nc_ht=scontent-sin6-1.xx&oh=00_AT8axa8q7PGySKUjsffzJjjkDL6CIQKX5l3iMWLnznO3Cg&oe=62AD6965',
      ]
    };
  }
  render() {
    return (
      <LinearGradient colors={['#B00020','pink']}
      style={styles.container}>
         <View>
          <SliderBox
          style={{width:'95%',height:155,}}
          autoplay={true}
          loop={true}
          images={this.state.images}/>
         </View>
        </LinearGradient>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'flex-start',
    backgroundColor: 'blue',
    padding:10,
  }
});