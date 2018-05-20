import React from 'react';
import { bool, func, shape, string } from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { handleUserRequest } from '../../actions/user';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    color: '#222a30',
  },
  error: {
    fontSize: 20,
    color: 'red',
  },
});

class Account extends React.Component {
  static propTypes = {
    user: shape({
      name: string,
    }).isRequired,
    status: shape({
      isFetching: bool.isRequired,
      error: string,
    }).isRequired,
    handleUserRequest: func.isRequired,
  }

  componentDidMount() {
    if (!this.props.user.name) {
      this.props.handleUserRequest();
    }
  }

  render() {
    const { user, status: { isFetching, error } } = this.props;

    const spinner = isFetching && (
      <ActivityIndicator size="large" color="#3abde2" />
    );

    const errorNode = error && (
      <Text style={styles.error}>{error}</Text>
    );

    const userInfo = user.name && (
      <Text style={styles.text}>Имя: {user.name}</Text>
    );

    return (
      <View style={styles.container}>
        {spinner}
        {errorNode}
        {userInfo}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.info,
  status: state.user.status,
});

export default connect(mapStateToProps, { handleUserRequest })(Account);
