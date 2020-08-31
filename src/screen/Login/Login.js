import React, {Component} from 'react';
import {View, TextInput, Text, ActivityIndicator} from 'react-native';
import {styles} from './LoginStyle';
import {Container, Button} from 'native-base';
import {StackActions, NavigationActions} from 'react-navigation';
import {BASE_URL, API_KEY} from '../../utils/utils';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aestroidId: null,
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
    const url = `${BASE_URL}${this.state.aestroidId}?api_key=${API_KEY}`;
    fetch(url, {method: 'GET'})
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({isLoading: false});
        this.navigateToNextScreen(resJson);
      })
      .catch((err) => {
        this.setState({isLoading: false});
        alert('Network request failed');
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

  onRandomAsteroidPressed = () => {
    this.setState({isLoading: true});
    const url = `${BASE_URL}browse?api_key=${API_KEY}`;
    fetch(url, {method: 'GET'})
      .then((res) => res.json())
      .then((resJson) => {
        const length =
          resJson.near_earth_objects && resJson.near_earth_objects.length;
        const randomIndex = Math.floor(Math.random() * length);
        const id =
          resJson.near_earth_objects &&
          resJson.near_earth_objects[randomIndex] &&
          resJson.near_earth_objects[randomIndex].id;
        this.setState({aestroidId: id}, () => {
          this.fetchAPI();
        }).catch((err) => {
          this.setState({isLoading: false});
          alert('Network request failed');
        });
      });
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
              <Text style={styles.loginButtonText}>Submit</Text>
            </Button>
            <Button
              style={styles.loginButton}
              onPress={this.onRandomAsteroidPressed}>
              <Text style={styles.loginButtonText}>Random Asteroid</Text>
            </Button>
          </>
        )}
      </Container>
    );
  }
}

export default Login;
