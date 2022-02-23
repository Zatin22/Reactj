import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button,TextInput,ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Icon } from 'react-native-elements';

 
export default function App() {

  function Name(e)  
{  
  let r=/^[a-zA-Z]+$/;
 
  if(!r.test(e)){
    setCount("Please enter valid name");
    
  }
 
  else{
    setCount("");
   
  }
  // setCount(null);
  // setCount("");
} 


function email(e)  
{  
var x=e;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
    setMail("Please enter a valid e-mail address"); 
  }  
  else{
    setMail("");
    // setMail(null);
  }
  // setMail("");
  
}

// function matchpass(e,a){  
//   const firstpassword=e;  
//   const secondpassword=a;  
    
//   if(firstpassword==secondpassword){  
//     alert("yr");
//   }  
//   }  

  // function Submita(){
  //   if(Name()){
  //     alert("hello")
  //   }
    

  // }

  const [count, setCount] = useState("");
  const [mail, setMail] = useState("");
  // const [pass, setPass] = useState("");
  return (
    <View style={styles.container}>
    <TextInput style={styles.input} onChangeText={(e)=>{Name(e)}} placeholder='Name'/>
    <Text>{count}</Text>
    
    <TextInput style={styles.input} onChangeText={(e)=>{email(e)}} placeholder='Email'/>
    <Text>{mail}</Text>

    <TextInput style={styles.input} keyboardType={'numeric'} placeholder='Phone number'/>

    <TextInput style={styles.input} onChangeText={(e)=>{matchpass(e)}} placeholder='Password'/>
    <TextInput style={styles.input} onChangeText={(a)=>{matchpass(a)}} placeholder='Re-enter Password'/>
    {/* <Text>{pass}</Text> */}

    <Button title='Submit'/>
    <Icon
          name='rowing'
          color='#00aced' />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:5,
    borderColor:'red',
    
  },
  input:{
    // backgroundColor:'',
    color:'black',
    height: 40,
    width:250,
    margin: 12,
    borderBottomWidth : 1,
    padding: 10,
    
  }
  
});
