// Copyright (C) 2018 INTUZ. 

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to
// the following conditions:

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR
// ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH
// THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

import INTRichTextInput from './app/component/INTRichTextInput'

export default class App extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.state = {
      name: "",
      email: "",
      options: "",
      about: "",
      arrSelections:
        [
          { label: 'Gujarati', selected: false },
          { label: 'Hindi', selected: false },
          { label: 'English', selected: false },
          { label: 'French', selected: false },
          { label: 'German', selected: false },
        ]
    }
  }

  render() {
    return (
      <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
        <View style={{ margin: 10, marginTop: 40, padding: 0, height: 500, justifyContent: 'space-between' }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, marginTop: 20, color: '#454545', fontFamily: 'Helvetica' }}>Single Line TextInput</Text>
            <INTRichTextInput
              inputStyle={{ flex: 1, paddingVertical: 6, color: '#6D6D6D', fontFamily: 'Helvetica' }}
              wrapperStyle={{}}
              placeholderTextColor={"#434343"}
              autoCorrect={true}
              placeholder={""}
              maxLength={255}
              selectionColor={"#454545"}
              borderColor={'#6D6D6D'}
              onChangeText={(name) => this.setState({ name })}
              value={this.state.name}
              borderWidth={0}
              title={"Name"}
              titleStyle={{ backgroundColor: 'transparent', color: '#484848', fontFamily: 'Helvetica', fontSize: 14, alignItems: 'center' }}
              showErrorIcon={true}
              editType={0}//For Singleline
            />
            <Text style={{ fontSize: 20, marginTop: 20, color: '#454545', fontFamily: 'Helvetica' }}>Single Line TextInput</Text>
            <INTRichTextInput
              inputStyle={{ flex: 1, paddingVertical: 6, color: '#6D6D6D', fontFamily: 'Helvetica' }}
              wrapperStyle={{}}
              placeholderTextColor={"#434343"}
              keyboardType={'email-address'}
              autoCorrect={false}
              placeholder={""}
              maxLength={255}
              selectionColor={"#454545"}
              borderColor={'#6D6D6D'}
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
              borderWidth={0}
              title={"Email Address"}
              titleStyle={{ backgroundColor: 'transparent', color: '#484848', fontFamily: 'Helvetica', fontSize: 14, alignItems: 'center' }}
              showErrorIcon={true}
              editType={0}//For Singleline
            />
            <Text style={{ fontSize: 20, marginTop: 20, color: '#454545', fontFamily: 'Helvetica' }}>Multi Line TextInput</Text>
            <INTRichTextInput
              inputStyle={{ flex: 1, paddingVertical: 6, color: '#6D6D6D', fontFamily: 'Helvetica' }}
              wrapperStyle={{}}
              placeholderTextColor={"#434343"}
              autoCorrect={false}
              placeholder={""}
              selectionColor={"#454545"}
              borderColor={'#6D6D6D'}
              onChangeText={(about) => this.setState({ about })}
              value={this.state.about}
              autoGrow={true}
              borderWidth={0}
              title={"About"}
              subTitle={"Write your description."}
              titleStyle={{ backgroundColor: 'transparent', color: '#545454', fontFamily: 'Helvetica', fontSize: 14, alignItems: 'center' }}
              showErrorIcon={true}
              editType={1}//For Multiline
            />
            <Text style={{ fontSize: 20, marginTop: 20, color: '#454545', fontFamily: 'Helvetica' }}>Option Selection</Text>
            <INTRichTextInput
              inputStyle={{ flex: 1, paddingVertical: 6, color: '#6D6D6D', fontFamily: 'Helvetica' }}
              wrapperStyle={{}}
              placeholderTextColor={"#434343"}
              autoCorrect={false}
              placeholder={""}
              maxLength={255}
              selectionColor={"#454545"}
              borderColor={'#6D6D6D'}
              onChangeText={(options) => this.setState({ options })}
              value={this.state.options}
              borderWidth={0}
              title={"Select languages"}
              titleStyle={{ backgroundColor: 'transparent', color: '#484848', fontFamily: 'Helvetica', fontSize: 14, alignItems: 'center' }}
              showErrorIcon={true}
              //Selections
              arrSelections={this.state.arrSelections}
              isSingleSelection={true}
              editType={2}//For Options
            />

          </View>
        </View>
      </View>
    );
  }
}
