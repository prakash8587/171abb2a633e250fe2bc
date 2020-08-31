import React, {Component} from 'react';
import {View, TextInput, Text, ActivityIndicator} from 'react-native';
import {styles} from './LoginStyle';
import {Container, Button} from 'native-base';
import {StackActions, NavigationActions} from 'react-navigation';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aestroidId: '3542519', //'3542519'
      isLoading: false,
    };
  }

  updateAestroidId = (text) => {
    this.setState({aestroidId: text});
  };

  navigateToNextScreen = (resJson) => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'Dashboard',
          params: {data: resJson},
        }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  };

  onButtonPresed = () => {
    this.setState({isLoading: true});
    this.fetchAPI();
  };

  fetchAPI = () => {
    const url =
      'https://api.nasa.gov/neo/rest/v1/neo/' +
      this.state.aestroidId +
      '?api_key=IgvkdSvxSqWdlFdyQzYRhnQuCWKbaoX27Fvs2GzR';
    fetch(url, {method: 'GET'})
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({isLoading: false});
        this.navigateToNextScreen(resJson);
      });
  };

  renderLoader = () => {
    return (
      <View style={styles.loaderView}>
        <ActivityIndicator size={'large'} color={'red'} />
        <Text style={styles.loaderText}>Fetching Details</Text>
      </View>
    );
  };

  state = {};
  render() {
    const {aestroidId, isLoading} = this.state;
    return (
      <Container style={styles.loginContainer}>
        {isLoading ? (
          <View style={styles.loaderInnerView}>{this.renderLoader()}</View>
        ) : (
          <>
            <View style={styles.paddingView} />
            <TextInput
              style={styles.loginTextInput}
              maxLength={10}
              placeholder="Enter Aestroid ID"
              keyboardType="numeric"
              placeholderTextColor="#7fb2ff"
              onChangeText={this.updateAestroidId}></TextInput>
            <Button
              style={styles.loginButton}
              disabled={!aestroidId}
              onPress={this.onButtonPresed}>
              <Text style={styles.loginButtonText}>Random Asteroid</Text>
            </Button>
          </>
        )}
      </Container>
    );
  }
}

export default Login;
