import { Text, View , Image, TouchableOpacity,FlatList} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

export default class HomeScreen extends Component{
  render(){
    return(
      <View>
        <FlatList>
        <View>
     <Image src="../assets/background.jpg"/>
     </View>
    
    <View> 
      <TouchableOpacity>
      <Image src="../assets/Reel.png"/>
      </TouchableOpacity>

      <TouchableOpacity>
      <Image src="../assets/home.png"/>
      </TouchableOpacity>

      <TouchableOpacity>
      <Image src="../assets/Search.png"/>
      </TouchableOpacity>

      <TouchableOpacity>
      <Image src="../assets/Profile.png"/>
      </TouchableOpacity>


    </View>
    </FlatList>
     </View>

    )
  }
}

