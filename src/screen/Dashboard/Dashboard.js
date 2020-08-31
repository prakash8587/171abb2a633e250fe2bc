import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from './DashboardStyle';
import {Container, Card} from 'native-base';

class Dashboard extends Component {
  renderRowView = (title, value, index) => {
    return (
      <View style={styles.renderView}>
        <Text style={styles.renderTitleText}>{title}</Text>
        <Text style={styles.renderValueText}>{value}</Text>
      </View>
    );
  };

  render() {
    const item = this.props.navigation.getParam('data');

    return (
      <Container style={styles.mainContainer}>
        <Card style={styles.card}>
          {this.renderRowView('Name of Asteroid : ', item.name, 0)}
          {this.renderRowView('Nasa Jpl Url : ', item.nasa_jpl_url, 1)}
          {this.renderRowView(
            'Is Asteroid Hazarduos : ',
            item.is_potentially_hazardous_asteroid + '',
            2,
          )}
        </Card>
      </Container>
    );
  }
}

export default Dashboard;
