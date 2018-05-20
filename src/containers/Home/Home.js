import React from 'react';
import { bool, func, shape, string } from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { handleTokenRequest } from '../../actions/token';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: '400',
    color: '#222a30',
  },
  error: {
    fontSize: 20,
    color: 'red',
  },
});

class Home extends React.Component {
  static propTypes = {
    hasToken: bool.isRequired,
    status: shape({
      isFetching: bool.isRequired,
      error: string,
    }).isRequired,
    handleTokenRequest: func.isRequired,
  }

  componentDidMount() {
    if (!this.props.hasToken) {
      this.props.handleTokenRequest();
    }
  }

  render() {
    const { hasToken, status: { isFetching, error } } = this.props;

    const spinner = isFetching && (
      <ActivityIndicator size="large" color="#3abde2" />
    );

    const errorNode = error && (
      <Text style={styles.error}>{error}</Text>
    );

    const greetings = hasToken && (
      <Text style={styles.text}>Привет!</Text>
    );

    return (
      <View style={styles.container}>
        {spinner}
        {errorNode}
        {greetings}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  hasToken: !!(state.token.info.token),
  status: state.token.status,
});

export default connect(mapStateToProps, { handleTokenRequest })(Home);
